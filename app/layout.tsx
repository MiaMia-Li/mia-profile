import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import NavBar from "../components/NavBar";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Next.js",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "MiaMia", url: "" }],
  creator: "MengYao LI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
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
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
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
            <div className="px-6 md:px-60 md:mt-10 mt-6">{children}</div>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
