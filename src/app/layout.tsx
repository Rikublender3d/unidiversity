import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UniDiversity",
  description: "全国の大学のダイバーシティ推進を一元表示するサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
