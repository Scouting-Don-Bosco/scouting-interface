import { NavMenu } from "@/components/nav/nav.menu";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavMenu />

      <main className="flex items-center justify-between px-24 py-12">
        {children}
      </main>
    </>
  );
}
