import StyledComponentsRegistry from "../lib/registry";
import type { Metadata } from "next";

import Script from "next/script";

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=MN4P7J6W" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'MN4P7J6W');
        `}
      </Script>
      <body className={NotoSansKr.className}>{children}</body>
    </html>
  );
}
