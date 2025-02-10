import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Utkarsh Singhal | Software Developer",
  description:
    "Full-stack developer specializing in React, Next.js, and TypeScript.",
  openGraph: {
    title: "Utkarsh Singhal | Software Developer",
    description: "Building scalable web applications with modern technologies.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/118098216",
        width: 1200,
        height: 630,
        alt: "Utkarsh Singhal",
      },
    ],
    url: "https://utkarsh-singhal.tech",
    type: "website",
  },
  authors: [{ name: "Utkarsh Singhal", url: "https://utkarsh-singhal.tech" }],
  keywords: [
    "Utkarsh Singhal",
    "Software Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Web Development",
  ],
  creator: "Utkarsh Singhal",
  publisher: "Utkarsh Singhal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
