---
layout: default
title: The Modules
description: Every module in Olympus explained — what it does, why it exists, and how it helps you write better code faster.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Modules</div>
  <h1>The Modules</h1>
  <p class="hero-sub">
    Olympus is built from specialized modules, each named after a figure from Greek mythology.
    Every module has a single job. They communicate through a secure internal bus and share
    persistent memory — but never depend on each other directly.
  </p>
</section>

<!-- ───────────────── ACTIVE MODULES ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Active</div>
    <h2>Core modules</h2>
    <p>These modules are active in the current release and work together to deliver the full Olympus experience.</p>

    <table class="provider-table">
      <thead>
        <tr><th>Icon</th><th>Module</th><th>Role</th><th>What it does for you</th></tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-size: 1.5rem;">⚡</td>
          <td><strong>Zeus</strong></td>
          <td>Coordinator</td>
          <td>Manages your session from start to finish — receives your requests, delegates to the right modules, and keeps everything in sync. Zeus never does the work himself; he makes sure the right specialist handles it.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🦉</td>
          <td><strong>Athena</strong></td>
          <td>Intent & Validation</td>
          <td>Understands what you actually mean and turns it into concrete, verifiable specs. After the work is done, Athena checks that it truly matches your original request. This is the module that prevents AI agents from closing issues with stub implementations.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌈</td>
          <td><strong>Iris</strong></td>
          <td>AI Model Routing</td>
          <td>Picks the best AI model for each task. Routes to local models first (free, under 200ms), then subscription providers, then pay-per-token APIs as a last resort. Also handles delivering PRs and managing external authentication.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🔗</td>
          <td><strong>Hermes</strong></td>
          <td>Internal Communication</td>
          <td>The secure message bus that connects all modules. Each module has its own cryptographic signing key, so messages can't be spoofed or tampered with. Hermes only carries internal messages — nothing external.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🔨</td>
          <td><strong>Hephaestus</strong></td>
          <td>Code & Files</td>
          <td>The hands that do the work. Handles code generation, branch management, merge conflict resolution, diff creation, and file operations. When Olympus writes or modifies code, Hephaestus is the module doing it.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">👁️</td>
          <td><strong>Argus</strong></td>
          <td>Monitoring</td>
          <td>Watches everything and reports on it — token usage, costs, CI pipeline status, flaky test detection. Argus sees everything but never acts on its own; it only provides data to help you and other modules make better decisions.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🛡️</td>
          <td><strong>Aegis</strong></td>
          <td>Security & Governance</td>
          <td>Your security team. Scans for vulnerabilities, detects secrets in code, validates prompts against injection attacks, runs governance review panels, and maintains audit trails. When you see the green indicator, Aegis is why.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🐕</td>
          <td><strong>Cerberus</strong></td>
          <td>Cost Protection</td>
          <td>Guards the gate against unexpected spending. When local models are unavailable and a task would require a paid cloud model, Cerberus pauses and asks you before proceeding. Also handles preflight checks and circuit breakers.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🧠</td>
          <td><strong>Mnemosyne</strong></td>
          <td>Memory</td>
          <td>The reason Olympus survives crashes and remembers last Tuesday. Stores session state, checkpoints, your preferences, and project history. Encrypted at rest, with optional cloud sync for multi-machine support.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🧩</td>
          <td><strong>Epimetheus</strong></td>
          <td>Learning</td>
          <td>Analyzes what happened after the work is done. Identifies cost patterns, failure modes, and successful strategies — then feeds these insights back so Olympus gets smarter over time.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ───────────────── FUTURE MODULES ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Coming Soon</div>
    <h2>Planned modules</h2>
    <p>These modules are designed and will follow the same pattern: single responsibility, secure communication, persistent memory.</p>

    <table class="provider-table">
      <thead>
        <tr><th>Icon</th><th>Module</th><th>Role</th><th>What it will do</th></tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-size: 1.5rem;">☀️</td>
          <td><strong>Apollo</strong></td>
          <td>Quality Scoring</td>
          <td>Measures code quality, model output quality, and governance accuracy with concrete benchmarks.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌙</td>
          <td><strong>Artemis</strong></td>
          <td>Optimization</td>
          <td>Finds the most efficient routing paths, tunes latency, and optimizes resource usage.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">⚰️</td>
          <td><strong>Hades</strong></td>
          <td>Archival</td>
          <td>Long-term storage for project history that's no longer active but shouldn't be forgotten.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🍎</td>
          <td><strong>Persephone</strong></td>
          <td>Data Lifecycle</td>
          <td>Manages what memory stays active and what gets archived, with configurable retention policies.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌾</td>
          <td><strong>Demeter</strong></td>
          <td>Data Ingestion</td>
          <td>Processes structured inputs — repository scanning, file parsing, and context extraction.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🍇</td>
          <td><strong>Dionysus</strong></td>
          <td>Creative Generation</td>
          <td>Exploratory and divergent thinking — brainstorming, creative problem-solving, and alternative approaches.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">⚔️</td>
          <td><strong>Ares</strong></td>
          <td>Adversarial Testing</td>
          <td>Red team operations and stress testing — finds what breaks before production does.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🏆</td>
          <td><strong>Nike</strong></td>
          <td>Success Evaluation</td>
          <td>Defines and evaluates victory conditions — declares when the work is truly complete.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🔥</td>
          <td><strong>Prometheus</strong></td>
          <td>Static Analysis</td>
          <td>Inspects code before execution — catches problems before they happen.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌐</td>
          <td><strong>Atlas</strong></td>
          <td>Workload Distribution</td>
          <td>Distributes work across resources for parallel execution and load balancing.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">⚙️</td>
          <td><strong>Helios</strong></td>
          <td>Scheduling</td>
          <td>Timed execution, cron jobs, and scheduled tasks — reliable, on-time, every time.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌘</td>
          <td><strong>Selene</strong></td>
          <td>Snapshots</td>
          <td>Checkpoint and rollback capabilities — rewind to any previous state.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🧬</td>
          <td><strong>Metis</strong></td>
          <td>Strategy</td>
          <td>Meta-reasoning and plan optimization — higher-level strategic thinking.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">⚖️</td>
          <td><strong>Themis</strong></td>
          <td>Policy</td>
          <td>Rules and compliance enforcement — ensures every action meets organizational policies.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">💤</td>
          <td><strong>Hypnos</strong></td>
          <td>Background Tasks</td>
          <td>Low-priority work that runs while you're away — idle optimization, deferred processing.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">☁️</td>
          <td><strong>Morpheus</strong></td>
          <td>Simulation</td>
          <td>What-if analysis and branching scenarios — explore possibilities before committing.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">📢</td>
          <td><strong>Echo</strong></td>
          <td>Replay</td>
          <td>Event recording and session playback — review exactly what happened, when, and why.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ───────────────── HOW THEY CONNECT ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Integration</div>
    <h2>How everything connects</h2>

