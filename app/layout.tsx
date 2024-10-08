import type { Metadata } from "next";

import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import NavBar from "../components/NavBar";
import Nav from "@/components/Nav";
import { inter } from "@/app/ui/fonts";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mia-profile.vercel.app/",
    types: {
      "application/rss+xml": [{ url: "feed.xml", title: "RSS" }],
    },
  },
  generator: "Next.js",
  applicationName: "MengYao.blog",
  keywords: [
    "MengYao Li",
    "MengYao",
    "Meituan",
    "Experience",
    "Software",
    "Developer",
  ],
  authors: [{ name: "MiaMia", url: "" }],
  creator: "MengYao LI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MengYao.blog",
    description:
      "Hello, I'm MengYao. 👋 I'm a cheerful software engineer with 5+ years of front-end experience. I love exploring new tech, optimizing code, and working with teams to create awesome projects!",
    url: "https://mia-profile.vercel.app/",
    siteName: "MengYao.blog",
    images: [
      {
        url: "https://mia-profile.vercel.app/og.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MengYao.Blog",
    description:
      "Hello, I'm MengYao. 👋 I'm a cheerful software engineer with 5+ years of front-end experience. I love exploring new tech, optimizing code, and working with teams to create awesome projects!",
    creator: "@MengYao",
    images: ["https://mia-profile.vercel.app/og.png"], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-full flex justify-center`}>
        <div className="min-h-screen md:mx-20 lg:mx-32 w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
          <NextUIProvider className="min-h-screen flex flex-col">
            <ThemeProvider attribute="class">
              <div className="md:px-20 md:pt-10">
                <Nav />
              </div>
              <div className="px-6 md:px-20 md:my-10 my-6 flex-1">
                {children}
              </div>
              <Footer />
            </ThemeProvider>
          </NextUIProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
