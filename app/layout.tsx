import type { Metadata } from "next";

import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import NavBar from "../components/NavBar";
import Nav from "@/components/Nav";
import { inter } from "@/app/ui/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mia-profile.vercel.app/",
    types: {
      "application/rss+xml": [{ url: "feed.xml", title: "RSS" }],
    },
  },
  generator: "Next.js",
  applicationName: "Mia-blog",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "MiaMia", url: "" }],
  creator: "MengYao LI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mia.blog",
    description:
      "Hello, I'm Mia. 👋 I'm a cheerful software engineer with 5+ years of front-end experience. I love exploring new tech, optimizing code, and working with teams to create awesome projects!",
    url: "https://mia-profile.vercel.app/",
    siteName: "Mia.blog",
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
    title: "MiaMiaLi-Blog",
    description: "MiaMiaLi-Blog",
    creator: "@MiaMia",
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
      <body
        className={`${inter.className} antialiased w-full flex justify-center`}>
        <div className="min-h-screen md:mx-20 lg:mx-32 w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
          <NextUIProvider>
            <ThemeProvider attribute="class">
              <div className="md:px-20 md:pt-10">
                <Nav />
              </div>
              <div className="px-6 md:px-20 md:my-10 my-6">{children}</div>
              <Footer />
            </ThemeProvider>
          </NextUIProvider>
        </div>
      </body>
    </html>
  );
}
