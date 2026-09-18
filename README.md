# charchives

Portfolio of Chariz Dianne Falco — [chariz1101](https://github.com/chariz1101).

Next.js App Router, Tailwind CSS v4, no UI library. Every page is a Server
Component and prerenders to static HTML; the only client-side JavaScript is
the nav, which needs the current pathname.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where the content lives

Nothing is hardcoded in a page. Both content modules are the single source of
truth, and every page reads from them.

| File                  | Holds                                                     |
| --------------------- | --------------------------------------------------------- |
| `content/projects.ts` | Every project, its case study, and the `featured` flag     |
| `content/profile.ts`  | Bio, contact links, skills, education, leadership, awards  |

To add a project, append to `projects` in `content/projects.ts`. It shows up in
the index at `/projects` and gets a case study at `/projects/<slug>` with no
other changes. Set `featured: true` to also put it on the home page.

Each project has an optional `outcome` field. It is empty everywhere right now
— fill it in with what the project actually did (users, adoption, time saved)
and an **Outcome** section appears on that case study.

## Structure

```
app/
  layout.tsx              fonts, metadata, nav, footer
  page.tsx                home — intro, selected work, organising, contact
  projects/page.tsx       the full index
  projects/[slug]/        one case study per project, prerendered
  about/page.tsx          bio, education, skills, leadership, recognition
  globals.css             colour and type tokens, light and dark
components/               nav, footer, section header, project index
content/                  projects.ts, profile.ts
```

## Design

Poppins throughout, self-hosted through `next/font` rather than a
render-blocking Google Fonts import. Emerald on warm off-white, with zinc for
text. Projects are a numbered index rather than a card grid; the accent carries
the index numbers, the stack chips, and links.

Colours live as CSS custom properties on `:root` in `app/globals.css` and are
exposed to Tailwind through `@theme inline`, so changing the accent is one
line.
