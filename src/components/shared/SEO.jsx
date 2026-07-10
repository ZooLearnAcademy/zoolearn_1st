import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = 'ZooLearn, Biology, Learning, Education, Taxonomy, Zoology, Organisms',
  canonicalUrl,
  type = 'website',
  image = 'https://res.cloudinary.com/duibfmcw1/image/upload/v1765947727/logopng_2_webaac.png',
  schema,
  author = 'ZooLearn Academy',
  noSuffix = false
}) => {
  const siteName = 'ZooLearn';
  const fullTitle = noSuffix ? title : `${title} | ${siteName}`;
  const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `https://zoolearn.in${canonicalUrl}`) : 'https://zoolearn.in';

  // Base Organization Schema to always include
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZooLearn Academy",
    "url": "https://zoolearn.in",
    "logo": "https://res.cloudinary.com/duibfmcw1/image/upload/v1765947727/logopng_2_webaac.png",
    "description": "A modern Biology learning platform designed for interactive and student-friendly learning."
  };

  // Merge base schema with provided page schema if any
  const combinedSchema = schema 
    ? (Array.isArray(schema) ? [baseSchema, ...schema] : [baseSchema, schema])
    : baseSchema;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="language" content="English" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ZooLearn" />
      <meta name="twitter:site" content="@ZooLearn" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
