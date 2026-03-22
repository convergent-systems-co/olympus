---
layout: default
title: The AI Developer Operating System
description: Olympus is a governed, self-healing AI operating system for developers. It orchestrates multiple AI models, enforces code quality transparently, survives crashes, and remembers everything — so you can just code.
---

<section class="hero">
  <div class="hero-badge">Open Source · Go · Local-First · AI Developer OS</div>
  <h1>The AI Operating System<br><em>for Developers</em></h1>
  <p class="hero-sub">
    Olympus isn't a CLI tool — it's an operating system you develop within.
    It orchestrates multiple AI models, governs code quality transparently,
    survives crashes, and remembers everything across sessions.
    You code. Olympus protects you, remembers for you, and resolves problems for you.
  </p>
  <div class="hero-terminal">
    <span class="prompt">$ </span><span class="cmd">olympus</span><br>
    <span class="cmt"># ⚡(Zeus): Resuming — was resolving conflict in auth.go</span><br>
    <span class="cmt"># 🛡️(Aegis): Security scan passed, no findings</span><br>
    <span class="cmt"># 🦉(Athena): Intent validated — 2 specs generated</span><br>
    <span class="prompt">olympus&gt; </span><span class="cmd">fix the failing tests in payment_service</span>
  </div>
  <div class="hero-actions">
    <a class="btn btn-primary" href="#install">Install</a>
    <a class="btn btn-secondary" href="https://github.com/convergent-systems-co/olympus-cli">View on GitHub</a>
  </div>
</section>

<div class="stats-strip">
  <div class="stats-inner">
    <div>
      <div class="stat-value">60–90%</div>
      <div class="stat-label">Cloud token reduction</div>
    </div>
    <div>
      <div class="stat-value">&lt;200ms</div>
      <div class="stat-label">Local response latency</div>
    </div>
    <div>
      <div class="stat-value">11</div>
      <div class="stat-label">Modules in the pantheon</div>
    </div>
    <div>
      <div class="stat-value">∞</div>
      <div class="stat-label">Sessions survived across crashes</div>
    </div>
  </div>
</div>

<!-- ───────────────── TWO LOOPS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Architecture</div>
    <h2>Two loops. One system.</h2>
    <p>
      Olympus runs two concurrent loops. Together, they make Olympus feel like a persistent
      collaborator, not a CLI tool you run and exit.
    </p>

    <div class="cards">
      <div class="card">
        <div class="card-icon">🛡</div>
        <div class="tag tag-blue">Transparent</div>
        <h3>Loop 1 — Governance</h3>
        <p>
          Behind the scenes, Olympus enforces quality, security, and process.
          Governance panels review code. Aegis scans for vulnerabilities. Athena validates
          that completed work matches the original intent. You see a 🟢 in the status bar
          — not the internals. Like the lock icon on HTTPS.
        </p>
      </div>
      <div class="card">
        <div class="card-icon">⚡</div>
        <div class="tag tag-green">Alive</div>
        <h3>Loop 2 — Olympus Alive</h3>
        <p>
          Olympus survives death. Ctrl-C, context exhaustion, laptop close — Mnemosyne
          has the state. The next spawn resumes exactly where the last one stopped.
          "Yesterday you were working on the auth refactor. Status: PR created, awaiting CI."
        </p>
      </div>
    </div>

    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/architecture' | relative_url }}">See full architecture →</a>
    </p>
  </div>
</section>

