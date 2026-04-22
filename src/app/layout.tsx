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
    default: "AutoAscent | Zapier Automation for US Small Businesses",
    template: "%s | AutoAscent",
  },

  description:
    "AutoAscent builds custom Zapier automation workflows for US small businesses, marketing agencies, and eCommerce stores. Save 10+ hours per week. Projects from $1,000. Book a free discovery call.",

  keywords: [
    "Zapier automation",
    "Zapier expert",
    "Zapier consultant",
    "small business automation",
    "workflow automation service",
    "done for you Zapier",
    "automate small business",
    "no-code automation",
    "CRM automation",
    "ecommerce automation",
    "marketing agency automation",
    "Zapier workflows",
    "business process automation",
    "lead capture automation",
    "US small business tools",
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
    title: "AutoAscent | Zapier Automation for US Small Businesses",
    description:
      "Custom Zapier workflows that save US small businesses 10+ hours per week. Lead capture, eCommerce, agency operations & more. From $1,000.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "AutoAscent — Zapier Automation for US Small Businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AutoAscent | Zapier Automation for US Small Businesses",
    description:
      "Custom Zapier workflows that save US small businesses 10+ hours per week. From $1,000 per project.",
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
