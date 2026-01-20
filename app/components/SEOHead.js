import Head from 'next/head';

export default function SEOHead({
  title = "Vikramaditya Singh - AI-First Product & Platform Leader",
  description = "AI-First Product & Platform Leader bringing scientific rigor, systems thinking, and business judgment to complex transformation programs.",
  image = "/images/og-image.jpg",
  url = "https://vikramadityasingh.tech",
  type = "website"
}) {
  const fullTitle = title.includes("Vikramaditya Singh") ? title : `${title} | Vikramaditya Singh`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Product Manager, AI, Machine Learning, Team Topologies, GovTech, Platform Leadership" />
      <meta name="author" content="Vikramaditya Singh" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vikramaditya Singh",
            "url": "https://vikramadityasingh.tech",
            "jobTitle": "Senior Product Manager",
            "email": "vikramaditya@u.northwestern.edu"
          })
        }}
      />
    </Head>
  );
}