<!-- ───────────────── THE PANTHEON ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">The Pantheon</div>
    <h2>Every module has one job</h2>
    <p>
      Each component is named after a Greek deity. No module imports another directly —
      they communicate through Hermes (internal bus) and persist through Mnemosyne (memory).
      Zeus coordinates. Everyone else executes.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Module</th><th>Domain</th><th>One sentence</th></tr>
      </thead>
      <tbody>
        <tr><td>⚡ <strong>Zeus</strong></td><td>Orchestration</td><td>Receives intent, delegates to modules, coordinates workflows — never does the work</td></tr>
        <tr><td>🦉 <strong>Athena</strong></td><td>Reasoning & Intent</td><td>Translates human intent to specs, validates completed work matches intent</td></tr>
        <tr><td>🌈 <strong>Iris</strong></td><td>External Routing</td><td>Routes to LLM providers, delivers PRs, manages external auth</td></tr>
        <tr><td>🔗 <strong>Hermes</strong></td><td>Internal Bus</td><td>Module-to-module pub/sub with per-module signing keys</td></tr>
        <tr><td>🔨 <strong>Hephaestus</strong></td><td>The Forge</td><td>Worktrees, branches, conflict resolution, code generation</td></tr>
        <tr><td>👁️ <strong>Argus</strong></td><td>Observation</td><td>Token tracking, cost metrics, CI monitoring</td></tr>
        <tr><td>🛡️ <strong>Aegis</strong></td><td>Security</td><td>Prompt sanitisation, secrets detection, governance panels</td></tr>
        <tr><td>🐕 <strong>Cerberus</strong></td><td>Gates</td><td>Preflight checks, dispatch gates, cost-aware self-healing</td></tr>
        <tr><td>🧠 <strong>Mnemosyne</strong></td><td>Memory</td><td>Cross-session state, checkpoints, cloud sync</td></tr>
        <tr><td>🧩 <strong>Epimetheus</strong></td><td>Retrospective</td><td>Post-execution analysis, learns from outcomes</td></tr>
      </tbody>
    </table>

    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/pantheon' | relative_url }}">Full pantheon — all 27 gods with integration diagrams →</a>
    </p>
  </div>
</section>

<!-- ───────────────── ATHENA INTENT LOOP ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Intent Loop</div>
    <h2>🦉 Athena — the non-removable floor</h2>
    <p>
      Every unit of work passes through the Athena Intent Loop. She opens the loop
      (what do you mean?) and closes it (did we do what you meant?). This prevents
      stub implementations — the failure mode that lets AI agents close issues without
      actually completing them.
    </p>

<div class="mermaid">
flowchart LR
    subgraph Translate["1. Translate"]
        HI["Human Input"]
        CS["Concrete Spec"]
    end

    subgraph Gate["2. Gate"]
        GC["Verification\ncommands?"]
        GR["Pass / Block"]
    end

    subgraph Execute["3. Execute"]
        EX["Coder Agent"]
        EV["Evidence"]
    end

    subgraph Validate["4. Validate"]
        VC["Intent Match?"]
        VR["MATCHED / PARTIAL\n/ NOT_MATCHED"]
    end

    HI --> CS
    CS --> GC
    GC --> GR
    GR -->|passed| EX
    EX --> EV
    EV --> VC
    VC --> VR

    style Translate fill:#1a2535,color:#D8DEE9,stroke:#5E81AC
    style Gate fill:#1a2e20,color:#D8DEE9,stroke:#A3BE8C
    style Execute fill:#1e2430,color:#D8DEE9,stroke:#4C566A
    style Validate fill:#252d3a,color:#D8DEE9,stroke:#EBCB8B
</div>

    <p>
      Governance is <strong>pluggable</strong> — you can swap the engine in <code>project.yaml</code>.
      But the Athena intent loop is the <strong>floor</strong>. It cannot be disabled.
      Without intent validation, stubs pass and issues close without completion.
    </p>
  </div>
</section>

<!-- ───────────────── APIS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Standards</div>
    <h2>APIS — AI-Proof Issue Spec</h2>
    <p>
      Every issue in an Olympus-governed repository follows the APIS format.
      Runnable verification commands, anti-patterns, and closure policy ensure
      AI agents cannot falsely close issues with stub implementations or dead code.
    </p>

    <div class="cards">
      <div class="card">
        <div class="tag tag-green">Required</div>
        <h3>Verification commands</h3>
        <p>Runnable shell commands with expected output. The agent must paste the output in the PR to prove completion.</p>
      </div>
      <div class="card">
        <div class="tag tag-yellow">Required</div>
        <h3>Anti-patterns</h3>
        <p>What the implementation must NOT do. Catches hardcoding, dead code, skipped error handling, TODO-as-implementation.</p>
      </div>
      <div class="card">
        <div class="tag tag-blue">Enforced</div>
        <h3>Athena closure policy</h3>
        <p>Only <code>INTENT_MATCHED</code> allows closure. Athena reads the diff, runs stub detection, and compares against the spec.</p>
      </div>
    </div>

    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/apis' | relative_url }}">Full APIS specification →</a>
    </p>
  </div>
</section>

<!-- ───────────────── ROUTING ───────────────── -->

<section class="flow-section">
  <div class="section-inner">
    <div class="section-label">Routing</div>
    <h2>🌈 Iris — Local first. Cloud as fallback.</h2>
    <p>
      Every query flows through a 4-level waterfall. Iris routes by capability, cost,
      and latency — local models first, subscription providers second, pay-per-token last.
      Cloud providers only activate when local models can't handle it.
    </p>

