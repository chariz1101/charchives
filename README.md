# charchives

Portfolio of Chariz Dianne Falco, [chariz1101](https://github.com/chariz1101).

Next.js App Router, Tailwind CSS v4 and three.js, no UI library. Every page
is a Server Component and prerenders to static HTML; client-side JavaScript is
limited to the nav, the scroll engine, and the 3D arm on the home page.

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
  layout.tsx              fonts, metadata, nav, footer, backdrop, scroll engine
  page.tsx                home: hero + 3D arm, telemetry, builds, system stack,
                          field operations, contact
  projects/page.tsx       the full project index
  projects/[slug]/        one case file per project, prerendered
  organising/page.tsx     the full organising index
  organising/[slug]/      one case file per event, prerendered
  about/page.tsx          bio, experience, education, skills, leadership, awards
  globals.css             colour and type tokens, and every motion rule
  icon.svg, favicon.ico,  the gear tab icon; favicon.ico and apple-icon.png
  apple-icon.png          are rendered from icon.svg
components/
  fx/scroll-fx.tsx        the one scroll engine (see Motion below)
  fx/robot-arm.tsx        the three.js robotic arm behind the home page
  fx/gear.tsx             generated SVG gears that turn with the scroll
  fx/backdrop.tsx         blueprint grid and background gears
  fx/hud.tsx              the Z-axis scroll gauge on wide screens
  case-file.tsx           shared detail page for projects and events
  system-stack.tsx        skills as an exploding stack of circuit plates
  media-frame.tsx         chamfered screenshot plate, or a schematic when no image
  shapes.tsx              dial gauges, hexagon badges, radar, portrait orbit
  ...                     nav, footer, section header, project and activity index
content/                  projects.ts, organising.ts, profile.ts
public/projects/          project screenshots
public/organising/        event photos
```

## Design

A robotics and mechatronics control room on a blueprint grid. Content sits
on rails, dials, hexagons and cut-corner plates rather than boxed cards, and
links use a short extending line instead of arrows.
Colours: servo orange (`--accent`) for anything that moves or can be clicked,
sensor cyan (`--signal`) for readouts. Space Grotesk for text and Poppins
for labels, both self-hosted through `next/font`.

Colours live as CSS custom properties on `:root` in `app/globals.css` and are
exposed to Tailwind through `@theme inline`, so changing the accent is one
line.

## Motion

Pages stay Server Components. All scroll motion comes from one small client
component, `components/fx/scroll-fx.tsx`, which writes attributes and CSS
variables; `globals.css` turns them into 3D transforms.

| Put this on an element | And it                                                  |
| ---------------------- | ------------------------------------------------------- |
| `data-reveal`          | tilts up out of depth as it enters, folds away as it leaves. Variants: `left`, `right`, `zoom`, `flip`, `fade`; `once` stays put |
| `style={{"--i": n}}`   | staggers a reveal by `n × 70ms`                         |
| `data-depth`           | receives `--p` (−1 above centre … +1 below) and `--pv` (1 when centred), used by `.tilt-media`, `.parallax` and the skill stack |
| `data-count={n}`       | counts up to `n` each time it is revealed               |

The home page adds a three.js robotic arm in a fixed canvas. Scroll blends it
through the poses in `POSES` (`components/fx/robot-arm.tsx`) and the pointer
nudges the turret and camera. It pauses in background tabs, and when WebGL is
missing the page simply renders without it.

Everything respects `prefers-reduced-motion`: reveals show immediately,
tilts and parallax switch off, and the arm holds still.
