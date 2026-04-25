import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auto-ascent.us"),

  title: {
    default: "AutoAscent | Web Design & Automation for Businesses Worldwide",
    template: "%s | AutoAscent",
  },

  description:
    "AutoAscent builds custom websites and Zapier automation workflows for businesses worldwide. From landing pages to full eCommerce stores and no-code integrations. Free discovery call.",

  keywords: [
    "web design agency",
    "custom website design",
    "landing page design",
    "eCommerce website",
    "Zapier automation",
    "Zapier expert",
    "workflow automation service",
    "done for you Zapier",
    "no-code automation",
    "CRM automation",
    "business process automation",
    "small business web design",
    "website for small business",
    "automation and web design",
    "digital services agency",
  ],

  authors: [{ name: "AutoAscent", url: "https://auto-ascent.us" }],
  creator: "AutoAscent",
  publisher: "AutoAscent",

  alternates: {
    canonical: "https://auto-ascent.us",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auto-ascent.us",
    siteName: "AutoAscent",
    title: "AutoAscent | Web Design & Automation for Businesses Worldwide",
    description:
      "Custom websites and Zapier automation workflows for businesses worldwide. We build what your business needs to grow — from landing pages to no-code integrations.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "AutoAscent — Web Design & Automation for Businesses Worldwide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AutoAscent | Web Design & Automation for Businesses Worldwide",
    description:
      "Custom websites and Zapier workflows for businesses worldwide. Free discovery call.",
    images: ["/og"],
    creator: "@autoascent",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
