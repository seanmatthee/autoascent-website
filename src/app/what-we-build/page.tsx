import type { Metadata } from "next";
import WhatWeBuildContent from "@/components/WhatWeBuildContent";

export const metadata: Metadata = {
  title: "What We Build",
  description:
    "Custom websites and agentic AI systems — three tiers of each, built and scoped for your business.",
  alternates: {
    canonical: "https://auto-ascent.us/what-we-build",
  },
  openGraph: {
    title: "What We Build | AutoAscent",
    description:
      "Custom websites and agentic AI systems — three tiers of each, built and scoped for your business.",
    url: "https://auto-ascent.us/what-we-build",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
};

export default function WhatWeBuildPage() {
  return <WhatWeBuildContent />;
}