<div class="mermaid">
flowchart TD
    Q([User query]) --> O

    O["1 · Local Model\n(free · &lt;200ms)"]
    O -->|available| OR([Response  ·  free])
    O -->|unavailable| CP

    CP["2 · Subscription Provider\n(no per-token cost)"]
    CP -->|available| CPR([Response  ·  subscription])
    CP -->|unavailable| GH

    GH["3 · Subscription Fallback\n(no per-token cost)"]
    GH -->|available| GHR([Response  ·  subscription])
    GH -->|unavailable| CA

    CA["4 · Pay-per-token API\n⚠ last resort"]
    CA -->|available| CAR([Response  ·  cost warning])
    CA -->|unavailable| ERR([Error + diagnosis])

    style O   fill:#2E3440,color:#A3BE8C,stroke:#A3BE8C
    style OR  fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style CP  fill:#2E3440,color:#88C0D0,stroke:#88C0D0
    style CPR fill:#1a2535,color:#88C0D0,stroke:#88C0D0
    style GH  fill:#2E3440,color:#81A1C1,stroke:#81A1C1
    style GHR fill:#1a2535,color:#81A1C1,stroke:#81A1C1
    style CA  fill:#3a2020,color:#BF616A,stroke:#BF616A
    style CAR fill:#3a2020,color:#EBCB8B,stroke:#EBCB8B
    style ERR fill:#3a2020,color:#BF616A,stroke:#BF616A
    style Q   fill:#252d3a,color:#D8DEE9,stroke:#4C566A
</div>

    <div class="cards" style="margin-top:2rem;">
      <div class="card">
        <div class="tag tag-green">10 turns</div>
        <h3>~70% reduction</h3>
        <p>4,000 tokens/call compressed to ~1,200</p>
      </div>
      <div class="card">
        <div class="tag tag-green">20 turns</div>
        <h3>~85% reduction</h3>
        <p>8,000 tokens/call compressed to ~1,200</p>
      </div>
      <div class="card">
        <div class="tag tag-green">40 turns</div>
        <h3>~91% reduction</h3>
        <p>16,000 tokens/call compressed to ~1,400</p>
      </div>
    </div>
  </div>
</section>

<!-- ───────────────── SELF-HEALING ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Self-Healing</div>
    <h2>Resolve first. Escalate last.</h2>
    <p>
      When Olympus encounters a blocker, it follows a resolution ladder.
      Human review is the <strong>last</strong> resort, not the first.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Step</th><th>Action</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>1. Self-resolve</strong></td><td>Fix it directly</td><td>Rebase, conflict resolution, test fix, dependency install</td></tr>
        <tr><td><strong>2. Retry with context</strong></td><td>Retry with error injected</td><td>Re-run with failure output as additional context</td></tr>
        <tr><td><strong>3. Reduce scope</strong></td><td>Merge what's clean</td><td>Skip conflicting file, deliver partial result</td></tr>
        <tr><td><strong>4. Escalate</strong></td><td>Ask the human</td><td>Full details of what was tried and why it failed</td></tr>
      </tbody>
    </table>

    <h3 style="margin-top:2rem;">🐕 Cerberus — cost-aware self-healing</h3>
    <p>
      When local models are down and self-healing would need a paid cloud model,
      Cerberus pauses and asks:
    </p>
    <div class="hero-terminal" style="margin-top:1rem;">
      <span class="cmt">🐕(Cerberus): Local models not available. Self-healing requires a cloud LLM.</span><br>
      <span class="cmt">  1. Start local models — start the runtime and press Enter (free)</span><br>
      <span class="cmt">  2. Wait — Olympus retries when local models are available (polls every 30s)</span><br>
      <span class="cmt">  3. Use cloud — proceed with cloud LLM (costs money)</span><br>
      <span class="cmt">  4. Escalate — skip self-healing, resolve manually</span>
    </div>
  </div>
</section>

