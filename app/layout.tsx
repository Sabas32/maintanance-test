import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "ISCC | Under Maintenance",
  description: "INTERSCHOOL CODING COMPETITION is currently under maintenance.",
  icons: {
    icon: "/images/iscc-logo.png",
    shortcut: "/images/iscc-logo.png",
    apple: "/images/iscc-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-ui`}>{children}</body>
    </html>
  );
}
