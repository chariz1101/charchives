export type Activity = {
  slug: string;
  name: string;
  /** What the event or programme was: workshop, festival, competition. */
  kind: string;
  /** The body it ran under. Not everything is MRSP. */
  org: string;
  role: string;
  date: string;
  /** One line, shown in the index. */
  summary: string;
  /** What the event was and who it was for. */
  brief: string;
  /** What I actually did. */
  work: string[];
  tags?: string[];
  /** Path under public/organising, e.g. "/organising/<slug>.jpg". */
  image?: string;
  link?: string;
  featured?: boolean;
};

export const activities: Activity[] = [
  {
    slug: "ai-fest-2026-ai-in-motion",
    name: "AI Fest 2026: AI in Motion",
    kind: "Festival",
    org: "MRSP Western Visayas Junior Chapter",
    role: "Organiser",
    date: "2026",
    summary:
      "Ran the chapter's booth alongside facilitating the event, with an interactive game built on a robotic arm and computer vision.",
    brief:
      "AI Fest 2026 brought the region's students together around applied AI. I helped facilitate the event and opened a booth for the chapter, where the draw was something people could walk up to and play rather than read about.",
    work: [
      "Facilitated the event alongside the rest of the chapter.",
      "Opened and ran the chapter's booth.",
      "Built the booth's interactive game on the UltraArm robotic arm with computer vision.",
    ],
    tags: ["MyBlock", "Python", "MICROpi"],
    featured: true,
  },
  {
    slug: "ai-fest-2026-robotics-workshop",
    name: "AI Fest 2026: Robotics Workshop",
    kind: "Workshop",
    org: "MRSP Western Visayas Junior Chapter",
    role: "Organiser",
    date: "2026",
    summary:
      "An Arduino seminar and workshop for selected students, with an exhibition of the Makeblock Ultimate 2.0 kits.",
    brief:
      "A hands-on Arduino seminar and workshop for selected students, most of whom had never wired a circuit before, paired with an exhibition of the Makeblock Ultimate 2.0 kits so they could see where the basics lead.",
    work: [
      "Organised the seminar and workshop programme.",
      "Ran the exhibition of the Makeblock Ultimate 2.0 kits.",
    ],
    tags: ["Arduino", "Arduino C++", "Python", "MICROpi"],
    featured: true,
  },
];

export const featuredActivities = activities.filter((a) => a.featured);

export function findActivity(slug: string) {
  return activities.find((a) => a.slug === slug);
}
