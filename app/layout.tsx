import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Backdrop from "@/components/fx/backdrop";
import Hud from "@/components/fx/hud";
import ScrollFx from "@/components/fx/scroll-fx";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { profile } from "@/content/profile";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name}, ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.intro,
};

export const viewport: Viewport = {
  themeColor: "#070a0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Backdrop />
        <SiteNav />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <SiteFooter />
        <Hud />
        <ScrollFx />
        <Analytics />
      </body>
    </html>
  );
}
