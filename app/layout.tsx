import type { Metadata } from "next";
import React from "react";
import "../styles/globals.css";
import "react-slideshow-image/dist/styles.css";

export const metadata: Metadata = {
  title: "iViolet",
  description: "iViolet Technology Inc.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
