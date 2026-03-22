---
layout: default
title: How Olympus Works
description: Understand the two-loop architecture that makes Olympus a persistent, governed AI development system — not just another CLI tool.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Architecture</div>
  <h1>How Olympus Works</h1>
  <p class="hero-sub">
    Olympus is built on a simple idea: run two loops simultaneously. One governs quality
    behind the scenes. The other keeps Olympus alive across crashes, restarts, and sessions.
    Together, they make Olympus feel like a persistent collaborator — not a tool you run and exit.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Core Model</div>
    <h2>The Two Loops</h2>

    <h3>Loop 1: Governance (runs behind the scenes)</h3>
    <p>
      While you write code, Olympus enforces quality, security, and process in the background.
      Governance is <strong>transparent, not invisible</strong> — you know it's there (like the
      lock icon on HTTPS) but you don't see the internals unless you choose to look.
    </p>
    <div class="hero-terminal">
      <span class="cmt">You write code</span><br>
      <span class="cmt">  → Aegis scans for security issues and secrets</span><br>
      <span class="cmt">  → Governance panels review architecture, docs, and tests</span><br>
      <span class="cmt">  → Iris delivers the PR</span><br>
      <span class="cmt">  → Argus watches CI</span><br>
      <span class="cmt">  → Athena validates: does the PR fulfill the original intent?</span><br>
      <span class="cmt">  → Result: merge or reject with specific gaps</span><br>
      <span class="cmt"></span><br>
      <span class="cmt">What you see: 🟢 in the status bar, then "Your PR is ready. Approved."</span><br>
      <span class="cmt">Want details? Type /governance</span>
    </div>

    <h3 style="margin-top: 2rem;">Loop 2: Persistence (keeps Olympus alive)</h3>
    <p>
      Olympus is a persistent, living system. It doesn't run and exit. It survives crashes,
      context exhaustion, and restarts — picking up exactly where it left off.
    </p>
    <div class="hero-terminal">
      <span class="cmt">You give Olympus a task</span><br>
      <span class="cmt">  → Athena translates your intent into concrete specs</span><br>
      <span class="cmt">  → Zeus delegates to the right Pantheon Modules</span><br>
      <span class="cmt">  → Pantheon Modules execute, checkpointing state as they go</span><br>
      <span class="cmt">  → You see natural-language results</span><br>
      <span class="cmt"></span><br>
      <span class="cmt">Process dies (Ctrl-C, crash, context exhaustion)</span><br>
      <span class="cmt">  → Mnemosyne already has everything saved</span><br>
      <span class="cmt"></span><br>
      <span class="cmt">Next session starts</span><br>
      <span class="cmt">  → "Resuming — was resolving conflict in zeus.go"</span><br>
      <span class="cmt">  → Say "continue" → work picks up exactly where it stopped</span>
    </div>

    <h3 style="margin-top: 2rem;">How the loops interact</h3>
    <table class="provider-table">
      <thead>
        <tr><th>Scenario</th><th>Governance Loop</th><th>What you see</th></tr>
      </thead>
      <tbody>
        <tr><td>You write code</td><td>Panels review silently</td><td>Normal conversation</td></tr>
        <tr><td>Governance blocks a PR</td><td>Athena explains why</td><td>"Security issue found in auth.go"</td></tr>
        <tr><td>CI fails</td><td>Argus detects, Hephaestus retries</td><td>"Test fixed, CI passing now"</td></tr>
        <tr><td>Process crashes</td><td>State already checkpointed</td><td>Next session resumes seamlessly</td></tr>
        <tr><td>You ask "what happened?"</td><td>Mnemosyne has the full trail</td><td>Natural language summary</td></tr>
      </tbody>
    </table>
    <p>
      <strong>Priority rule:</strong> Governance never interrupts you mid-thought. Findings are
      queued and surfaced at a natural break. The only exception: critical security findings
      like credential exposure are shown immediately.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">The Pantheon</div>
    <h2>Specialized Pantheon Modules working together</h2>
    <p>
      Olympus is built from specialized Pantheon Modules, each handling a single responsibility.
      No Pantheon Module talks directly to another — they communicate through a secure internal bus
      (Hermes) and share state through persistent memory (Mnemosyne).
    </p>

