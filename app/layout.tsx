import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CollectListe – Collection & Completion Tracker",
  description: "Track reading lists, gaming backlogs, watchlists and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
