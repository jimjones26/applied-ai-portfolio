# CLAUDE.md — applied-ai-portfolio

This repo is a static portfolio site (plain HTML/CSS/JS, no build step) served from
`docs/`. Its recurring job is publishing **case studies** distilled from R&D slices,
then writing social posts to announce them. This file is the playbook for that loop.

## Layout

```
docs/
  index.html                      # home page; #work section holds featured case-study cards
  resume.html
  assets/
    styles.css                    # all styles (cs-* classes live here)
    lightbox.js                   # click-to-zoom for case-study images (loaded per page)
  case-studies/
    index.html                    # the full case-study list
    <slug>.html                   # one file per case study
    images/<prefix>-NN-name.png   # screenshots, per-scenario prefix
```

Source slices live **outside this repo**, typically at
`/Users/jjones/Documents/dev/projects/graph-decomposition-test/slices/<slice>/case-study/`,
each containing a `CASE-STUDY.md` plus numbered screenshots (`01-*.png`, `02-*.png`, …).

`cross-carrier-subrogation.html` is the **canonical rich template** — copy its structure
for any new Substrate case study.

## Adding a new case study

When the user points at a source slice and says "add this case study", do all of this
(unless told otherwise). New case studies go **first** in both lists by default.

1. **Read the source** `CASE-STUDY.md` and list its PNGs.
2. **Copy + rename screenshots** into `docs/case-studies/images/` with a short
   per-scenario prefix + the original number: `<prefix>-01-name.png`. Prefix = scenario
   slug (`subro`, `gbc`, `mailflow`, …) — keeps each case study's images grouped.
3. **Create `docs/case-studies/<slug>.html`** from the template (see structure below).
4. **Add a featured card** as the **first** `article.card` inside `.cards` in
   `docs/index.html` (`#work` section), **then trim the home list back to the 4
   newest cards.** The `#work` section shows **exactly 4** featured case-study
   cards, newest-first — adding one to the top pushes the 4th card off, so delete
   the now-5th `article.card` (the oldest). The dropped study is *not* lost: it
   still lives on the case-studies index. The "View all case studies →" link must
   stay directly after the 4 cards.
5. **Add a list item** as the **first** `li.cs-list-item` inside `.cs-list` in
   `docs/case-studies/index.html`. This list is the **complete archive** — it
   keeps **every** case study; nothing is ever dropped here.
6. **Verify** before reporting done:
   - every `images/...` ref in the new page resolves to a real file,
   - the new `<slug>.html` link appears in both index pages,
   - HTML tag balance (section/figure/table/main/header/footer/ul),
   - it is genuinely first in both lists,
   - `docs/index.html` `#work` holds **exactly 4** `article.card`s (the 4 newest).
7. **Commit + push only when the user asks.** Commit message style:
   `Add <Title> case study as #01; <any other change>`.

### Page structure (`<slug>.html`)

- `<head>`: title `Substrate — <Title>: <subtitle> — Jimmy Jones`; meta description;
  the Google Fonts `<link>`s; `<link rel="stylesheet" href="../assets/styles.css" />`.
- `.cs-topbar > .wrap`: `<a class="cs-back" href="index.html">← Back to case studies</a>`.
- `.cs-header > .wrap`: `.cs-num` eyebrow (`Case Study · Substrate — <Scenario>`),
  `h1.cs-title`, `dl.cs-meta` with **Stack / Status / Last touched**.
