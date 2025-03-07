import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  canonicalUrl?: string;
  children?: React.ReactNode;
}

export function SEO({
  title = "Concordia Classical Academy",
  description = "Concordia Classical Academy is a classical Christian school in North Mankato, MN, providing excellence in education through a Christ-centered, classical curriculum.",
  keywords = [
    "classical education",
    "Christian school",
    "private school",
    "North Mankato",
    "Minnesota",
    "classical Christian education",
    "Concordia Classical Academy",
    "K-12 education",
    "Lutheran school",
    "classical curriculum",
    "Christian values",
    "trivium",
    "grammar stage",
    "logic stage",
    "rhetoric stage",
  ],
  ogImage = "/images/og-image.jpg", // Default OG image path
  ogType = "website",
  canonicalUrl,
  children,
}: SEOProps) {
  // Construct the full title with brand name
  const fullTitle =
    title === "Concordia Classical Academy"
      ? title
      : `${title} | Concordia Classical Academy`;

  // Ensure canonical URL is absolute
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ccamankato.org";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Concordia Classical Academy" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO-friendly meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#ffffff" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Concordia Classical Academy",
          description: description,
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "2101 Lor Ray Drive",
            addressLocality: "North Mankato",
            addressRegion: "MN",
            postalCode: "56001",
            addressCountry: "US",
          },
          telephone: "507-304-7430",
          email: "ccamankato@gmail.com",
          sameAs: [
            "https://www.facebook.com/concordiaclassicalacademy",
            // Add other social media URLs here
          ],
        })}
      </script>

      {children}
    </Head>
  );
}
