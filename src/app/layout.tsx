import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elisha-ibeabuchi.vercel.app"),
  title: {
    default: "Elisha Ibeabuchi — UI/UX Designer & Mobile App Developer",
    template: "%s · Elisha Ibeabuchi",
  },
  description:
    "Elisha Ibeabuchi is a UI/UX designer, mobile app developer and Founder & CEO of Crib. I build modern, user-focused mobile apps and digital experiences from first sketch to the App Store.",
  keywords: [
    "Elisha Ibeabuchi",
    "UI/UX Designer",
    "Mobile App Developer",
    "Flutter Developer",
    "Product Designer",
    "Crib",
    "Tranx",
    "Portfolio",
  ],
  authors: [{ name: "Elisha Ibeabuchi" }],
  openGraph: {
    title: "Elisha Ibeabuchi — UI/UX Designer & Mobile App Developer",
    description:
      "Modern, user-focused mobile apps and digital experiences. Founder & CEO of Crib, building Tranx.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