<!-- ───────────────── MEMORY ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Memory</div>
    <h2>🧠 Mnemosyne — Olympus remembers everything</h2>
    <p>
      Mnemosyne is the connective tissue between every module across every session.
      She is why Olympus survives death. She is why Olympus remembers last Tuesday.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Scenario</th><th>What happens</th></tr>
      </thead>
      <tbody>
        <tr><td>Context window red</td><td>Auto-checkpoint. New agent: "Resuming — was working on X"</td></tr>
        <tr><td>Developer hits ctrl-c</td><td>Next startup: "You had work in progress on X. Continue?"</td></tr>
        <tr><td>Developer closes laptop, opens next day</td><td>"Yesterday you were working on X. Status: PR created, awaiting CI."</td></tr>
        <tr><td>Different machine (with cloud sync)</td><td>Full context restored from encrypted cloud backup</td></tr>
        <tr><td>Developer asks "what happened last week?"</td><td>Mnemosyne recalls full intent chain with outcomes</td></tr>
      </tbody>
    </table>

    <h3 style="margin-top:2rem;">Storage roadmap</h3>
    <div class="cards">
      <div class="card">
        <div class="tag tag-green">Now</div>
        <h3>Local encrypted storage</h3>
        <p>Local files, in-memory cosine similarity, encrypted at rest. Zero dependencies.</p>
      </div>
      <div class="card">
        <div class="tag tag-blue">v2.x</div>
        <h3>Embedded database</h3>
        <p>Pure Go embedded database — full-text search, ACID transactions, single file per project.</p>
      </div>
      <div class="card">
        <div class="tag tag-purple">v2.x paid</div>
        <h3>Encrypted cloud sync</h3>
        <p>WAL streaming to cloud storage. Encrypted before upload. Multi-machine memory for ~$0.50/mo.</p>
      </div>
    </div>
  </div>
</section>

<!-- ───────────────── GOVERNANCE ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Governance</div>
    <h2>🛡️ Transparent, not invisible</h2>
    <p>
      Governance is like the lock icon on HTTPS — you know it's there, but you don't
      see the TLS handshake. Olympus governs transparently: panels review code, Aegis
      enforces security, Athena validates intent. You see the result, not the process.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Layer</th><th>What</th><th>When</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Ambient indicator</strong></td><td>🟢 healthy / 🟡 attention / 🔴 blocked</td><td>Always visible in status bar</td></tr>
        <tr><td><strong>Plain language</strong></td><td>"Your PR was approved" / "Security issue in auth.go"</td><td>When governance touches the developer</td></tr>
        <tr><td><strong>Full view</strong></td><td><code>/governance</code> — all panels, emissions, verdicts</td><td>On demand</td></tr>
        <tr><td><strong>Pluggable engine</strong></td><td>Replace governance in <code>project.yaml</code></td><td>Developer choice</td></tr>
        <tr><td><strong>Intent floor</strong></td><td>Athena intent validation — cannot be disabled</td><td>Always enforced</td></tr>
      </tbody>
    </table>

    <pre><code class="language-yaml"># project.yaml
governance:
  engine: "default"   # full panel governance
  # engine: "minimal" # Athena intent loop only
  # engine: "custom"  # your own GovernanceEngine</code></pre>
  </div>
</section>

<!-- ───────────────── BOOT SEQUENCE ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Boot</div>
    <h2>Staged boot sequence</h2>
    <p>
      Modules start in a staged sequence. Security is active before any work happens.
      Memory is available before any external connections are made. If a critical module
      fails, Zeus refuses to start.
    </p>

    <div class="hero-terminal">
      <span class="cmt">Stage 0: 🧠 Mnemosyne (read-only) + 🔗 Hermes bus</span><br>
      <span class="cmt">Stage 1: 🛡️ Aegis registers — security active</span><br>
      <span class="cmt">Stage 2: 🧠 Mnemosyne upgrades to read-write</span><br>
      <span class="cmt">Stage 3: 🌈 Iris starts — external connectivity</span><br>
      <span class="cmt">Stage 4: 🐕 Cerberus, 👁️ Argus, 🦉 Athena, 🔨 Hephaestus, 🧩 Epimetheus</span><br>
      <span class="cmt">Stage 5: ⚡ Zeus starts orchestration — all modules healthy</span>
    </div>
  </div>
</section>