<div class="mermaid">
flowchart TD
    subgraph Developer["YOU"]
        DEV["Natural conversation"]
    end

    subgraph TUI["OLYMPUS"]
        OLY["⚡ Zeus\nCoordinator"]
    end

    subgraph Bus["🔗 HERMES — Secure Message Bus"]
        direction LR
        E1["security events"]
        E2["intent events"]
        E3["code events"]
        E4["CI events"]
        E5["gate events"]
        E6["routing events"]
    end

    subgraph Modules["MODULES"]
        direction LR
        ATHENA["🦉 Athena\nIntent"]
        AEGIS["🛡️ Aegis\nSecurity"]
        HEPH["🔨 Hephaestus\nCode"]
        ARGUS["👁️ Argus\nMonitor"]
        CERB["🐕 Cerberus\nCost"]
        EPIM["🧩 Epimetheus\nLearning"]
    end

    subgraph External["🌈 IRIS — AI Model Routing"]
        direction LR
        LOCAL["Local Model\nfree &middot; &lt;200ms"]
        SUB1["Subscription\nno per-token cost"]
        SUB2["Subscription Fallback\nno per-token cost"]
        PAID["Pay-per-token\nlast resort"]
        DELIVERY["Delivery\nPRs &middot; Issues"]
    end

    subgraph Memory["🧠 MNEMOSYNE — Persistent Memory"]
        direction LR
        SESSIONS["sessions"]
        INTENTS["intents"]
        PRSTATE["pr_state"]
        CIHISTORY["ci_history"]
        CONFLICTS["conflict_log"]
        PREFS["preferences"]
    end

    DEV --> OLY
    OLY --> Bus
    Bus --> Modules
    Modules --> Bus

    OLY --> External
    External --> OLY

    Modules --> Memory
    Memory --> Modules
    OLY --> Memory

    style Developer fill:#1F2328,color:#E5E7EB,stroke:#6B7280
    style TUI fill:#0A3D62,color:#E5E7EB,stroke:#3FA7D6
    style Bus fill:#2F343A,color:#FF6A00,stroke:#FF6A00
    style Modules fill:#1F2328,color:#3FA7D6,stroke:#3FA7D6
    style External fill:#082C4A,color:#E5E7EB,stroke:#145DA0
    style Memory fill:#2F343A,color:#FFD2A6,stroke:#FF8C1A

    style OLY fill:#0A3D62,color:#FF6A00,stroke:#FF6A00
    style ATHENA fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6
    style AEGIS fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6
    style HEPH fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6
    style ARGUS fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6
    style CERB fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6
    style EPIM fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6

    style SESSIONS fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style INTENTS fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style PRSTATE fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style CIHISTORY fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style CONFLICTS fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style PREFS fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
</div>

  </div>
</section>

<!-- ───────────────── COMMUNICATION EXAMPLE ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">In Practice</div>
    <h2>How modules collaborate</h2>

    <h3>Example: Hephaestus hits a merge conflict</h3>
    <div class="hero-terminal">
      <span class="cmt">🔨(Hephaestus): "I've hit a merge conflict"</span><br>
      <span class="cmt">🧠(Mnemosyne): "Last time, the developer preferred 'theirs' for this file"</span><br>
      <span class="cmt">🔨(Hephaestus): Resolves using historical preference</span><br>
      <span class="cmt">🧠(Mnemosyne): Stores this resolution for next time</span><br>
      <span class="cmt">🔗(Hermes): Notifies all modules — conflict resolved</span>
    </div>

    <h3 style="margin-top: 2rem;">Example: Self-healing needs a paid model</h3>
    <div class="hero-terminal">
      <span class="cmt">🔨(Hephaestus): "I need AI help to resolve this conflict"</span><br>
      <span class="cmt">🐕(Cerberus): "Local models are down — cloud would cost money"</span><br>
      <span class="cmt">🐕(Cerberus): Pauses and asks you: wait, pay, or skip?</span><br>
      <span class="cmt">You choose "wait"</span><br>
      <span class="cmt">🐕(Cerberus): Polls local models every 30 seconds</span><br>
      <span class="cmt">🔨(Hephaestus): Local model is back — conflict resolved for free</span>
    </div>
  </div>
</section>
