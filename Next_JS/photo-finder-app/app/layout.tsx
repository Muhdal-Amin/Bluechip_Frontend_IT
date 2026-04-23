import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo Finder App",
  description: "A simple photo search app built with Next.js and the Unsplash API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
