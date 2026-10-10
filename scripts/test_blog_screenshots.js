const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const outDir = path.join(process.cwd(), 'out');
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const artifactDir = 'C:/Users/AG-3/.gemini/antigravity/brain/eb4a8836-1e8d-4b07-bcb4-b21a89d11437';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon'
};

function startServer(port = 3333) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0]);
      if (reqPath.endsWith('/')) reqPath += 'index.html';
      else if (!path.extname(reqPath)) reqPath += '/index.html';

      let filePath = path.join(outDir, reqPath);
      if (!fs.existsSync(filePath)) {
        filePath = path.join(outDir, '404.html');
      }

      const ext = path.extname(filePath);
      const mime = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
        } else {
          res.writeHead(200, { 'Content-Type': mime });
          res.end(data);
        }
      });
    });

    server.listen(port, () => {
      console.log(`Test server running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function run() {
  const server = await startServer(3333);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const viewports = [
    { width: 375, height: 812, name: 'mobile_375' },
    { width: 768, height: 1024, name: 'tablet_768' },
    { width: 1440, height: 900, name: 'desktop_1440' }
  ];

  console.log('\n--- 1. Testing Homepage Blog Section ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3333/#blog', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(artifactDir, 'test_homepage_blog_1440.png') });
  console.log('Saved test_homepage_blog_1440.png');

  console.log('\n--- 2. Testing Blog Index Page ---');
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3333/blog/', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(artifactDir, `test_blog_index_${vp.name}.png`) });
    console.log(`Saved test_blog_index_${vp.name}.png`);
  }

  console.log('\n--- 3. Testing Individual Article Page (/blog/validate-business-idea/) ---');
  for (const vp of [
    { width: 320, height: 600, name: 'mobile_320' },
    { width: 375, height: 812, name: 'mobile_375' },
    { width: 768, height: 1024, name: 'tablet_768' },
    { width: 1024, height: 768, name: 'desktop_1024' },
    { width: 1440, height: 900, name: 'desktop_1440' }
  ]) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3333/blog/validate-business-idea/', { waitUntil: 'networkidle0' });

    // Check horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const overflow = scrollWidth > clientWidth;
    console.log(`Viewport ${vp.width}px: scrollWidth=${scrollWidth}, clientWidth=${clientWidth}, overflow=${overflow ? 'YES (OVERFLOW!)' : 'NO (CLEAN)'}`);

    await page.screenshot({ path: path.join(artifactDir, `test_article_${vp.name}.png`) });
    console.log(`Saved test_article_${vp.name}.png`);
  }

  // Scroll down to test calculation block, checklist, FAQ, and stickers on desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3333/blog/validate-business-idea/', { waitUntil: 'networkidle0' });

  // Scroll to unit economics calculation block
  await page.evaluate(() => {
    const el = document.getElementById('7-check-whether-the-business-can-make-money');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(artifactDir, 'test_article_unit_economics_1440.png') });
  console.log('Saved test_article_unit_economics_1440.png');

  // Scroll to validation checklist
  await page.evaluate(() => {
    const el = document.getElementById('13-business-idea-validation-checklist');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(artifactDir, 'test_article_checklist_1440.png') });
  console.log('Saved test_article_checklist_1440.png');

  // Scroll to FAQ
  await page.evaluate(() => {
    const el = document.getElementById('14-frequently-asked-questions');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(artifactDir, 'test_article_faq_1440.png') });
  console.log('Saved test_article_faq_1440.png');

  await browser.close();
  server.close();
  console.log('Verification testing completed successfully!');
}

run().catch(console.error);
