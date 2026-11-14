import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, GOOGLE_SITE_VERIFICATION } from "@/lib/site";

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

const TITLE = "Elisha Ibeabuchi — UI/UX Designer & Mobile App Developer";
const DESCRIPTION =
  "Elisha Ibeabuchi is a UI/UX designer, mobile app developer and Founder & CEO of Crib. I build modern, user-focused mobile apps and digital experiences from first sketch to the App Store.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Elisha Ibeabuchi",
  },
  description: DESCRIPTION,
  keywords: [
    "Elisha Ibeabuchi",
    "UI/UX Designer",
    "Mobile App Developer",
    "Flutter Developer",
    "Product Designer",
    "App Designer Nigeria",
    "Crib",
    "Tranx",
    "Portfolio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    title: TITLE,
    description:
      "Modern, user-focused mobile apps and digital experiences. Founder & CEO of Crib, building Tranx.",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Modern, user-focused mobile apps and digital experiences. Founder & CEO of Crib, building Tranx.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#22d3ee",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Elisha Ibeabuchi",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      jobTitle: "UI/UX Designer & Mobile App Developer",
      description: DESCRIPTION,
      email: "mailto:Ibeabuchielisha@gmail.com",
      worksFor: { "@type": "Organization", name: "Crib" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Enugu",
        addressCountry: "NG",
      },
      knowsAbout: [
        "UI/UX Design",
        "Product Design",
        "Mobile App Development",
        "Flutter",
        "Fintech",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
