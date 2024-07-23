import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh Daniel",
  description:
    "Open-source software developer. Built umamin.link, frameyu.com, more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-background text-zinc-100`}>{children}</body>
    </html>
  );
}
