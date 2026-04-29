import type { Metadata } from "next";
import WhatWeBuildContent from "@/components/WhatWeBuildContent";

export const metadata: Metadata = {
  title: "What We Build",
  description:
    "Custom websites and agentic AI systems — three tiers of each, built and scoped for your business.",
  alternates: {
    canonical: "https://www.auto-ascent.us/what-we-build",
  },
  openGraph: {
    title: "What We Build | AutoAscent",
    description:
      "Custom websites and agentic AI systems — three tiers of each, built and scoped for your business.",
    url: "https://www.auto-ascent.us/what-we-build",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
};

export default function WhatWeBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "What We Build | AutoAscent",
            url: "https://www.auto-ascent.us/what-we-build",
            description:
              "Custom websites and agentic AI systems — three tiers of each, built and scoped for your business.",
            author: { "@type": "Organization", name: "AutoAscent", url: "https://www.auto-ascent.us" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.auto-ascent.us" },
                { "@type": "ListItem", position: 2, name: "What We Build", item: "https://www.auto-ascent.us/what-we-build" },
              ],
            },
          }),
        }}
      />
      <WhatWeBuildContent />
    </>
  );
}
