---
layout: default
title: The Pantheon — All Modules
description: Complete reference for every module in Olympus — active, planned, and future. Each module has one job, communicates through Hermes, and persists through Mnemosyne.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Reference · Modules</div>
  <h1>The Pantheon</h1>
  <p class="hero-sub">
    Every component in Olympus is named after a Greek mythological figure. Each has a single
    domain. No module imports another directly — they communicate through Hermes (internal bus)
    and persist through Mnemosyne (memory). Zeus coordinates. Everyone else executes.
  </p>
</section>

<!-- ───────────────── ACTIVE MODULES ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Active</div>
    <h2>Core modules</h2>
    <p>These modules are implemented and active in the current release.</p>

    <table class="provider-table">
      <thead>
        <tr><th>Icon</th><th>Module</th><th>Domain</th><th>What it does</th></tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-size: 1.5rem;">⚡</td>
          <td><strong>Zeus</strong></td>
          <td>Orchestration</td>
          <td>Master orchestrator — coordinates all modules, drives the agentic loop, manages session lifecycle and phase transitions. Never does the work himself.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🦉</td>
          <td><strong>Athena</strong></td>
          <td>Reasoning & Intent</td>
          <td>Translates human intent to concrete, verifiable specs. Gates specs before dispatch. Validates completed work matches original intent. The non-removable governance floor.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌈</td>
          <td><strong>Iris</strong></td>
          <td>External Routing & Delivery</td>
          <td>Routes requests to LLM providers (local → subscription → pay-per-token). Manages external auth, delivery (PRs, issues), and all external communication.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🔗</td>
          <td><strong>Hermes</strong></td>
          <td>Internal Bus</td>
          <td>Module-to-module pub/sub communication. Per-module Ed25519 signing keys prevent spoofing. Event schema validation ensures only authorized publishers. Internal only — carries no external messages.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🔨</td>
          <td><strong>Hephaestus</strong></td>
          <td>The Forge</td>
          <td>Code generation, worktree management, branch operations, conflict resolution, diff crafting, and artifact building. The hands that do the work.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">👁️</td>
          <td><strong>Argus</strong></td>
          <td>Observation</td>
          <td>Token tracking, cost metrics, CI monitoring, flaky test detection, Mnemosyne health monitoring. Sees everything, never sleeps, never acts — only reports.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🛡️</td>
          <td><strong>Aegis</strong></td>
          <td>Security & Governance</td>
          <td>Prompt sanitisation, secrets detection, structural encoding validation, exfiltration detection, rate limiting, governance panels, audit trails, RBAC.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🐕</td>
          <td><strong>Cerberus</strong></td>
          <td>Gates</td>
          <td>Preflight checks, dispatch gates, circuit breakers, cost-aware self-healing. When local models are down and cloud costs money, Cerberus pauses and asks the developer.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🧠</td>
          <td><strong>Mnemosyne</strong></td>
          <td>Memory & Persistence</td>
          <td>Cross-session state, checkpoints, intent chains, developer preferences. RAID-like mirrored writes, versioned checkpoints, optional encrypted cloud sync. She is why Olympus survives death.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🧩</td>
          <td><strong>Epimetheus</strong></td>
          <td>Retrospective</td>
          <td>Post-execution analysis, cost patterns, failure learnings. Feeds insights back to Athena so future work avoids past mistakes. The god of hindsight.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ───────────────── FUTURE MODULES ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Future</div>
    <h2>Planned modules</h2>
    <p>These modules are defined in the architecture but not yet implemented. Each will follow the same pattern: single domain, communicates through Hermes, persists through Mnemosyne.</p>

    <table class="provider-table">
      <thead>
        <tr><th>Icon</th><th>Module</th><th>Domain</th><th>What it will do</th></tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-size: 1.5rem;">☀️</td>
          <td><strong>Apollo</strong></td>
          <td>Evaluation & Scoring</td>
          <td>Quality metrics, benchmarks, precision measurement. Scores code quality, model output quality, and governance panel accuracy.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌙</td>
          <td><strong>Artemis</strong></td>
          <td>Resource Optimization</td>
          <td>Latency tuning, efficiency analysis, finding the optimal routing path. The hunter who never misses.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">⚰️</td>
          <td><strong>Hades</strong></td>
          <td>Long-term Storage</td>
          <td>Cold data archival, deep history, long-term project memory. The keeper of what is no longer active but must not be forgotten.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🍎</td>
          <td><strong>Persephone</strong></td>
          <td>Data Lifecycle</td>
          <td>Active/decay rotation, retention policies. Decides what memory stays warm and what descends to Hades.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌾</td>
          <td><strong>Demeter</strong></td>
          <td>Data Ingestion</td>
          <td>Structured input processing, feeding the system. Repository scanning, file parsing, context extraction.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🍇</td>
          <td><strong>Dionysus</strong></td>
          <td>Creative Generation</td>
          <td>Exploratory and divergent outputs, brainstorming, creative problem-solving. The chaos within the structure.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">⚔️</td>
          <td><strong>Ares</strong></td>
          <td>Adversarial Testing</td>
          <td>Red team operations, chaos engineering, stress testing. Finds what breaks before production does.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🏆</td>
          <td><strong>Nike</strong></td>
          <td>Success Evaluation</td>
          <td>Victory conditions, acceptance criteria, pass/fail determination. Declares when the work is truly done.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🔥</td>
          <td><strong>Prometheus</strong></td>
          <td>Static Analysis</td>
          <td>Code inspection before execution, foresight scanning. Sees problems before they happen — gave fire to mortals.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌐</td>
          <td><strong>Atlas</strong></td>
          <td>Workload Distribution</td>
          <td>Cluster scheduling, load balancing across nodes. Holds up the sky so others can work beneath it.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">⚙️</td>
          <td><strong>Helios</strong></td>
          <td>Scheduling</td>
          <td>Cron jobs, timed execution, daily cycles. The sun that rises on schedule, every time.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🌘</td>
          <td><strong>Selene</strong></td>
          <td>Snapshots & Rollback</td>
          <td>Checkpoints, phase restore, rewind. The moon that cycles — always returning to where it was.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">🧬</td>
          <td><strong>Metis</strong></td>
          <td>Strategy & Planning</td>
          <td>Meta-reasoning, plan optimization, cunning counsel. The titaness whose wisdom Zeus swallowed to gain insight.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">⚖️</td>
          <td><strong>Themis</strong></td>
          <td>Policy Enforcement</td>
          <td>Rules, fairness, compliance, balance. The scales that weigh every action against the law.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">💤</td>
          <td><strong>Hypnos</strong></td>
          <td>Background Processing</td>
          <td>Idle tasks, low-priority queues, deferred work. The god who works while you sleep.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">☁️</td>
          <td><strong>Morpheus</strong></td>
          <td>Simulation</td>
          <td>Branching scenarios, what-if analysis, shape-shifting outcomes. Dreams of possibilities before committing to reality.</td>
        </tr>
        <tr>
          <td style="font-size: 1.5rem;">📢</td>
          <td><strong>Echo</strong></td>
          <td>Logging & Replay</td>
          <td>Event recording, session playback, audit trail. The nymph who repeats what was said — perfectly, every time.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ───────────────── INTEGRATION DIAGRAM ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Integration</div>
    <h2>How everything connects</h2>

