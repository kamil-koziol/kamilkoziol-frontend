import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React from "react";
import "../globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamil Kozioł | Portfolio",
  description: "Kamil Kozioł Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
