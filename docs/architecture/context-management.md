# Context Management: JIT Persona Loading

## Overview

The Olympus agentic loop uses **Just-In-Time (JIT) persona loading** to minimize context window burn when dispatching agents. Instead of embedding the full persona document in every dispatch prompt, agents receive a compact summary (≤150 tokens) and a file path for on-demand full loading.

## Two-Tier Persona Loading

### Tier 1: Summary (Dispatch Prompt)

Every persona file contains a `## Summary` section at the top, before a `---` separator. This section is:

- **≤150 tokens** (~600 characters)
- Written for rapid comprehension: one sentence on role, one sentence on key constraints
- Sufficient for the agent to understand its responsibilities without reading the full spec

The summary is loaded via `embed.ReadPersonaSummary(name)`:

```go
summary, err := embed.ReadPersonaSummary("coder")
// Returns content before the first "---" separator
```

### Tier 2: Full Specification (On-Demand)

The full persona document is loaded only when the agent needs the complete role specification, using `embed.ReadPersonaFull(name)`:

```go
full, err := embed.ReadPersonaFull("coder")
// Returns entire persona file
```

The `persona_full_path` field in dispatch instructions tells the agent where to find the full spec if needed.

## Persona File Format

Each persona file follows this structure:

```markdown
<!-- jit-summary-205 -->
## Summary

**Role:** <one sentence describing role and when it runs>

**Key constraints:** <one sentence of hard rules>

---

# Persona: <Full Name>

<complete persona specification>
```

## Token Budget

| Component | Approx. Tokens |
|-----------|---------------|
| Summary section | ≤ 150 |
| Full persona | 800–2,500 |
| Token reduction | ~80–95% |

## Available Personas

| Name | File |
|------|------|
| `coder` | `coder.md` |
| `devops-engineer` | `devops-engineer.md` |
| `tech-lead` | `tech-lead.md` |
| `test-writer` | `test-writer.md` |
| `test-evaluator` | `test-evaluator.md` |
| `document-writer` | `document-writer.md` |
| `documentation-reviewer` | `documentation-reviewer.md` |
| `iac-engineer` | `iac-engineer.md` |
| `project-manager` | `project-manager.md` (deprecated) |

## Implementation

The JIT loading functions live in `src/internal/embed/embed.go`:

- `ReadPersonaSummary(name string) ([]byte, error)` — reads up to the first `---` separator (or first 150 lines)
- `ReadPersonaFull(name string) ([]byte, error)` — reads the entire file

## Related Issues

- **#205** — Initial implementation of JIT persona loading
