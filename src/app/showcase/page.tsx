import type { Metadata } from "next";
import ShowcaseContent from "./ShowcaseContent";

export const metadata: Metadata = {
  title: "Interactive Showcase",
  description:
    "Five hand-coded interactive demos — portrait particles, eye tracking, fluid ink, warp grids, and neural pulse networks. Built by AutoAscent.",
  alternates: {
    canonical: "https://auto-ascent.us/showcase",
  },
};

export default function ShowcasePage() {
  return <ShowcaseContent />;
}
