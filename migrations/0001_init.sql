-- ==============================================================================
-- Cloudflare D1 Database Schema — Portfolio CMS
-- Operates at 100% Free Tier ($0 / ₹0)
-- ==============================================================================

-- 1. Site Content (Draft vs. Published state)
CREATE TABLE IF NOT EXISTS site_content (
  id TEXT PRIMARY KEY DEFAULT 'active',
  published_content TEXT NOT NULL,       -- Live JSON payload visible to public visitors
  draft_content TEXT NOT NULL,           -- Working JSON payload editable in /admin
  published_at INTEGER,                  -- Unix timestamp of last publication
  updated_at INTEGER NOT NULL,           -- Unix timestamp of last draft modification
  published_by TEXT                      -- Administrator email
);

-- 2. Revision History (Immutable snapshot on every publish)
CREATE TABLE IF NOT EXISTS revisions (
  id TEXT PRIMARY KEY,                   -- rev_timestamp_random
  version_number INTEGER NOT NULL,       -- Sequential revision number (1, 2, 3...)
  content TEXT NOT NULL,                 -- Full JSON snapshot of site content
  note TEXT,                             -- Commit/revision note
  created_at INTEGER NOT NULL,           -- Unix timestamp
  created_by TEXT NOT NULL               -- Administrator email
);

-- 3. Administrator Sessions (Signed tokens)
CREATE TABLE IF NOT EXISTS admin_sessions (
  token_hash TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);

-- 4. Rate Limiting (Brute-force protection for /api/auth)
CREATE TABLE IF NOT EXISTS rate_limits (
  ip_key TEXT PRIMARY KEY,
  attempts INTEGER NOT NULL DEFAULT 1,
  last_attempt_at INTEGER NOT NULL,
  locked_until INTEGER DEFAULT 0
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_revisions_created_at ON revisions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON admin_sessions(expires_at);
