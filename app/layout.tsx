import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chariz Dianne Falco — AI & CS Portfolio",
  description: "Fresh graduate in BS Computer Science Major in Artificial Intelligence. Building intelligent systems, mobile apps, and embedded solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
