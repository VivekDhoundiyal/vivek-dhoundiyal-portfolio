# 100% Free Production Deployment Guide
## Cloudflare Pages + Cloudflare Workers Free Tier + Cloudflare D1 Free Tier + GitHub Free

> **Total Operating Cost:** **₹0 / $0 FOREVER**
> **Dependencies:** Zero paid APIs, Zero paid databases, Zero credit cards required.

---

## Architecture Overview

```
                                  +---------------------------+
                                  |        GitHub Free        |
                                  |    (Private Repository)   |
                                  +-------------+-------------+
                                                |
                                        Git Push Triggers
                                                |
                                                v
                                  +---------------------------+
                                  |     Cloudflare Pages      |
                                  | (Static Edge Distribution)|
                                  +-------------+-------------+
                                                |
                     +--------------------------+--------------------------+
                     |                                                     |
                     v                                                     v
          +---------------------+                               +---------------------+
          |    Public Visitor   |                               |   Admin at /admin   |
          |  (Ultra-fast TTFB)  |                               | (Restricted Access) |
          +----------+----------+                               +----------+----------+
                     |                                                     |
                     | GET /api/content                                    | POST /api/auth
                     | (Edge Cached)                                       | GET/POST /api/content
                     v                                                     | POST /api/publish
          +----------------------------------------------------------------+ POST /api/revisions
          |             Cloudflare Pages Functions / Cloudflare Worker                |
          |                       (Edge Runtime - Free Tier)                          |
          +-------------------------------------+-------------------------------------+
                                                |
                                      SQL Binding (`env.DB`)
                                                |
                                                v
                                  +---------------------------+
                                  |       Cloudflare D1       |
                                  |    (Serverless SQLite)    |
                                  |  - site_content (draft/pub)|
                                  |  - revisions (history)    |
                                  |  - admin_sessions         |
                                  |  - rate_limits            |
                                  +---------------------------+
```

---

## Free Tier Quotas & Entitlements

| Service | Cloudflare Free Tier Allowance | Your Usage | Cost |
| :--- | :--- | :--- | :---: |
| **Cloudflare Pages** | Unlimited bandwidth, Unlimited requests, 500 builds/month | Single portfolio build on push | **$0.00** |
| **Cloudflare D1 Database** | **5,000,000 read rows / day**, 100,000 write rows / day, 5 GB storage | ~1-5 rows per visit, edge cached | **$0.00** |
| **Cloudflare Workers** | **100,000 requests / day**, 10ms CPU time / request | ~0.01% of quota | **$0.00** |
| **GitHub** | Unlimited public / private repositories, 2,000 CI minutes/month | Repository storage + Git pushes | **$0.00** |
| **SSL / HTTPS** | Free Universal SSL certificate & automated renewals | Automatic | **$0.00** |

---

## Step-by-Step Deployment Instructions

### Step 1: Push Repository to GitHub Free
1. Initialize local Git if not already done:
   ```bash
   git init
   git add .
   git commit -m "feat: complete portfolio with 100% free Cloudflare D1 CMS"
   ```
2. Create a new repository on [GitHub](https://github.com/new) (can be Private or Public).
3. Push your code:
   ```bash
   git remote add origin https://github.com/<YourUsername>/<YourRepo>.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Create Cloudflare D1 Database (Free Tier)
1. Sign in to your free [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **D1 SQL Database**.
3. Click **Create Database**:
   - Database name: `portfolio-db`
4. Click **Create**.
5. Copy the generated **Database ID** (e.g., `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).

*(Alternatively via terminal with `npx wrangler d1 create portfolio-db`)*

---

### Step 3: Run Database Migrations
In the Cloudflare Dashboard:
1. Click on `portfolio-db` > **Console** tab.
2. Open the file `migrations/0001_init.sql` from this codebase, copy all SQL text, paste it into the D1 console, and click **Execute**.
3. Open the file `migrations/0002_seed.sql` from this codebase, copy all SQL text, paste it into the D1 console, and click **Execute**.

*(Alternatively via terminal)*:
```bash
npx wrangler d1 execute portfolio-db --file=migrations/0001_init.sql
npx wrangler d1 execute portfolio-db --file=migrations/0002_seed.sql
```

Your D1 database is now initialized with:
- Schema tables: `site_content`, `revisions`, `admin_sessions`, `rate_limits`.
- Baseline content and Revision 1.

---

### Step 4: Deploy on Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your GitHub repository.
3. Configure build settings:
   - **Framework preset:** `None` (or `Next.js (Static Export)`)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Click **Save and Deploy**.

---

### Step 5: Bind D1 Database to Cloudflare Pages
1. Go to **Workers & Pages** > Select your newly created Pages project.
2. Navigate to **Settings** > **Functions**.
3. Scroll down to **D1 database bindings**.
4. Click **Add binding**:
   - **Variable name:** `DB` *(Must be exactly `DB`)*
   - **D1 database:** Select `portfolio-db`
5. Click **Save**.

---

### Step 6: Add Environment Variables & Secrets
1. In your Pages project settings, go to **Settings** > **Environment variables**.
2. Click **Add variable**:
   - `ADMIN_EMAIL` = `vivekdhoundiyal2901@gmail.com`
   - `ADMIN_PASSWORD` = `<Your Administrator Password>`
   - `SESSION_SECRET` = `<Generate any random 32-character string>`
3. Click **Save**.
4. Trigger a new deployment (or go to **Deployments** > **Retry deployment** on the latest build) so the bindings take effect.

---

## Managing Your Portfolio from `/admin`

Once deployed:
1. Open your live URL: `https://<your-project>.pages.dev/admin` (or your custom domain).
2. Log in with:
   - **Email:** `vivekdhoundiyal2901@gmail.com`
   - **Password:** `<Your Administrator Password>`
3. Features available with zero code changes:
   - **Section Architecture:** Drag-and-drop to reorder homepage sections, toggle visibility (hide/show), clone, or delete.
   - **Content Editor:** Edit every headline, description, metric, project, corporate card, timeline node, education entry, certification, and technical system.
   - **Item Reordering:** Use ↑/↓ buttons to reorder cards inside Experience, Capabilities, Tools, Projects, and Essays.
   - **Draft Mode:** Edits are auto-saved to Cloudflare D1 draft without affecting public visitors.
   - **Live Preview:** Click `Preview Draft 👁` to test changes in responsive Desktop (1440px), Tablet (768px), and Mobile (390px) viewports before release.
   - **1-Click Publish:** Click `Publish Live` to release changes to the public site and Cloudflare Edge CDN.
   - **Revision History & Rollback:** Click `History ↺` to view past published versions and restore any version with 1 click.
