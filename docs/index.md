---
layout: default
title: The AI Developer Operating System
description: Olympus is a governed, self-healing AI operating system for developers. It orchestrates multiple AI models, enforces code quality transparently, survives crashes, and remembers everything — so you can just code.
---

<section class="hero">
  <div class="hero-badge">Local-First &middot; Self-Healing &middot; AI Developer OS</div>
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
    <a class="btn btn-secondary" href="https://github.com/convergent-systems-co/olympus">View on GitHub</a>
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
      <div class="stat-value">10</div>
      <div class="stat-label">Intelligent modules working for you</div>
    </div>
    <div>
      <div class="stat-value">&infin;</div>
      <div class="stat-label">Sessions survived across crashes</div>
    </div>
  </div>
</div>

<!-- ───────────────── WHAT IS OLYMPUS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">What is Olympus?</div>
    <h2>An AI system that works <em>with</em> you, not just <em>for</em> you</h2>
    <p>
      Most AI coding tools are stateless — they answer a question and forget you exist.
      Olympus is different. It's a persistent, living system that remembers your project,
      understands your intent, governs code quality behind the scenes, and picks up exactly
      where it left off — even after a crash.
    </p>

    <div class="cards">
      <div class="card">
        <div class="card-icon">🛡</div>
        <div class="tag tag-blue">Transparent</div>
        <h3>Built-in quality governance</h3>
        <p>
          Behind the scenes, Olympus reviews your code for security, architecture, and
          correctness — like having a senior team watching every PR. You see a green
          status indicator, not the internals. Like the lock icon on HTTPS.
        </p>
      </div>
      <div class="card">
        <div class="card-icon">⚡</div>
        <div class="tag tag-green">Always alive</div>
        <h3>Survives everything</h3>
        <p>
          Close your laptop. Kill the process. Run out of context. Olympus remembers
          what it was doing and picks up seamlessly. "Yesterday you were working on the
          auth refactor. Status: PR created, awaiting CI."
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ───────────────── WHY OLYMPUS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Why Olympus?</div>
    <h2>The problems Olympus solves</h2>

    <div class="cards">
      <div class="card">
        <div class="card-icon">🚫</div>
        <h3>AI agents close issues without finishing the work</h3>
        <p>Olympus validates that completed work actually matches your original intent. Stub implementations, dead code, and half-done PRs are caught and rejected automatically.</p>
      </div>
      <div class="card">
        <div class="card-icon">💸</div>
        <h3>Cloud AI costs spiral out of control</h3>
        <p>Olympus routes to local models first — free and under 200ms. Cloud providers are only used when necessary, and you're always asked before spending money.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔄</div>
        <h3>Every session starts from scratch</h3>
        <p>Olympus remembers everything — your preferences, past decisions, what you were working on last week. No more re-explaining context to your AI tools.</p>
      </div>
      <div class="card">
        <div class="card-icon">🤷</div>
        <h3>No visibility into what the AI is doing</h3>
        <p>Olympus governs transparently. Security reviews, architecture checks, and intent validation happen automatically — and you can inspect every detail on demand.</p>
      </div>
    </div>
  </div>
</section>

<!-- ───────────────── HOW IT WORKS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">How it works</div>
    <h2>Two loops running simultaneously</h2>
    <p>
      Olympus runs two concurrent loops that work together to give you a seamless experience.
    </p>

    <div class="cards">
      <div class="card">
        <div class="card-icon">🛡</div>
        <div class="tag tag-blue">Loop 1 — Governance</div>
        <h3>Quality enforcement behind the scenes</h3>
        <p>
          While you code, Olympus runs security scans, architecture reviews, and intent
          validation in the background. When everything passes, you see a green indicator.
          When something needs attention, you get a plain-language explanation — not a stack trace.
        </p>
      </div>
      <div class="card">
        <div class="card-icon">⚡</div>
        <div class="tag tag-green">Loop 2 — Persistence</div>
        <h3>Crash recovery and memory</h3>
        <p>
          Every action is checkpointed. If the process dies — whether from Ctrl-C, a crash,
          or context exhaustion — the next session resumes exactly where you left off.
          Olympus remembers your project history, preferences, and in-progress work across sessions.
        </p>
      </div>
    </div>

    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/architecture' | relative_url }}">Learn more about the architecture &rarr;</a>
    </p>
  </div>
