import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "./fonts/geist.woff2",
  variable: "--font-geist",
  weight: "400 600",
});

const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-garamond.woff2", weight: "500 600" },
    {
      path: "./fonts/cormorant-garamond-italic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Aurora Luna Star",
  description:
    "Explore Starseed Akashic Readings, sound activations, and guided meditation with Aurora Luna Star.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
