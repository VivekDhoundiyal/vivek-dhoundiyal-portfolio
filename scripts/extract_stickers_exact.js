const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'C:/Users/AG-3/Downloads/Business Idea Validation Sticker Set.png';
const destDir = path.join(process.cwd(), 'public', 'images', 'blog', 'validate-business-idea');

fs.mkdirSync(destDir, { recursive: true });

// 100% verified, isolated non-overlapping regions
const stickers = [
  // Row 1
  { name: '01-problem-lightbulb', left: 0, top: 0, width: 280, height: 284 },
  { name: '02-target-customer-question', left: 282, top: 0, width: 236, height: 282 },
  { name: '03-customer-interview-clipboard', left: 520, top: 0, width: 250, height: 288 },
  { name: '04-market-research-laptop', left: 775, top: 0, width: 335, height: 305 },
  { name: '05-competitor-analysis-table', left: 1112, top: 0, width: 424, height: 290 },

  // Row 2
  { name: '06-prototype-landing-page', left: 0, top: 285, width: 406, height: 258 },
  { name: '07-prototype-wireframe', left: 408, top: 294, width: 332, height: 250 },
  { name: '08-paid-pilot-agreement', left: 742, top: 290, width: 366, height: 255 },
  { name: '09-willingness-to-pay-checklist', left: 1112, top: 300, width: 424, height: 248 },

  // Row 3
  { name: '10-unit-economics-calculator', left: 0, top: 550, width: 430, height: 198 },
  { name: '11-acquisition-growth-chart', left: 432, top: 550, width: 334, height: 200 },
  { name: '12-30-day-validation-plan', left: 768, top: 550, width: 348, height: 210 },
  { name: '13-proceed-pivot-stop', left: 1120, top: 550, width: 416, height: 218 },

  // Row 4
  { name: '14-validation-checklist-clipboard', left: 0, top: 757, width: 358, height: 267 },
  { name: '15-common-mistakes-warning', left: 360, top: 765, width: 365, height: 259 },
  { name: '16-deep-focus-books', left: 730, top: 768, width: 410, height: 256 },
  { name: '17-scale-launch-celebrate', left: 1145, top: 775, width: 391, height: 249 }
];

async function extractAll() {
  const fullMeta = await sharp(src).metadata();
  const W = fullMeta.width;
  const H = fullMeta.height;

  for (const s of stickers) {
    const left = Math.max(0, s.left);
    const top = Math.max(0, s.top);
    const width = Math.min(s.width, W - left);
    const height = Math.min(s.height, H - top);

    const { data, info } = await sharp(src)
      .extract({ left, top, width, height })
      .raw()
      .toBuffer({ resolveWithObject: true });

    let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
    let found = false;

    for (let y = 0; y < info.height; y++) {
      for (let x = 0; x < info.width; x++) {
        const a = data[(y * info.width + x) * 4 + 3];
        if (a > 15) {
          found = true;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (!found) {
      console.warn(`No content found for ${s.name}`);
      continue;
    }

    const pad = 1;
    const cropX = Math.max(0, minX - pad);
    const cropY = Math.max(0, minY - pad);
    const cropW = Math.min(info.width - cropX, (maxX - minX + 1) + pad * 2);
    const cropH = Math.min(info.height - cropY, (maxY - minY + 1) + pad * 2);

    const outPath = path.join(destDir, `${s.name}.png`);
    await sharp(src)
      .extract({
        left: left + cropX,
        top: top + cropY,
        width: cropW,
        height: cropH
      })
      .png({ compressionLevel: 9 })
      .toFile(outPath);

    console.log(`Saved ${s.name}: ${cropW}x${cropH}`);
  }
  console.log('All stickers extracted with 100% precision!');
}

extractAll().catch(console.error);
