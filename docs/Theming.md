---
layout: default
title: Design System
description: Olympus visual design language — color palette, typography, icon concepts, and usage rules for the module theming system.
---

# Olympus Design System

## Design Language

**Industrial yet futuristic.** Strong, geometric vector icons. Dark backgrounds, high contrast, flat vector style. Clean and minimal — no gradients except where noted as premium accents.

**Icon style:** flat vector logo, geometric, scalable for UI usage, consistent lighting and perspective, dark background, no text (god name rendered below icon in UI).

---

## Color Palette

### Core Colors

| Name | Hex | Role |
|------|-----|------|
| Molten Orange | `#FF6A00` | Primary accent — energy, highlights, CTAs |
| Deep Electric Blue | `#0A3D62` | Primary base — identity, headers, nav |
| Dark Steel Gray | `#2F343A` | Surface / background — panels, containers |

### Blues (depth + layering)

| Name | Hex | Role |
|------|-----|------|
| Navy Depth | `#082C4A` | Background depth |
| Mid Blue | `#145DA0` | Interactive elements |
| Light Accent Blue | `#3FA7D6` | Hover states, highlights, digital overlays |

### Orange Variants (glow / heat)

| Name | Hex | Role |
|------|-----|------|
| Burnt Orange | `#CC5500` | Active / pressed state |
| Bright Highlight | `#FF8C1A` | Hover / emphasis |
| Soft Glow Tint | `#FFD2A6` | Subtle accents |

### Steel / Neutral System (structure)

| Name | Hex | Role |
|------|-----|------|
| Near-Black Steel | `#1F2328` | Main background |
| Card Background | `#3A4047` | Card / surface |
| Muted | `#6B7280` | Muted text, borders, disabled |
| Light Steel | `#D1D5DB` | Light text on dark |

---

## Usage Rules

### Backgrounds

| Layer | Color |
|-------|-------|
| Main | `#1F2328` |
| Surfaces / cards | `#2F343A` |
| Elevated panels | `#3A4047` |

### Primary Identity

Use Deep Blue (`#0A3D62`) for:
- Nav bars
- Headers
- Major UI anchors

### Accent / Action

Use Molten Orange (`#FF6A00`) **sparingly**:
- Buttons
- Key highlights
- Active states

> Rule: if everything is orange, nothing is.

### Interaction States

| State | Color |
|-------|-------|
| Hover | `#FF8C1A` or `#3FA7D6` |
| Active / pressed | `#CC5500` or `#082C4A` |

### Text

| Role | Color |
|------|-------|
| Primary | `#E5E7EB` |
| Secondary | `#9CA3AF` |
| Disabled | `#6B7280` |

---

## Visual Balance

Maintain this ratio across any screen or component:

- **70%** steel / dark neutrals
- **20%** blue
- **10%** orange

This keeps the UI modern (dark), controlled (blue structure), and energetic (orange punch).

---

## Premium Accent (optional)

For a high-end "AI control panel" feel, shift slightly and add a subtle gradient:

```
Blue:    #0B3556 (more muted)
Orange:  #E85D04 (slightly deeper)
Accent gradient: linear-gradient(135deg, #0A3D62, #1F2328)
```

---

## Icons — God Mapping

Each icon follows the god's mythological and functional nature, interpreted through a **digital / abstract lens**. Blue tones (`#3FA7D6`, `#145DA0`) are used for digital overlays and data-flow motifs. The god name renders as text **below** the icon in the UI (not embedded in the icon).

| God | Olympus Role | Icon Concept |
|-----|-------------|--------------|
| Zeus | Master orchestrator | Lightning bolt split into circuit traces — energy radiating outward |
| Hermes | Provider router | Winged caduceus abstracted as a forked data-path waterfall |
| Argus | Observability | Many-eyed geometric ring — each eye a sensor node on a circuit |
| Athena | Reasoning engine | Stylized owl silhouette — angular, aggressive geometry, minimal; blue neural-net overlay on wings |
| Hephaestus | Code generation + diff | Anvil abstracted as a diff bracket `< >` with a forge spark |
| Mnemosyne | Persistent memory | Layered concentric rings — memory stack, each ring a session |
| Aegis | Security guardrails | Shield with a fractured crack sealed by a lock glyph |
| Apollo | Evaluation + scoring | Target reticle with a score bar — precision measurement |
| Artemis | Resource optimization | Bow and arrow abstracted as a latency curve with a notched optimum |
| Hades | Long-term storage | Archival vault door — circle with a descending arrow, darkness gradient |
| Persephone | Data lifecycle | Two half-circles — one bright (active), one dimmed (decay), rotating |
| Demeter | Data ingestion | Funnel with structured rows flowing in at the top |
| Dionysus | Creative generation | Swirling abstract spiral — organic chaos within a geometric frame |
| Ares | Adversarial testing | Crossed swords abstracted as two intersecting signal waveforms |
| Nike | Success evaluation | Upward trajectory chevron with a checkmark terminal point |
| Prometheus | Static analysis | Eye above code brackets — introspection before fire |
| Epimetheus | Post-execution analysis | Magnifier over a log line — retrospective inspection |
| Atlas | Workload distribution | Globe abstracted as a cluster mesh — nodes and edges |
| Helios | Scheduling | Sun rays as a cron dial — radial time segments |
| Selene | Snapshots + rollback | Crescent with a rewind arc — phase / checkpoint |
| Metis | Strategy + planning | Nested hexagons — meta-reasoning layers |
| Themis | Policy enforcement | Scales as two equal circuit paths balancing |
| Hypnos | Background processing | Ellipsis `...` inside a moon — idle low-priority indicator |
| Morpheus | Simulation | Branching decision tree dissolving into abstract shapes |
| Iris | Output formatting | Prism splitting a beam into structured output channels |
| Echo | Logging + replay | Concentric sound waves as log rings — replay ripple |
| Eros | Personalization | Heart abstracted as two intersecting preference curves |
| Nemesis | Enforcement + anomaly | Broken chain link — anomaly response, hard stop |
| Tyche | Risk modeling | Probability distribution curve with a weighted fulcrum |
| Kratos | Execution authority | Gate / barrier with an authority stamp — allow / deny |
| Bia | Force execution | Bold upward arrow breaking through a barrier layer |
| **Olympus** | Platform logo | Mountaintop abstracted as a geometric peak with a circuit-trace summit and Molten Orange lightning strike |

---

## Image Generation Prompt Template

Use this base prompt for any image generation tool (Midjourney, DALL-E, Firefly):

```
[ICON CONCEPT], flat vector logo style, geometric, dark background #1F2328,
Deep Electric Blue #0A3D62 primary, Molten Orange #FF6A00 accent,
Light Accent Blue #3FA7D6 digital overlay, high contrast, minimal,
scalable UI icon, no text, industrial futuristic, clean edges
```

Replace `[ICON CONCEPT]` with the description from the table above.

**Athena-specific note:** The owl must be angular and abstract — not cartoonish. Use sharp geometric facets for the feathers, aggressive forward-facing posture, and a blue neural-net overlay on the wings to reinforce the reasoning-engine nature.
