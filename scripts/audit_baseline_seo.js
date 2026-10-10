const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file === 'index.html') {
      results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(path.join(__dirname, '..', 'out'));
console.log(`Found ${htmlFiles.length} generated HTML pages in out/\n`);

const audit = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const route = file
    .replace(path.join(__dirname, '..', 'out'), '')
    .replace(/\\/g, '/')
    .replace(/\/index\.html$/, '') || '/';

  // Title
  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const rawTitle = titleMatch ? titleMatch[1].replace(/<!--[\s\S]*?-->/g, '').trim() : null;
  const title = rawTitle;

  // Description
  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const description = descMatch ? descMatch[1] : null;

  // Canonical
  const canonMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonical = canonMatch ? canonMatch[1] : null;

  // Robots
  const robotsMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
  const robots = robotsMatch ? robotsMatch[1] : null;

  // JSON-LD
  const jsonLdMatches = Array.from(content.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi));
  let jsonLdValid = true;
  let jsonLdTypes = [];
  jsonLdMatches.forEach(m => {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed['@graph']) {
        jsonLdTypes = jsonLdTypes.concat(parsed['@graph'].map(item => item['@type']));
      } else if (parsed['@type']) {
        jsonLdTypes.push(parsed['@type']);
      }
    } catch (e) {
      jsonLdValid = false;
    }
  });

  // Images without alt
  const imgMatches = Array.from(content.matchAll(/<img([^>]*)>/gi));
  const missingAltCount = imgMatches.filter(m => !m[1].includes('alt=')).length;

  // Counts
  const canonCount = (content.match(/<link[^>]*rel=["']canonical["']/gi) || []).length;
  const descCount = (content.match(/<meta[^>]*name=["']description["']/gi) || []).length;
  const h1Matches = Array.from(content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)).map(m => m[1].replace(/<[^>]+>/g, '').trim());

  audit.push({
    route,
    title,
    titleLength: title ? title.length : 0,
    hasDesc: !!description,
    descCount,
    descLength: description ? description.length : 0,
    description: description ? description.slice(0, 60) + '...' : null,
    canonical,
    canonCount,
    canonicalMatchesDomain: canonical ? canonical.startsWith('https://vivek-dhoundiyal-portfolio.pages.dev') : false,
    robots,
    jsonLdCount: jsonLdMatches.length,
    jsonLdValid,
    jsonLdTypes: Array.from(new Set(jsonLdTypes)),
    h1Count: h1Matches.length,
    h1: h1Matches[0] || null,
    missingAltCount
  });
});

console.log(JSON.stringify(audit, null, 2));

// Summary statistics
const issues = {
  missingTitles: audit.filter(a => !a.title),
  missingDescriptions: audit.filter(a => !a.hasDesc),
  duplicateDescriptions: audit.filter(a => a.descCount > 1),
  wrongCanonicalHost: audit.filter(a => a.canonical && !a.canonicalMatchesDomain),
  duplicateCanonicals: audit.filter(a => a.canonCount > 1),
  missingCanonical: audit.filter(a => !a.canonical),
  noIndexPages: audit.filter(a => a.robots && a.robots.includes('noindex')),
  missingAltImages: audit.filter(a => a.missingAltCount > 0),
  missingH1: audit.filter(a => a.h1Count === 0),
  multipleH1: audit.filter(a => a.h1Count > 1)
};

console.log('\n--- SUMMARY FINDINGS ---');
console.log('Total pages:', audit.length);
console.log('Missing titles:', issues.missingTitles.length);
console.log('Missing descriptions:', issues.missingDescriptions.map(p => p.route));
console.log('Duplicate descriptions (>1 per page):', issues.duplicateDescriptions.length, issues.duplicateDescriptions.map(p => p.route));
console.log('Missing canonicals:', issues.missingCanonical.map(p => p.route));
console.log('Duplicate canonicals (>1 per page):', issues.duplicateCanonicals.length, issues.duplicateCanonicals.map(p => p.route));
console.log('Wrong canonical host (not pages.dev):', issues.wrongCanonicalHost.length);
console.log('NoIndex pages:', issues.noIndexPages.length, issues.noIndexPages.map(p => p.route));
console.log('Pages with images missing alt:', issues.missingAltImages.length);
console.log('Pages missing <h1>:', issues.missingH1.length, issues.missingH1.map(p => p.route));
console.log('Pages with multiple <h1>:', issues.multipleH1.length, issues.multipleH1.map(p => p.route));

if (issues.wrongCanonicalHost.length > 0) {
  console.log('\nPages with WRONG canonical host:');
  issues.wrongCanonicalHost.forEach(p => console.log(`  ${p.route} -> ${p.canonical}`));
}