</section>

<!-- ───────────────── THE MODULES ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">The Modules</div>
    <h2>Specialized AI modules, each with one job</h2>
    <p>
      Olympus is built from specialized modules — each named after a figure from Greek mythology.
      Every module has a single responsibility and communicates through a secure internal bus.
      Think of them as a team of specialists, each handling what they're best at.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Module</th><th>Role</th><th>What it does for you</th></tr>
      </thead>
      <tbody>
        <tr><td>⚡ <strong>Zeus</strong></td><td>Coordinator</td><td>Manages your session, delegates tasks to the right modules, and keeps everything in sync</td></tr>
        <tr><td>🦉 <strong>Athena</strong></td><td>Intent &amp; Validation</td><td>Understands what you mean, creates concrete specs, and verifies the work actually matches your request</td></tr>
        <tr><td>🌈 <strong>Iris</strong></td><td>AI Model Routing</td><td>Picks the best AI model for each task — local models first, cloud only when needed</td></tr>
        <tr><td>🔗 <strong>Hermes</strong></td><td>Internal Communication</td><td>Securely connects all modules so they can work together without conflicts</td></tr>
        <tr><td>🔨 <strong>Hephaestus</strong></td><td>Code &amp; Files</td><td>Handles code generation, branch management, conflict resolution, and file operations</td></tr>
        <tr><td>👁️ <strong>Argus</strong></td><td>Monitoring</td><td>Tracks costs, watches CI pipelines, and detects flaky tests — reports everything, never interferes</td></tr>
        <tr><td>🛡️ <strong>Aegis</strong></td><td>Security &amp; Governance</td><td>Scans for vulnerabilities, detects secrets in code, runs governance reviews, and maintains audit trails</td></tr>
        <tr><td>🐕 <strong>Cerberus</strong></td><td>Cost Protection</td><td>Guards against unexpected spending — pauses and asks you before using paid cloud models</td></tr>
        <tr><td>🧠 <strong>Mnemosyne</strong></td><td>Memory</td><td>Remembers everything across sessions — your preferences, decisions, and work-in-progress</td></tr>
        <tr><td>🧩 <strong>Epimetheus</strong></td><td>Learning</td><td>Analyzes past outcomes so Olympus gets smarter over time and avoids repeating mistakes</td></tr>
      </tbody>
    </table>

    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/pantheon' | relative_url }}">Explore all modules in detail &rarr;</a>
    </p>
  </div>
</section>

<!-- ───────────────── INTENT VALIDATION ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Intent Validation</div>
    <h2>🦉 Athena — making sure the work is actually done</h2>
    <p>
      The biggest problem with AI coding agents is that they close issues without truly
      completing the work. Athena solves this with a four-step intent loop that ensures
      every piece of work matches what you actually asked for.
    </p>

<div class="mermaid">
flowchart LR
    subgraph Translate["1. Understand"]
        HI["Your request"]
        CS["Concrete spec"]
    end

    subgraph Gate["2. Verify spec"]
        GC["Has test\ncriteria?"]
        GR["Pass / Block"]
    end

    subgraph Execute["3. Do the work"]
        EX["Code changes"]
        EV["Evidence"]
    end

    subgraph Validate["4. Validate"]
        VC["Matches intent?"]
        VR["MATCHED / PARTIAL\n/ NOT MATCHED"]
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
      Only work that fully matches your original intent gets merged. Partial implementations,
      stub code, and TODO-as-implementation are automatically caught and rejected.
    </p>
  </div>
</section>

<!-- ───────────────── SMART ROUTING ───────────────── -->

