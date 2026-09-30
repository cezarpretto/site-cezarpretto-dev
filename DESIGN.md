---
name: cezarpretto.dev
description: "Do papel ao produto. A sheet of Papel that resolves into a running product, written by a cursor."
colors:
  tinta: "#15141B"
  papel: "#F5F3EE"
  violeta: "#5B21B6"
  lavanda: "#A78BFA"
  grafite: "#55525F"
  branco: "#FFFFFF"
  terminal: "#5EE6A8"
typography:
  display:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 5.6vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  title:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 2.15rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.9
rounded:
  cursor: "0.07em"
  chip: "3px"
  control: "8px"
  button: "10px"
  surface: "14px"
spacing:
  section-y: "128px"
  section-y-mobile: "96px"
  gutter: "24px"
  row-y: "28px"
  header-h: "72px"
components:
  button-primary:
    backgroundColor: "{colors.lavanda}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.button}"
    padding: "14px 24px"
  button-primary-light:
    backgroundColor: "{colors.violeta}"
    textColor: "{colors.branco}"
    rounded: "{rounded.button}"
    padding: "14px 24px"
  button-secondary:
    textColor: "{colors.papel}"
    rounded: "{rounded.button}"
    padding: "14px 20px"
  nav-cta:
    backgroundColor: "{colors.lavanda}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  sheet:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.surface}"
    padding: "24px"
  panel:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
    rounded: "{rounded.surface}"
  chip-tag:
    textColor: "{colors.lavanda}"
    rounded: "{rounded.chip}"
    padding: "2px 7px"
  case-row-hover:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    padding: "28px 20px"
  close-field:
    backgroundColor: "{colors.violeta}"
    textColor: "{colors.branco}"
---

# Design System: cezarpretto.dev

## Overview

**Creative North Star: "O Papel que Vira Produto"**

The brand line "do papel ao produto" is the whole system. A warm sheet of Papel, a proposal typed in mono by a cursor, sits half-covered by a dark product panel that fills in as you scroll. Everything else inherits that pair: Tinta ground, Papel sheet, one accent that swaps by theme, hairline ruled rows where other sites would put cards, and a single recurring ornament, the cursor block, meaning someone is writing this right now.

Density is calm and editorial. Plex Sans carries titles and prose at large, confident sizes; JetBrains Mono carries labels, numbers, dates and everything that is data. Structure is drawn with 1px lines and fixed columns, not with boxes. Dark is the default theme; light (Papel ground) is a toggle, and the brand color follows the manual's golden rule: Lavanda on dark, Violeta on light.

The build diverges from the contract in small ways: the scene is a sticky 260vh stage (contract said ~240vh), and a fifth section (Approach: method list plus three pillars) exists beside cases, experience, stack and contact.

**Key Characteristics:**
- Two-theme token system: fixed brand colors plus semantic roles (`bg`, `fg`, `muted`, `line`, `surface`, `accent`) that flip with `data-theme`.
- Ruled rows, not card grids. Fixed mono column rhythm.
- The cursor block is the only recurring ornament, and is never detached from its line.
- Flat by default; depth only on the two hero artifacts.
- Violeta drenched field for the closing contact section.

## Colors

A near-black ink and a warm paper, with a single violet that changes shade by ground. Terminal green appears in one place only.

