---
layout: default
title: System Architecture
description: How Olympus works — the two-loop execution model, god-module boundaries, inter-module communication, and the full orchestration lifecycle.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Architecture · System Design</div>
  <h1>System Architecture</h1>
  <p class="hero-sub">
    Olympus is an AI Operating System for software development. The developer operates within it — not on top of it.
    Olympus orchestrates governed, safe code delivery while giving the developer a natural, conversational experience.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Core Model</div>
    <h2>The Two Loops</h2>
    <p>
      Olympus operates two concurrent loops. They run simultaneously, serve different masters, and have different visibility.
    </p>

    <h3>Loop 1: Governance (transparent to the developer)</h3>
    <p>
      The developer writes code. Behind the scenes, Olympus enforces quality, security, and process.
      Governance is <strong>transparent, not invisible</strong> — the developer knows it exists (like the lock icon on HTTPS)
      but doesn't see the internals unless they choose to look.
    </p>
    <pre><code>Developer writes code
    → Aegis validates (security, injection, secrets)
    → Governance panels review (architecture, docs, tests)
    → Iris delivers PR to GitHub
    → Argus watches CI
    → Athena validates intent match (did the PR fulfill the issue?)
    → Iris merges or Athena rejects with specific gaps

Developer sees: 🟢 in status bar, then "Your PR is ready. Approved by 3 panels."
Developer CAN see: /governance for full details (clicking the lock icon).</code></pre>

    <p>
      The governance engine is <strong>pluggable</strong> — developers can replace it with their own.
      But the Athena intent loop is the <strong>floor</strong> — it cannot be disabled. Without intent
      validation, stubs pass and issues close without completion.
    </p>

    <h3>Loop 2: Olympus Alive (what the developer experiences)</h3>
    <p>
      Olympus is a persistent, living system. It does not run and exit. It survives crashes,
      context exhaustion, and restarts. It remembers what it was doing yesterday.
    </p>
    <pre><code>Developer says something
    → Athena translates intent
    → Zeus delegates to the appropriate modules
    → Modules execute (each persisting state through Mnemosyne)
    → Developer sees natural language result

Process dies (ctrl-c, context red, crash)
    → Mnemosyne already has everything (auto-checkpoint)

New process spawns
    → Zeus reads Mnemosyne: session state, pending work, blocker state
    → "Resuming — was resolving conflict in zeus.go"
    → Developer says "continue" → work picks up exactly where it stopped</code></pre>

    <h3>How the loops interact</h3>
    <table class="provider-table">
      <thead>
        <tr><th>Scenario</th><th>Loop 1 (Governance)</th><th>Loop 2 (Developer)</th></tr>
      </thead>
      <tbody>
        <tr><td>Developer writes code</td><td>Panels review silently</td><td>Developer sees conversation</td></tr>
        <tr><td>Governance blocks a PR</td><td>Athena explains why</td><td>"Security issue found in auth.go"</td></tr>
        <tr><td>CI fails</td><td>Argus detects, Hephaestus retries</td><td>"Test fixed, CI passing now"</td></tr>
        <tr><td>Process crashes</td><td>State already checkpointed</td><td>Next session resumes seamlessly</td></tr>
        <tr><td>Developer asks "what happened?"</td><td>Mnemosyne has full audit trail</td><td>Natural language summary</td></tr>
      </tbody>
    </table>
    <p>
      <strong>Priority rule:</strong> When loops conflict, governance queues findings and surfaces them
      at a natural break — never interrupting mid-thought. Critical security findings (credential exposure)
      override this rule.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Governance</div>
    <h2>Governance visibility model</h2>
    <p>
      Governance is <strong>transparent</strong> — like HTTPS, you see the lock, not the handshake:
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Layer</th><th>What</th><th>When</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Ambient indicator</strong></td><td>🟢 healthy / 🟡 attention / 🔴 blocked</td><td>Always visible in status bar</td></tr>
        <tr><td><strong>Plain language</strong></td><td>"Your PR was approved" / "Security issue in auth.go"</td><td>When governance touches the developer</td></tr>
        <tr><td><strong>Full view</strong></td><td><code>/governance</code> — all panels, emissions, verdicts</td><td>On demand</td></tr>
        <tr><td><strong>Pluggable engine</strong></td><td>Replace governance engine in <code>project.yaml</code></td><td>Developer choice</td></tr>
        <tr><td><strong>Intent floor</strong></td><td>Athena intent validation — cannot be disabled</td><td>Always enforced</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Modules</div>
    <h2>The Pantheon</h2>
    <p>
      Every component is named after a Greek mythological figure. Each has a single domain.
      No module imports another module directly — they communicate through Hermes (internal bus)
      and persist through Mnemosyne (state).
    </p>

