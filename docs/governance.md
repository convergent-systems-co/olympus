---
layout: default
title: Governance
description: How Olympus automatically reviews every pull request with six independent panels — security, architecture, documentation, cost, threat modeling, and data governance.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Governance</div>
  <h1>Automated Code Governance</h1>
  <p class="hero-sub">
    Every pull request passes through independent review panels before merge.
    Each panel analyzes the change from a different perspective — security, architecture,
    cost, compliance — and produces a clear verdict. No PR merges without governance approval.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">How It Works</div>
    <h2>Multi-panel automated review</h2>
    <p>
      When a PR is opened, six review panels run in parallel. Each one examines the change
      from a different angle, like having a team of senior specialists review every PR.
    </p>

<div class="mermaid">
flowchart LR
    PR["Pull Request"] --> GW["Governance"]
    GW --> CR["Code Review"]
    GW --> SR["Security"]
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
    <h2>What gets reviewed</h2>

    <table class="provider-table">
      <thead>
        <tr><th>Panel</th><th>What it checks</th><th>Runs</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Code Review</strong></td>
          <td>Architecture decisions, code quality, test coverage, error handling, performance implications</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Security Review</strong></td>
          <td>Injection risks, secrets exposure, authentication gaps, dependency vulnerabilities</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Threat Modeling</strong></td>
          <td>Attack surface changes, trust boundary violations, data flow risks</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Cost Analysis</strong></td>
          <td>Cloud resource impact, token consumption changes, infrastructure costs</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Data Governance</strong></td>
          <td>PII handling, data classification, retention policies, compliance requirements</td>
          <td>Every PR</td>
        </tr>
        <tr>
          <td><strong>Documentation</strong></td>
          <td>API docs accuracy, changelog updates, breaking change notices</td>
          <td>Every PR</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Findings</div>
    <h2>Clear severity ratings</h2>
    <p>
      Each panel produces findings tagged by severity. You know exactly what needs attention
      and what's just a suggestion.
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Severity</th><th>Meaning</th><th>Impact on your PR</th></tr>
      </thead>
      <tbody>
        <tr><td><code>[CRITICAL]</code></td><td>Security or correctness issue</td><td>Blocks merge — must fix before proceeding</td></tr>
        <tr><td><code>[HIGH]</code></td><td>Significant production risk</td><td>Blocks merge — must fix before proceeding</td></tr>
        <tr><td><code>[MEDIUM]</code></td><td>Notable gap that should be addressed</td><td>Non-blocking — recommended fix</td></tr>
        <tr><td><code>[LOW]</code></td><td>Minor improvement opportunity</td><td>Advisory — fix when convenient</td></tr>
        <tr><td><code>[INFO]</code></td><td>Informational observation</td><td>No action needed</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Verdicts</div>
    <h2>What you see</h2>
    <p>
      Each panel produces a clear verdict. You get a plain-language summary, and the full
      technical details are available on demand.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Verdict</th><th>What it means</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Approve</strong></td><td>This panel found no issues — your change is good to go</td></tr>
        <tr><td><strong>Request Changes</strong></td><td>Issues found that need to be fixed before the PR can merge</td></tr>
        <tr><td><strong>Block</strong></td><td>Critical issue — escalated for your attention, merge prevented</td></tr>
      </tbody>
    </table>
    <p>
      Confidence scores below <strong>0.70</strong> automatically flag the PR for human review,
      ensuring that uncertain findings get a second look.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Transparency</div>
    <h2>Visible, not intrusive</h2>
    <p>
      Governance works like the lock icon on HTTPS — you know it's there, but it doesn't
      get in your way. Here's what you see at each level:
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>What you see</th><th>What's happening</th><th>When</th></tr>
      </thead>
      <tbody>
        <tr><td>🟢 Green indicator</td><td>All panels passed</td><td>Always visible</td></tr>
        <tr><td>Plain-language message</td><td>"Your PR was approved" or "Security issue found"</td><td>When governance has a result</td></tr>
        <tr><td><code>/governance</code> command</td><td>Full details — all panels, findings, verdicts</td><td>Whenever you want to look</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">The Floor</div>
    <h2>Intent validation — always on</h2>
    <p>
      The governance engine is customizable — you can disable individual panels or replace
      the engine entirely. But the <strong>Athena intent loop</strong> always runs. It verifies
      that completed work matches the original request, preventing issues from being closed
      with incomplete or stub implementations.
    </p>
    <p>
      This is the non-removable floor. You can change <em>how much</em> governance runs.
      You cannot have <em>zero</em> governance.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Configuration</div>
    <h2>Customize to your needs</h2>
    <p>
      Configure governance in your project settings. Enable or disable panels,
      choose your governance depth, or bring your own engine.
    </p>
    <pre><code class="language-yaml">governance:
  engine: "default"          # "default" | "minimal" | "custom"
  panels:
    security: true
    architecture: true
    documentation: false     # disable individual panels</code></pre>
    <p style="text-align:center; margin-top:1.5rem;">
      <a href="{{ '/apis' | relative_url }}">See the APIS standard for issue specification &rarr;</a>
    </p>
  </div>
</section>
