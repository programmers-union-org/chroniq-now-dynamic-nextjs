import HomaPage from "@/components/HomaPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chroniq Now - Global News Hub: Breaking Headlines Worldwide Daily",
  description:
    "ChroniqNow - your trusted source for breaking global news, in-depth analysis and up-to-the-minute coverage of politics, business, culture and more.",
  authors: [{ name: "Chroniq Now Team", url: "https://chroniqnow.com" }],
  publisher: "Chroniq Now",
  metadataBase: new URL("https://chroniqnow.com"),
  alternates: {
    canonical: "https://chroniqnow.com/",
  },

  openGraph: {
    title: "Chroniq Now - Global News Hub: Breaking Headlines Worldwide Daily",
    description:
      "Chroniq Now - your trusted source for breaking global news, in-depth analysis and up-to-the-minute coverage of politics, business, culture and more.",
    url: "https://chroniqnow.com/",
    siteName: "Chroniq Now",
    images: [
      {
        url: "https://chroniqnow.com/images/ChroniqNow-logo.webp",
        width: 1200,
        height: 630,
        alt: "Chroniq Now Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chroniq Now - Global News Hub",
    description:
      "Chroniq Now - your trusted source for breaking global news, in-depth analysis and up-to-the-minute coverage of politics, business, culture and more.",
    creator: "@ChroniqNow",
    images: ["https://chroniqnow.com/images/ChroniqNow-logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/images/ChroniqNow-logo.webp",
    shortcut: "/images/ChroniqNow-logo.webp",
    apple: "/images/ChroniqNow-logo.webp",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: metadata.title,
        url: metadata.metadataBase?.toString() ?? "https://chroniqnow.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://chroniqnow.com/search?q={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      },
      {
        "@type": "WebPage",
        headline: "Home",
        url: metadata.metadataBase?.toString() ?? "https://chroniqnow.com/",
        keywords: [
          "chroniq now",
          "global news",
          "breaking news",
          "world headlines",
        ],
        isPartOf: {
          "@type": ["CreativeWork", "Product"],
          name: metadata.title,
          productID: "chroniqnow.com:standard",
        },
        publisher: {
          "@type": "Organization",
          name: metadata.publisher,
          logo: {
            "@type": "ImageObject",
            url: "https://chroniqnow.com/images/chroniqnow-logo.webp",
          },
        },
      },
      {
        "@type": "Organization",
        name: metadata.publisher,
        url: metadata.metadataBase?.toString() ?? "https://chroniqnow.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://chroniqnow.com/images/chroniqnow-logo.webp",
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
      />
      <HomaPage />
    </>
  );
}
