import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "NOVA — Modern Animated Landing",
  description: "Modern landing page with smooth scroll and animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
