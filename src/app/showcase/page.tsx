import type { Metadata } from "next";
import ShowcaseContent from "./ShowcaseContent";

export const metadata: Metadata = {
  title: "Interactive Showcase",
  description:
    "Five hand-coded interactive demos — portrait particles, eye tracking, fluid ink, warp grids, and neural pulse networks. Built by AutoAscent.",
  alternates: {
    canonical: "https://www.auto-ascent.us/showcase",
  },
};

export default function ShowcasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Interactive Showcase | AutoAscent",
            url: "https://www.auto-ascent.us/showcase",
            description:
              "Five hand-coded interactive web demos demonstrating AutoAscent's front-end development capabilities.",
            author: { "@type": "Organization", name: "AutoAscent", url: "https://www.auto-ascent.us" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.auto-ascent.us" },
                { "@type": "ListItem", position: 2, name: "Showcase", item: "https://www.auto-ascent.us/showcase" },
              ],
            },
          }),
        }}
      />
      <ShowcaseContent />
    </>
  );
}
