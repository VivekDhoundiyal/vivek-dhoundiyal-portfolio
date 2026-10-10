const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const LIVE_URL = 'https://vivek-dhoundiyal-portfolio.pages.dev';
const ARTIFACTS_DIR = 'C:\\Users\\AG-3\\.gemini\\antigravity\\brain\\eb4a8836-1e8d-4b07-bcb4-b21a89d11437';

async function testLive() {
  console.log(`Connecting to ${LIVE_URL}...`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    // 1. Scrolled Reload Test on Live
    console.log('\n--- 1. LIVE SCROLLED RELOAD TEST ---');
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${LIVE_URL}/`, { waitUntil: 'networkidle2' });

    await page.evaluate(() => window.scrollTo(0, 600));
    await new Promise(r => setTimeout(r, 300));
    await page.reload({ waitUntil: 'networkidle2' });

    const liveHeaderState = await page.evaluate(() => {
      const header = document.querySelector('header');
      if (!header) return null;
      const rect = header.getBoundingClientRect();
      return {
        scrollY: window.scrollY,
        top: rect.top,
        height: rect.height,
        position: window.getComputedStyle(header).position,
        visible: rect.top === 0 && rect.height > 0
      };
    });

    console.log(`Live Scrolled Reload: top=${liveHeaderState?.top}px, visible=${liveHeaderState?.visible}, pos=${liveHeaderState?.position}`);

    // 2. Breakpoint Boundary Audit on Live
    console.log('\n--- 2. LIVE BREAKPOINT BOUNDARY AUDIT ---');
    const viewports = [
      { width: 320, height: 640, label: '320px' },
      { width: 375, height: 667, label: '375px' },
      { width: 768, height: 1024, label: '768px' },
      { width: 1024, height: 768, label: '1024px' },
      { width: 1280, height: 800, label: '1280px' },
      { width: 1440, height: 900, label: '1440px' }
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(`${LIVE_URL}/`, { waitUntil: 'networkidle2' });

      const metrics = await page.evaluate(() => {
        const header = document.querySelector('header');
        const scrollWidth = document.documentElement.scrollWidth;
        const clientWidth = document.documentElement.clientWidth;
        const buttons = Array.from(header ? header.querySelectorAll('button') : []);
        const letsTalkBtn = buttons.find(b => b.textContent.includes("Let's Talk"));
        const btnRect = letsTalkBtn ? letsTalkBtn.getBoundingClientRect() : null;

        return {
          scrollWidth,
          clientWidth,
          hasHScroll: scrollWidth > clientWidth + 1,
          letsTalkRight: btnRect ? Math.round(btnRect.right) : null,
          clipped: btnRect ? btnRect.right > clientWidth || btnRect.left < 0 : false
        };
      });

      console.log(`Live ${vp.label}: H-Scroll=${metrics.hasHScroll}, Let's Talk right=${metrics.letsTalkRight}px / clientWidth=${metrics.clientWidth}px (Clipped: ${metrics.clipped})`);
    }

    // 3. Capture Live Screenshots for Artifacts
    await page.setViewport({ width: 1024, height: 768 });
    await page.goto(`${LIVE_URL}/`, { waitUntil: 'networkidle2' });
    await page.screenshot({
      path: path.join(ARTIFACTS_DIR, 'live_deployed_header_1024px.png'),
      clip: { x: 0, y: 0, width: 1024, height: 180 }
    });

    await page.setViewport({ width: 375, height: 667 });
    await page.goto(`${LIVE_URL}/`, { waitUntil: 'networkidle2' });
    const hamburger = await page.$('header button[aria-label*="navigation menu"]');
    if (hamburger) {
      await hamburger.click();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({
        path: path.join(ARTIFACTS_DIR, 'live_deployed_mobile_drawer.png')
      });
    }

    console.log('Live audit complete!');
  } finally {
    await browser.close();
  }
}

testLive().catch(err => {
  console.error('Live test error:', err);
  process.exit(1);
});
