const fs = require('fs');

const raw = fs.readFileSync('data/siteContent.json', 'utf8');
const urls = Array.from(new Set(raw.match(/https?:\/\/[^\s"',]+/g) || []));

console.log('URLs matching vivekdhoundiyal.com:');
urls.filter(u => u.includes('vivekdhoundiyal.com')).forEach(u => console.log(' ', u));

console.log('\nURLs matching pages.dev:');
urls.filter(u => u.includes('pages.dev')).forEach(u => console.log(' ', u));
