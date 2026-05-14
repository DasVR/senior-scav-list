# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static single-page web app — a point tracker for a "Senior Scavenger" checklist game. Modern light-pink aesthetic with white cards, animated progress rings, and smooth micro-interactions. No build step or dependencies.

## Development

Because `fetch()` is used to load `tasks.txt`, you must serve the files over HTTP rather than opening `index.html` directly via `file://`.

Serve locally with any static server, for example:

- Python: `python -m http.server 8000`
- Node: `npx serve .`
- VS Code: "Go Live" with the Live Server extension

Then open `http://localhost:8000`.

## Architecture

- **`index.html`** — Semantic markup only. Links `styles.css` and `app.js`. Contains the sticky header, main app container, and share modal markup. No inline styles or scripts.
- **`styles.css`** — All styling. Key design tokens via CSS custom properties (`--bg: #fff5f7`, `--primary: #ff2d78`, `--gold: #ffb700`, etc.). Font pairing: Syne (display) + Outfit (body).
- **`app.js`** — All logic: parsing, categorization, state management, rendering, share/export, and event listeners. Runs as a single module.
- **`tasks.txt`** — Plaintext data source. Each non-empty line becomes one task. Format per line:
  - `Task description text (basePoints)` — e.g. `Kiss a senior (5)`
  - Optional bonus: `Task text (basePoints) bonus condition (+bonusPoints)` — e.g. `Selfie with a midget, jump over for 15 more (15) (+15)` has base 15 and bonus 15

### Task Parsing (`parseTask`)

- Extracts the last `(digits)` as base points.
- Extracts `(+digits)` anywhere after base points as bonus points and captures the text between them as `bonusCondition`.
- Returns `null` for empty lines.

### Categorization (`categorizeTask`)

Tasks are bucketed into 9 categories by keyword matching against `CATEGORY_RULES` (ordered array of `{id, patterns[]}`). The first matching rule wins; anything unmatched falls into `wild-cards`. Rules are applied in the order declared in `CATEGORY_RULES`.

The 9 categories, mapped from the required taxonomy items, in rule-evaluation order:

1. **Cops & Authority** 👮 — Cops and authority encounters (cop, officer, handcuff, speeding ticket, tazed, speed limit, strip club)
2. **Social & Media** 📱 — Performance and social media, plus pranks and mischief (insta, tiktok, post, story, thirst trap, break up, fake proposal, ding dong ditch, tp, etc.)
3. **Party & Drinking** 🎉 — Party and drinking activities (shot, shotgun, keg, beer, drink, alcohol, bar)
4. **Restaurants & Dining** 🍽 — Restaurants and diners, including McDonald's and drive-thrus (restaurant, mcdonald, chili, dinner, eat, drive thru)
5. **Retail & Stores** 🛒 — Walmart, Target, Walgreens, Publix, other stores, and shopping challenges (walmart, target, publix, walgreens, gas station, cashier, aisle)
6. **Team Challenges** 🤝 — Big challenges and team bonding (team, group, opponents, opponent, bonding)
7. **Dares & Body** 💋 — Kissing dares, stranger dares, and appearance/body dares (kiss, make out, stranger, hair, shave, tattoo, piercing, flash, etc.)
8. **Around Town** 🏙 — Elevator, car and driving, beach and water, and general town exploration (elevator, beach, car, drive, ride, school, library, pool, ocean, etc.)
9. **Wild Cards** 🎲 — Extreme or uncategorizable challenges; fallback for anything that does not match the above (sky dive, steal a street sign, laxatives, kidnap, etc.)

### State

- `localStorage` key: `seniorScav_state`
- Stores an object mapping `task-${index}` → boolean for completion, and `task-${index}-bonus` → boolean for bonus completion.
- State is loaded on init, saved on every toggle, and drives full re-renders.

### Rendering

- Categories render as collapsible white cards. Default open state: `wild-cards` is open on first load; all others persist their DOM `open` class across re-renders.
- **Header** contains a circular SVG progress ring (`updateProgressRing`) showing overall task completion fraction, plus a live points counter with `pulse` animation on change.
- **Category headers** include a mini horizontal progress bar showing completion fraction within that category.
- Completed tasks get reduced opacity (`0.5`) and strikethrough text. Categories with any checked task get a stronger pink border (`has-completions`).
- Tasks and categories animate in with staggered `animation-delay` values on initial load (`cardEnter`, `taskEnter` keyframes).

### Collapsible Sections

Expand/collapse uses CSS `grid-template-rows: 0fr` → `1fr` transition rather than `max-height`. The `.category-body` wrapper has `display: grid`, and `.category-body-inner` has `overflow: hidden`. Toggling the `.open` class on `.category` triggers the smooth height animation.

### Share / Export

- `generateShareText()` formats completed tasks by category into a plain-text summary with totals and date.
- `openShareModal()` populates the modal body with either the share text in a readonly textarea or an empty-state message if nothing is completed.
- `copyShareText()` uses `navigator.clipboard` with a fallback to `document.execCommand('copy')`. The copy button briefly shows "Copied! ✓" in green.
- Modal can be closed via click outside, the close button, or the `Escape` key.

### Reset

`resetAll()` clears `state` and `localStorage` after a `confirm()` dialog, then re-renders.

## Making Changes

- **Add/edit/remove tasks:** Modify `tasks.txt` directly. Reload the page to see changes.
- **Style changes:** Edit `styles.css`. Key variables are at the top of the file in `:root`.
- **Behavior changes:** Edit `app.js`. All logic is in one file.
- **Category rules:** Update `CATEGORY_RULES` in `app.js` if new task types need different grouping.

There are no tests, lint scripts, or build steps. Verify changes by serving the site locally and interacting with the UI.
