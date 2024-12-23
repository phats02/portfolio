import KProvider from "@/components/kprovider/KProvider";
import CommandBarInvoker from "@/components/kprovider/commandBarInvoker";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Josefin_Sans, Sen } from "next/font/google";
import Script from "next/script";
import defaultSEOConfig from "../../next-seo.config";
import "./globals.css";

export const sen = Sen({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sen",
});

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: defaultSEOConfig.title,
  description: defaultSEOConfig.description,
  openGraph: {
    ...defaultSEOConfig.openGraph,
  },
  alternates: {
    canonical: defaultSEOConfig.canonical,
  },
  keywords: [
    "Fullstack Developer",
    "React",
    "Web Development",
    "Utkarsh Singhal",
  ],
  authors: [{ name: "Utkarsh Singhal" }],
  creator: "Utkarsh Singhal",
  publisher: "Utkarsh Singhal",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sen.variable} ${josefinSans.variable}`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Utkarsh Singhal",
              url: "https://utkarsh-singhal.tech/",
              sameAs: [
                defaultSEOConfig.openGraph.links.github,
                defaultSEOConfig.openGraph.links.linkedin,
              ],
              jobTitle: "Fullstack Developer",
            }),
          }}
        />
      </head>

      <body
        className={`${sen.className} w-screen min-h-screen relative m-0 p-0 overflow-x-hidden flex flex-col items-center`}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          <div className="absolute left-8 top-16 -z-10 overflow-visible opacity-20">
            <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-red-700 mix-blend-multiply blur-[128px]" />
          </div>
          <div className="absolute left-10 top-32 -z-10 overflow-visible opacity-20">
            <div className="circle-2 -z-10 h-[400px] w-[700px] rounded-full bg-green-700 mix-blend-multiply blur-[128px]" />
          </div>
          <div className="absolute left-12 top-48 -z-10 overflow-visible opacity-20">
            <div className="circle-3 -z-10 h-[600px] w-[500px] rounded-full bg-blue-700 mix-blend-multiply blur-[128px]" />
          </div>
          <div className="absolute right-8 bottom-16 -z-10 overflow-visible opacity-20">
            <div className="circle-4 -z-10 h-[400px] w-[700px] rounded-full bg-purple-700 mix-blend-multiply blur-[128px]" />
          </div>
          <div className="absolute right-10 bottom-32 -z-10 overflow-visible opacity-20">
            <div className="circle-5 -z-10 h-[400px] w-[700px] rounded-full bg-yellow-700 mix-blend-multiply blur-[128px]" />
          </div>
          <div className="absolute right-12 bottom-48 -z-10 overflow-visible opacity-20">
            <div className="circle-6 -z-10 h-[600px] w-[500px] rounded-full bg-cyan-700 mix-blend-multiply blur-[128px]" />
          </div>
        </div>
        <Header />
        <KProvider>
          <main className="z-10 relative w-full flex flex-col items-center">
            {children}
            <Footer />
          </main>
          <CommandBarInvoker />
        </KProvider>

        <Analytics />
      </body>
    </html>
  );
}