<div class="mermaid">
flowchart TD
    DEV["You"] --> OLY["Oly (your interface)"]
    OLY --> ZEUS["Zeus (coordinator)"]
    ZEUS --> ATHENA["Athena — intent & validation"]
    ZEUS --> IRIS["Iris — AI model routing"]
    ZEUS --> HEPH["Hephaestus — code & files"]
    ZEUS --> ARGUS["Argus — monitoring"]
    ZEUS --> AEGIS["Aegis — security"]
    ZEUS --> CERB["Cerberus — cost protection"]
    ZEUS --> EPIM["Epimetheus — learning"]

    ATHENA --> HERMES["Hermes (secure message bus)"]
    IRIS --> HERMES
    HEPH --> HERMES
    ARGUS --> HERMES
    AEGIS --> HERMES
    CERB --> HERMES
    EPIM --> HERMES

    HERMES --> MNEM["Mnemosyne (persistent memory)"]

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
        <tr><th>Pantheon Module</th><th>Role</th><th>What it does for you</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>⚡ Zeus</strong></td><td>Coordinator</td><td>Manages your session, delegates tasks, coordinates workflows</td></tr>
        <tr><td><strong>🦉 Athena</strong></td><td>Intent & Validation</td><td>Understands what you mean, validates the work matches your request</td></tr>
        <tr><td><strong>🌈 Iris</strong></td><td>AI Model Routing</td><td>Picks the best model for each task — local first, cloud as fallback</td></tr>
        <tr><td><strong>🔗 Hermes</strong></td><td>Message Bus</td><td>Secure communication between modules</td></tr>
        <tr><td><strong>🔨 Hephaestus</strong></td><td>Code & Files</td><td>Code generation, branches, conflict resolution, file operations</td></tr>
        <tr><td><strong>👁️ Argus</strong></td><td>Monitoring</td><td>Cost tracking, CI monitoring, test detection</td></tr>
        <tr><td><strong>🛡️ Aegis</strong></td><td>Security</td><td>Vulnerability scanning, secrets detection, governance reviews</td></tr>
        <tr><td><strong>🐕 Cerberus</strong></td><td>Cost Protection</td><td>Pauses before spending money on cloud models</td></tr>
        <tr><td><strong>🧠 Mnemosyne</strong></td><td>Memory</td><td>Cross-session state, crash recovery, project history</td></tr>
        <tr><td><strong>🧩 Epimetheus</strong></td><td>Learning</td><td>Learns from past outcomes to improve future results</td></tr>
      </tbody>
    </table>
    <p style="text-align:center; margin-top:1.5rem;">
      <a href="{{ '/pantheon' | relative_url }}">Explore all Pantheon Modules in detail &rarr;</a>
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Intent Validation</div>
    <h2>The Athena Intent Loop</h2>
    <p>
      Every piece of work passes through Athena's intent loop. She opens the loop
      (what do you mean?) and closes it (did we do what you meant?). This is the core
      mechanism that prevents AI agents from closing issues with incomplete work.
    </p>

    <div class="hero-terminal">
      <span class="cmt">You say something</span><br>
      <span class="cmt">  → Athena translates intent → concrete, verifiable specs</span><br>
      <span class="cmt">    → Does the spec have test criteria? Anti-patterns?</span><br>
      <span class="cmt">      → Hephaestus does the work</span><br>
      <span class="cmt">        → Aegis reviews quality</span><br>
      <span class="cmt">          → Athena validates: does the work match your intent?</span><br>
      <span class="cmt">            → INTENT_MATCHED → merge and close</span><br>
      <span class="cmt">            → PARTIAL → reject with specific gaps</span><br>
      <span class="cmt">            → NOT_MATCHED → block, escalate</span>
    </div>

    <p style="margin-top: 1rem;">
      <strong>Only <code>INTENT_MATCHED</code> allows closure.</strong> This is the non-removable
      floor of governance — it cannot be disabled. Without intent validation, stub implementations
      pass and issues close without real completion.
    </p>
    <p style="text-align:center; margin-top:1.5rem;">
      <a href="{{ '/apis' | relative_url }}">See the APIS standard for issue specification &rarr;</a>
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Self-Healing</div>
    <h2>Automatic problem resolution</h2>
    <p>When Olympus encounters a blocker, it follows a resolution ladder. You're only asked for help as a last resort.</p>

    <table class="provider-table">
      <thead>
        <tr><th>Step</th><th>What happens</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>1. Self-resolve</strong></td><td>Fixes it directly</td><td>Rebases, resolves conflicts, installs dependencies</td></tr>
        <tr><td><strong>2. Retry</strong></td><td>Retries with error context</td><td>Re-runs with the failure output as additional context</td></tr>
        <tr><td><strong>3. Reduce scope</strong></td><td>Delivers what's clean</td><td>Skips conflicting files, merges what works</td></tr>
        <tr><td><strong>4. Escalate</strong></td><td>Asks you</td><td>Full details of what was tried and why it failed</td></tr>
      </tbody>
    </table>

    <p style="margin-top: 1rem;">
      Most self-healing uses local models (free). When local models are unavailable and self-healing
      would require a paid cloud model, Cerberus pauses and asks you before spending money.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Communication</div>
    <h2>How Pantheon Modules work together</h2>
    <p>No Pantheon Module talks directly to another. All communication flows through two channels:</p>

    <div class="cards">
      <div class="card">
        <div class="card-icon">🔗</div>
        <h3>Hermes (real-time)</h3>
        <p>
          A secure internal message bus. Each Pantheon Module has its own cryptographic signing key,
          so messages can't be spoofed. Only the security module can publish security events.
          Only the monitoring module can publish CI events.
        </p>
      </div>
      <div class="card">
        <div class="card-icon">🧠</div>
        <h3>Mnemosyne (persistent)</h3>
        <p>
          Shared persistent memory. Any Pantheon Module can read and write state, with isolation
          to prevent conflicts. What Hermes carries in real-time, Mnemosyne preserves
          across sessions.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Boot Sequence</div>
    <h2>Staged startup</h2>
    <p>
      Pantheon Modules start in a specific order to ensure safety. Security is active before any work
      happens. Memory is available before any external connections. If a critical module fails,
      Olympus refuses to start.
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Stage</th><th>What starts</th><th>Why this order</th></tr>
      </thead>
      <tbody>
        <tr><td>0</td><td>🧠 Memory + 🔗 Message bus</td><td>Foundation — no external dependencies</td></tr>
        <tr><td>1</td><td>🛡️ Security</td><td>Security active before any work</td></tr>
        <tr><td>2</td><td>🧠 Memory (full access)</td><td>Persistence fully available</td></tr>
        <tr><td>3</td><td>🌈 AI model routing</td><td>External connectivity ready</td></tr>
        <tr><td>4</td><td>All remaining Pantheon Modules</td><td>Everything registers</td></tr>
        <tr><td>5</td><td>⚡ Coordinator</td><td>All Pantheon Modules healthy — Olympus is ready</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Customization</div>
    <h2>Replace what you want, keep the floor</h2>
    <p>
      The governance engine is pluggable — you can replace it with your own implementation
      or scale it down to minimal mode. But the Athena intent loop is the <strong>floor</strong>.
      It runs regardless of which engine you use. You can change <em>how</em> governance works.
      You cannot have <em>zero</em> governance.
    </p>
    <pre><code class="language-yaml"># project.yaml
governance:
  engine: "default"   # full panel governance (default)
  # engine: "minimal" # Athena intent loop only, no panels
  # engine: "custom"  # your own implementation
  panels:
    security: true
    architecture: true
    documentation: false  # disable individual panels</code></pre>

    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/governance' | relative_url }}">Learn about the governance pipeline &rarr;</a>
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Routing</div>
    <h2>AI model routing</h2>
    <p>
      Every AI request flows through an intelligent waterfall. Olympus uses local models first
      (free, under 200ms), then subscription providers, then pay-per-token APIs as a last resort.
      Routing is capability-aware — code tasks go to code-optimized models, reasoning tasks to
      reasoning models.
    </p>
    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/hermes' | relative_url }}">See the full routing decision tree &rarr;</a>
    </p>
  </div>
</section>
