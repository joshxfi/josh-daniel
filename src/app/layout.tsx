import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josh.omsimos.com"),
  title: "Josh Daniel",
  description: "Software developer. Built umamin.link, frameyu.com, and more.",
  openGraph: {
    title: "Josh Daniel",
    description:
      "Software developer. Built umamin.link, frameyu.com, and more.",
    url: "https://josh.omsimos.com",
    siteName: "Josh Daniel",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Josh Daniel",
    card: "summary_large_image",
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
        className={`${geistSans.variable} antialiased bg-background text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
