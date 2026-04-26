import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.auto-ascent.us/sitemap.xml",
    host: "https://www.auto-ascent.us",
  };
}
