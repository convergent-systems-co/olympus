---
layout: default
title: Governance Pipeline
description: How Olympus reviews every pull request with automated governance panels — code review, security, threat modeling, cost analysis, documentation, and data governance.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Governance · Automated Review</div>
  <h1>Governance Pipeline</h1>
  <p class="hero-sub">
    Every pull request passes through six independent review panels before merge.
    Each panel produces a structured verdict with findings, severity ratings, and
    a machine-readable emission. No PR merges without governance approval.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">How It Works</div>
    <h2>Automated multi-panel review</h2>
    <p>
      When a PR is opened against a governed repository, the Olympus governance workflow
      triggers automatically. Six panels run in parallel, each analyzing the diff from a
      different perspective.
    </p>

<div class="mermaid">
flowchart LR
    PR["Pull Request"] --> GW["Governance Workflow"]
    GW --> CR["Code Review"]
    GW --> SR["Security Review"]
    GW --> TM["Threat Modeling"]
    GW --> CA["Cost Analysis"]
    GW --> DG["Data Governance"]
    GW --> DR["Documentation"]

    CR --> V["Verdicts"]
    SR --> V
    TM --> V
    CA --> V
    DG --> V
    DR --> V

    V -->|all approve| MERGE["✅ Merge"]
    V -->|any block| BLOCK["❌ Request Changes"]

    style PR fill:#1e2430,color:#D8DEE9,stroke:#4C566A
    style GW fill:#1a2535,color:#88C0D0,stroke:#88C0D0
    style CR fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style SR fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style TM fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style CA fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style DG fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style DR fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style V fill:#2a2a10,color:#EBCB8B,stroke:#EBCB8B
    style MERGE fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style BLOCK fill:#3a2020,color:#BF616A,stroke:#BF616A
</div>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Panels</div>
    <h2>Standard review panels</h2>

    <table class="provider-table">
      <thead>
        <tr><th>Panel</th><th>What It Reviews</th><th>Runs</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Code Review</strong></td>
          <td>Architecture, code quality, test coverage, error handling, performance</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Security Review</strong></td>
          <td>Injection risks, secrets exposure, auth gaps, dependency vulnerabilities</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Threat Modeling</strong></td>
          <td>Attack surface changes, trust boundary violations, data flow risks</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Cost Analysis</strong></td>
          <td>Cloud resource changes, token consumption impact, infrastructure costs</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Data Governance</strong></td>
          <td>PII handling, data classification, retention policies, compliance</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Documentation</strong></td>
          <td>API docs, README accuracy, changelog, breaking change notices</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>FinOps Review</strong></td>
          <td>Cloud spend impact, resource provisioning, cost optimization</td>
          <td>Conditional</td>
        </tr>
        <tr>
          <td><strong>Copilot Review</strong></td>
          <td>AI-generated code patterns, license compliance, hallucination detection</td>
          <td>Conditional</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Findings</div>
    <h2>Multi-perspective analysis</h2>
    <p>
      Each panel decomposes its analysis across 3–6 named perspectives. Every perspective
      represents a distinct stakeholder viewpoint (e.g., Security Auditor, Backend Engineer,
      Compliance Officer). Findings are tagged by severity:
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Severity</th><th>Meaning</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><code>[CRITICAL]</code></td><td>Security or correctness defect</td><td>Blocks merge</td></tr>
        <tr><td><code>[HIGH]</code></td><td>Significant production risk</td><td>Blocks merge</td></tr>
        <tr><td><code>[MEDIUM]</code></td><td>Notable gap, should fix</td><td>Non-blocking</td></tr>
        <tr><td><code>[LOW]</code></td><td>Minor improvement opportunity</td><td>Advisory</td></tr>
        <tr><td><code>[INFO]</code></td><td>Informational observation</td><td>No action</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Verdicts</div>
    <h2>Structured machine-readable verdicts</h2>
    <p>
      Every panel produces two artifacts: a human-readable markdown report and a
      machine-readable JSON emission. The JSON verdict is the authoritative signal
      for downstream tooling.
    </p>

    <pre><code class="language-json">{
  "panel_name":       "security-review",
  "pr_number":        142,
  "commit_sha":       "a1b2c3d4...",
  "panel_version":    "1.0",
  "verdict":          "approve",
  "confidence_score": 0.92,
  "risk_level":       "low",
  "findings":         ["No secrets detected", "Auth flow validated"],
  "summary":          "Change introduces no new attack surface..."
}</code></pre>

    <table class="provider-table">
      <thead>
        <tr><th>Verdict</th><th>Meaning</th></tr>
      </thead>
      <tbody>
        <tr><td><code>approve</code></td><td>Change may proceed to merge</td></tr>
        <tr><td><code>request_changes</code></td><td>Blocked — coder must address findings before re-review</td></tr>
        <tr><td><code>block</code></td><td>Hard block — escalate to developer, do not merge</td></tr>
      </tbody>
    </table>
    <p>
      Confidence scores below <strong>0.70</strong> automatically flag the PR for human review.
      The aggregate confidence across all panels is the minimum of individual panel scores.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Artifacts</div>
    <h2>Report artifacts</h2>
    <p>All governance artifacts follow a strict naming convention:</p>
    <pre><code>.artifacts/panels/&lt;PR-number&gt;-&lt;panel-type&gt;.md
.artifacts/emissions/&lt;PR-number&gt;-&lt;panel-type&gt;.json</code></pre>
    <p>Examples:</p>
    <ul>
      <li><code>.artifacts/panels/142-code-review.md</code></li>
      <li><code>.artifacts/emissions/142-security-review.json</code></li>
    </ul>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Configuration</div>
    <h2>Customizing governance</h2>
    <p>
      The governance pipeline is configured in <code>project.yaml</code>. Disable individual panels,
      adjust the dispatch strategy, or replace the engine entirely:
    </p>
    <pre><code class="language-yaml">governance:
  engine: "default"          # "default" | "minimal" | "custom"
  dispatch_strategy: "batch" # "interleaved" | "batch"
  parallel_tech_leads: 5
  parallel_coders: 10
  panels:
    security: true
    architecture: true
    documentation: false     # disable individual panels</code></pre>
    <p>
      The <strong>Athena intent loop</strong> always runs regardless of engine choice.
      It is the non-removable floor of governance — ensuring that every issue is verified
      against its original intent before closure.
    </p>
    <p style="text-align:center; margin-top:1.5rem;">
      <a href="{{ '/apis' | relative_url }}">See the APIS standard for issue specification →</a>
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Extend</div>
    <h2>Adding custom panels</h2>
    <p>To add a new governance panel:</p>
    <ol>
      <li><strong>Create a prompt file</strong> at <code>src/internal/embed/_content/prompts/reviews/&lt;panel-type&gt;.md</code></li>
      <li><strong>Register the panel</strong> in the governance workflow</li>
      <li><strong>Define 3–6 perspectives</strong> — each representing a distinct stakeholder viewpoint</li>
      <li><strong>Emit the JSON schema</strong> with all required fields: panel_name, verdict, confidence_score, findings</li>
    </ol>
    <p>
      Panel prompts instruct the reviewing agent to output a header block, perspective findings,
      consolidated assessment, and a structured emission block.
    </p>
  </div>
</section>
