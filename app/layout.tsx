import StyledComponentsRegistry from "../lib/registry";
import type { Metadata } from "next";
import Head from "next/head";

import { NotoSansKr } from "./fonts";

export const metadata: Metadata = {
  title: "ykmo's portfolio",
  description: "ykmo's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={NotoSansKr.className}>{children}</body>
    </html>
  );
}
