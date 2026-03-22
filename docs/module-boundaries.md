---
layout: default
title: Module Domains
description: How responsibilities are divided across Olympus modules — every capability has exactly one owner, with clear rules for edge cases.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Architecture</div>
  <h1>Module Domains</h1>
  <p class="hero-sub">
    Every capability in Olympus has exactly one owner. This page explains which module
    is responsible for what — and how edge cases are resolved when a feature could
    belong to more than one.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Ownership</div>
    <h2>Who owns what</h2>

    <table class="provider-table">
      <thead>
        <tr><th>Module</th><th>Inspired by</th><th>Owns</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>⚡ Zeus</strong></td><td>King of the gods</td><td>Session orchestration, task delegation, workflow coordination</td></tr>
        <tr><td><strong>🔗 Hermes</strong></td><td>The messenger</td><td>Internal message bus, event dispatch between modules</td></tr>
        <tr><td><strong>🌈 Iris</strong></td><td>Divine messenger</td><td>AI model routing, external delivery, provider authentication</td></tr>
        <tr><td><strong>🦉 Athena</strong></td><td>Goddess of wisdom</td><td>Intent understanding, spec creation, completion validation</td></tr>
        <tr><td><strong>🔨 Hephaestus</strong></td><td>God of the forge</td><td>Code generation, file operations, branch management</td></tr>
        <tr><td><strong>🧠 Mnemosyne</strong></td><td>Goddess of memory</td><td>Persistent state, session recovery, cross-session history</td></tr>
        <tr><td><strong>🛡️ Aegis</strong></td><td>Zeus's shield</td><td>Security scanning, governance reviews, audit trails</td></tr>
        <tr><td><strong>👁️ Argus</strong></td><td>Hundred-eyed giant</td><td>Cost tracking, CI monitoring, usage metrics</td></tr>
        <tr><td><strong>🐕 Cerberus</strong></td><td>Guardian of the gate</td><td>Cost gates, preflight checks, circuit breakers</td></tr>
        <tr><td><strong>🧩 Epimetheus</strong></td><td>God of afterthought</td><td>Outcome analysis, pattern learning, improvement recommendations</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Zeus</div>
    <h2>⚡ Zeus — the thin coordinator</h2>
    <p>
      Zeus manages the big picture but never does the work himself. He starts sessions,
      delegates tasks to the right modules, and makes sure everything stays in sync.
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Zeus handles</th><th>Zeus delegates to</th></tr>
      </thead>
      <tbody>
        <tr><td>Starting, stopping, and resuming sessions</td><td>Security policy → Aegis</td></tr>
        <tr><td>Deciding which module handles a task</td><td>Memory and state → Mnemosyne</td></tr>
        <tr><td>Coordinating multi-module workflows</td><td>AI model selection → Iris</td></tr>
        <tr><td>Managing the command registry</td><td>Code generation → Hephaestus</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Edge Cases</div>
    <h2>When a feature could belong to two modules</h2>
    <p>These rules are applied in order to determine ownership:</p>
    <table class="provider-table">
      <thead>
        <tr><th>Priority</th><th>Question</th><th>Owner</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Does it enforce or evaluate <strong>trust</strong>?</td><td>🛡️ Aegis</td></tr>
        <tr><td>2</td><td>Does it <strong>persist state</strong> across sessions?</td><td>🧠 Mnemosyne</td></tr>
        <tr><td>3</td><td>Does it <strong>call an external service</strong>?</td><td>🌈 Iris</td></tr>
        <tr><td>3a</td><td>Does it <strong>route internal messages</strong>?</td><td>🔗 Hermes</td></tr>
        <tr><td>4</td><td>Does it <strong>create or modify files</strong>?</td><td>🔨 Hephaestus</td></tr>
        <tr><td>5</td><td>Does it ask <strong>"should this proceed?"</strong></td><td>🐕 Cerberus</td></tr>
        <tr><td>6</td><td>Is it <strong>read-only monitoring</strong>?</td><td>👁️ Argus</td></tr>
        <tr><td>7</td><td>Does it <strong>understand intent</strong>?</td><td>🦉 Athena</td></tr>
        <tr><td>8</td><td>Does it <strong>coordinate multiple modules</strong>?</td><td>⚡ Zeus</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Examples</div>
    <h2>Common questions answered</h2>
    <table class="provider-table">
      <thead>
        <tr><th>Capability</th><th>Owner</th><th>Why</th></tr>
      </thead>
      <tbody>
        <tr><td>Detecting secrets in code</td><td>🛡️ Aegis</td><td>Trust and security concern</td></tr>
        <tr><td>Compressing conversation context</td><td>🧠 Mnemosyne</td><td>Memory management</td></tr>
        <tr><td>Stopping runaway API costs</td><td>🐕 Cerberus</td><td>Gate decision — "should this proceed?"</td></tr>
        <tr><td>Masking API keys in logs</td><td>🌈 Iris</td><td>External provider communication</td></tr>
        <tr><td>Recording audit events</td><td>🛡️ Aegis</td><td>Trust and compliance trail</td></tr>
        <tr><td>Tracking token usage</td><td>👁️ Argus</td><td>Read-only monitoring</td></tr>
        <tr><td>Enforcing spending limits</td><td>🛡️ Aegis</td><td>Security control</td></tr>
        <tr><td>Classifying what you meant</td><td>🦉 Athena</td><td>Intent understanding</td></tr>
        <tr><td>Running governance reviews</td><td>🛡️ Aegis</td><td>Trust and compliance</td></tr>
        <tr><td>Saving session checkpoints</td><td>🧠 Mnemosyne</td><td>Cross-session persistence</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Coming Soon</div>
    <h2>Future modules</h2>
    <table class="provider-table">
      <thead>
        <tr><th>Module</th><th>Planned role</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>🔥 Prometheus</strong></td><td>Static analysis and foresight — catching problems before execution</td></tr>
        <tr><td><strong>☀️ Apollo</strong></td><td>Code intelligence — deep understanding of codebases</td></tr>
        <tr><td><strong>🍇 Dionysus</strong></td><td>Creative and exploratory modes — brainstorming and divergent thinking</td></tr>
        <tr><td><strong>⚔️ Ares</strong></td><td>Adversarial testing — red-teaming and stress testing</td></tr>
        <tr><td><strong>⚰️ Hades</strong></td><td>Archival — long-term storage and dead code management</td></tr>
      </tbody>
    </table>
  </div>
</section>
