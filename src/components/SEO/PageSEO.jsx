import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://loremtextgenerator.com';
const DEFAULT_IMAGE = `${SITE_URL}/site-logo.png`;
const SITE_NAME = 'Lorem Text Generator';

const PageSEO = ({
  title,
  description,
  keywords = '',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  locale = 'en_US',
  schema,
  noIndex = false
}) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonical = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      {/* Indexing */}
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />

      {/* Structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default PageSEO;

