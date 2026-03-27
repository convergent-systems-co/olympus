# ⚡ Olympus

**The AI Orchestration Layer for Developers**

Multi-model, local-first, governance built-in.

🌐 **[olympus.sh](https://olympus.sh)** — Documentation & product site

## Install

```bash
brew tap convergent-systems-co/tap
brew install olympus
```

## What is Olympus?

Olympus is a CLI-native AI orchestration layer that routes prompts through a local-first provider waterfall, enforces governance via automated review panels, and manages multi-model workflows — all from your terminal.

- **Local-first** — routes to local models by default, cloud only when needed
- **Multi-model** — seamless failover across providers with task-aware routing
- **Governance built-in** — automated code review, security review, threat modeling, and 20+ review panels
- **Agentic loop** — 8-phase autonomous development pipeline with plan→dispatch→review→merge

## Issue Intake

The public issue tracker in this repo is the external intake surface for Olympus.

- public reports and requests start here
- intake issues route inward to `convergent-systems-co/olympus-central` for system triage
- child repos receive linked execution issues only when internal ownership is clear
- internal Codex or Claude implementation issues do not auto-publish back into this public repo

## License

BSL-1.1 © [Convergent Systems](https://github.com/convergent-systems-co)