### Primary
- **Lavanda** (#A78BFA): the accent on dark ground. Links, primary button fill, cursor, selection, focus ring, labels, active panel items. 6.7:1 on Tinta.
- **Violeta** (#5B21B6): the accent on light ground, and the drenched close section in both themes. 8.1:1 on Papel; Branco on Violeta 9.0:1.

### Neutral
- **Tinta** (#15141B): the dark ground, ink on light, and the product panel in both themes.
- **Papel** (#F5F3EE): text on dark, light ground, and the proposal sheet (in dark theme). Warmer than white.
- **Grafite** (#55525F): secondary text on light ground and on the sheet.
- **Branco** (#FFFFFF): surfaces on Papel in light theme (sheet, `surface`), and text on the Violeta close field.
- **Muted / line / surface** are derived, not new colors: on dark, muted is Papel 68% over Tinta, line Papel 15%, surface Papel 5%; on light, muted is Grafite, line is Tinta 14% over Papel, surface is Branco.

### Tertiary
- **Terminal** (#5EE6A8): technical content only. Used for the `$` prompt in the Stack panel. Never on commercial surfaces (hero, CTAs, contact).

### Named Rules
**The Golden Ground Rule.** Dark ground gets Lavanda, light ground gets Violeta. Violeta on Tinta is forbidden (2.0:1). The product panel and Stack panel stay Tinta in both themes, so they use Lavanda always.

**The Proportion Rule.** Roughly Papel 50 / Tinta 30 / Violeta 15 / Lavanda 5. The accent is rare; the Violeta close section is the one place it floods a field.

**The Terminal Rule.** Green means code. If it is not technical content, it is not Terminal.

## Typography

**Display Font:** IBM Plex Sans (system-ui fallback), weights 400, 500, 600
**Body Font:** IBM Plex Sans
**Label/Mono Font:** JetBrains Mono (ui-monospace fallback), weights 400, 500, 700, 800 loaded; 400 and 500 used

**Character:** a humane grotesque for speaking, a monospace for recording. Plex says what Cezar does; mono shows the facts (dates, indexes, stack, contact addresses). Body sets `ss01`.

### Hierarchy
- **Display** (600, clamp 2.9rem to 5.25rem, 1.04, -0.025em): hero H1 only. Contact close uses a variant up to 6rem at 1.0 and -0.03em.
- **Headline** (600, clamp 2.1rem to 3.6rem, 1.06, -0.02em): every section H2.
- **Title** (600, clamp 1.4rem to 2.15rem, 1.12, -0.01em): case row titles; experience company names at 1.5rem.
- **Body** (400, 1rem, 1.6): prose in `muted`; max 34rem for intros, 62ch for case summaries, 54ch for experience. Offer line is 500 at 1.375rem, 1.3.
- **Label** (mono 500, 0.8125rem, +0.12em, uppercase): nav links, pillar names, row keys, panel titles. The `.label` class.
- **Data** (mono 400, 0.875rem, 1.9): method list, stack items, tech lists (0.75rem), dates (0.8125rem, tabular-nums).

### Named Rules
**The Two Voices Rule.** Plex for anything a person would say, mono for anything a machine would record. Never set prose in mono, never set a date or index in Plex.

**The Sentence Case Rule.** Titles are sentence case and sized by clamp. Uppercase belongs to mono labels only, always with +12% tracking.

## Layout

One centered column, `max-w-6xl` (1152px) with 24px gutters. Sections breathe at 128px vertical (96px on mobile); Approach and Stack pull their top padding in (32 to 64px) to read as continuations. Section heads use a 6fr/5fr two-column split (title left, sub-copy right, bottom-aligned); Experience uses 5fr/7fr with the heading sticky beside a ledger.

The hero is a scroll-driven scene: on 1024px and up, a 260vh wrapper holds a sticky stage (viewport minus the 72px header, min 620px) with copy left and the artifact right. A progress variable `--p` (0 to 1) drives the panel fade-in, table wipe, sidebar reveal, week chips and deploy line via clipped windows. Below 1024px the sheet (88% wide) and panel (90%, pulled up 1.1rem over the sheet) stack in flow, and the scene is not sticky. Case rows collapse from three columns (2.75rem index, fluid body, tech list) to two below 768px, with the tech list dropping under the body.

Header is sticky, 72px, hairline bottom border, solid `bg` (no blur).

## Elevation & Depth

Flat by default. Depth is carried by tonal steps (`bg`, `surface`, `panel`) and 1px `line` borders. The only shadows are on the two hero artifacts, which are meant to read as physical objects on a desk: the paper sheet (`0 24px 48px -18px rgb(0 0 0 / 0.5), 0 3px 8px rgb(0 0 0 / 0.22)`) and the product panel (`0 30px 60px -20px rgb(0 0 0 / 0.6), 0 4px 12px rgb(0 0 0 / 0.3)`). Both are soft and low-spread. The sheet starts rotated -1.8deg and settles to 0 as scroll progresses.

### Named Rules
**The Desk Rule.** Only physical objects cast shadows (the sheet, the panel). Buttons, rows, panels in the Stack section and inputs stay flat.

## Shapes

Small, honest radii. Surfaces (sheet, panel, stack panel, method list) use 14px; buttons 10px; nav CTA and icon buttons 8px; chips, tags, code and week cells 3px; the cursor 0.07em. Focus rings are 2px accent with 3px offset. Borders are 1px hairlines in `line`; the only heavy stroke is the 3px `fg` top rule on Approach pillars. The cursor block is a 2:5 proportion rectangle (0.4em by 0.8em), never a circle, never recolored away from its context's accent (white on the Violeta close).

## Components

### Buttons
- **Shape:** gently rounded (10px).
- **Primary:** accent fill (Lavanda on dark, Violeta on light) with `accent-ink` text (Tinta on dark, Branco on light), 14px by 24px, weight 600. Hover lifts 2px; active returns.
- **Secondary:** transparent, 1px `line` border, hover border goes to `fg`. A small arrow nudges 2px down on hover.
- **Nav CTA:** same fill logic, 8px radius, 8px by 16px, text-sm.

### Case rows (signature)
Hairline-ruled rows, top border each, bottom border on the last. Columns: index with cursor, title and summary, tech list right-aligned in mono. At rest the cursor is hidden. On hover or keyboard focus (pointer devices) the whole row inverts (`fg` background, `bg` text, 0.25s ease-out), the index cursor appears, and the arrow shifts 4px up-right. No card, no shadow, no scale.

### The Artifact (signature)
Paper sheet plus product panel. The sheet is a Papel (Branco in light) proposal with a Violeta mono label, Plex title, and rows of mono key/value pairs typed in by a stepped width animation, with checkboxes that tick with scroll. The panel is always Tinta: a 27% sidebar, mono order rows with Lavanda tags, four week cells that fill with Lavanda, and a deploy line. A ruler beneath doubles as a scroll indicator with the cursor as the thumb.

### Ledger (Experience)
A 1px vertical line with 7px ring nodes per role. The current role swaps its node for a blinking accent cursor block. Period in mono muted, company in Plex 600, role in accent.

### Stack panel
A Tinta panel in both themes, four columns, mono items in Papel at 90%, category headings in Lavanda label style prefixed with a Terminal `$`.

### Approach
A method list in a bordered `surface` box (mono, accent keys), beside three pillars each under a 3px `fg` rule with a mono accent name and a medium-weight sentence.

### Navigation and theme
Labels in mono muted, hover to `fg`. Locale switcher and sun/moon toggle sit inline; on mobile a max-height drawer with ruled links. Logo is the official SVG pair (principal in header at 38px, compacta in footer at 44px), swapped by theme, never retyped.

### Contact close
Full-bleed Violeta field, Branco text, 14ch display headline ending in a white blinking cursor, ruled link rows (white at 30% lines) with mono addresses; hover shifts the row 12px right.

## Do's and Don'ts

### Do:
- **Do** use the semantic roles (`bg`, `fg`, `muted`, `line`, `surface`, `accent`) for anything theme-dependent and the brand tokens only for things that must not flip (panels, close field).
- **Do** draw structure with 1px `line` rules and fixed columns; let a row be the unit, not a card.
- **Do** end a headline with the cursor only where the line is the subject (hero H1, contact close); keep it the same color as its context's accent.
- **Do** keep hover as inversion or a small translation (2 to 12px) with 200 to 300ms ease-out `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** honor `prefers-reduced-motion`: the scene resolves to its end state, typing and blinking stop.
- **Do** use tabular numbers (`.tnum`) for indexes and dates.

### Don't:
- **Don't** put Violeta on Tinta or Lavanda on Papel; switch by ground.
- **Don't** use Terminal green outside technical content.
- **Don't** retype, recolor, stretch, or detach the cursor from its text, and never replace the official logo files with live text.
- **Don't** add card grids, gradient text, or decorative ornaments beside the cursor.
- **Don't** set prose in mono or titles in uppercase.
- **Don't** add shadows to anything that is not a physical object on the hero desk.

## Not canonized

Defects the build carries, recorded so future surfaces do not inherit them: the hero panel and sheet use 0.7 to 0.75rem (11 to 12px) mono text, below the 13px label floor; the small mono caption lines above the sheet rows and panel title (`sheet-label`, `panel-title`, `srow-k`) are label-style kickers and are not a pattern for section headings; Lucide stroke icons (arrows, menu) are used in controls and are not part of the brand system, which has only the cursor; `text-papel` and arbitrary `[var(--panel)]` utilities in Stack bypass the semantic tokens.