<div class="mermaid">
flowchart TD
    subgraph Developer["DEVELOPER"]
        DEV["Natural conversation"]
    end

    subgraph TUI["OLY — TUI Persona"]
        OLY["⚡ Zeus\nOrchestrator"]
    end

    subgraph Bus["🔗 HERMES — Internal Bus\n(Ed25519 signed · schema validated)"]
        direction LR
        E1["security.*"]
        E2["intent.*"]
        E3["forge.*"]
        E4["ci.*"]
        E5["gate.*"]
        E6["routing.*"]
    end

    subgraph Modules["MODULES"]
        direction LR
        ATHENA["🦉 Athena\nIntent"]
        AEGIS["🛡️ Aegis\nSecurity"]
        HEPH["🔨 Hephaestus\nForge"]
        ARGUS["👁️ Argus\nObserve"]
        CERB["🐕 Cerberus\nGates"]
        EPIM["🧩 Epimetheus\nHindsight"]
    end

    subgraph External["🌈 IRIS — External Routing"]
        direction LR
        LOCAL["Local Model\nfree · &lt;200ms"]
        SUB1["Subscription Provider\nno per-token cost"]
        SUB2["Subscription Fallback\nno per-token cost"]
        PAID["Pay-per-token API\nlast resort"]
        DELIVERY["Delivery API\nPRs · Issues"]
    end

    subgraph Memory["🧠 MNEMOSYNE — Persistence"]
        direction LR
        SESSIONS["sessions"]
        INTENTS["intents"]
        PRSTATE["pr_state"]
        CIHISTORY["ci_history"]
        CONFLICTS["conflict_log"]
        PREFS["dev_prefs"]
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

    style OLLAMA fill:#2E3440,color:#A3BE8C,stroke:#A3BE8C
    style CLAUDE fill:#2E3440,color:#88C0D0,stroke:#88C0D0
    style COPILOT fill:#2E3440,color:#81A1C1,stroke:#81A1C1
    style API fill:#3a2020,color:#BF616A,stroke:#BF616A
    style GITHUB fill:#2E3440,color:#EBCB8B,stroke:#EBCB8B

    style SESSIONS fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style INTENTS fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style PRSTATE fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style CIHISTORY fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style CONFLICTS fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
    style PREFS fill:#3A4047,color:#FFD2A6,stroke:#FF8C1A
