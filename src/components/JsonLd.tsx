import Script from "next/script";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AutoAscent",
    url: "https://www.auto-ascent.us",
    email: "seanmatthee@auto-ascent.us",
    telephone: "+27713854935",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Centurion",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    description:
      "Custom websites and Zapier automation workflows for businesses worldwide.",
    founder: { "@type": "Person", name: "Sean Matthee" },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Design",
            description:
              "Professionally designed websites built from scratch for your business.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zapier Workflow Automation",
            description:
              "Custom multi-step Zapier workflows connecting your business tools.",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
