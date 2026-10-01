const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 3456;
const OUT_DIR = path.join(process.cwd(), 'out');

// MIME types
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

      // Directory index fallback
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found: ' + req.url);
      }
    });

    server.listen(PORT, () => {
      console.log(`Test static server running at http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function runBrowserTests() {
  const server = await startServer();
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const results = {
    urlsTested: [],
    consoleErrors: [],
    networkErrors: [],
    elementsFound: {},
    forbiddenStringsCheck: {},
    viewportsTested: [],
    overflowCheck: {}
  };

  try {
    const page = await browser.newPage();

    // Listen for console and network issues
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error('BROWSER CONSOLE ERROR:', msg.text());
        results.consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', err => {
      console.error('PAGE ERROR:', err.message);
      results.consoleErrors.push(err.message);
    });

    page.on('response', resp => {
      if (resp.status() >= 400) {
        console.error('FAILED REQUEST:', resp.status(), resp.url());
        results.networkErrors.push({ status: resp.status(), url: resp.url() });
      }
    });

    // 1. Test /work/careeros/
    console.log('\n--- Testing /work/careeros/ ---');
    await page.setViewport({ width: 1440, height: 900 });
    const response = await page.goto(`http://localhost:${PORT}/work/careeros/`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    results.urlsTested.push({ url: '/work/careeros/', status: response.status() });

    // Verify Title and Meta
    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);

    // Verify Forbidden Strings Check
    console.log('\n--- Checking for Forbidden Internal Metadata Strings ---');
    const forbiddenStrings = [
      '15 Slides',
      '15 Architectural Slides',
      '15 Architectural Chapters Directory',
      '[ ARTIFACT',
      'Inspect Slide',
      'Local Build Lab',
      '2752 × 1536',
      '1376 × 768'
    ];

    const bodyText = await page.evaluate(() => document.body.innerText);
    const forbiddenFound = forbiddenStrings.filter(s => bodyText.includes(s));
    console.log('Forbidden strings found on /work/careeros/:', forbiddenFound);
    results.forbiddenStringsCheck.workCareerOS = {
      forbiddenFound,
      pass: forbiddenFound.length === 0
    };

    if (forbiddenFound.length > 0) {
      throw new Error('Forbidden internal metadata strings found: ' + forbiddenFound.join(', '));
    }

    // Verify Infographic is present and rendered
    const infographicBox = await page.evaluate(() => {
      const img = document.querySelector('#operating-system-infographic img');
      if (!img) return null;
      const rect = img.getBoundingClientRect();
      return {
        src: img.src,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        width: rect.width,
        height: rect.height,
        visible: rect.width > 0 && rect.height > 0
      };
    });
    console.log('Infographic evaluation:', infographicBox);
    results.elementsFound.infographic = infographicBox;

    // Verify all 15 architecture chapters
    const chapters = await page.evaluate(() => {
      const list = [];
      for (let i = 1; i <= 15; i++) {
        const pad = String(i).padStart(2, '0');
        const el = document.getElementById('architecture-' + pad);
        if (el) {
          const title = el.querySelector('h3')?.innerText;
          const img = el.querySelector('img');
          const hasDesc = (el.querySelector('p')?.innerText.length || 0) > 20;
          const hasRationale = el.innerText.includes('Architectural Rationale');
          const hasImplication = el.innerText.includes('Product Implication');
          list.push({
            pageNumber: i,
            id: 'architecture-' + pad,
            title,
            imgSrc: img ? img.src : null,
            imgNaturalWidth: img ? img.naturalWidth : 0,
            hasDesc,
            hasRationale,
            hasImplication
          });
        }
      }
      return list;
    });
    console.log(`Found ${chapters.length} of 15 architecture chapters`);
    results.elementsFound.chaptersCount = chapters.length;
    results.elementsFound.chapters = chapters;

    // Verify Sections: System Summary, Product Thinking, Current State, Why I Built
    const otherSections = await page.evaluate(() => {
      return {
        systemSummary: Boolean(document.getElementById('system-summary')),
        productThinking: Boolean(document.getElementById('product-thinking')),
        currentState: Boolean(document.getElementById('current-state')),
        whyIBuilt: Boolean(document.getElementById('why-i-built'))
      };
    });
    console.log('Other Sections check:', otherSections);
    results.elementsFound.otherSections = otherSections;

    // Test Lightbox interaction
    console.log('\n--- Testing Lightbox interaction ---');
    await page.click('#operating-system-infographic img');
    await new Promise(r => setTimeout(r, 500));

    const lightboxOpen = await page.evaluate(() => {
      const modal = document.querySelector('.animate-fadeIn');
      return modal && modal.innerText.includes('Close (Esc)');
    });
    console.log('Lightbox opened on click:', lightboxOpen);

    // Press Escape
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 500));

    const lightboxClosed = await page.evaluate(() => {
      const modal = document.querySelector('.animate-fadeIn');
      return !modal;
    });
    console.log('Lightbox closed on Escape:', lightboxClosed);

    // Test Responsive Viewports & Horizontal Overflow
    console.log('\n--- Testing Responsive Viewports ---');
    const viewports = [
      { name: 'Desktop Large', width: 1440, height: 900 },
      { name: 'Laptop', width: 1280, height: 800 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Mobile', width: 375, height: 667 }
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await new Promise(r => setTimeout(r, 300));

      const overflow = await page.evaluate(() => {
        const scrollWidth = document.documentElement.scrollWidth;
        const innerWidth = window.innerWidth;
        return {
          scrollWidth,
          innerWidth,
          hasOverflow: scrollWidth > innerWidth
        };
      });

      console.log(`Viewport ${vp.name} (${vp.width}x${vp.height}): Overflow = ${overflow.hasOverflow} (scrollWidth: ${overflow.scrollWidth}, innerWidth: ${overflow.innerWidth})`);
      results.overflowCheck[vp.name] = overflow;
    }

    // 2. Test /careeros/ direct route as well
    console.log('\n--- Testing /careeros/ route ---');
    const directResponse = await page.goto(`http://localhost:${PORT}/careeros/`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    results.urlsTested.push({ url: '/careeros/', status: directResponse.status() });
    console.log('/careeros/ HTTP Status:', directResponse.status());

    const directBodyText = await page.evaluate(() => document.body.innerText);
    const directForbiddenFound = forbiddenStrings.filter(s => directBodyText.includes(s));
    results.forbiddenStringsCheck.directCareerOS = {
      forbiddenFound: directForbiddenFound,
      pass: directForbiddenFound.length === 0
    };

    // Save test report
    fs.writeFileSync('careeros_browser_test_report.json', JSON.stringify(results, null, 2));
    console.log('\nSaved full report to careeros_browser_test_report.json');

    // Take screenshot of CareerOS page
    await page.setViewport({ width: 1440, height: 900 });
    await page.screenshot({ path: 'public/images/careeros/careeros-case-study-hero.png', clip: { x: 0, y: 0, width: 1440, height: 1200 } });
    console.log('Saved screenshot of hero to public/images/careeros/careeros-case-study-hero.png');

  } catch (err) {
    console.error('Test execution error:', err);
    results.error = err.message;
  } finally {
    await browser.close();
    server.close();
    console.log('Server closed. Tests finished.');
  }
}

runBrowserTests();