<section class="flow-section">
  <div class="section-inner">
    <div class="section-label">Smart Routing</div>
    <h2>🌈 Local first. Cloud only when needed.</h2>
    <p>
      Every request flows through an intelligent routing waterfall. Olympus uses local
      models whenever possible — they're free and fast. Cloud providers only activate when
      the task genuinely requires more capability.
    </p>

<div class="mermaid">
flowchart TD
    Q([Your request]) --> O

    O["1 &middot; Local Model\n(free &middot; &lt;200ms)"]
    O -->|available| OR([Response  &middot;  free])
    O -->|unavailable| CP

    CP["2 &middot; Subscription Provider\n(no per-token cost)"]
    CP -->|available| CPR([Response  &middot;  subscription])
    CP -->|unavailable| GH

    GH["3 &middot; Subscription Fallback\n(no per-token cost)"]
    GH -->|available| GHR([Response  &middot;  subscription])
    GH -->|unavailable| CA

    CA["4 &middot; Pay-per-token API\n⚠ last resort"]
    CA -->|available| CAR([Response  &middot;  cost warning])
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
        <h3>~70% savings</h3>
        <p>Context compression reduces cloud token usage dramatically</p>
      </div>
      <div class="card">
        <div class="tag tag-green">20 turns</div>
        <h3>~85% savings</h3>
        <p>Longer sessions see even greater cost reduction</p>
      </div>
      <div class="card">
        <div class="tag tag-green">40 turns</div>
        <h3>~91% savings</h3>
        <p>Extended work sessions with minimal cloud cost</p>
      </div>
    </div>

    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/hermes' | relative_url }}">See how routing decisions work &rarr;</a>
    </p>
  </div>
</section>

<!-- ───────────────── SELF-HEALING ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Self-Healing</div>
    <h2>Fixes problems before you even notice them</h2>
    <p>
      When Olympus hits a blocker — a merge conflict, a failing test, a missing dependency —
      it tries to fix it automatically. You're only asked for help as a last resort.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Step</th><th>What happens</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>1. Self-resolve</strong></td><td>Fixes it directly</td><td>Rebases a branch, resolves a merge conflict, installs a missing dependency</td></tr>
        <tr><td><strong>2. Retry with context</strong></td><td>Retries with error details</td><td>Re-runs with the failure output as additional context</td></tr>
        <tr><td><strong>3. Reduce scope</strong></td><td>Delivers what it can</td><td>Skips a conflicting file, merges the clean parts</td></tr>
        <tr><td><strong>4. Ask you</strong></td><td>Escalates with full details</td><td>Explains exactly what was tried and why it failed</td></tr>
      </tbody>
    </table>

    <h3 style="margin-top:2rem;">🐕 Cost-aware self-healing</h3>
    <p>
      If local models are unavailable and fixing a problem would require a paid cloud model,
      Olympus pauses and gives you options:
    </p>
    <div class="hero-terminal" style="margin-top:1rem;">
      <span class="cmt">🐕(Cerberus): Local models not available. Self-healing requires a cloud model.</span><br>
      <span class="cmt">  1. Start local models — free</span><br>
      <span class="cmt">  2. Wait — Olympus retries when local models are available</span><br>
      <span class="cmt">  3. Use cloud — proceed with cloud model (costs money)</span><br>
      <span class="cmt">  4. Skip — resolve manually</span>
    </div>
  </div>
</section>