</div>

  </div>
</section>

<!-- ───────────────── SECURITY ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Security</div>
    <h2>Security measures</h2>

<div class="mermaid">
flowchart TD
    subgraph HermesSec["🔗 Hermes Bus Security"]
        KEYS["Per-module Ed25519 keys\n(ephemeral per boot)"]
        SCHEMA["Event schema validation\n(only authorized publishers)"]
        HMAC["HMAC-signed envelopes\n(tamper detection)"]
    end

    subgraph AegisSec["🛡️ Aegis Security Layer"]
        SANITISE["Prompt sanitisation\n(injection prevention)"]
        SECRETS["Secret detection\n(sk-ant-*, ghp_*, AKIA*)"]
        ENCODING["Structural encoding\n(base64/hex/rot13 detection)"]
        EXFIL["Exfiltration detection\n(data loss prevention)"]
        RATE["Rate limiting\n(abuse prevention)"]
        TIMEOUT["Session timeout\n(idle lockout)"]
    end

    subgraph AuditSec["📢 Audit Security"]
        CHAIN["Hash-chained audit trail\n(SHA-256 event chain)"]
        BEARER["Correlation bearer tokens\n(age X25519 encrypted)"]
        IDENTITY["Fail-closed identity\n(dispatch record required)"]
        EMISSION["Server-authoritative timestamps\n(replay prevention)"]
    end

    subgraph MnemosyneSec["🧠 Mnemosyne Security"]
        AGE["age encryption at rest"]
        RAID["RAID-like mirrored writes\n(primary + mirror)"]
        SHA["SHA-256 integrity on read"]
        CLOUD["Encrypted cloud sync\n(encrypted before upload)"]
    end

    HermesSec --> AegisSec
    AegisSec --> AuditSec
    AuditSec --> MnemosyneSec

    style HermesSec fill:#0A3D62,color:#E5E7EB,stroke:#3FA7D6
    style AegisSec fill:#0A3D62,color:#E5E7EB,stroke:#FF6A00
    style AuditSec fill:#0A3D62,color:#E5E7EB,stroke:#EBCB8B
    style MnemosyneSec fill:#0A3D62,color:#E5E7EB,stroke:#FF8C1A

    style KEYS fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6
    style SCHEMA fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6
    style HMAC fill:#145DA0,color:#E5E7EB,stroke:#3FA7D6

    style SANITISE fill:#2F343A,color:#FF6A00,stroke:#FF6A00
    style SECRETS fill:#2F343A,color:#FF6A00,stroke:#FF6A00
    style ENCODING fill:#2F343A,color:#FF6A00,stroke:#FF6A00
    style EXFIL fill:#2F343A,color:#FF6A00,stroke:#FF6A00
    style RATE fill:#2F343A,color:#FF6A00,stroke:#FF6A00
    style TIMEOUT fill:#2F343A,color:#FF6A00,stroke:#FF6A00

    style CHAIN fill:#2F343A,color:#EBCB8B,stroke:#EBCB8B
    style BEARER fill:#2F343A,color:#EBCB8B,stroke:#EBCB8B
    style IDENTITY fill:#2F343A,color:#EBCB8B,stroke:#EBCB8B
    style EMISSION fill:#2F343A,color:#EBCB8B,stroke:#EBCB8B

    style AGE fill:#3A4047,color:#FF8C1A,stroke:#FF8C1A
    style RAID fill:#3A4047,color:#FF8C1A,stroke:#FF8C1A
    style SHA fill:#3A4047,color:#FF8C1A,stroke:#FF8C1A
    style CLOUD fill:#3A4047,color:#FF8C1A,stroke:#FF8C1A
