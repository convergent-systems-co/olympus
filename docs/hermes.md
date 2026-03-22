---
layout: default
title: Hermes — Provider Router
description: How Hermes routes every prompt through the local-first waterfall, classifies task types, handles task-specific overrides, and falls back across providers.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Module Reference · Provider Router</div>
  <h1>Hermes — Provider Router</h1>
  <p class="hero-sub">
    Hermes is the capability-aware model router at the heart of Olympus. Every AI request
    flows through Hermes, which selects the optimal provider based on task complexity,
    capability requirements, and cost — routing locally first, falling back to cloud only
    when necessary.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Decision Tree</div>
    <h2>How Hermes picks a provider</h2>
    <p>
      <code>Hermes.Route(capability, prompt)</code> works through a prioritised decision tree.
      Every node is a real conditional in the source — this is not aspirational documentation.
    </p>

<div class="mermaid">
flowchart TD
    A([Route called]) --> B{offline_mode?}
    B -->|yes| OL[return local model]
    B -->|no| C{local_first AND\ncomplexity ≤ local_threshold?}
    C -->|yes + local model available| OL
    C -->|no| D{capability ==\nSummarization or Embeddings?}
    D -->|yes + local model available| OL
    D -->|no| E{task_routes configured\nAND prompt matches task type?}
    E -->|yes| TR[try primary route\nthen fallback route]
    TR -->|found| R([return provider])
    TR -->|not found| F
    E -->|no| F[iterate cloud_priority order]
    F --> G{provider available\nAND has capability?}
    G -->|yes| R
    G -->|exhausted| H[any available provider\nwith capability]
    H -->|found| R
    H -->|none| NIL([return nil — error shown])

    style OL fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style R  fill:#1a2535,color:#88C0D0,stroke:#88C0D0
    style NIL fill:#3a2020,color:#BF616A,stroke:#BF616A
</div>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Complexity Scoring</div>
    <h2>How local_threshold gates local model</h2>
    <p>
      When <code>local_first: true</code> (the default), Hermes calls
      <code>compression.ClassifyComplexity(prompt)</code> before attempting local model.
      The scorer is a pure-Go heuristic — no model call, zero latency.
    </p>
    <p>
      Signals the scorer uses: token count estimate, presence of code fences, multi-step
      instruction keywords (<em>explain, architect, design, compare, evaluate</em>), and length
      relative to a complexity band. Returns a float in <code>[0.0, 1.0]</code>.
    </p>
    <p>
      <code>local_threshold</code> controls how aggressive the local bias is:
    </p>
    <table class="provider-table">
      <thead>
        <tr><th>Value</th><th>Behaviour</th></tr>
      </thead>
      <tbody>
        <tr><td><code>1.0</code> (default)</td><td>Everything goes to local model when available — cloud is pure fallback</td></tr>
        <tr><td><code>0.7</code></td><td>Simple queries go local; high-complexity queries skip to cloud</td></tr>
        <tr><td><code>0.0</code></td><td>Disable local-first — every request goes to cloud priority order</td></tr>
      </tbody>
    </table>
    <pre><code class="language-yaml"># ~/.olympus/config.yaml
routing:
  local_first: true
  local_threshold: 1.0</code></pre>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Task Classification</div>
    <h2>Task-type routing overrides</h2>
    <p>
      When <code>task_routes</code> is configured, Hermes classifies each prompt into a task
      type via keyword matching in <code>ClassifyTaskType()</code>, then looks up a named
      primary/fallback route.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Task type</th><th>Trigger keywords (sample)</th></tr>
      </thead>
      <tbody>
        <tr><td><code>code_generation</code></td><td>implement, refactor, fix bug, write a function, add endpoint</td></tr>
        <tr><td><code>deep_reasoning</code></td><td>explain, analyze, architect, design a system, compare, evaluate</td></tr>
        <tr><td><code>automation_pipeline</code></td><td>automate, pipeline, schedule, workflow, cron, bulk, batch process</td></tr>
        <tr><td><code>batch_processing</code></td><td>batch processing, batch job, bulk run</td></tr>
        <tr><td><code>large_reasoning</code></td><td>configured route key only — no keyword classifier yet</td></tr>
      </tbody>
    </table>

    <pre><code class="language-yaml"># ~/.olympus/config.yaml
routing:
  task_routes:
    deep_reasoning:
      primary: subscription_provider
      fallback: fallback_provider
    code_generation:
      primary: ollama
      fallback: subscription_provider</code></pre>

    <p>
      Provider aliases resolve to the same underlying provider. Which variant is active depends
      on the configured authentication method (OAuth token vs API key).
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Special Cases</div>
    <h2>Summarization, Embeddings, and Fallback</h2>
    <p>
      <strong>Summarization and Embeddings</strong> capabilities always route to local model regardless
      of <code>local_first</code> or complexity settings. This is a hard-coded preference — these
      operations should never incur cloud token cost.
    </p>
    <p>
      <strong><code>Hermes.Fallback(current)</code></strong> returns the next provider after
      <code>current</code> in the cloud priority order. Zeus uses this when a provider call fails
      mid-stream, allowing automatic retry on the next tier without restarting the request.
    </p>
    <p>
      <strong>Offline mode</strong> (<code>routing.offline_mode: true</code>) bypasses the entire
      decision tree and returns local model directly. All other routing logic is skipped.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Provider Interface</div>
    <h2>What Hermes requires from providers</h2>
    <p>
      Every provider — built-in or plugin — must implement the <code>providers.Provider</code>
      interface. Hermes calls four methods on every candidate before routing:
    </p>

<div class="mermaid">
classDiagram
    class Provider {
        &lt;&lt;interface&gt;&gt;
        +Name() string
        +IsAvailable() bool
        +Capabilities() list
        +MaxContext() int
        +CostPerToken() float64
        +Generate(ctx, req) Response
    }

    class Hermes {
        +Route(cap, prompt) Provider
        +Fallback(current) Provider
        +Providers() list
        +ProviderOrder() list
        +IsPaidAPI(p) bool
    }

    Hermes --> Provider : selects
</div>

    <p>
      <code>IsAvailable()</code> is checked at call time, not cached. A provider that becomes
      unavailable mid-session (e.g. local model stops) is immediately bypassed to the next tier.
    </p>
  </div>
</section>