<!-- ───────────────── MEMORY ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Memory</div>
    <h2>🧠 Olympus remembers everything</h2>
    <p>
      Unlike other AI tools that start fresh every session, Olympus has persistent memory.
      It remembers your project context, decisions, and preferences — and uses them to
      give you better results over time.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>Scenario</th><th>What Olympus does</th></tr>
      </thead>
      <tbody>
        <tr><td>Context window fills up</td><td>Auto-checkpoints and continues seamlessly in a new session</td></tr>
        <tr><td>You hit Ctrl-C</td><td>Next startup: "You had work in progress on X. Continue?"</td></tr>
        <tr><td>You close your laptop and open it tomorrow</td><td>"Yesterday you were working on X. Status: PR created, awaiting CI."</td></tr>
        <tr><td>You switch to a different machine</td><td>Full context restored from encrypted cloud backup (Pro plan)</td></tr>
        <tr><td>You ask "what happened last week?"</td><td>Full recall of intents, decisions, and outcomes</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ───────────────── GOVERNANCE ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Governance</div>
    <h2>🛡️ Transparent quality assurance</h2>
    <p>
      Olympus governs code quality like HTTPS protects your browser — you know it's there,
      but you don't see the handshake. Six review panels run automatically on every PR,
      covering security, architecture, documentation, cost, and more.
    </p>

    <table class="provider-table">
      <thead>
        <tr><th>What you see</th><th>What's happening</th></tr>
      </thead>
      <tbody>
        <tr><td>🟢 Green indicator</td><td>All governance panels passed — your code is clean and secure</td></tr>
        <tr><td>🟡 Yellow indicator</td><td>Minor findings — non-blocking suggestions for improvement</td></tr>
        <tr><td>🔴 Red indicator</td><td>Something needs attention — plain-language explanation provided</td></tr>
        <tr><td><code>/governance</code> command</td><td>Full details on demand — every panel verdict, finding, and recommendation</td></tr>
      </tbody>
    </table>

    <p style="text-align:center; margin-top:1rem;">
      <a href="{{ '/governance' | relative_url }}">Learn about the governance pipeline &rarr;</a>
    </p>
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
        <div class="tag tag-green">Free &middot; &lt;200ms</div>
        <h3>Local-first AI routing</h3>
        <p>Local models handle everything by default. Cloud providers only activate when the task genuinely requires more capability.</p>
      </div>
      <div class="card">
        <div class="card-icon">🗜</div>
        <div class="tag tag-green">85% token savings</div>
        <h3>Smart context compression</h3>
        <p>When cloud models are needed, Olympus compresses context automatically — cutting token costs by up to 91%.</p>
      </div>
      <div class="card">
        <div class="card-icon">🦉</div>
        <div class="tag tag-blue">Intent validation</div>
        <h3>Work verification</h3>
        <p>Every piece of work is verified against your original request. No more stub implementations or issues closed without real completion.</p>
      </div>
      <div class="card">
        <div class="card-icon">🛡</div>
        <div class="tag tag-blue">Automated</div>
        <h3>Security &amp; quality reviews</h3>
        <p>Six governance panels review every PR — security, architecture, documentation, cost, threat modeling, and data governance.</p>
      </div>
      <div class="card">
        <div class="card-icon">🧠</div>
        <div class="tag tag-yellow">Persistent</div>
        <h3>Cross-session memory</h3>
        <p>Olympus remembers everything — your intents, decisions, preferences, and file changes. Survives crashes, context exhaustion, and restarts.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔨</div>
        <div class="tag tag-purple">Automatic</div>
        <h3>Self-healing</h3>
        <p>Git conflicts, test failures, missing dependencies — Olympus fixes them before you notice. You're only asked as a last resort.</p>
      </div>
    </div>
  </div>
</section>

<!-- ───────────────── PROVIDERS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">AI Providers</div>
    <h2>Works with the models you already use</h2>
    <p>Olympus supports multiple AI providers out of the box. Configure them with <code>olympus configure</code>, or add any compatible API as a plugin.</p>

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
          <td>1 &middot; Primary</td>
          <td>Local model (on your machine)</td>
          <td><span class="badge badge-free">Free</span></td>
          <td>Everything. Default for all queries.</td>
        </tr>
        <tr class="priority-2">
          <td>2 &middot; Cloud fallback</td>
          <td>Subscription provider</td>
          <td><span class="badge badge-sub">Subscription</span></td>
          <td>Reasoning, long context, complex code</td>
        </tr>
        <tr class="priority-3">
          <td>3 &middot; Cloud fallback</td>
          <td>Secondary subscription provider</td>
          <td><span class="badge badge-sub">Subscription</span></td>
          <td>Code generation, diffs</td>
        </tr>
        <tr class="priority-4">
          <td>4 &middot; Last resort</td>
          <td>Pay-per-token API</td>
          <td><span class="badge badge-paid">Per token ⚠</span></td>
          <td>Fallback only — cost warning shown</td>
        </tr>
        <tr>
          <td>5 &middot; Plugin</td>
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
    <h2>Get started in a few minutes</h2>

    <pre><code class="language-bash"># Install via Homebrew
