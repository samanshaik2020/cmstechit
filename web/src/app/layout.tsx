import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
        className={`${montserrat.variable} antialiased bg-background text-text font-sans`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
