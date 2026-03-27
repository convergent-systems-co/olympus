import fs from "node:fs";

const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf8"));
const issue = event.issue;
const action = event.action;
const comment = event.comment;
const token = process.env.ROUTING_TOKEN;
const centralRepo = process.env.CENTRAL_REPO;
const publicRepo = process.env.GITHUB_REPOSITORY;

if (!issue) {
  process.exit(0);
}

if (!token) {
  throw new Error("ROUTING_TOKEN is required");
}

if (!centralRepo) {
  throw new Error("CENTRAL_REPO is required");
}

const [centralOwner, centralName] = centralRepo.split("/");
const marker = `<!-- public-source:${publicRepo}#${issue.number} -->`;
const linkMarker = "<!-- public-intake-link -->";

const labelDefinitions = {
  "source/public": {
    color: "ff9800",
    description: "Issue originated from the public Olympus intake repo.",
  },
  "intake/public": {
    color: "0366d6",
    description: "Public intake issue mirrored from convergent-systems-co/olympus.",
  },
  "owner-repo/api": {
    color: "0052cc",
    description: "Primary execution owner is olympus-api.",
  },
  "owner-repo/cli": {
    color: "0052cc",
    description: "Primary execution owner is olympus-cli.",
  },
  "owner-repo/ide": {
    color: "0052cc",
    description: "Primary execution owner is olympus-ide.",
  },
  "owner-repo/infra": {
    color: "0052cc",
    description: "Primary execution owner is olympus-infra.",
  },
  "owner-repo/web": {
    color: "0052cc",
    description: "Primary execution owner is olympus-web.",
  },
  "owner-repo/central": {
    color: "0052cc",
    description: "Primary execution owner is olympus-central.",
  },
  "affects-repo/api": {
    color: "1d4ed8",
    description: "Issue affects olympus-api.",
  },
  "affects-repo/cli": {
    color: "1d4ed8",
    description: "Issue affects olympus-cli.",
  },
  "affects-repo/ide": {
    color: "1d4ed8",
    description: "Issue affects olympus-ide.",
  },
  "affects-repo/infra": {
    color: "1d4ed8",
    description: "Issue affects olympus-infra.",
  },
  "affects-repo/web": {
    color: "1d4ed8",
    description: "Issue affects olympus-web.",
  },
  "affects-repo/central": {
    color: "1d4ed8",
    description: "Issue affects olympus-central.",
  },
  "area/zeus": {
    color: "006b75",
    description: "Zeus — orchestration.",
  },
  "area/athena": {
    color: "006b75",
    description: "Athena — reasoning, intent, classification.",
  },
  "area/hermes": {
    color: "006b75",
    description: "Hermes — internal message bus.",
  },
  "area/iris": {
    color: "006b75",
    description: "Iris — external routing, LLM providers, GitHub.",
  },
  "area/aegis": {
    color: "006b75",
    description: "Aegis — security, containment, sanitization.",
  },
  "area/hephaestus": {
    color: "006b75",
    description: "Hephaestus — forge, code gen, worktrees.",
  },
  "area/mnemosyne": {
    color: "006b75",
    description: "Mnemosyne — memory, sessions, checkpoints.",
  },
  "area/argus": {
    color: "006b75",
    description: "Argus — observability, cost, CI monitoring.",
  },
  "area/epimetheus": {
    color: "006b75",
    description: "Epimetheus — tracing, metrics, insights.",
  },
  "area/cerberus": {
    color: "006b75",
    description: "Cerberus — diff gate, cost gate.",
  },
  "area/tui": {
    color: "006b75",
    description: "TUI — shell, display, user interaction.",
  },
  "area/governance": {
    color: "006b75",
    description: "Governance — panels, emissions, review.",
  },
  "area/kernel": {
    color: "006b75",
    description: "Kernel — boot, interfaces, module lifecycle.",
  },
  "area/infra": {
    color: "006b75",
    description: "CI/CD, deployment, build system.",
  },
};

const surfaceMap = new Map([
  ["CLI", "cli"],
  ["API / auth / billing backend", "api"],
  ["Web / site / dashboard", "web"],
  ["IDE / desktop", "ide"],
  ["Infra / deployment / environment", "infra"],
  ["Documentation / product claims", "central"],
]);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeBody(body) {
  return body && body.trim() ? body.trim() : "_No description provided._";
}

function extractCheckedOptions(body, sectionLabel) {
  if (!body) {
    return [];
  }

  const sectionPattern = new RegExp(
    `### ${escapeRegExp(sectionLabel)}\\r?\\n([\\s\\S]*?)(?=\\r?\\n### |$)`,
    "m",
  );
  const section = body.match(sectionPattern)?.[1] ?? "";
  return section
    .split(/\r?\n/)
    .filter((line) => line.startsWith("- [x] "))
    .map((line) => line.replace(/^- \[x\] /, "").trim());
}

