const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../data/siteContent.json'), 'utf8');
const escaped = content.replace(/'/g, "''");
const now = Date.now();

const sql = `-- Seed site_content with initial authentic content
INSERT INTO site_content (id, published_content, draft_content, published_at, updated_at, published_by)
VALUES (
  'active',
  '${escaped}',
  '${escaped}',
  ${now},
  ${now},
  'vivekdhoundiyal2901@gmail.com'
)
ON CONFLICT(id) DO NOTHING;

-- Initial Baseline Revision 1
INSERT INTO revisions (id, version_number, content, note, created_at, created_by)
VALUES (
  'rev_initial_baseline',
  1,
  '${escaped}',
  'Initial baseline site content import',
  ${now},
  'vivekdhoundiyal2901@gmail.com'
)
ON CONFLICT(id) DO NOTHING;
`;

fs.writeFileSync(path.join(__dirname, '../migrations/0002_seed.sql'), sql, 'utf8');
console.log('Seed SQL generated successfully. Length:', sql.length);
