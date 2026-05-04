import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Resume Riot | Build a resume that actually gets read.",
  description:
    "Stop being another PDF in the pile. Use aggressive layouts, loud colors, and high-impact typography to demand attention from recruiters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`light ${spaceGrotesk.variable} ${workSans.variable}`}
    >
      <body className="bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}