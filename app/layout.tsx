import { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Huong | Software Engineer Portfolio",
    template: "%s | Huong",
  },
  description:
    "Portfolio of Huong, an aspiring software engineer and Information Technology student.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps)  {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}