- `main.cs-body > .wrap`, made of `section.cs-section` blocks:
  - **Intro**: `p.cs-pullquote`, framing paragraphs, then `.cs-proof` labelled
    *"The headline"*.
  - **Cast / architecture**: `table.cs-table` (Who / Role).
  - **Controls** the substrate enforces (inherited, not written): `table.cs-table`.
  - **Walkthrough intro**: one para on the capture method.
  - **Per-beat sections**: prose + `figure.cs-figure` (`<img loading="lazy">` with a
    descriptive `alt` + `<figcaption>`) + `.cs-proof` labelled *"What this proves"*.
  - **Honesty ledger**: `table.cs-table` (Claim / How it's proven).
  - **Closing**: `p.cs-pullquote` + `p.bg-note` (the capture-method footnote).
- Standard `footer.site-footer` (copy verbatim from any existing case study).
- `<script src="../assets/lightbox.js" defer></script>` just before `</body>`.

### Home card (`docs/index.html`)

`article.card` → `h3.card-title`, `p.card-lesson` (lead with a `<strong>` claim, then
`<strong>What it shows:</strong>` …), `div.card-meta` of `span.tag`, `div.card-footer`
with `span.card-status` + `a.card-link` (`Read &rarr;`).

### List item (`docs/case-studies/index.html`)

`li.cs-list-item` → `h3.cs-list-title > a`, `p.cs-list-teaser`, `div.card-meta` tags,
`div.cs-list-footer` with `span.cs-list-status` + `a.cs-list-read`.

## Conventions

- **Voice**: first person **singular** ("I built / I wrote") — it's just me, never
  "we"/"a team"/"our". Substrate-enforcement framing — the point is always that a
  guarantee is *structural*, not something a careful developer remembered to do.
- **It's a slice, not a company**: each case study is an R&D *slice* — a single scenario
  built to prove one control — not a real product or organization. The named company
  (Tessera, Klaxon, …) is the **fictional scenario** the slice runs in, never something
  that was "founded" or "shipped". Never write "we built a company" / "we launched" /
  "our company" — in posts *or* pages. Say "I built a slice", "I set up a scenario where
  a company would…", or just describe the scenario. The boast is the *control*, not a
  business.
- **Honesty bar**: never invent build-times, metrics, or claims not in the source. If a
  guarantee is proven by an in-process test rather than a live console click, say so.
  The closing `.bg-note` states exactly how the evidence was captured.
- **Titles** parallel each other ("The Demand That Can't Leak", "The Leak a Human Can't
  Approve"). Case studies are **not numbered** in their titles. "First case study" means
  ordering position only.
- **Tags** are stack/tech (Zig, SvelteKit, SQLite, OpenRouter, Substrate, Ed25519, …).
- **Back links**: individual case-study pages → `index.html` ("← Back to case studies");
  the case-studies index page → `../index.html` ("← Back to index", i.e. home). This is
  the two-level hierarchy: case study → list → home. Don't collapse it.
- **Formatting**: 4-space indent, narrow line wrapping, HTML entities (`&mdash;`,
  `&rarr;`, `&amp;`). A Prettier-style linter may reflow files after editing — that's
  expected; don't fight it.
- **Dates** use ISO `YYYY-MM-DD` in `Last touched`.

## Social posts (after publishing)

The user links the case study **in a comment/reply**, not in the post body.

- **LinkedIn**: **short — the post's only job is to make a person curious enough to
  click the case study, not to summarize it.** Tease, don't tell; never give away the
  whole walkthrough in the post. Default shape (keep it tight, ~120–160 words):
  - a 1–2 line hook — the bold/worst-case move, stated plainly;
  - one line of OWASP/trap framing (the mistake most teams make);
  - the structural controls as **`→` arrow bullets, max 3, one line each** — each
    teases the *mechanism* without fully explaining it;
  - one honest "it's a real discriminator, not a blanket block" line;
  - close with "Full walkthrough in the comments 👇";
  - **3 relevant hashtags** (e.g. `#AISecurity #AIAgents #OWASP`).
  If you find yourself explaining *how* a control works in the body, cut it — that
  detail is the reward for clicking through.
- **X**: one punchy post **≤ 280 chars** (X weights emoji ~2). No inline hashtags by
  default (they eat the budget and read as noise); offer an optional trailing one. Link
  goes in a reply. Offer a 3–4 tweet thread as an alternative for technical depth.
