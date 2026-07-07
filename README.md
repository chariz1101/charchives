# charchives — Chariz Dianne Falco's Portfolio

A minimal, clean portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **UI Components** — shadcn/ui, Aceternity UI (FloatingDock, LayoutTextFlip)
- **Icons** — Tabler Icons, @deemlol/next-icons
- **Font** — Poppins (Google Fonts)

## Features

- Animated hero with a rotating role flip text
- Featured projects grid with live links and tech stack tags
- Floating dock contact section (GitHub, LinkedIn, Email, Phone, Resume)
- Smooth scroll fade-up animations
- Fully responsive

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  page.tsx          # Main portfolio page
  globals.css       # Global styles and Poppins font
components/
  layoutTextFlip.tsx        # Rotating role text component
  ui/
    floating-dock.tsx       # Aceternity FloatingDock
    layout-text-flip.tsx    # Aceternity LayoutTextFlip
    button.tsx              # shadcn Button
public/
  mine.jpg          # Profile photo
  resume.pdf        # Resume (optional, or link to Google Drive)
```

## Customization

- **Projects** — Edit the `projects` array in `app/page.tsx`
- **Dock links** — Edit the `dockLinks` array in `app/page.tsx`
- **Roles** — Edit the `words` array in `components/layoutTextFlip.tsx`
- **Photo** — Replace `public/mine.jpg` with your own image

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npm run build
```

Or connect your GitHub repo to Vercel for automatic deployments on every push.

## Author

**Chariz Dianne Falco**
BS Computer Science — Artificial Intelligence, Magna Cum Laude
West Visayas State University, Class of 2026

- GitHub: [@chariz1101](https://github.com/chariz1101)
- LinkedIn: [chariz-dianne-falco](https://www.linkedin.com/in/chariz-dianne-falco-12350626a/)
- Email: charizdiannefalco@gmail.com