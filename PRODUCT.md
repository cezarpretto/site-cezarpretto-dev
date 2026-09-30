# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, equal weight, confirmed by the owner:
- **Companies and founders** with a project or product still on paper (or a problem to solve with technology) who need custom software built by someone accountable.
- **Peers and the tech community** (recruiters, tech leads, podcast/event hosts) who evaluate Cezar as an engineer through cases, experience, and stack.

## Product Purpose

Personal site of Cezar Pretto (cezarpretto.dev), a Brazilian software engineer (Lead Software Engineer and partner at Gupy) who also builds custom software for companies. The site must present the person, prove the work through real cases, and turn a visit into a conversation. Success: a company visitor understands the offer ("do papel ao produto") and reaches out; a peer visitor finds credible cases, experience, and stack.

## Positioning

Personal brand, not an agency: whoever hires, hires the person, their experience, and their way of working. Tagline: "do papel ao produto." Descriptor: "software sob medida". Practices AI-assisted development with spec-driven development, own tooling (e.g. SpecHub), and objective quality gates.

## Operating Context

Static Next.js 14 export (next-intl, pt default and en) served by nginx via CapRover; projects are MDX case studies in `content/projects`. Bilingual PT/EN must be preserved.

## Capabilities and Constraints

- Sections today: hero, selected projects (6 MDX cases, detail pages at `/[locale]/projects/[slug]`), experience, stack, contact.
- Contact channels: email, LinkedIn (linkedin.com/in/cezarpretto), GitHub (github.com/cezarpretto), WhatsApp via `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- Static export: no server runtime, no middleware.
- Factual content (companies, roles, dates, project facts, links) is preserved. Interface copy (hero, section titles, CTAs) may be rewritten to the brand voice; MDX case content stays untouched.
- Theme: dark (Tinta) by default with a toggle to light (Papel).

## Brand Commitments

Binding source: `/Users/cezarpretto/Downloads/cezarpretto-marca` (manual v1.0, 2026).
- Logo `cezarpretto▮` (principal), `cp▮` (compact), cursor `▮`; only official files, never retyped, cursor never recolored or detached.
- Palette: Tinta #15141B, Papel #F5F3EE, Violeta #5B21B6 (brand color on light), Lavanda #A78BFA (brand color on dark; Violeta on Tinta is forbidden), Grafite #55525F, Branco #FFFFFF, Terminal #5EE6A8 (technical content only, never commercial pieces). Usage proportion Papel 50 / Tinta 30 / Violeta 15 / Lavanda 5.
- Type: JetBrains Mono (logo, labels, numbers, code) and IBM Plex Sans (titles, body).
- Voice: direct not curt, technical not hermetic, confident not arrogant, close not overly informal. Avoid generic "solução robusta, escalável e inovadora" language. Three pillars: Clareza, Entrega, Parceria.
- Metaphor: the cursor is someone writing, building right now.

## Evidence on Hand

Six real case studies in `content/projects/`, real experience history in `lib/experience-data.ts`, real stack in `lib/stack-data.ts`. No client testimonials or metrics exist; do not fabricate any.

## Product Principles

1. Prove with real cases, never with claims.
2. Clarity over cleverness: complexity turns into clear code and plain conversation.
3. A person, not a vendor: the site sounds like someone building alongside the client.
4. Both audiences find their path in seconds; neither is an afterthought.

## Accessibility & Inclusion

WCAG AA minimum; brand contrast pairs are already documented (Lavanda on Tinta 6.7:1, Violeta on Papel 8.1:1). Respect `prefers-reduced-motion`. Bilingual PT/EN.