<div class="mermaid">
flowchart TD
    DEV["Developer"] --> OLY["Oly (persona)"]
    OLY --> ZEUS["Zeus (orchestrator)"]
    ZEUS --> ATHENA["Athena — reason & intent"]
    ZEUS --> IRIS["Iris — external routing"]
    ZEUS --> HEPH["Hephaestus — the forge"]
    ZEUS --> ARGUS["Argus — observability"]
    ZEUS --> AEGIS["Aegis — security"]
    ZEUS --> CERB["Cerberus — gates"]
    ZEUS --> EPIM["Epimetheus — hindsight"]

    ATHENA --> HERMES["Hermes (internal bus)"]
    IRIS --> HERMES
    HEPH --> HERMES
    ARGUS --> HERMES
    AEGIS --> HERMES
    CERB --> HERMES
    EPIM --> HERMES

    HERMES --> MNEM["Mnemosyne (persistence)"]

    style DEV fill:#1e2430,color:#D8DEE9,stroke:#4C566A
    style OLY fill:#1a2535,color:#88C0D0,stroke:#88C0D0
    style ZEUS fill:#2a2a10,color:#EBCB8B,stroke:#EBCB8B
    style ATHENA fill:#1a2535,color:#88C0D0,stroke:#5E81AC
    style IRIS fill:#1a2535,color:#88C0D0,stroke:#5E81AC
    style HEPH fill:#1a2535,color:#88C0D0,stroke:#5E81AC
    style ARGUS fill:#1a2535,color:#88C0D0,stroke:#5E81AC
    style AEGIS fill:#1a2535,color:#88C0D0,stroke:#5E81AC
    style CERB fill:#1a2535,color:#88C0D0,stroke:#5E81AC
    style EPIM fill:#1a2535,color:#88C0D0,stroke:#5E81AC
    style HERMES fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style MNEM fill:#2a2020,color:#BF616A,stroke:#BF616A
