export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://auto-ascent.us/#business",
        "name": "AutoAscent",
        "url": "https://auto-ascent.us",
        "logo": "https://auto-ascent.us/logo-black.png",
        "image": "https://auto-ascent.us/og",
        "description": "AutoAscent builds custom websites and Zapier automation workflows for businesses worldwide.",
        "email": "seanmatthee@auto-ascent.us",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Centurion",
          "addressCountry": "ZA"
        },
        "areaServed": "Worldwide",
        "serviceType": ["Web Design", "Zapier Automation", "eCommerce Development"],
        "knowsAbout": [
          "web design",
          "website development",
          "landing page design",
          "eCommerce websites",
          "Shopify development",
          "Zapier automation",
          "workflow automation",
          "business process automation",
          "no-code automation",
          "CRM integration"
        ],
        "sameAs": [
          "https://auto-ascent.us"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://auto-ascent.us/#website",
        "url": "https://auto-ascent.us",
        "name": "AutoAscent",
        "description": "Web Design & Automation for Businesses Worldwide",
        "publisher": { "@id": "https://auto-ascent.us/#business" }
      },
      {
        "@type": "Service",
        "name": "Custom Website Design",
        "provider": { "@id": "https://auto-ascent.us/#business" },
        "serviceType": "Web Design",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "name": "Zapier Workflow Automation",
        "provider": { "@id": "https://auto-ascent.us/#business" },
        "serviceType": "Business Process Automation",
        "areaServed": "Worldwide"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
