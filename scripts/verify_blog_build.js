const fs = require('fs');

const html = fs.readFileSync('out/blog/validate-business-idea/index.html', 'utf8');

console.log('Title:', html.match(/<title>([^<]+)<\/title>/)?.[1]);
console.log('Canonical:', html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]);
console.log('OG title:', html.match(/<meta property="og:title" content="([^"]+)"/)?.[1]);
console.log('OG image:', html.match(/<meta property="og:image" content="([^"]+)"/)?.[1]);
console.log('OG url:', html.match(/<meta property="og:url" content="([^"]+)"/)?.[1]);
console.log('Meta description:', html.match(/<meta name="description" content="([^"]+)"/)?.[1]);

const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
console.log('Found JSON-LD scripts count:', jsonLdMatches.length);

jsonLdMatches.forEach((m, idx) => {
  try {
    const parsed = JSON.parse(m[1]);
    console.log(`Script ${idx + 1} graph:`, parsed['@graph']?.map(g => g['@type']) || parsed['@type']);
    if (parsed['@graph']) {
      const blogPosting = parsed['@graph'].find(g => g['@type'] === 'BlogPosting');
      if (blogPosting) {
        console.log('  BlogPosting headline:', blogPosting.headline);
        console.log('  BlogPosting author:', blogPosting.author);
        console.log('  BlogPosting datePublished:', blogPosting.datePublished);
      }
    }
  } catch (err) {
    console.error(`Script ${idx + 1} parse error:`, err.message);
  }
});

// Check stickers presence in HTML
const stickers = [
  '01-problem-lightbulb',
  '02-target-customer-question',
  '03-customer-interview-clipboard',
  '04-market-research-laptop',
  '05-competitor-analysis-table',
  '06-prototype-landing-page',
  '07-prototype-wireframe',
  '08-paid-pilot-agreement',
  '09-willingness-to-pay-checklist',
  '10-unit-economics-calculator',
  '11-acquisition-growth-chart',
  '12-30-day-validation-plan',
  '13-proceed-pivot-stop',
  '14-validation-checklist-clipboard',
  '15-common-mistakes-warning',
  '16-deep-focus-books',
  '17-scale-launch-celebrate'
];

console.log('\nChecking sticker references in generated HTML:');
stickers.forEach(s => {
  const present = html.includes(s);
  console.log(`  ${s}: ${present ? 'YES' : 'MISSING'}`);
});
