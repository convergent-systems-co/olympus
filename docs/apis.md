---
layout: default
title: APIS — AI-Proof Issue Spec
description: The Olympus standard for writing issues that cannot be falsely closed by AI agents.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Standard · Issue Specification</div>
  <h1>APIS — AI-Proof Issue Spec</h1>
  <p class="hero-sub">
    Every issue in an Olympus-governed repository follows this format. APIS ensures that
    AI coding agents cannot falsely close issues with stub implementations, dead code,
    or work that compiles but doesn't function.
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Problem</div>
    <h2>Why APIS exists</h2>
    <p>
      AI coding agents close issues when they believe the work is done. Without structured
      verification, agents can:
    </p>
    <ul>
      <li>Commit stub implementations (<code>TODO</code>, <code>not implemented</code>, empty structs)</li>
      <li>Close issues after writing code that compiles but doesn't actually work</li>
      <li>Skip integration — module exists but nothing imports it</li>
      <li>Satisfy the letter of a requirement while missing the intent</li>
    </ul>
    <p>
      APIS prevents this by requiring <strong>runnable verification commands</strong> that prove
      completion and <strong>anti-patterns</strong> that catch common failure modes.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Format</div>
    <h2>Required sections</h2>

    <table class="provider-table">
      <thead>
        <tr><th>Section</th><th>Purpose</th><th>Required</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Summary</strong></td><td>What and why, with module icon</td><td>✅</td></tr>
        <tr><td><strong>What exists today</strong></td><td>Current state — file paths, function names, line counts</td><td>✅</td></tr>
        <tr><td><strong>What needs to happen</strong></td><td>Numbered concrete steps, independently verifiable</td><td>✅</td></tr>
        <tr><td><strong>Verification</strong></td><td>Runnable shell commands with expected output</td><td>✅</td></tr>
        <tr><td><strong>Anti-patterns</strong></td><td>What the implementation must NOT do</td><td>✅</td></tr>
        <tr><td><strong>Closure policy</strong></td><td>Standard Athena validation line</td><td>✅</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Summary</div>
    <h2>1. Summary</h2>
    <p>
      What needs to happen and why. Include the module icon if a specific module
      is affected:
    </p>
    <pre><code>⚡(Zeus): Master orchestrator issue
🦉(Athena): Reasoning / intent validation issue
🛡️(Aegis): Security guardrails issue
🔨(Hephaestus): Code generation / forge issue
👁️(Argus): Observability / monitoring issue
🌈(Iris): External routing issue
🧠(Mnemosyne): Memory / persistence issue
🐕(Cerberus): Access control / cost gate issue
🔗(Hermes): Internal bus issue
🧩(Epimetheus): Post-execution analysis issue</code></pre>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Current State</div>
    <h2>2. What exists today</h2>
    <p>
      Describe the current state. Be specific — file paths, function names, line counts.
      An agent reading this section should understand exactly what code is there and what's missing.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Requirements</div>
    <h2>3. What needs to happen</h2>
    <p>
      Numbered list of concrete steps. Each step should be independently verifiable.
      No ambiguity — an agent reading this list should know exactly what to build.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Verification</div>
    <h2>4. Verification commands</h2>
    <p>
      <strong>Runnable shell commands</strong> with expected output. These are the acceptance
      criteria. The agent must paste the output of these commands in the PR to prove completion.
    </p>
    <pre><code class="language-bash"># Description of what this checks
command_to_run
# Expected output or pattern</code></pre>

    <h3>Rules for verification commands</h3>
    <ul>
      <li>Must be runnable from the repository root</li>
      <li>Must produce deterministic output</li>
      <li>Must check behavior, not just existence</li>
      <li>Must cover the critical path (not just happy path)</li>
      <li>At least 2 verification commands per issue</li>
    </ul>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Anti-patterns</div>
    <h2>5. Anti-patterns</h2>
    <p>
      Things the implementation must NOT do. Common anti-patterns to check for:
    </p>
    <ul>
      <li>Hardcoding values that should be configurable</li>
      <li>Writing code that compiles but is never called (dead code)</li>
      <li>Skipping error handling</li>
      <li>Using <code>TODO</code> or <code>FIXME</code> as implementation</li>
      <li>Modifying files the issue doesn't cover</li>
      <li>Deleting tests instead of fixing them</li>
    </ul>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Closure</div>
    <h2>6. Closure policy</h2>
    <p>Every issue ends with the standard closure line:</p>
    <pre><code>PR must include pasted output of all verification commands passing.
Athena validates intent match before merge.</code></pre>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Enforcement</div>
    <h2>Athena enforcement</h2>
    <p>
      🦉 Athena enforces APIS at two points in the intent loop:
    </p>

    <h3>Intake (TranslateIntent)</h3>
    <p>
      When a new issue is created or triaged, Athena checks for the required sections.
      Issues missing verification commands receive <code>status/needs-refinement</code>
      and are blocked from dispatch.
    </p>

    <h3>Acceptance (ValidateCompletion)</h3>
    <p>Before any PR merges or issue closes, Athena:</p>
    <ol>
      <li>Reads the verification commands from the issue</li>
      <li>Checks that the PR includes pasted output for each command</li>
      <li>Runs stub detection on the diff (TODO, placeholder, not implemented)</li>
      <li>Compares the diff against anti-patterns</li>
      <li>Emits <code>INTENT_MATCHED</code>, <code>PARTIAL</code>, or <code>NOT_MATCHED</code></li>
    </ol>
    <p>Only <code>INTENT_MATCHED</code> allows closure.</p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Example</div>
    <h2>Full example</h2>
    <pre><code class="language-markdown">## Summary

🛡️(Aegis): The `rbac` package is fully implemented but not wired into
`olympus init`. CODEOWNERS generation is dead code.

## What exists today

- `src/internal/rbac/codeowners.go` (217 lines) — complete implementation
- `rbac.WriteCodeowners()`, `rbac.GenerateSection()`, `rbac.MergeIntoCodeowners()`
- Zero imports — nothing calls this code

## What needs to happen

1. In the `olympus init` command, call `rbac.WriteCodeowners(repoRoot, cfg)`
2. Make admin team configurable via `project.yaml`
3. Print which paths were added during init

## Verification

```bash
# rbac is imported by the init command
grep -r "internal/rbac" src/cmd/ --include="*.go" | grep -v _test
# Should return at least 1 match

# Generated CODEOWNERS contains the managed section
grep "BEGIN olympus-governance RBAC" CODEOWNERS
# Should match
```

## Anti-patterns

- ❌ Calling WriteCodeowners without checking if RBAC is enabled
- ❌ Overwriting user's existing CODEOWNERS entries outside managed section
- ❌ Silently skipping generation without logging why

## Closure policy

PR must include pasted output of all verification commands passing.
Athena validates intent match before merge.</code></pre>
  </div>
</section>