brew install convergent-systems-co/tap/olympus

# Pull a local model for free routing (optional but recommended)
ollama pull llama3

# Configure cloud providers (optional — local models work without any)
olympus configure

# Start Olympus
olympus</code></pre>

    <h3 style="margin-top:2rem;">What you can do</h3>
    <pre><code class="language-bash"># Just tell Olympus what you need in plain language
olympus&gt; fix the null pointer in auth_service.go
olympus&gt; explain the token bucket algorithm
olympus&gt; review the payment processing module
olympus&gt; refactor the database connection pool
olympus&gt; write tests for UserService.CreateAccount

# Or use slash commands for specific actions
/diff       # review staged git changes
/security   # security-focused code review
/governance # full governance details</code></pre>
  </div>
</section>

<!-- ───────────────── STATUS LABELS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Understanding the UI</div>
    <h2>What the labels and indicators mean</h2>
    <p>
      Olympus uses color-coded labels and module icons throughout its interface to
      keep you informed without being intrusive.
    </p>

    <h3>Status indicators</h3>
    <table class="provider-table">
      <thead>
        <tr><th>Indicator</th><th>Meaning</th></tr>
      </thead>
      <tbody>
        <tr><td>🟢 <strong>Healthy</strong></td><td>Everything is running smoothly — all governance checks passing, no blockers</td></tr>
        <tr><td>🟡 <strong>Attention</strong></td><td>Non-blocking findings — suggestions for improvement, advisory notes</td></tr>
        <tr><td>🔴 <strong>Blocked</strong></td><td>Something needs your input — a security issue, a failed validation, or a cost decision</td></tr>
      </tbody>
    </table>

    <h3 style="margin-top: 2rem;">Module icons in output</h3>
    <p>
      When Olympus shows you a message, the icon and name tell you which module is talking:
    </p>
    <div class="hero-terminal">
      <span class="cmt">⚡(Zeus): Session resumed — picking up where you left off</span><br>
      <span class="cmt">🦉(Athena): Your request has been translated into 3 concrete specs</span><br>
      <span class="cmt">🛡️(Aegis): Security scan complete — no issues found</span><br>
      <span class="cmt">🌈(Iris): Routed to local model — free, &lt;200ms</span><br>
      <span class="cmt">🐕(Cerberus): Local models unavailable — waiting for you to decide</span><br>
      <span class="cmt">🧠(Mnemosyne): Checkpoint saved — safe to close</span>
    </div>

    <h3 style="margin-top: 2rem;">Governance verdict labels</h3>
    <table class="provider-table">
      <thead>
        <tr><th>Label</th><th>Meaning</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><code>[CRITICAL]</code></td><td>Security or correctness issue</td><td>Blocks merge — must fix</td></tr>
        <tr><td><code>[HIGH]</code></td><td>Significant production risk</td><td>Blocks merge — must fix</td></tr>
        <tr><td><code>[MEDIUM]</code></td><td>Notable gap</td><td>Non-blocking — should fix</td></tr>
        <tr><td><code>[LOW]</code></td><td>Minor improvement opportunity</td><td>Advisory — fix if convenient</td></tr>
        <tr><td><code>[INFO]</code></td><td>Informational observation</td><td>No action needed</td></tr>
      </tbody>
    </table>

    <h3 style="margin-top: 2rem;">Intent validation verdicts</h3>
    <table class="provider-table">
      <thead>
        <tr><th>Verdict</th><th>Meaning</th></tr>
      </thead>
      <tbody>
        <tr><td><code>INTENT_MATCHED</code></td><td>The work fully matches your original request — ready to merge</td></tr>
        <tr><td><code>PARTIAL</code></td><td>Some of the work is done, but there are gaps — Olympus tells you exactly what's missing</td></tr>
        <tr><td><code>NOT_MATCHED</code></td><td>The work doesn't match what you asked for — blocked with an explanation</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ───────────────── DOCS ───────────────── -->