</div>

    <table class="provider-table">
      <thead>
        <tr><th>Module</th><th>Domain</th><th>One sentence</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>⚡ Zeus</strong></td><td>Orchestration</td><td>Receives intent, delegates to modules, coordinates workflows, never does the work</td></tr>
        <tr><td><strong>🦉 Athena</strong></td><td>Reasoning &amp; Intent</td><td>Translates human intent to specs, validates completed work matches intent</td></tr>
        <tr><td><strong>🌈 Iris</strong></td><td>External Routing</td><td>Routes to LLM providers, delivers PRs, manages external auth and routing decisions</td></tr>
        <tr><td><strong>🔗 Hermes</strong></td><td>Internal Bus</td><td>Module-to-module pub/sub with per-module signing keys and event schema validation</td></tr>
        <tr><td><strong>🔨 Hephaestus</strong></td><td>The Forge</td><td>Worktrees, branches, conflict resolution, code generation, file operations</td></tr>
        <tr><td><strong>👁️ Argus</strong></td><td>Observation</td><td>Token tracking, cost metrics, CI monitoring, flaky test detection</td></tr>
        <tr><td><strong>🛡️ Aegis</strong></td><td>Security</td><td>Prompt sanitisation, secrets detection, governance panels, audit, RBAC</td></tr>
        <tr><td><strong>🐕 Cerberus</strong></td><td>Gates</td><td>Preflight checks, dispatch gates, circuit breakers, self-healing cost gates</td></tr>
        <tr><td><strong>🧠 Mnemosyne</strong></td><td>Memory</td><td>Cross-session state, checkpoints, intent chains, developer preferences, cloud sync</td></tr>
        <tr><td><strong>🧩 Epimetheus</strong></td><td>Retrospective</td><td>Post-execution analysis, cost patterns, feeds learnings back to Athena</td></tr>
      </tbody>
    </table>
    <p style="text-align:center; margin-top:1.5rem;">
      <a href="{{ '/pantheon' | relative_url }}">Full module catalog with integration diagrams →</a>
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Intent Loop</div>
    <h2>The Athena Intent Loop</h2>
    <p>
      Every unit of work passes through a single loop. This is the core execution model
      and the <strong>non-removable floor</strong> of governance.
    </p>
    <pre><code>Human says something
    → Athena translates intent → concrete, verifiable specs
        → Athena gates: do specs have verification commands? anti-patterns?
            → Zeus dispatches to Coder agents (Hephaestus)
                → Governance panels review code quality (Aegis)
                    → Athena validates: does completed work match original intent?
                        → INTENT_MATCHED → merge and close
                        → PARTIAL → reject with specific gaps
                        → NOT_MATCHED → block, escalate</code></pre>

    <h3>Intent translation (intake)</h3>
    <p>
      Developer: <em>"Zeus does too much, break him up"</em>
    </p>
    <p>
      Athena produces concrete specs — each with verification commands, anti-patterns, and
      completion criteria. The developer approves the specs before any work begins. If Athena's
      confidence is below 0.75, she asks a clarifying question instead of guessing.
    </p>

    <h3>Intent validation (acceptance)</h3>
    <p>Before any issue closes or PR merges, Athena:</p>
    <ol>
      <li>Reads the original intent and spec</li>
      <li>Reads the diff</li>
      <li>Runs verification commands from the spec</li>
      <li>Compares: does the diff fulfill the spec?</li>
      <li>Emits verdict: <code>INTENT_MATCHED</code>, <code>PARTIAL</code> (with gaps), or <code>NOT_MATCHED</code></li>
    </ol>
    <p>
      <strong>Only <code>INTENT_MATCHED</code> allows closure.</strong> This prevents stub implementations —
      the failure mode that AI coding agents are most prone to.
    </p>
    <p style="text-align:center; margin-top:1.5rem;">
      <a href="{{ '/apis' | relative_url }}">See the APIS standard for issue specification →</a>
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Self-Healing</div>
    <h2>Automatic problem resolution</h2>
    <p>When Olympus encounters a blocker, it follows a resolution ladder:</p>
    <pre><code>1. Self-resolve    → rebase, conflict resolution, test fix, dependency install
