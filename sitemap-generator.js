// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const hostname = 'https://loremtextgenerator.com';
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

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
    { url: '/textcaseconverter', changefreq: 'weekly', priority: 0.9 },
    { url: '/metadescriptioncreator', changefreq: 'weekly', priority: 0.9 },
  ];

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap successfully created: public/sitemap.xml');
}

generateSitemap().catch(err => console.error('❌ Error generating sitemap:', err));