<section>
  <div class="section-inner">
    <div class="section-label">Learn More</div>
    <h2>Deep dives</h2>

    <div class="cards">
      <div class="card">
        <h3><a href="{{ '/architecture' | relative_url }}">Architecture</a></h3>
        <p>How the two-loop system works, how modules communicate, and how Olympus boots up.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/pantheon' | relative_url }}">The Modules</a></h3>
        <p>Every module explained — what it does, why it exists, and how it helps you.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/governance' | relative_url }}">Governance</a></h3>
        <p>How automated review panels work — six perspectives checking every PR.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/apis' | relative_url }}">APIS Standard</a></h3>
        <p>The issue format that prevents AI agents from closing work prematurely.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/hermes' | relative_url }}">Smart Routing</a></h3>
        <p>How Olympus picks the right AI model for each task — local first, cloud as fallback.</p>
      </div>
      <div class="card">
        <h3><a href="{{ '/module-boundaries' | relative_url }}">Module Domains</a></h3>
        <p>How responsibilities are divided so every capability has exactly one owner.</p>
      </div>
    </div>
  </div>
</section>

<!-- ───────────────── PRICING ───────────────── -->

<section id="pricing">
  <div class="section-inner">
    <div class="section-label">Pricing</div>
    <h2>Free to start. Pay only for what you need.</h2>
    <p>
      The full Olympus experience — all modules, local-first routing, governance, memory,
      and self-healing — runs on your machine at no cost. Paid plans add cloud sync,
      analytics, and team features.
    </p>

    <div class="cards">
      <div class="card">
        <div class="tag tag-green">Available now</div>
        <h3>Free</h3>
        <p style="font-size: 1.5rem; font-weight: bold; margin: 0.5rem 0;">$0</p>
        <ul style="text-align: left; padding-left: 1.2rem;">
          <li>All modules included</li>
          <li>Local-first AI model routing</li>
          <li>Full governance pipeline</li>
          <li>Intent validation (Athena)</li>
          <li>Self-healing</li>
          <li>Cross-session memory (local)</li>
          <li>APIS enforcement</li>
        </ul>
      </div>
      <div class="card">
        <div class="tag tag-blue">Coming soon</div>
        <h3>Pro</h3>
        <p style="font-size: 1.5rem; font-weight: bold; margin: 0.5rem 0;">$12–19/mo</p>
        <ul style="text-align: left; padding-left: 1.2rem;">
          <li>Everything in Free</li>
          <li>Encrypted cloud sync</li>
          <li>Advanced analytics</li>
          <li>Priority model routing</li>
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
          <li>Shared governance policies</li>
          <li>Team-wide memory</li>
          <li>Per-developer cost budgets</li>
          <li>Team usage analytics</li>
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
      capable model — you save money even with the margin. Stop managing multiple API
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
        <div class="tag tag-blue">Next</div>
        <h3>Encrypted cloud sync</h3>
        <p>Sync your Olympus memory across machines. Encrypted before upload. Multi-machine support for ~$0.50/mo.</p>
      </div>
      <div class="card">
        <div class="tag tag-blue">Next</div>
        <h3>Advanced analytics</h3>
        <p>Deep insights into your AI usage — cost breakdowns, model performance, and optimization recommendations.</p>
      </div>
      <div class="card">
        <div class="tag tag-purple">Future</div>
        <h3>Team collaboration</h3>
        <p>Real-time sync across team members. Shared governance policies. Per-developer budgets and analytics.</p>
      </div>
    </div>
  </div>
</section>
