import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import { Manjari } from "next/font/google"; 

import { cn } from "@/lib/utils";

const fontManjari = Manjari({
  weight: ["100","400","700"],
  subsets: ["latin"],
  variable: "--font-manjari"
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Presentation",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased flex justify-center px-2",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}
