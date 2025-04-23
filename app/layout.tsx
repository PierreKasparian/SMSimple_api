import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMSimple-API | Simplest way to send SMS via API ",
  description: "SMS simple API is an efficient and straightforward solution for sending SMS. It offers the simplest pricing structure and requires minimal code to get started.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="oVMRabtmqPF9wP2fzcL-hybEvhRQQ-WELrsD8bWE-I0" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