function inferRouting(body) {
  const checkedSurfaces = extractCheckedOptions(body, "Affected surfaces");
  const affectedRepos = checkedSurfaces
    .filter((value) => value !== "Not sure")
    .map((value) => surfaceMap.get(value))
    .filter(Boolean);
  const uniqueAffected = [...new Set(affectedRepos)];
  const ownerRepo = uniqueAffected.length === 1 ? uniqueAffected[0] : null;
  return {
    checkedSurfaces,
    uniqueAffected,
    ownerRepo,
  };
}

function pickMirroredLabels(rawLabels) {
  return rawLabels.filter((label) =>
    /^(type|priority|status|effort|area)\//.test(label),
  );
}

async function github(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    method: options.method ?? "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "olympus-public-intake-router",
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${options.method ?? "GET"} ${path} failed: ${response.status} ${text}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function ensureLabel(owner, repo, name) {
  const definition = labelDefinitions[name];
  if (!definition) {
    return;
  }

  const existing = await github(
    `/repos/${owner}/${repo}/labels/${encodeURIComponent(name)}`,
  );
  if (existing) {
    return;
  }

  await github(`/repos/${owner}/${repo}/labels`, {
    method: "POST",
    body: {
      name,
      color: definition.color,
      description: definition.description,
    },
  });
}

async function searchCentralIssue() {
  const query = encodeURIComponent(
    `repo:${centralRepo} "${marker}" in:body is:issue`,
  );
  const result = await github(`/search/issues?q=${query}`);
  return result?.items?.[0] ?? null;
}

function buildCentralBody(routing) {
  const publicLabels = issue.labels.map((label) => label.name);
  const affectedLine =
    routing.checkedSurfaces.length > 0
      ? routing.checkedSurfaces.join(", ")
      : "not provided";
  const ownerLine = routing.ownerRepo ?? "pending triage";

  return `${marker}

## Public Intake Metadata

- Source issue: ${issue.html_url}
- Reporter: @${issue.user.login}
- Public labels: ${publicLabels.length > 0 ? publicLabels.join(", ") : "none"}
- Reported affected surfaces: ${affectedLine}
- Suggested owner repo: ${ownerLine}
- Visibility rule: inbound public intake only; do not mirror internal implementation details back outward automatically

## Public Report

${normalizeBody(issue.body)}`;
}

async function upsertCentralIssue() {
  const routing = inferRouting(issue.body ?? "");
  const mirroredLabels = pickMirroredLabels(issue.labels.map((label) => label.name));
  const routingLabels = [
    ...routing.uniqueAffected.map((repo) => `affects-repo/${repo}`),
    ...(routing.ownerRepo ? [`owner-repo/${routing.ownerRepo}`] : []),
  ];
  const labels = [...new Set(["source/public", "intake/public", ...mirroredLabels, ...routingLabels])];

  for (const label of labels) {
    await ensureLabel(centralOwner, centralName, label);
  }

  const existing = await searchCentralIssue();
  const body = buildCentralBody(routing);
  if (!existing) {
    return github(`/repos/${centralOwner}/${centralName}/issues`, {
      method: "POST",
      body: {
        title: issue.title,
        body,
        labels,
      },
    });
  }

  return github(
    `/repos/${centralOwner}/${centralName}/issues/${existing.number}`,
    {
      method: "PATCH",
      body: {
        title: issue.title,
        body,
        labels,
        state: issue.state,
      },
    },
  );
}

async function upsertPublicLinkComment(centralIssue) {
  const comments = await github(
    `/repos/${event.repository.owner.login}/${event.repository.name}/issues/${issue.number}/comments?per_page=100`,
  );
  const body = `${linkMarker}

Internal coordination is tracked in ${centralIssue.html_url}. This public issue remains the external intake thread, but internal implementation details stay private by default.`;

  const existing = comments.find((item) => item.body?.includes(linkMarker));
  if (!existing) {
    await github(
      `/repos/${event.repository.owner.login}/${event.repository.name}/issues/${issue.number}/comments`,
      {
        method: "POST",
        body: { body },
      },
    );
    return;
  }

  await github(
    `/repos/${event.repository.owner.login}/${event.repository.name}/issues/comments/${existing.id}`,
    {
      method: "PATCH",
      body: { body },
    },
  );
}

async function syncPublicComment() {
  if (!comment) {
    return;
  }

  const target = await searchCentralIssue();
  if (!target) {
    throw new Error(
      `No central issue found for public issue ${publicRepo}#${issue.number}`,
    );
  }

  const commentMarker = `<!-- public-comment:${publicRepo}#${issue.number}:${comment.id} -->`;
  const existingComments = await github(
    `/repos/${centralOwner}/${centralName}/issues/${target.number}/comments?per_page=100`,
  );
  if (existingComments.some((item) => item.body?.includes(commentMarker))) {
    return;
  }

  const body = `${commentMarker}

Public comment from @${comment.user.login} on ${issue.html_url}:

${comment.body}`;

  await github(
    `/repos/${centralOwner}/${centralName}/issues/${target.number}/comments`,
    {
      method: "POST",
      body: { body },
    },
  );
}

if (action === "created" && comment) {
  await syncPublicComment();
  process.exit(0);
}

const centralIssue = await upsertCentralIssue();
await upsertPublicLinkComment(centralIssue);
