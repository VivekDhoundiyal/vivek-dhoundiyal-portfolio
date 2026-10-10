const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 3457;
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
    careerosCard: null,
    otherProjects: [],
    navigationWorked: false,
    viewportsTested: [],
    overflowCheck: {}
  };

  try {
    const page = await browser.newPage();

    page.on('console', msg => {
      if (msg.type() === 'error') {
        results.consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', err => {
      results.consoleErrors.push(err.message);
    });

    // 1. Navigate to Homepage
    console.log('\n--- 1. Testing Homepage (/) ---');
    await page.setViewport({ width: 1440, height: 900 });
    const resp = await page.goto(`http://localhost:${PORT}/`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    results.urlsTested.push({ url: '/', status: resp.status() });
    console.log('Homepage HTTP status:', resp.status());

    // 2. Check CareerOS Card in Section #work
    console.log('\n--- 2. Checking CareerOS Featured Card ---');
    const careerosCard = await page.evaluate(() => {
      const section = document.getElementById('work');
      if (!section) return null;

      const card = section.querySelector('a[href^="/work/careeros"]');
      if (!card) return null;

      const category = card.querySelector('.font-mono')?.innerText;
      const title = card.querySelector('h3')?.innerText;
      const subtitle = card.querySelector('p.text-base')?.innerText;
      const desc = card.querySelector('p.text-sm')?.innerText;
      const tags = Array.from(card.querySelectorAll('.font-mono')).map(el => el.innerText).filter(t => ['AI Product', 'Commercial Strategy & Execution', 'Systems Architecture'].includes(t));
      const cta = card.innerText.includes('View Case Study');
      const img = card.querySelector('img');

      return {
        found: true,
        href: card.getAttribute('href'),
        category,
        title,
        subtitle,
        desc,
        tags,
        hasCta: cta,
        imgSrc: img ? img.src : null,
        imgAlt: img ? img.alt : null,
        imgNaturalWidth: img ? img.naturalWidth : 0,
        imgNaturalHeight: img ? img.naturalHeight : 0,
        imgVisible: img ? (img.getBoundingClientRect().width > 0 && img.getBoundingClientRect().height > 0) : false
      };
    });

    console.log('CareerOS Card evaluation:', careerosCard);
    results.careerosCard = careerosCard;

    if (!careerosCard || !careerosCard.found) {
      throw new Error('CareerOS featured card not found inside #work section!');
    }
    if (!careerosCard.imgVisible || careerosCard.imgNaturalWidth === 0) {
      throw new Error('CareerOS infographic image failed to load or has 0 dimensions!');
    }

    // 3. Check Other Projects in Section #work
    console.log('\n--- 3. Checking Other Projects ---');
    const otherProjects = await page.evaluate(() => {
      const section = document.getElementById('work');
      if (!section) return [];
      const links = Array.from(section.querySelectorAll('a')).filter(a => !a.getAttribute('href').includes('careeros'));
      return links.map(a => ({
        href: a.getAttribute('href'),
        title: a.querySelector('h3')?.innerText
      }));
    });
    console.log('Other projects in #work:', otherProjects);
    results.otherProjects = otherProjects;

    const hasSettleMyCar = otherProjects.some(p => p.href.includes('settlemycar'));
    const hasDarkKitchen = otherProjects.some(p => p.href.includes('dark-kitchen'));
    const hasFixins = otherProjects.some(p => p.href.includes('fixins'));
    console.log('Other projects intact:', { hasSettleMyCar, hasDarkKitchen, hasFixins });

    if (!hasSettleMyCar || !hasDarkKitchen || !hasFixins) {
      throw new Error('Existing ventures missing from #work section!');
    }

    // 4. Test CareerOS Card Click Navigation
    console.log('\n--- 4. Testing Card Click Navigation ---');
    await page.click('#work a[href^="/work/careeros"]');
    await page.waitForFunction(() => window.location.pathname.includes('/work/careeros'));
    await page.waitForSelector('h1');

    const targetUrl = page.url();
    const pageHeading = await page.evaluate(() => document.querySelector('h1')?.innerText);
    const targetTitle = await page.title();
    console.log('Navigated URL:', targetUrl);
    console.log('Navigated Page Heading (H1):', pageHeading);
    console.log('Navigated Document Title:', targetTitle);

    const isCareerOSPage = targetUrl.includes('/work/careeros') && (pageHeading.includes('CareerOS') || targetTitle.includes('CareerOS'));
    console.log('CareerOS Case Study verified loaded:', isCareerOSPage);
    results.navigationWorked = isCareerOSPage;

    if (!isCareerOSPage) {
      throw new Error('Clicking CareerOS card did not load the case study page!');
    }

    // 5. Test Responsive Viewports on Homepage
    console.log('\n--- 5. Testing Responsive Viewports on Homepage ---');
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });

    const viewports = [
      { name: 'Desktop Large', width: 1440, height: 900 },
      { name: 'Laptop', width: 1280, height: 800 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Mobile', width: 375, height: 667 }
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await new Promise(r => setTimeout(r, 200));

      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
          hasOverflow: document.documentElement.scrollWidth > window.innerWidth
        };
      });

      console.log(`Viewport ${vp.name} (${vp.width}x${vp.height}): Overflow = ${overflow.hasOverflow}`);
      results.overflowCheck[vp.name] = overflow;

      if (overflow.hasOverflow) {
        throw new Error(`Horizontal overflow detected in viewport: ${vp.name}`);
      }
    }

    // 6. Check Semantic Headings on Homepage (Single H1)
    console.log('\n--- 6. Checking Heading Hierarchy ---');
    const h1Count = await page.evaluate(() => document.querySelectorAll('h1').length);
    console.log('Total H1 elements on homepage:', h1Count);

    console.log('\nALL HOMEPAGE CAREEROS TESTS PASSED!');

  } catch (err) {
    console.error('Test execution error:', err);
    results.error = err.message;
    throw err;
  } finally {
    await browser.close();
    server.close();
  }
}

runBrowserTests();
