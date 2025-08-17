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
  title: "Phat Tran | Software Developer",
  description:
    "Software developer specializing in Next.js, TypeScript and Node.js.",
  // openGraph: {
  //   title: "Phat Tran | Software Developer",
  //   description:
  //     "Software developer specializing in Next.js, TypeScript, and Node.js. Experienced in building scalable, high-performance applications.",
  //   url: "FILL_LATER", // TODO: Add URL
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://utkarsh-singhal.is-a.dev/opengraph-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Utkarsh Singhal | Software Developer",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  // },
  // authors: [
  //   { name: "Utkarsh Singhal", url: "https://utkarsh-singhal.is-a.dev/" },
  // ],
  // keywords: [
  //   "Utkarsh Singhal",
  //   "Software Developer",
  //   "Full-Stack Developer",
  //   "React",
  //   "Next.js",
  //   "TypeScript",
  //   "Node.js",
  //   "AWS",
  //   "GCP",
  //   "MongoDB",
  //   "Firebase",
  //   "Tailwind CSS",
  //   "Web Development",
  // ],
  // creator: "Utkarsh Singhal",
  // publisher: "Utkarsh Singhal",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
