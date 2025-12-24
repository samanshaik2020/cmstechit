import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CMS Tech IT | Engineering the Digital Backbone",
  description: "CMS Tech IT designs scalable ecosystems, from robust web applications to advanced enterprise automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased bg-background text-text font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