2. Retry with ctx  → retry the operation with error context injected
3. Reduce scope    → skip conflicting file, merge what's clean
4. Escalate        → ONLY NOW ask the human, with full details of what was tried</code></pre>
    <p>Human review is the <strong>last</strong> resort, not the first.</p>

    <h3>Self-healing cost gate</h3>
    <p>
      Most self-healing uses local models (free). When local models are down and Iris would fall through
      to a paid provider, <strong>Cerberus pauses and asks the developer</strong> before spending money.
      Argus tracks self-healing cost separately from developer-requested work.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Blocker</th><th>Resolver</th><th>Memory</th></tr>
      </thead>
      <tbody>
        <tr><td>Git conflict</td><td>Hephaestus reads both sides + plan intent, resolves via LLM</td><td>Stores resolution history</td></tr>
        <tr><td>Test failure</td><td>Hephaestus reads output, re-attempts fix (max 2 retries)</td><td>Argus: flaky or new?</td></tr>
        <tr><td>Context exhaustion</td><td>Auto-checkpoint, new agent loads state and continues</td><td>Full session state</td></tr>
        <tr><td>CI failure</td><td>Argus waits, detects pattern, retries or escalates</td><td>CI history across sessions</td></tr>
        <tr><td>Ctrl-C / crash</td><td>Mnemosyne already has the state</td><td>"Continue? [Y/n]"</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Communication</div>
    <h2>Inter-module communication</h2>
    <p>No module imports another module. All communication flows through two channels:</p>
    <ol>
      <li><strong>Hermes bus</strong> — real-time, per-module-signed pub/sub events (internal)</li>
      <li><strong>Mnemosyne</strong> — persistent state that any module can read (cross-session)</li>
    </ol>

    <h3>Example: Hephaestus hits a merge conflict</h3>
    <pre><code>Hephaestus publishes "forge.conflict" on Hermes bus
    → reads conflict_history from Mnemosyne ("what did dev prefer last time?")
    → resolves conflict
    → writes resolution to Mnemosyne (for next time)
    → publishes "forge.conflict_resolved" on Hermes bus</code></pre>

    <h3>Example: Self-healing triggers paid LLM</h3>
    <pre><code>Hephaestus needs LLM for conflict resolution
    → Cerberus checks: is local model available?
    → Local model is down → Cerberus pauses, surfaces choice to developer
    → Developer chooses "wait" → polls local model every 30s
    → Local model comes back → Cerberus allows → Hephaestus resolves for free</code></pre>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Boot Sequence</div>
    <h2>Staged module initialization</h2>
    <p>Modules start in a staged sequence with escalating capability:</p>
    <table class="provider-table">
      <thead>
        <tr><th>Stage</th><th>Module</th><th>Why</th></tr>
      </thead>
      <tbody>
        <tr><td>0</td><td><strong>Mnemosyne</strong> (read-only) + <strong>Hermes</strong></td><td>Kernel substrate, no external dependencies</td></tr>
        <tr><td>1</td><td><strong>Aegis</strong></td><td>Security active before any work</td></tr>
        <tr><td>2</td><td><strong>Mnemosyne</strong> upgrades to read-write</td><td>Full persistence available</td></tr>
        <tr><td>3</td><td><strong>Iris</strong></td><td>External connectivity available</td></tr>
        <tr><td>4</td><td><strong>Cerberus, Argus, Athena, Hephaestus, Epimetheus</strong></td><td>All modules active</td></tr>
        <tr><td>5</td><td><strong>Oly</strong></td><td>User-facing layer ready</td></tr>
        <tr><td>6</td><td><strong>Zeus</strong></td><td>Orchestration begins</td></tr>
      </tbody>
    </table>
    <p>
      <strong>Critical modules</strong> (boot fails if these fail): Mnemosyne, Hermes, Aegis, Iris<br>
      <strong>Non-critical modules</strong> (degraded mode): Argus, Epimetheus, Cerberus, Athena, Hephaestus, Oly
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Pluggability</div>
    <h2>Replace what you want, keep the floor</h2>
    <p>
      Zeus depends on <strong>interfaces</strong>, not concrete modules. Replace the governance engine,
      swap the memory backend, bring your own panels — the default modules ship as built-in plugins.
    </p>
    <pre><code class="language-yaml"># project.yaml
governance:
  engine: "default"   # full panel governance (default)
  # engine: "minimal" # Athena intent loop only, no panels
  # engine: "custom"  # your own GovernanceEngine implementation
  panels:
    security: true
    architecture: true
    documentation: false  # disable individual panels</code></pre>
    <p>
      The Athena intent loop is the <strong>floor</strong> — it runs regardless of which engine is plugged in.
      You can change HOW governance works. You cannot have zero governance.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Routing</div>
    <h2>Provider waterfall</h2>
    <p>Iris routes every LLM request through a 4-level waterfall:</p>
    <pre><code>1. Local model (free, &lt;200ms)
    → 2. Subscription provider (no per-token cost)
        → 3. Secondary subscription (no per-token cost)
            → 4. Pay-per-token API (last resort)</code></pre>
    <p>
      Routing is capability-aware: code generation tasks route to code-optimized models,
      reasoning tasks to reasoning models. Cost is always minimized — local first, subscription
      second, pay-per-token last.
    </p>
    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/hermes' | relative_url }}">See the full routing decision tree →</a>
    </p>
  </div>
</section>
