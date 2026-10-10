const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: data
      }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Testing live production at https://vivek-dhoundiyal-portfolio.pages.dev ...\n');

  // Test robots.txt
  const robots = await fetchUrl('https://vivek-dhoundiyal-portfolio.pages.dev/robots.txt');
  console.log(`[robots.txt] HTTP ${robots.statusCode}`);
  console.log('Sitemap directive in robots.txt:', robots.body.includes('Sitemap: https://vivek-dhoundiyal-portfolio.pages.dev/sitemap.xml'));

  // Test sitemap.xml
  const sitemap = await fetchUrl('https://vivek-dhoundiyal-portfolio.pages.dev/sitemap.xml');
  console.log(`\n[sitemap.xml] HTTP ${sitemap.statusCode}`);
  console.log('Contains /work/hiresway/:', sitemap.body.includes('https://vivek-dhoundiyal-portfolio.pages.dev/work/hiresway/'));
  console.log('Contains /thinking (should be false):', sitemap.body.includes('<loc>https://vivek-dhoundiyal-portfolio.pages.dev/thinking'));

  // Test Sample Pages
  const pages = [
    '/',
    '/contact/',
    '/projects/',
    '/experience/',
    '/resume/',
    '/work/nuvio/',
    '/work/hiresway/',
    '/work/dark-kitchen/',
    '/capabilities/revenue-business-development/',
    '/experience/collegedunia/',
    '/blog/',
    '/blog/strategic-partnerships-gtm-playbook/'
  ];

  console.log('\n--- VERIFYING LIVE SAMPLE PAGES ---');
  for (const p of pages) {
    const fullUrl = `https://vivek-dhoundiyal-portfolio.pages.dev${p}`;
    const res = await fetchUrl(fullUrl);
    const canonMatch = res.body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    const canon = canonMatch ? canonMatch[1] : 'NONE';
    const canonCount = (res.body.match(/<link[^>]*rel=["']canonical["']/gi) || []).length;
    const h1Count = (res.body.match(/<h1[^>]*>/gi) || []).length;
    const hasForeignDomain = res.body.includes('https://vivekdhoundiyal.com');

    console.log(`${p.padEnd(45)} | Status: ${res.statusCode} | Canonicals: ${canonCount} | H1s: ${h1Count} | ForeignDomain: ${hasForeignDomain} | Canon: ${canon}`);
  }
}

run().catch(console.error);
