export const prerender = true;

export async function GET() {
  // Define your site URLs
  const pages = [
    { url: '', lastMod: '2023-03-10', changeFreq: 'weekly', priority: '1.0' },
    { url: 'about', lastMod: '2023-03-10', changeFreq: 'monthly', priority: '0.8' },
    { url: 'custom', lastMod: '2023-03-10', changeFreq: 'weekly', priority: '0.9' },
    { url: 'color-system', lastMod: '2023-03-09', changeFreq: 'weekly', priority: '0.9' }
  ];

  const website = 'https://colorsystems.netlify.app';

  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${website}/${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
} 