import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import NavBar from "../components/NavBar";
import { inter } from "@/app/ui/fonts";

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
    description: "The React Framework for the Web",
    url: "https://mia-profile.vercel.app/",
    siteName: "Mia.blog",
    images: [
      {
        url: "https://mia-profile.vercel.app/og.png", // Must be an absolute URL
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
      <body className={`${inter.className} antialiased max-w-full`}>
        <NextUIProvider>
          <ThemeProvider attribute="class">
            <div className="md:px-20 md:pt-10">
              <NavBar />
            </div>
            <div className="px-6 md:px-20 md:my-10 my-6">{children}</div>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
