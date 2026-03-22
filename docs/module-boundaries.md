---
layout: default
title: Module Boundaries
description: Decision authority for where capabilities live in the Olympus module architecture — tiebreaker rules, domain ownership, and package mapping.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Architecture · Module Domains</div>
  <h1>Module Boundaries</h1>
  <p class="hero-sub">
    Every capability in Olympus has exactly one owner. Before adding code to any package,
    find the module whose domain owns it. This document is the decision authority.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Domains</div>
    <h2>Module ownership</h2>

    <table class="provider-table">
      <thead>
        <tr><th>Module</th><th>Archetype</th><th>Domain</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>⚡ Zeus</strong></td><td>King of the gods</td><td>Session orchestration and control flow</td></tr>
        <tr><td><strong>🔗 Hermes</strong></td><td>Messenger / courier</td><td>Internal message bus and event dispatch</td></tr>
        <tr><td><strong>🌈 Iris</strong></td><td>Divine messenger</td><td>External routing, delivery, and provider auth</td></tr>
        <tr><td><strong>🦉 Athena</strong></td><td>Goddess of wisdom</td><td>Intent, planning, and reasoning</td></tr>
        <tr><td><strong>🔨 Hephaestus</strong></td><td>God of the forge</td><td>Code generation, file operations, and execution</td></tr>
        <tr><td><strong>🧠 Mnemosyne</strong></td><td>Goddess of memory</td><td>Persistence, memory, and state across sessions</td></tr>
        <tr><td><strong>🛡️ Aegis</strong></td><td>Zeus's shield</td><td>Security, trust, audit, and governance</td></tr>
        <tr><td><strong>👁️ Argus</strong></td><td>Hundred-eyed giant</td><td>Observability, metrics, and telemetry</td></tr>
        <tr><td><strong>🐕 Cerberus</strong></td><td>Guardian of the gate</td><td>Preflight, dispatch gates, and circuit breakers</td></tr>
        <tr><td><strong>🧩 Epimetheus</strong></td><td>God of afterthought</td><td>Retrospective analytics and outcome intelligence</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Zeus</div>
    <h2>⚡ Zeus — Orchestration</h2>
    <p>
      Zeus is the <strong>thin coordinator</strong>. It delegates everything else to other modules.
      Zeus owns the session lifecycle, phase transitions, command dispatch, event bus, and conversation history.
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Owns</th><th>Does NOT own</th></tr>
      </thead>
      <tbody>
        <tr><td>Session start/stop/resume</td><td>Security policy enforcement</td></tr>
        <tr><td>Phase gating (calls Cerberus)</td><td>Memory storage (delegates to Mnemosyne)</td></tr>
        <tr><td>Agent dispatch</td><td>Provider selection (delegates to Iris)</td></tr>
        <tr><td>EventBus and CommandRegistry</td><td>Code generation (delegates to Hephaestus)</td></tr>
        <tr><td>Topology enforcement</td><td>Audit logging (delegates to Aegis)</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Iris</div>
    <h2>🌈 Iris — External Routing & Delivery</h2>
    <p>
      Iris handles all communication that crosses the boundary between Olympus and external systems —
      provider APIs, OAuth flows, and delivery to GitHub.
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Owns</th><th>Does NOT own</th></tr>
      </thead>
      <tbody>
        <tr><td>Provider interface + implementations</td><td>What prompt to send (Athena)</td></tr>
        <tr><td>Model routing (task-aware, capability-aware)</td><td>Business logic on responses (Zeus)</td></tr>
        <tr><td>Auth (API keys, OAuth, masked display)</td><td>Security scanning of output (Aegis)</td></tr>
        <tr><td>Failover and retry</td><td>Intent classification (Athena)</td></tr>
        <tr><td>Plugin provider system</td><td>Internal event routing (Hermes)</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Aegis</div>
    <h2>🛡️ Aegis — Security, Trust & Governance</h2>
    <p>
      Everything touching security, trust, compliance, and governance enforcement.
      When in doubt about whether something is a security concern, it belongs in Aegis.
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Owns</th><th>Does NOT own</th></tr>
      </thead>
      <tbody>
        <tr><td>Prompt injection detection and sanitisation</td><td>Business logic</td></tr>
        <tr><td>Output classification (secrets, PII detection)</td><td>Routing decisions</td></tr>
        <tr><td>RBAC (CODEOWNERS-based)</td><td>Memory storage</td></tr>
        <tr><td>Audit logging (structured, HMAC-signed)</td><td>Code generation</td></tr>
        <tr><td>Governance panel reviews</td><td></td></tr>
        <tr><td>Emission signing</td><td></td></tr>
        <tr><td>Supply chain integrity verification</td><td></td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Tiebreakers</div>
    <h2>When a capability could belong to two modules</h2>
    <p>Apply these rules in order:</p>
    <table class="provider-table">
      <thead>
        <tr><th>Priority</th><th>Question</th><th>Module</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Does it enforce or evaluate <strong>trust</strong>?</td><td>Aegis</td></tr>
        <tr><td>2</td><td>Does it <strong>persist state</strong> across sessions?</td><td>Mnemosyne</td></tr>
        <tr><td>3</td><td>Does it <strong>call an external service</strong>?</td><td>Iris</td></tr>
        <tr><td>3a</td><td>Does it <strong>route internal messages</strong>?</td><td>Hermes</td></tr>
        <tr><td>4</td><td>Does it <strong>produce or mutate artifacts</strong>?</td><td>Hephaestus</td></tr>
        <tr><td>5</td><td>Does it ask <strong>"can this proceed?"</strong></td><td>Cerberus</td></tr>
        <tr><td>6</td><td>Is it <strong>read-only telemetry</strong>?</td><td>Argus</td></tr>
        <tr><td>7</td><td>Does it <strong>classify intent or decompose work</strong>?</td><td>Athena</td></tr>
        <tr><td>8</td><td>Does it <strong>orchestrate multiple modules</strong>?</td><td>Zeus</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Ambiguity</div>
    <h2>Common ambiguous cases</h2>
    <table class="provider-table">
      <thead>
        <tr><th>Capability</th><th>Owner</th><th>Reasoning</th></tr>
      </thead>
      <tbody>
        <tr><td>Prompt injection detection</td><td>Aegis</td><td>Trust boundary — input validation</td></tr>
        <tr><td>Context compression</td><td>Mnemosyne</td><td>Memory management — cross-session compaction</td></tr>
        <tr><td>Circuit breaker</td><td>Cerberus</td><td>Gates operations, not security policy</td></tr>
        <tr><td>Auth key masking</td><td>Iris</td><td>External provider communication</td></tr>
        <tr><td>Audit logging</td><td>Aegis</td><td>Trust/compliance trail</td></tr>
        <tr><td>Token counting/visibility</td><td>Argus</td><td>Read-only observability</td></tr>
        <tr><td>Token budget enforcement</td><td>Aegis</td><td>Security control — stops runaway spend</td></tr>
        <tr><td>Intent classification</td><td>Athena</td><td>Reasoning</td></tr>
        <tr><td>Panel governance reviews</td><td>Aegis</td><td>Governance = trust/compliance</td></tr>
        <tr><td>Session checkpoints</td><td>Mnemosyne</td><td>Cross-session state</td></tr>
        <tr><td>Supply chain integrity</td><td>Aegis</td><td>Trust — tamper detection</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Future</div>
    <h2>Reserved module names</h2>
    <table class="provider-table">
      <thead>
        <tr><th>Name</th><th>Planned Role</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Prometheus</strong></td><td>Foresight and prediction capabilities</td></tr>
        <tr><td><strong>Apollo</strong></td><td>Code intelligence and understanding (reading code, not writing it)</td></tr>
        <tr><td><strong>Poseidon</strong></td><td>Network and infrastructure operations</td></tr>
        <tr><td><strong>Dionysus</strong></td><td>Creative and generative modes</td></tr>
        <tr><td><strong>Ares</strong></td><td>Adversarial testing, red-teaming, fuzzing</td></tr>
        <tr><td><strong>Hades</strong></td><td>Deprecation management, dead code removal</td></tr>
      </tbody>
    </table>
  </div>
</section>
