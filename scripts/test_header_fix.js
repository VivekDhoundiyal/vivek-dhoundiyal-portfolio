const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 3458;
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

async function runAudit() {
  const server = await startServer();
  const results = {
    scrollReloadTests: [],
    breakpointTests: [],
    resumeWordingTests: [],
    drawerTest: null
  };

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    console.log('\n--- 1. TESTING HEADER PINNING & SCROLLED RELOAD ---');
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });

    const scrollOffsets = [0, 500, 1500, 3000];
    for (const offset of scrollOffsets) {
      if (offset > 0) {
        await page.evaluate((y) => window.scrollTo(0, y), offset);
        await new Promise(r => setTimeout(r, 100));
        await page.reload({ waitUntil: 'networkidle0' });
      }

      const headerState = await page.evaluate(() => {
        const header = document.querySelector('header');
        if (!header) return null;
        const rect = header.getBoundingClientRect();
        return {
          scrollY: window.scrollY,
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height,
          position: window.getComputedStyle(header).position,
          zIndex: window.getComputedStyle(header).zIndex,
          visible: rect.top === 0 && rect.height > 0
        };
      });

      console.log(`Reload at scroll ${offset}px: Header top=${headerState?.top}px, visible=${headerState?.visible}, pos=${headerState?.position}`);
      results.scrollReloadTests.push({ offset, ...headerState });
    }

    console.log('\n--- 2. TESTING VIEWPORTS & "LET\'S TALK" CLIPPING ---');
    const viewports = [
      { width: 320, height: 640, label: 'Mobile 320px' },
      { width: 375, height: 667, label: 'Mobile 375px' },
      { width: 768, height: 1024, label: 'Tablet 768px' },
      { width: 1024, height: 768, label: 'Desktop 1024px' },
      { width: 1280, height: 800, label: 'Desktop 1280px' },
      { width: 1440, height: 900, label: 'Desktop 1440px' }
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });

      const metrics = await page.evaluate((expectedWidth) => {
        const header = document.querySelector('header');
        const scrollWidth = document.documentElement.scrollWidth;
        const clientWidth = document.documentElement.clientWidth;
        const hasHorizontalScroll = scrollWidth > clientWidth + 1;

        // Find Let's Talk button in header
        const buttons = Array.from(header ? header.querySelectorAll('button') : []);
        const letsTalkBtn = buttons.find(b => b.textContent.includes("Let's Talk"));
        const btnRect = letsTalkBtn ? letsTalkBtn.getBoundingClientRect() : null;

        return {
          expectedWidth,
          scrollWidth,
          clientWidth,
          hasHorizontalScroll,
          letsTalk: btnRect ? {
            found: true,
            left: Math.round(btnRect.left),
            right: Math.round(btnRect.right),
            width: Math.round(btnRect.width),
            height: Math.round(btnRect.height),
            clipped: btnRect.right > clientWidth || btnRect.left < 0
          } : { found: false }
        };
      }, vp.width);

      console.log(`${vp.label}: H-Scroll=${metrics.hasHorizontalScroll}, Let's Talk right=${metrics.letsTalk.right}px / clientWidth=${metrics.clientWidth}px (Clipped: ${metrics.letsTalk.clipped})`);
      results.breakpointTests.push({ viewport: vp.label, ...metrics });

      // Save screenshot for 1024px and 1440px
      if (vp.width === 1024 || vp.width === 1440) {
        await page.screenshot({
          path: path.join(ARTIFACTS_DIR, `live_header_${vp.width}px.png`),
          clip: { x: 0, y: 0, width: vp.width, height: 200 }
        });
      }
    }

    console.log('\n--- 3. TESTING MOBILE TOP HAMBURGER MENU DRAWER ---');
    await page.setViewport({ width: 375, height: 667 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });

    // Click hamburger button
    const drawerOpened = await page.evaluate(async () => {
      const header = document.querySelector('header');
      if (!header) return { error: 'No header found' };
      const hamburger = header.querySelector('button[aria-label*="navigation menu"]');
      if (!hamburger) return { error: 'No hamburger button found' };
      hamburger.click();
      return { clicked: true };
    });

    await new Promise(r => setTimeout(r, 400));

    const drawerState = await page.evaluate(() => {
      const drawer = document.querySelector('[aria-label="Mobile Navigation Drawer"]');
      if (!drawer) return { found: false };

      const links = Array.from(drawer.querySelectorAll('a')).map(a => ({
        text: a.textContent.trim(),
        href: a.getAttribute('href')
      }));

      const buttons = Array.from(drawer.querySelectorAll('button')).map(b => b.textContent.trim());

      return {
        found: true,
        linksCount: links.length,
        links: links.map(l => l.text),
        hasResumeView: links.some(l => l.text.includes('View Resume') && l.href === '/resume'),
        hasResumeDownload: links.some(l => l.text.includes('Download Resume') && l.href.includes('.pdf')),
        hasLetsTalk: buttons.some(b => b.includes("Let's Talk"))
      };
    });

    console.log(`Mobile Hamburger Drawer: found=${drawerState.found}, links=${drawerState.linksCount}, hasViewResume=${drawerState.hasResumeView}, hasDownloadResume=${drawerState.hasResumeDownload}, hasLetsTalk=${drawerState.hasLetsTalk}`);
    results.drawerTest = drawerState;

    // Screenshot open drawer
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, 'live_mobile_header_drawer.png')
    });

    console.log('\n--- 4. TESTING RESUME WORDING AUDIT ---');
    // Check home page and resume page
    for (const testPath of ['/', '/resume/']) {
      await page.goto(`http://localhost:${PORT}${testPath}`, { waitUntil: 'networkidle0' });
      const wordingAudit = await page.evaluate((p) => {
        const text = document.body.innerText;
        const badPatterns = [
          'Download PDF',
          'View PDF',
          'PDF Resume',
          'View Original PDF',
          'B2B Sales (PDF)',
          'Ops / PG (PDF)'
        ];

        const violations = badPatterns.filter(pattern => text.includes(pattern));
        const hasDownloadResume = text.includes('Download Resume');
        const hasViewResume = text.includes('View Resume');

        return {
          path: p,
          violations,
          clean: violations.length === 0,
          hasDownloadResume,
          hasViewResume
        };
      }, testPath);

      console.log(`Page ${testPath}: clean=${wordingAudit.clean}, violations=${JSON.stringify(wordingAudit.violations)}, hasDownloadResume=${wordingAudit.hasDownloadResume}, hasViewResume=${wordingAudit.hasViewResume}`);
      results.resumeWordingTests.push(wordingAudit);
    }

    console.log('\nAudit complete! Writing summary...');
    console.log(JSON.stringify(results, null, 2));

  } finally {
    await browser.close();
    server.close();
  }
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
