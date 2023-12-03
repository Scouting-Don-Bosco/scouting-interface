import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scouting Don Bosco",
  description: "De website voor scouting Don Bosco Heerlerbaan",
  icons: [
    { rel: "icon", url: "/public/images/icons/icon.png" },
    { rel: "apple-touch-icon", url: "/public/images/apple-icon.png" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
