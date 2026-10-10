const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const LIVE_URL = 'https://vivek-dhoundiyal-portfolio.pages.dev';
const ARTIFACTS_DIR = 'C:\\Users\\AG-3\\.gemini\\antigravity\\brain\\eb4a8836-1e8d-4b07-bcb4-b21a89d11437';

async function testLive() {
  console.log(`Connecting to ${LIVE_URL}/#education...`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`${LIVE_URL}/#education`, { waitUntil: 'networkidle2' });

    await page.evaluate(() => {
      const el = document.getElementById('education');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await new Promise(r => setTimeout(r, 500));

    const liveData = await page.evaluate(() => {
      const section = document.getElementById('education');
      if (!section) return { error: 'No #education section' };

      const certsHeading = Array.from(section.querySelectorAll('h3')).find(h => h.textContent.includes('Verified Certification'));
      const cards = section.querySelectorAll('img[alt*="Certificate"], img[alt*="Google Project"], img[alt*="Data Science"], img[alt*="Innovation"]');
      const cardContainers = Array.from(cards).map(img => img.closest('.rounded-2xl, .rounded-3xl'));

      return {
        cardsCount: cardContainers.length,
        cards: cardContainers.map(c => {
          const title = c.querySelector('h4');
          const link = c.querySelector('a');
          const hasDesc = c.querySelectorAll('p').length > 0;
          return {
            title: title ? title.textContent.trim() : null,
            verifyLink: link ? link.getAttribute('href') : null,
            hasDesc
          };
        })
      };
    });

    console.log(`Live Cards Count: ${liveData.cardsCount}`);
    liveData.cards.forEach((c, i) => {
      console.log(`  Card ${i + 1}: "${c.title}" -> ${c.verifyLink} (hasDesc: ${c.hasDesc})`);
    });

    const isDeployed = liveData.cardsCount === 3 && liveData.cards[0].hasDesc === false;
    console.log(`Live Deployment Status: ${isDeployed ? 'SUCCESSFULLY DEPLOYED' : 'PENDING'}`);

    if (isDeployed) {
      const sectionHandle = await page.$('#education');
      if (sectionHandle) {
        await sectionHandle.screenshot({
          path: path.join(ARTIFACTS_DIR, 'live_deployed_compact_education_desktop.png')
        });
        console.log('Saved live_deployed_compact_education_desktop.png');
      }

      await page.setViewport({ width: 375, height: 750 });
      await page.goto(`${LIVE_URL}/#education`, { waitUntil: 'networkidle2' });
      await page.evaluate(() => {
        const el = document.getElementById('education');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
      await new Promise(r => setTimeout(r, 400));
      const mobileSection = await page.$('#education');
      if (mobileSection) {
        await mobileSection.screenshot({
          path: path.join(ARTIFACTS_DIR, 'live_deployed_compact_education_mobile.png')
        });
        console.log('Saved live_deployed_compact_education_mobile.png');
      }
    }

    return isDeployed;
  } finally {
    await browser.close();
  }
}

testLive().then(deployed => {
  if (!deployed) {
    console.log('Build still propagating, will retry...');
    process.exit(2);
  }
}).catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
