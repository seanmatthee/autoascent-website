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
        "description": "AutoAscent builds custom Zapier automation workflows for US small businesses, marketing agencies, and eCommerce stores.",
        "email": "seanmatthee@auto-ascent.us",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Centurion",
          "addressCountry": "ZA"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": "Zapier Automation",
        "priceRange": "$1,000 - $2,000",
        "knowsAbout": [
          "Zapier automation",
          "workflow automation",
          "business process automation",
          "no-code automation",
          "CRM integration",
          "eCommerce automation"
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
        "description": "Zapier Automation for US Small Businesses",
        "publisher": { "@id": "https://auto-ascent.us/#business" }
      },
      {
        "@type": "Service",
        "name": "Zapier Workflow Automation",
        "provider": { "@id": "https://auto-ascent.us/#business" },
        "serviceType": "Business Process Automation",
        "areaServed": "United States",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "1000",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "1000",
            "maxPrice": "2000",
            "priceCurrency": "USD"
          }
        }
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
