"use client";
import StyledComponentsRegistry from "../lib/registry";
import "./globals.css";
import { Inter } from "next/font/google";
import theme from "@/style/theme";
import GlobalStyle from "@/style/GlobalStyle";
import { ThemeProvider } from "styled-components";

import { NotoSansKr } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <body className={NotoSansKr.className}>{children}</body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