<!-- ───────────────── FEATURES ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Features</div>
    <h2>Everything you need, nothing you don't</h2>

    <div class="cards">
      <div class="card">
        <div class="card-icon">🌈</div>
        <div class="tag tag-green">Free · &lt;200ms</div>
        <h3>Local-first routing</h3>
        <p>Local models handle everything by default. Iris routes by capability, cost, and latency — cloud only when needed.</p>
      </div>
      <div class="card">
        <div class="card-icon">🗜</div>
        <div class="tag tag-green">85% token reduction</div>
        <h3>Context compression</h3>
        <p>Local models summarize old turns before each cloud call. Automatic, invisible, configurable.</p>
      </div>
      <div class="card">
        <div class="card-icon">🦉</div>
        <div class="tag tag-blue">Intent loop</div>
        <h3>Athena intent validation</h3>
        <p>Translates human intent to concrete specs. Validates completed work matches the original intent. Prevents stubs.</p>
      </div>
      <div class="card">
        <div class="card-icon">🛡</div>
        <div class="tag tag-blue">Transparent</div>
        <h3>Governance panels</h3>
        <p>Security, architecture, documentation, cost, threat-modeling — all running behind the scenes. Pluggable engine.</p>
      </div>
      <div class="card">
        <div class="card-icon">🧠</div>
        <div class="tag tag-yellow">Persistent</div>
        <h3>Cross-session memory</h3>
        <p>Mnemosyne remembers everything — intents, decisions, preferences, file changes. Survives crashes, context exhaustion, restarts.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔨</div>
        <div class="tag tag-purple">Self-healing</div>
        <h3>Resolve first, escalate last</h3>
        <p>Git conflicts, test failures, missing tools — Olympus fixes them. Humans are the last resort, not the first.</p>
      </div>
    </div>
  </div>
</section>

<!-- ───────────────── PROVIDERS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Providers</div>
    <h2>Built-in provider waterfall</h2>
    <p>Built-in providers are configured via <code>olympus configure</code>. Plugin providers are added with <code>olympus providers add</code>.</p>

    <table class="provider-table">
      <thead>
        <tr>
          <th>Priority</th>
          <th>Type</th>
          <th>Cost</th>
          <th>Best for</th>
        </tr>
      </thead>
      <tbody>
        <tr class="priority-1">
          <td>1 · Primary</td>
          <td>Local model (on your machine)</td>
          <td><span class="badge badge-free">Free</span></td>
          <td>Everything. Default for all queries.</td>
        </tr>
        <tr class="priority-2">
          <td>2 · Cloud fallback</td>
          <td>Subscription provider (OAuth)</td>
          <td><span class="badge badge-sub">Subscription</span></td>
          <td>Reasoning, long context, complex code</td>
        </tr>
        <tr class="priority-3">
          <td>3 · Cloud fallback</td>
          <td>Secondary subscription provider</td>
          <td><span class="badge badge-sub">Subscription</span></td>
          <td>Code generation, diffs</td>
        </tr>
        <tr class="priority-4">
          <td>4 · Last resort</td>
          <td>Pay-per-token API</td>
          <td><span class="badge badge-paid">Per token ⚠</span></td>
          <td>Fallback only — cost warning shown</td>
        </tr>
        <tr>
          <td>5 · Plugin</td>
          <td>Any compatible API</td>
          <td><span class="badge badge-paid">Per token</span></td>
          <td>Any API you want to add</td>
        </tr>
      </tbody>
    </table>

    <pre><code class="language-bash"># Add any compatible API as a plugin provider
olympus providers add my-provider \
  --key sk_... \
  --model my-preferred-model \
  --base-url https://api.example.com/v1</code></pre>
  </div>
</section>

<!-- ───────────────── INSTALL ───────────────── -->

<section class="install-section" id="install">
  <div class="section-inner">
    <div class="section-label">Install</div>
    <h2>Get started in two minutes</h2>
    <p>Requires Go 1.22+ and a local model runtime for free local routing.</p>

    <pre><code class="language-bash"># Install via Homebrew
brew install convergent-systems-co/tap/olympus

# Or build from source
git clone https://github.com/convergent-systems-co/olympus-cli
cd olympus-cli && make install-oly

# Pull a local model for free routing
ollama pull llama3

# Configure cloud providers (optional — local models work without any)
olympus configure

# Start Olympus
olympus</code></pre>

    <h3 style="margin-top:2rem;">Developer workflow commands</h3>
    <pre><code class="language-bash">/fix        the null pointer in auth_service.go
/explain    the token bucket algorithm
/review     the payment processing module
/refactor   the database connection pool
/tests      the UserService.CreateAccount method
/diff       # review staged git changes
/security   # security-focused code review
/govern     # run all governance panels
/governance # full governance details (click the lock icon)</code></pre>
  </div>
</section>