</div>

    <p>
      Every layer enforces security independently. If Hermes is compromised, Aegis still
      catches malicious prompts. If Aegis is bypassed, the audit chain detects tampering.
      If the audit log is corrupted, Mnemosyne's integrity checks catch it on next read.
      Defense in depth — no single point of failure.
    </p>
  </div>
</section>

<!-- ───────────────── COMMUNICATION ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Communication</div>
    <h2>How the gods talk</h2>
    <p>
      No module imports another. All communication flows through two channels:
    </p>

    <div class="cards">
      <div class="card">
        <div class="card-icon">🔗</div>
        <h3>Hermes (real-time)</h3>
        <p>
          In-process pub/sub bus. Per-module Ed25519 signing keys. Event schema validation.
          Only Aegis can publish security events. Only Argus can publish CI events.
          Internal only — no external messages.
        </p>
      </div>
      <div class="card">
        <div class="card-icon">🧠</div>
        <h3>Mnemosyne (persistent)</h3>
        <p>
          Any module can read and write state. Module-scoped collections prevent collision.
          Cross-session persistence. RAID-like mirrored writes. What Hermes carries in
          real-time, Mnemosyne preserves across time.
        </p>
      </div>
    </div>

    <h3 style="margin-top: 2rem;">Example: 🔨 Hephaestus hits a merge conflict</h3>
    <div class="hero-terminal">
      <span class="cmt">🔨(Hephaestus): publishes "forge.conflict" on Hermes bus</span><br>
      <span class="cmt">🧠(Mnemosyne): Hephaestus reads conflict_history — "dev preferred theirs last time"</span><br>
      <span class="cmt">🔨(Hephaestus): resolves conflict using historical preference</span><br>
      <span class="cmt">🧠(Mnemosyne): stores resolution for next time</span><br>
      <span class="cmt">🔗(Hermes): delivers "forge.conflict_resolved" to all subscribers</span>
    </div>
  </div>
</section>

<!-- ───────────────── BOOT ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Boot</div>
    <h2>Staged initialization</h2>
    <p>
      Modules start in order. Security is active before any work. Memory is available
      before any external connections. If a critical module fails, Zeus refuses to start.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Stage</th><th>Modules</th><th>Why this order</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>0</strong></td><td>🧠 Mnemosyne (read-only) + 🔗 Hermes</td><td>Kernel substrate — no external dependencies</td></tr>
        <tr><td><strong>1</strong></td><td>🛡️ Aegis</td><td>Security active before any work</td></tr>
        <tr><td><strong>2</strong></td><td>🧠 Mnemosyne (read-write)</td><td>Full persistence with bus for state change events</td></tr>
        <tr><td><strong>3</strong></td><td>🌈 Iris</td><td>External connectivity — reads credentials from Mnemosyne</td></tr>
        <tr><td><strong>4</strong></td><td>🐕 🦉 👁️ 🔨 🧩</td><td>All remaining modules register</td></tr>
        <tr><td><strong>5</strong></td><td>⚡ Zeus</td><td>All modules healthy — orchestration begins</td></tr>
      </tbody>
    </table>

    <p style="margin-top: 1rem;">
      <strong>Critical modules</strong> (boot fails if these fail): Mnemosyne, Hermes, Aegis, Iris<br>
      <strong>Non-critical modules</strong> (degraded mode): Argus, Epimetheus, Cerberus, Athena, Hephaestus
    </p>
  </div>
</section>
