# CLAUDE.md, Qoriev-Manuchehr-Personal-Website

Personal portfolio site for Manuchehr Qoriev. React 19 + Vite 7 SPA. Single page: hero, contacts, dark/light theme, and a floating book link.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run lint     # eslint
```

## Layout

| Path | Contents |
|------|----------|
| `src/components/` | Header, Hero, Footer, SocialLinks, ThemeToggle, LanguageToggle, BookLink |
| contacts | `SocialLinks` renders ONCE, in the Hero. The footer copy was removed 2026-09-09 as duplication; the footer is a single copyright line. |
| `src/contexts/` | ThemeProvider and LanguageProvider, each split into a provider `.jsx` plus a `*ContextObject.js` holding the context and hook, so provider files export only components (react-refresh lint rule) |
| `src/constants/siteContent.js` | Copy + links, incl. `BOOK_LINK` |
| `public/` | Static assets served at `/`: favicon, images |

## Book link, and what was removed

The site is one page: hero plus footer. There is no resume (removed 2026-09-09,
PDF, LaTeX, viewer, nav item and CSS tokens), no chatbot, and no nav list.

The book is a fixed pill in the bottom-right corner,
[src/components/BookLink/BookLink.jsx](src/components/BookLink/BookLink.jsx), pointing
at the `my-story` repo. It occupies the slot the Voiceflow chatbot used to hold, and
the owner chose that swap deliberately on 2026-09-09. Label and URL are the `BOOK_LINK`
object in [src/constants/siteContent.js](src/constants/siteContent.js).

Removed with it, because nothing else referenced them: the Voiceflow chatbot and
`VOICEFLOW_CONFIG`, the `Project` section, `SparklesCore` (the particle background,
which alone accounted for most of the bundle: 396 modules down to 44), the
`useActiveSection` hook, `NAV_ITEMS`, and the header's nav list, hamburger and overlay.
Do not reintroduce any of them unless the owner asks.

## Hero stats source of truth

`HERO_STATS` in [src/constants/siteContent.js](src/constants/siteContent.js) mirrors the
resume kept OUTSIDE this repo, at `~/Desktop/omniladders/resume/Qoriev_Manuchehr_Resume.tex`
(Technical Skills section). That file is the source of truth for skills. When it changes,
re-sync the site.

Its rule, from the `.tex` comments: a technology appears only if a resume bullet
demonstrates it. Kubernetes and AWS were cut there on 2026-09-04 and are absent here too.
Do not re-add a technology the resume dropped.

**The titles are a deliberate exception.** The resume header reads "Forward Deployed
Engineer, Full Stack Engineer". The site does not match it, by the owner's call on
2026-09-09:

| Slot | Text |
|------|------|
| Header | No logo, no CTA. One control track holding EN/RU and the theme toggle, right aligned. |
| Hero h3 | Manuchehr Qoriev, with **M** and **Q** on the accent gradient |
| Hero h2 (animated) | Fullstack Developer |
| Rotating ring | Forward Deployed Engineer. |
| Hero h1 | 3+ Years Shipping Production Code |

The name appears ONCE as a heading, in the hero `<h3>`, directly above the title. The
header logo was removed on 2026-09-09 because it repeated the same name a few pixels
above. `.header` therefore uses `justify-content: flex-end`, not `space-between`: with the
logo gone there is only one child, and `space-between` would push it left.

Never two stacked *titles* either: an earlier version had both "Fullstack Developer" and
"Forward Deployed Engineer" as adjacent headings, the stack-agnostic double-titling the
`.tex` warns about.

## Header controls

The header is a single pill-shaped track (`.controls` in
[Header.module.css](src/components/Header/Header.module.css)) holding the language
options, a hairline divider, and the theme button. The track owns the border, radius and
background; **the segments inside are deliberately borderless**. Before 2026-09-09 these
were three separate shapes (a gradient CTA rectangle, a 2px-bordered pill, a 42px
outlined circle) at three different heights, which the owner called out as bad design.

If you add a control, put it inside the track and give it `height: 26px` (24 at 530px,
22 at 380px) with no border of its own, or the cluster stops reading as one object.

The WhatsApp "Let's chat" CTA was removed from the header on 2026-09-09. WhatsApp is
still reachable from the social row in the hero, so no contact path was lost.

## Languages (EN / RU)

Hand-rolled, no i18n library: the site has ~15 strings, and i18next would have cost about
40KB to manage them. The whole feature added **2.4KB** to the bundle.

All copy lives in `CONTENT.en` / `CONTENT.ru` in
[src/constants/siteContent.js](src/constants/siteContent.js). Components read it through
`useCopy()`. Adding a string means adding it to BOTH dictionaries; there is no fallback,
so a key missing from `ru` renders `undefined`.

Rules baked into the content file:

- **Technology names never translate.** `languages`, `frontend`, `backend` and `delivery`
  come from a single shared `STACK` object spread into both languages, so they cannot
  drift. Russian tech writing keeps these in Latin.
- **"Forward Deployed Engineer" stays English in both**, in the rotating ring. It is the
  resume header verbatim and a term of art.
- The hero name renders via `AccentedWord`, which gradients the first letter of each word.
  It is alphabet-agnostic, so М and К light up in Russian exactly as M and Q do in English.

`LanguageProvider` also sets `document.documentElement.lang` and `document.title` per
language, for screen-reader pronunciation and search engines, and persists the choice in
`localStorage` under `language` (default `en`).

## Third-party CSS

`index.html` pulls Boxicons from unpkg with a pinned version AND an SRI hash:

```
integrity="sha384-42kyIPf7HDYLkGffmxDhSx/3Z/53wGBs3nD6wEFxsbeDc7rMO6mkYbkAcpRsnMU2"
```

If the version is ever bumped, the hash MUST be recomputed or every icon on the page
silently disappears (a failed integrity check blocks the stylesheet, with no visible error):

```bash
curl -sL <new-url> | openssl dgst -sha384 -binary | openssl base64 -A
```

Note the SRI covers the stylesheet only, not the font files it references by relative URL.
Vendoring Boxicons via npm would remove the CDN dependency entirely; not done, to avoid
adding a dependency and ~100KB of font to the bundle.

## Git convention: single-commit history

This repo intentionally keeps **only one commit**, the latest state. History is not preserved. Every site change is squashed into a fresh single commit and force-pushed to `main`:

```bash
git checkout --orphan latest
git add -A
git commit -m "Portfolio site"
git branch -D main
git branch -m main
git push -f origin main
```

Rationale: a single-commit history keeps the public repo clean and shows only the current state. It also means no removed file (the old résumé, for one) survives in a past revision. Do not add back a multi-commit workflow unless the owner asks.
