---
layout: default
title: APIS — AI-Proof Issue Spec
description: The issue format that prevents AI agents from closing work with stub implementations, dead code, or incomplete results.
---

<section class="hero" style="padding: 3rem 0 2rem;">
  <div class="hero-badge">Standard</div>
  <h1>APIS — AI-Proof Issue Spec</h1>
  <p class="hero-sub">
    APIS is Olympus's standard for writing issues that AI agents can't game.
    Every issue includes verification criteria and anti-patterns, so completed work
    is provably done — not just "looks done."
  </p>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">The Problem</div>
    <h2>Why APIS exists</h2>
    <p>
      AI coding agents close issues when they believe the work is done. Without structured
      verification, they can:
    </p>
    <ul>
      <li>Commit placeholder code (TODO, "not implemented", empty functions)</li>
      <li>Close issues with code that compiles but doesn't actually work</li>
      <li>Write modules that nothing uses — technically "done" but not integrated</li>
      <li>Satisfy the letter of a requirement while missing the intent</li>
    </ul>
    <p>
      APIS prevents all of this by requiring <strong>runnable verification criteria</strong> that
      prove completion and <strong>anti-patterns</strong> that catch common failure modes.
    </p>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">The Format</div>
    <h2>What every issue includes</h2>

    <table class="provider-table">
      <thead>
        <tr><th>Section</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Summary</strong></td><td>What needs to happen and why — with a Pantheon Module icon if a specific Pantheon Module is affected</td></tr>
        <tr><td><strong>Current state</strong></td><td>What exists today — specific file paths, function names, and what's missing</td></tr>
        <tr><td><strong>Requirements</strong></td><td>Numbered concrete steps, each independently verifiable — no ambiguity</td></tr>
        <tr><td><strong>Verification</strong></td><td>Runnable commands with expected output — the acceptance criteria</td></tr>
        <tr><td><strong>Anti-patterns</strong></td><td>What the implementation must NOT do — catches hardcoding, dead code, skipped error handling</td></tr>
        <tr><td><strong>Closure policy</strong></td><td>Athena validates intent match before merge — only <code>INTENT_MATCHED</code> allows closure</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Verification</div>
    <h2>Proving the work is done</h2>
    <p>
      Every APIS issue includes runnable commands that prove completion. The AI agent must
      run these commands and paste the output in the PR. This is what separates "it compiles"
      from "it works."
    </p>

    <h3>Rules for verification</h3>
    <ul>
      <li>Must be runnable from the project root</li>
      <li>Must produce deterministic output</li>
      <li>Must check behavior, not just existence</li>
      <li>Must cover the critical path (not just the happy path)</li>
      <li>At least 2 verification commands per issue</li>
    </ul>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Anti-patterns</div>
    <h2>Catching common AI failure modes</h2>
    <p>
      Every issue explicitly lists what the implementation must NOT do. This catches the most
      common ways AI agents produce work that looks complete but isn't:
    </p>
    <ul>
      <li>Hardcoding values that should be configurable</li>
      <li>Writing code that compiles but is never called (dead code)</li>
      <li>Skipping error handling</li>
      <li>Using TODO or FIXME as implementation</li>
      <li>Modifying files the issue doesn't cover</li>
      <li>Deleting tests instead of fixing them</li>
    </ul>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Enforcement</div>
    <h2>How Athena enforces APIS</h2>
    <p>
      Athena checks APIS compliance at two points:
    </p>

    <div class="cards">
      <div class="card">
        <div class="tag tag-blue">Before work begins</div>
        <h3>Issue validation</h3>
        <p>Issues missing verification commands or anti-patterns are flagged and blocked from being worked on until they're complete.</p>
      </div>
      <div class="card">
        <div class="tag tag-green">Before merge</div>
        <h3>Completion validation</h3>
        <p>Athena reads the PR diff, checks for stub code, runs anti-pattern detection, and verifies the work matches the original intent. Only <code>INTENT_MATCHED</code> allows closure.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="section-inner">
    <div class="section-label">Example</div>
    <h2>What an APIS issue looks like</h2>
    <pre><code class="language-markdown">## Summary

🛡️(Aegis): The RBAC package is fully implemented but not wired
into the init command. CODEOWNERS generation is dead code.

## What exists today

- `src/internal/rbac/codeowners.go` (217 lines) — complete implementation
- `WriteCodeowners()`, `GenerateSection()`, `MergeIntoCodeowners()`
- Zero imports — nothing calls this code

## What needs to happen

1. In the init command, call `rbac.WriteCodeowners(repoRoot, cfg)`
2. Make admin team configurable via project settings
3. Print which paths were added during init

## Verification

```bash
# RBAC is imported by the init command
grep -r "internal/rbac" src/cmd/ --include="*.go" | grep -v _test
# Should return at least 1 match

# Generated CODEOWNERS contains the managed section
grep "BEGIN olympus-governance RBAC" CODEOWNERS
# Should match
```

## Anti-patterns

- Do not call WriteCodeowners without checking if RBAC is enabled
- Do not overwrite user's existing CODEOWNERS entries
- Do not silently skip generation without logging why

## Closure policy

PR must include pasted output of all verification commands passing.
Athena validates intent match before merge.</code></pre>
  </div>
</section>
