# charchives

Portfolio of Chariz Dianne Falco, [chariz1101](https://github.com/chariz1101).

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

Nothing is hardcoded in a page. The content modules are the single source of
truth, and every page reads from them.

| File                    | Holds                                                    |
| ----------------------- | -------------------------------------------------------- |
| `content/projects.ts`   | Every project, its case study, and the `featured` flag    |
| `content/organising.ts` | Every event, workshop, and programme, plus `featured`     |
| `content/profile.ts`    | Bio, contact links, skills, experience, education, awards |

To add a project, append to `projects` in `content/projects.ts`. It appears in
the index at `/projects` and gets a case study at `/projects/<slug>` with no
other changes. Set `featured: true` to also put it on the home page.

Organising works the same way: append to `activities` in
`content/organising.ts` for an entry at `/organising` and a page at
`/organising/<slug>`. Each entry carries its own `org`, so it is not tied to
any one organisation.

## Adding pictures

Both projects and organising entries take an optional `image`. Drop a file in
and point at it:

```
public/projects/<slug>.png      →  image: "/projects/<slug>.png"
public/organising/<slug>.jpg    →  image: "/organising/<slug>.jpg"
```

The index and the detail page both render the image only when `image` is set,
so entries without one lay out exactly as before. Landscape shots at roughly
2:1 sit best. Anything large is fine: `next/image` resizes and serves modern
formats, so commit the original rather than a hand-shrunk copy.

Projects also have an optional `outcome`, empty everywhere right now. Fill it
in with what the project actually did (users, adoption, time saved) and an
**Outcome** section appears on that case study.

## Structure

```
app/
  layout.tsx              fonts, metadata, nav, footer
  page.tsx                home: intro, selected work, organising, contact
  projects/page.tsx       the full project index
  projects/[slug]/        one case study per project, prerendered
  organising/page.tsx     the full organising index
  organising/[slug]/      one page per event, prerendered
  about/page.tsx          bio, experience, education, skills, leadership
  globals.css             colour and type tokens
components/               nav, footer, section header, project and activity index
content/                  projects.ts, organising.ts, profile.ts
public/projects/          project screenshots
public/organising/        event photos
```

## Design

Poppins throughout, self-hosted through `next/font` rather than a
render-blocking Google Fonts import. Emerald on warm off-white, with zinc for
text. Projects are a numbered index rather than a card grid; the accent carries
the index numbers, the stack chips, and links.

Colours live as CSS custom properties on `:root` in `app/globals.css` and are
exposed to Tailwind through `@theme inline`, so changing the accent is one
line.
