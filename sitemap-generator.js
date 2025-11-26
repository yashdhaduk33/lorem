// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const hostname = 'https://loremtextgenerator.com'; 
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  const now = new Date().toISOString();

  const links = [
    // Main pages
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/termsconditions', changefreq: 'yearly', priority: 0.5 },

    // Tools / Generators
    { url: '/lorem-picsum', changefreq: 'weekly', priority: 0.9 },
    { url: '/loremipsumgenerator', changefreq: 'weekly', priority: 0.9 },
    { url: '/name-generator', changefreq: 'weekly', priority: 0.9 },
    { url: '/word-counter', changefreq: 'weekly', priority: 0.9 },
    { url: '/case-converter', changefreq: 'weekly', priority: 0.9 },
    { url: '/emoji-text-generator', changefreq: 'weekly', priority: 0.9 },
    { url: '/text-case-converter', changefreq: 'weekly', priority: 0.9 },
    { url: '/metadescriptioncreator', changefreq: 'weekly', priority: 0.9 },

    // Pet tools
    { url: '/pet-name-generator', changefreq: 'weekly', priority: 0.9 },
    { url: '/dog-name-generator', changefreq: 'weekly', priority: 0.9 },
    { url: '/puppy-name-generator', changefreq: 'weekly', priority: 0.9 },
    { url: '/cat-name-generator', changefreq: 'weekly', priority: 0.9 },

    // SEO tools
    { url: '/quote-generator', changefreq: 'weekly', priority: 0.9 },
    { url: '/instagram-hashtag-generator', changefreq: 'weekly', priority: 0.9 },
    { url: '/wedding-hashtag-generator', changefreq: 'weekly', priority: 0.9 },

    // ➕ NEW TOOLS (added)
    { url: '/dog-age-calculator', changefreq: 'weekly', priority: 0.9 },
    { url: '/chronological-age-calculator', changefreq: 'weekly', priority: 0.9 },
  ];

  // Auto assign lastmod date
  links.forEach(link => {
    sitemap.write({
      ...link,
      lastmod: now
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);

  console.log('✅ Sitemap successfully created: public/sitemap.xml');
}

generateSitemap().catch(err => console.error('❌ Error generating sitemap:', err));
