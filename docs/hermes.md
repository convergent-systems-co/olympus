---
layout: default
title: Smart Routing
description: How Olympus picks the best AI model for every task — routing locally first, falling back to cloud only when needed, and always protecting you from unexpected costs.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Routing</div>
  <h1>Smart AI Model Routing</h1>
  <p class="hero-sub">
    Every AI request in Olympus flows through an intelligent routing system.
    It picks the best model based on what the task needs, how much it costs, and
    how fast it responds — always preferring local models first.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">How It Works</div>
    <h2>The routing decision tree</h2>
    <p>
      When you give Olympus a task, it doesn't just send it to the most powerful model.
      Instead, it evaluates the task's complexity and routes it to the most appropriate
      and cost-effective model available.
    </p>

<div class="mermaid">
flowchart TD
    A([Your request]) --> B{Offline mode?}
    B -->|yes| OL[Use local model]
    B -->|no| C{Simple enough\nfor local model?}
    C -->|yes + available| OL
    C -->|no| D{Summarization or\nembeddings task?}
    D -->|yes + available| OL
    D -->|no| E{Task-specific\nrouting configured?}
    E -->|yes| TR[Try configured route\nthen fallback]
    TR -->|found| R([Use selected model])
    TR -->|not found| F
    E -->|no| F[Try cloud providers\nin priority order]
    F --> G{Provider available\nwith needed capability?}
    G -->|yes| R
    G -->|exhausted| H[Try any available\nprovider]
    H -->|found| R
    H -->|none| NIL([Error — no providers available])

    style OL fill:#1a2e20,color:#A3BE8C,stroke:#A3BE8C
    style R  fill:#1a2535,color:#88C0D0,stroke:#88C0D0
    style NIL fill:#3a2020,color:#BF616A,stroke:#BF616A
</div>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Local First</div>
    <h2>Why local models are preferred</h2>
    <p>
      By default, Olympus sends everything to your local model first. Local models are:
    </p>
    <div class="cards">
      <div class="card">
        <div class="tag tag-green">Free</div>
        <h3>No token costs</h3>
        <p>Local models run on your machine at zero cost. No API keys, no billing, no surprises.</p>
      </div>
      <div class="card">
        <div class="tag tag-green">Fast</div>
        <h3>Under 200ms</h3>
        <p>No network round-trip. Responses come back almost instantly.</p>
      </div>
      <div class="card">
        <div class="tag tag-green">Private</div>
        <h3>Your data stays local</h3>
        <p>Nothing leaves your machine unless you explicitly configure cloud providers.</p>
      </div>
    </div>
    <p>
      You control how aggressive the local bias is. By default, everything goes local when
      a model is available. You can tune this so only simple tasks stay local while complex
      ones go to cloud.
    </p>
    <pre><code class="language-yaml"># ~/.olympus/config.yaml
routing:
  local_first: true       # prefer local models (default)
  local_threshold: 1.0    # 1.0 = everything local, 0.7 = only simple tasks</code></pre>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Task-Aware</div>
    <h2>Different tasks, different models</h2>
    <p>
      Olympus automatically classifies your request and can route different task types
      to different models. Code generation goes to code-optimized models. Deep reasoning
      goes to reasoning-optimized models.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Task type</th><th>Example requests</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Code generation</strong></td><td>"implement a cache layer", "fix this bug", "write a function that..."</td></tr>
        <tr><td><strong>Deep reasoning</strong></td><td>"explain this architecture", "analyze the tradeoffs", "design a system for..."</td></tr>
        <tr><td><strong>Automation</strong></td><td>"automate this pipeline", "set up a workflow", "schedule a batch job"</td></tr>
        <tr><td><strong>Summarization</strong></td><td>Context compression, conversation summaries — always routed locally</td></tr>
      </tbody>
    </table>

    <p>You can configure exactly which models handle which task types:</p>
    <pre><code class="language-yaml"># ~/.olympus/config.yaml
routing:
  task_routes:
    deep_reasoning:
      primary: subscription_provider
      fallback: fallback_provider
    code_generation:
      primary: local_model
      fallback: subscription_provider</code></pre>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Provider Waterfall</div>
    <h2>The four-level fallback</h2>
    <p>
      When the preferred model isn't available, Olympus falls through a priority chain.
      You're always warned before using a paid provider.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Priority</th><th>Type</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Local model</strong></td>
          <td>Runs on your machine</td>
          <td><span class="badge badge-free">Free</span></td>
        </tr>
        <tr>
          <td><strong>2. Subscription provider</strong></td>
          <td>Your existing AI subscription</td>
          <td><span class="badge badge-sub">Subscription</span></td>
        </tr>
        <tr>
          <td><strong>3. Subscription fallback</strong></td>
          <td>Secondary subscription</td>
          <td><span class="badge badge-sub">Subscription</span></td>
        </tr>
        <tr>
          <td><strong>4. Pay-per-token API</strong></td>
          <td>Direct API access</td>
          <td><span class="badge badge-paid">Per token ⚠</span></td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Summarization and embeddings</strong> always route to local models regardless of
      other settings. These operations should never incur cloud costs.
    </p>
    <p>
      <strong>Offline mode</strong> bypasses the entire waterfall and uses only local models.
      Nothing leaves your machine.
    </p>
    <pre><code class="language-yaml"># Work completely offline
routing:
  offline_mode: true</code></pre>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Add Your Own</div>
    <h2>Plugin providers</h2>
    <p>
      Any AI provider with a compatible API can be added as a plugin. Olympus treats
      plugin providers the same as built-in ones — they participate in routing,
      fallback, and cost tracking.
    </p>
    <pre><code class="language-bash"># Add a custom provider
olympus providers add my-provider \
  --key sk_... \
  --model my-preferred-model \
  --base-url https://api.example.com/v1</code></pre>
  </div>
</section>
