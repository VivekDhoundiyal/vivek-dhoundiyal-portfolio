const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 3459;
const OUT_DIR = path.join(process.cwd(), 'out');
const ARTIFACTS_DIR = 'C:\\Users\\AG-3\\.gemini\\antigravity\\brain\\eb4a8836-1e8d-4b07-bcb4-b21a89d11437';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let parsedUrl = req.url.split('?')[0];
      let filePath = path.join(OUT_DIR, parsedUrl);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        res.writeHead(200, {
          'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
          'Access-Control-Allow-Origin': '*'
        });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    });

    server.listen(PORT, () => {
      console.log(`Test server running at http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function runTest() {
  const server = await startServer();
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    console.log('\n--- 1. DESKTOP EDUCATION & CERTIFICATIONS AUDIT (1280px) ---');
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`http://localhost:${PORT}/#education`, { waitUntil: 'networkidle0' });

    // Scroll to #education
    await page.evaluate(() => {
      const el = document.getElementById('education');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await new Promise(r => setTimeout(r, 400));

    // Audit cards
    const auditData = await page.evaluate(() => {
      const section = document.getElementById('education');
      if (!section) return { error: 'No #education section found' };

      // Find the certifications cards grid
      const headings = Array.from(section.querySelectorAll('h3'));
      const certHeader = headings.find(h => h.textContent.includes('Verified Certifications'));
      const certContainer = certHeader ? certHeader.closest('.space-y-4') : null;
      const cardsGrid = certContainer ? certContainer.querySelector('.grid') : null;
      const cards = cardsGrid ? Array.from(cardsGrid.children) : [];

      const parsedCards = cards.map((card, idx) => {
        const img = card.querySelector('img');
        const title = card.querySelector('h4');
        const links = Array.from(card.querySelectorAll('a'));
        const verifyLink = links.find(a => a.textContent.includes('Verify Certificate'));
        const rect = card.getBoundingClientRect();

        // Check for disallowed elements
        const text = card.innerText;
        const hasSkillPill = !!card.querySelector('.bg-slate-100');
        const hasBadge = !!card.querySelector('.bg-blue-50');
        const hasDescription = card.querySelectorAll('p').length > 0;

        return {
          index: idx,
          cardHeight: Math.round(rect.height),
          cardWidth: Math.round(rect.width),
          hasImage: !!img,
          imgSrc: img ? img.getAttribute('src') : null,
          titleText: title ? title.textContent.trim() : null,
          hasVerifyLink: !!verifyLink,
          verifyHref: verifyLink ? verifyLink.getAttribute('href') : null,
          verifyTarget: verifyLink ? verifyLink.getAttribute('target') : null,
          hasDisallowedDescription: hasDescription,
          hasDisallowedBadge: hasBadge,
          hasDisallowedSkillPill: hasSkillPill,
          totalLinksCount: links.length
        };
      });

      return {
        sectionHeight: Math.round(section.getBoundingClientRect().height),
        cardsCount: cards.length,
        cards: parsedCards
      };
    });

    console.log('Desktop Audit Results:');
    console.log(`Cards found: ${auditData.cardsCount}`);
    console.log(`Section height: ${auditData.sectionHeight}px`);
    auditData.cards.forEach(c => {
      console.log(`  Card ${c.index + 1}: "${c.titleText}"`);
      console.log(`    Image: ${c.imgSrc} (found: ${c.hasImage})`);
      console.log(`    Verify Link: ${c.verifyHref} (target: ${c.verifyTarget})`);
      console.log(`    Height: ${c.cardHeight}px | Clean of descriptions: ${!c.hasDisallowedDescription}`);
    });

    // Capture desktop screenshot of the certificate grid
    const sectionHandle = await page.$('#education');
    if (sectionHandle) {
      await sectionHandle.screenshot({
        path: path.join(ARTIFACTS_DIR, 'live_compact_education_desktop.png')
      });
      console.log('Saved live_compact_education_desktop.png');
    }

    // Test lightbox interaction
    console.log('\n--- 2. LIGHTBOX INTERACTION AUDIT ---');
    const firstThumb = await page.$('#education .grid > div:first-child .cursor-pointer');
    if (firstThumb) {
      await firstThumb.click();
      await new Promise(r => setTimeout(r, 400));

      const lightboxState = await page.evaluate(() => {
        const modal = document.querySelector('[role="dialog"]');
        if (!modal) return { open: false };
        const img = modal.querySelector('img');
        const verify = modal.querySelector('a');
        return {
          open: true,
          hasImage: !!img,
          verifyHref: verify ? verify.getAttribute('href') : null
        };
      });

      console.log(`Lightbox open: ${lightboxState.open}, hasImage: ${lightboxState.hasImage}, verify: ${lightboxState.verifyHref}`);

      await page.screenshot({
        path: path.join(ARTIFACTS_DIR, 'live_compact_education_lightbox.png')
      });
      console.log('Saved live_compact_education_lightbox.png');

      // Close modal
      const closeBtn = await page.$('[role="dialog"] button[aria-label="Close modal"]');
      if (closeBtn) await closeBtn.click();
      await new Promise(r => setTimeout(r, 300));
    }

    console.log('\n--- 3. MOBILE AUDIT (375px) ---');
    await page.setViewport({ width: 375, height: 750 });
    await page.goto(`http://localhost:${PORT}/#education`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => {
      const el = document.getElementById('education');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await new Promise(r => setTimeout(r, 400));

    const mobileMetrics = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      return {
        scrollWidth,
        clientWidth,
        hasHorizontalScroll: scrollWidth > clientWidth + 1
      };
    });

    console.log(`Mobile: H-Scroll: ${mobileMetrics.hasHorizontalScroll}`);

    const mobileSection = await page.$('#education');
    if (mobileSection) {
      await mobileSection.screenshot({
        path: path.join(ARTIFACTS_DIR, 'live_compact_education_mobile.png')
      });
      console.log('Saved live_compact_education_mobile.png');
    }

    console.log('\nAudit complete!');
  } finally {
    await browser.close();
    server.close();
  }
}

runTest().catch(err => {
  console.error('Audit error:', err);
  process.exit(1);
});