<!-- ───────────────── DOCS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Documentation</div>
    <h2>Deep dives</h2>

    <div class="cards">
      <div class="card">
        <h3><a href="{{ '/architecture' | relative_url }}">Architecture</a></h3>
        <p>Two loops, pantheon layers, module responsibilities, boot sequence, pluggability.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/apis' | relative_url }}">APIS Standard</a></h3>
        <p>AI-Proof Issue Spec — the format that prevents AI agents from falsely closing issues.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/governance' | relative_url }}">Governance Pipeline</a></h3>
        <p>Six automated review panels — code, security, threat modeling, cost, data, documentation.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/module-boundaries' | relative_url }}">Module Boundaries</a></h3>
        <p>Decision authority for where capabilities live — tiebreaker rules and domain ownership.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/pantheon' | relative_url }}">The Pantheon</a></h3>
        <p>All 27 modules — active, planned, and future — with integration and security diagrams.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/Theming' | relative_url }}">Theming & Icons</a></h3>
        <p>Design system, color palette, module icons.</p>
      </div>
    </div>
  </div>
</section>

<!-- ───────────────── PRICING ───────────────── -->

<section id="pricing">
  <div class="section-inner">
    <div class="section-label">Pricing</div>
    <h2>Free forever. Pay only for what you need.</h2>
    <p>
      Olympus is free and open source. The full CLI, all modules, local-first routing,
      and complete governance run on your machine at no cost. Paid tiers add cloud sync,
      unified billing, and team features.
    </p>

    <div class="cards">
      <div class="card">
        <div class="tag tag-green">Now</div>
        <h3>Free</h3>
        <p style="font-size: 1.5rem; font-weight: bold; margin: 0.5rem 0;">$0</p>
        <ul style="text-align: left; padding-left: 1.2rem;">
          <li>Full CLI with all modules</li>
          <li>Local-first model routing</li>
          <li>Complete governance pipeline</li>
          <li>Athena intent validation</li>
          <li>Self-healing</li>
          <li>Cross-session memory (local)</li>
          <li>APIS enforcement</li>
        </ul>
      </div>
      <div class="card">
        <div class="tag tag-blue">Coming</div>
        <h3>Pro</h3>
        <p style="font-size: 1.5rem; font-weight: bold; margin: 0.5rem 0;">$12–19/mo</p>
        <ul style="text-align: left; padding-left: 1.2rem;">
          <li>Everything in Free</li>
          <li>🧠 Encrypted cloud sync</li>
          <li>👁️ Advanced analytics (Argus)</li>
          <li>🌈 Priority model routing</li>
          <li>Extended memory history</li>
          <li>Multi-machine support</li>
        </ul>
      </div>
      <div class="card">
        <div class="tag tag-purple">Future</div>
        <h3>Teams</h3>
        <p style="font-size: 1.5rem; font-weight: bold; margin: 0.5rem 0;">$29–49/seat/mo</p>
        <ul style="text-align: left; padding-left: 1.2rem;">
          <li>Everything in Pro</li>
          <li>🛡️ Shared governance policies</li>
          <li>🧠 Team-wide Mnemosyne memory</li>
          <li>🐕 Per-developer cost budgets</li>
          <li>👁️ Team usage analytics</li>
          <li>SSO / SAML</li>
        </ul>
      </div>
    </div>

    <h3 style="margin-top: 2rem;">Enterprise</h3>
    <p>
      For organizations that need centralized AI governance, compliance reporting,
      audit trails, data loss prevention, and dedicated support.
      <strong>Custom pricing</strong> — <a href="mailto:hello@olympus.sh">contact us</a>.
    </p>

    <h3 style="margin-top: 2rem;">Unified AI Billing <span class="tag tag-yellow" style="font-size: 0.7rem;">Coming soon</span></h3>
    <p>
      One invoice for all your AI providers. Olympus routes your requests to the cheapest
      capable model — you save money even with the margin. Stop managing 4 separate API
      keys and billing accounts.
    </p>
  </div>
</section>

<!-- ───────────────── ROADMAP ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Roadmap</div>
    <h2>What's next</h2>
    <div class="cards">
      <div class="card">
        <div class="tag tag-blue">v2.x</div>
        <h3>Embedded database</h3>
        <p>Pure Go embedded database — full-text search, ACID transactions, single file per project.</p>
      </div>
      <div class="card">
        <div class="tag tag-blue">v2.x</div>
        <h3>Encrypted cloud sync</h3>
        <p>WAL streaming to cloud storage for multi-machine memory. Encrypted before upload. ~$0.50/mo.</p>
      </div>
      <div class="card">
        <div class="tag tag-purple">v3.x</div>
        <h3>Bidirectional team sync</h3>
        <p>Real-time bidirectional sync with embedded replicas. Premium tier for teams.</p>
      </div>
    </div>
  </div>
</section>
