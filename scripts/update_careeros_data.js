const fs = require('fs');
const path = require('path');

const careerosData = {
  seo: {
    title: 'CareerOS: The AI-Powered Career Operating System — Case Study | Vivek Dhoundiyal',
    description: 'Comprehensive product case study and system architecture for CareerOS: inverting job discovery into an active, profile-driven intelligence engine.',
    canonical: 'https://vivekdhoundiyal.com/work/careeros'
  },
  hero: {
    eyebrow: 'CASE STUDY / SYSTEMS ARCHITECTURE',
    title: 'CareerOS: The AI-Powered Career Operating System',
    subtitle: 'A continuous, profile-driven career operating system that shifts the integration burden away from the candidate and transforms job discovery into an automated intelligence engine.',
    role: 'Product Management & Systems Architecture',
    author: 'Vivek Dhoundiyal',
    status: 'Active Architecture & Lab Build',
    category: 'Independent Software Product',
    thesis: "A person's career profile should become an active search engine for their career. The system should continuously evaluate opportunities against the user, rather than forcing the user to search through thousands of jobs.",
    stats: [
      { label: 'Architecture Artifacts', value: '15 Slides', sub: 'Complete System Architecture' },
      { label: 'Freshness Mandate', value: '≤ 7 Days', sub: 'Strict Posting Date SLA' },
      { label: 'Matching Paradigm', value: '7-Dimensional', sub: 'Beyond Naive Keywords' },
      { label: 'Engineering Reality', value: 'Local Build Lab', sub: 'Zero Vanity Metrics' }
    ]
  },
  infographic: {
    eyebrow: 'CAREEROS / SYSTEM OVERVIEW',
    heading: 'Your Career, Operated as a System.',
    intro: 'CareerOS brings fragmented career discovery, research, matching, tracking and application workflows into one connected operating system.',
    imageWebp: '/images/careeros/careeros-operating-system-infographic.webp',
    imagePng: '/images/careeros/careeros-operating-system-infographic.png',
    alt: 'CareerOS: Your All-in-One Career Operating System Workflow Overview',
    caption: 'Traditional job searching forces the candidate to become the integration layer between dozens of disconnected tools, job boards, spreadsheets, company pages and communication channels. CareerOS reverses that model. The profile becomes the system\'s intelligence layer, while discovery, verification, matching, organization and application tracking become connected workflows.',
    comparison: [
      { dimension: 'Sourcing', traditional: 'Manual browsing across LinkedIn, job boards & company portals', careeros: 'Automated multi-source registry continuously indexing targeted companies' },
      { dimension: 'Matching', traditional: 'Keyword guessing resulting in high false positives', careeros: '7-dimensional profile-aware AI evaluation with explainable reasoning' },
      { dimension: 'Freshness', traditional: 'Stale 30-60 day listings resurfaced as new discovery events', careeros: 'Strict 7-day posting date SLA; unverified listings purged automatically' },
      { dimension: 'Organization', traditional: 'Fragmented spreadsheets, lost notes & disjointed email alerts', careeros: 'Unified career command center with deterministic state-machine pipeline' }
    ]
  },
  transition: {
    heading: 'Inside CareerOS',
    lead: 'The operating-system view explains the product at a high level. The architecture below shows how that idea becomes a real product system.',
    body: 'The following 15 chapters present the primary architectural artifacts, forensic failure-mode analyses, domain normalization schemas, query engines, and engineering standards formulated during system discovery. Every slide is preserved in its original sequence as an inspectable product document.'
  },
  architecturePages: [
    {
      pageNumber: 1,
      id: 'architecture-01',
      chapter: 'SYSTEM ARCHITECTURE / 01',
      title: 'CareerOs: The AI-Powered Career Operating System',
      badge: 'FOUNDATIONAL THESIS',
      imageWebp: '/images/careeros/architecture-page-01.webp',
      imagePng: '/images/careeros/architecture-page-01.png',
      alt: 'CareerOS Foundational Inversion Diagram',
      transition: 'The case study begins with the fundamental inversion of how professionals discover and evaluate opportunities.',
      whatThisLayerRepresents: 'The foundational thesis of CareerOS: inverting the traditional job search model. Instead of an individual manually scanning through thousands of disconnected, unverified job listings, the candidate profile acts as a continuously running query engine that pulls, parses, and evaluates opportunities against structured candidate criteria.',
      whyItMatters: 'Manual job searching incurs massive cognitive fatigue, context switching, and high search friction. Treating the profile as an active search engine converts career discovery from a reactive, intermittent chore into an automated, systematic background service.',
      productThinking: 'Inverting user agency: the system brings verified opportunities to the candidate rather than requiring the candidate to repeatedly query fragmented job boards.'
    },
    {
      pageNumber: 2,
      id: 'architecture-02',
      chapter: 'SYSTEM ARCHITECTURE / 02',
      title: 'Shifting the Integration Burden Away from the User',
      badge: 'PROBLEM DISCOVERY',
      imageWebp: '/images/careeros/architecture-page-02.webp',
      imagePng: '/images/careeros/architecture-page-02.png',
      alt: 'User as Integration Layer vs Profile as Integration Layer',
      transition: 'To understand why CareerOS exists, we first must inspect where modern job searching breaks down at the human level.',
      whatThisLayerRepresents: 'The contrast between the status-quo fragmented search model—where the candidate is forced to act as the human integration glue connecting LinkedIn, ATS portals, spreadsheets, emails, Notion, and company portals—versus the CareerOS integrated model where the profile orchestrates discovery, filtering, matching, decisions, application, and tracking.',
      whyItMatters: 'When the candidate is the integration layer, context switching between tools degrades decision quality, increases latency, and causes high drop-off rates in application pipelines.',
      productThinking: 'System integration is the core product value proposition. CareerOS is not just another job aggregator; it is an operating layer that abstracts away multi-platform friction into a cohesive stateful pipeline.'
    },
    {
      pageNumber: 3,
      id: 'architecture-03',
      chapter: 'SYSTEM ARCHITECTURE / 03',
      title: 'Evolving from Temporary Job Cards to a Persistent Intelligence System',
      badge: 'DOMAIN ARCHITECTURE',
      imageWebp: '/images/careeros/architecture-page-03.webp',
      imagePng: '/images/careeros/architecture-page-03.png',
      alt: 'Four Layer Architecture Stack: Feed, Profile, Workspaces, and Canonical Database',
      transition: 'Moving the integration layer into software required rethinking how opportunity data is structured and stored.',
      whatThisLayerRepresents: 'The multi-tier architectural stack: moving away from a surface-level job board with transient UI cards to a 4-layer persistent system: (1) Personalized Job Feed, (2) Comprehensive Career Profile, (3) Target Company Workspaces, and (4) Persistent Canonical Job Database.',
      whyItMatters: 'Transient scraping leads to data loss, re-evaluating the same dead jobs repeatedly, and zero institutional memory for the candidate. A canonical database preserves history, salary markers, and organizational changes over time.',
      productThinking: 'The critical shift from a "feed aggregator" to a "discovery → database → feed" pipeline. Grounding user workflows in a persistent schema allows progressive enrichment and historical tracking.'
    },
    {
      pageNumber: 4,
      id: 'architecture-04',
      chapter: 'SYSTEM ARCHITECTURE / 04',
      title: 'Feature Accumulation Led to Architectural Fragmentation',
      badge: 'FAILURE ANALYSIS',
      imageWebp: '/images/careeros/architecture-page-04.webp',
      imagePng: '/images/careeros/architecture-page-04.png',
      alt: 'Three Symptoms of Fragmentation: Fake Freshness, Illusion of Scale, Relevance Trap',
      transition: 'As the initial prototype scaled to hundreds of sources, rapid feature accumulation exposed critical architectural cracks.',
      whatThisLayerRepresents: 'A candid forensic analysis of technical debt and failure modes when scaling to 1,482+ sources: Symptom 1 (Fake Freshness: discovery date conflated with posting date), Symptom 2 (Illusion of Scale: 1,482 sources registered, but 1,408 remained queued while only 6 were checked), and Symptom 3 (The Relevance Trap: naive keyword matching generating 98% match scores on professionally irrelevant roles).',
      whyItMatters: 'Vanity metrics (e.g. "1,400+ sources registered") masked system reality. Users lost trust when recommended stale jobs or misaligned roles.',
      productThinking: 'Product discipline over feature velocity: identifying that scaling ingestion without data validation and execution guarantees creates negative user value.'
    },
    {
      pageNumber: 5,
      id: 'architecture-05',
      chapter: 'SYSTEM ARCHITECTURE / 05',
      title: 'The Solution is Not Another Collection of UI Fixes',
      badge: 'ROOT CAUSE DIAGNOSIS',
      imageWebp: '/images/careeros/architecture-page-05.webp',
      imagePng: '/images/careeros/architecture-page-05.png',
      alt: 'The Iceberg Model: Surface UI Fixes vs Subsurface Domain Consolidation',
      transition: 'When faced with fragmented behavior, the instinct is often to patch the UI. The PM diagnosis revealed a much deeper structural reality.',
      whatThisLayerRepresents: 'The iceberg model: the surface UI layer (search inputs, broken buttons, card layouts) was merely the visible symptom of underlying chaos—multiple sources of truth, undefined domain models, and fragmented query logic conflicting across frontend, database, and profile layers.',
      whyItMatters: 'Fixing buttons or adjusting CSS filters never resolves logic discrepancies between the database query engine and frontend state.',
      productThinking: '"The PM Diagnosis": CareerOS had evolved from a job feed into an intelligence platform faster than its domain model had consolidated. Frontend filter logic ≠ Database query logic ≠ Profile filter logic. We had to stop the feature factory and rebuild the core logic from first principles.'
    },
    {
      pageNumber: 6,
      id: 'architecture-06',
      chapter: 'SYSTEM ARCHITECTURE / 06',
      title: 'Normalizing the Domain: Canonical Filter Logic',
      badge: 'QUERY LOGIC',
      imageWebp: '/images/careeros/architecture-page-06.webp',
      imagePng: '/images/careeros/architecture-page-06.png',
      alt: 'Canonical Filter Logic: Enforcing OR within categories and AND across categories',
      transition: 'Domain normalization began with fixing the Boolean query semantics that were silently dropping legitimate opportunities.',
      whatThisLayerRepresents: 'The elimination of conflicting filter operations. The flaw: treating multi-select locations as boolean AND (India AND Worldwide Remote = 0 Valid Results), which starved the candidate feed. The fix: enforcing OR within categorical dimensions and AND across distinct categorical dimensions: (LOCATION: India OR Worldwide Remote) AND (EMPLOYMENT: Full Time) AND (ROLE: Product Manager).',
      whyItMatters: 'Candidates seeking remote opportunities must not be penalized when filtering for geographic residence; rigorous query logic ensures high recall without sacrificing precision.',
      productThinking: 'Deterministic query composition: establishing mathematical consistency between user intent and database execution.'
    },
    {
      pageNumber: 7,
      id: 'architecture-07',
      chapter: 'SYSTEM ARCHITECTURE / 07',
      title: 'Defining Canonical Entities for Roles and Remote Work',
      badge: 'TAXONOMY ENGINE',
      imageWebp: '/images/careeros/architecture-page-07.webp',
      imagePng: '/images/careeros/architecture-page-07.png',
      alt: 'Remote Semantics Table and Role Normalization Taxonomy',
      transition: 'Beyond boolean logic, the system required semantic standardization for messy real-world role titles and geographic restrictions.',
      whatThisLayerRepresents: 'Taxonomy standardization: (1) Remote Semantics: Worldwide (no geographic restriction), Remote-India (India only), Remote-US (US only), Hybrid, and On-site. (2) Role Normalization: Collapsing disparate raw titles ("BD Manager", "Growth Lead", "Partnerships") into canonical domain entities like "Business Development".',
      whyItMatters: 'Never infer that "Remote" means "Worldwide Remote." Failing to classify geography matches users to jobs they cannot legally or logistically accept. Keyword similarity is a trap.',
      productThinking: 'Building an explicit taxonomy layer safeguards candidates from applying to roles with hidden geographic restrictions or misleading titles.'
    },
    {
      pageNumber: 8,
      id: 'architecture-08',
      chapter: 'SYSTEM ARCHITECTURE / 08',
      title: 'Enforcing a Strict Freshness Mandate and True Telemetry',
      badge: 'DATA INTEGRITY',
      imageWebp: '/images/careeros/architecture-page-08.webp',
      imagePng: '/images/careeros/architecture-page-08.png',
      alt: 'Strict 7-Day Freshness Timeline and True Telemetry Conversion Table',
      transition: 'With entities normalized, CareerOS addressed the most deceptive failure mode in career platforms: stale data masked as fresh jobs.',
      whatThisLayerRepresents: 'Enforcing the 7-day freshness SLA (NOW - 7 DAYS <= POSTING_DATE) based strictly on original employer posting date, not the ingestion/discovery timestamp. Shifting operational telemetry from vanity metrics ("Raw Jobs Discovered", "Total Registered Sources") to honesty metrics ("Validated Jobs", "True Deduplication Rate", "Source Success Latency", "Valid URLs").',
      whyItMatters: 'Discovery date is completely irrelevant to the candidate. Applications submitted to listings older than 7–14 days have exponentially lower response rates. Protecting the candidate\'s time requires purging dead listings automatically.',
      productThinking: 'Telemetry reflects system integrity. Measuring genuine system output rather than registered queues aligns product metrics directly with user success.'
    },
    {
      pageNumber: 9,
      id: 'architecture-09',
      chapter: 'SYSTEM ARCHITECTURE / 09',
      title: 'The Core PM Trade-off: Quality Over Volume',
      badge: 'PRODUCT STRATEGY',
      imageWebp: '/images/careeros/architecture-page-09.webp',
      imagePng: '/images/careeros/architecture-page-09.png',
      alt: 'Quality Over Volume Dial Meter: Maximize Raw Volume vs Maximize Relevance & Correctness',
      transition: 'Every product reaches an inflection point where business metrics conflict with user value. CareerOS took an uncompromising stance on data quality.',
      whatThisLayerRepresents: 'The deliberate PM decision: turning the dial away from "Maximize Raw Job Volume" (a noisy cloud of unverified listings) and strictly toward "Maximize Relevance & Correctness" (a curated, validated set of high-signal opportunities).',
      whyItMatters: 'A candidate feed with 10 genuinely relevant, active opportunities delivers 10x more trust and commercial leverage than a feed with 1,000 keyword-matching, ghost, or expired listings.',
      productThinking: 'High-signal curation creates retention and trust. CareerOS deliberately sacrifices vanity inventory to guarantee candidate signal.'
    },
    {
      pageNumber: 10,
      id: 'architecture-10',
      chapter: 'SYSTEM ARCHITECTURE / 10',
      title: 'The Rebuilt Architecture: A Single, Consolidated Pipeline',
      badge: 'PIPELINE ARCHITECTURE',
      imageWebp: '/images/careeros/architecture-page-10.webp',
      imagePng: '/images/careeros/architecture-page-10.png',
      alt: 'Consolidated Pipeline Flow: Ingestion, Normalization, Validation, Deduplication, and Feedback Loops',
      transition: 'With domain rules and PM trade-offs locked, the disparate systems were unified into a single, cohesive intelligence loop.',
      whatThisLayerRepresents: 'The end-to-end consolidated pipeline: Profile → Search Config → Source Discovery → Raw Data → [Normalize] → [Validate] → [Freshness Check] → [Deduplicate] → Classify → Profile Match → Rank → Job Feed → Save/Apply/Track. Every listing must survive normalization, schema validation, and deduplication before touching the feed.',
      whyItMatters: 'Eliminates race conditions and divergent logic. Every downstream module operates on vetted, canonical data structures.',
      productThinking: 'Closed-loop intelligence: user actions (saving, applying, hiding) feed back into match ranking and source discovery, constantly refining recommendations.'
    },
    {
      pageNumber: 11,
      id: 'architecture-11',
      chapter: 'SYSTEM ARCHITECTURE / 11',
      title: 'Moving Beyond Keywords: The Matching Engine Paradigm',
      badge: 'ALGORITHMIC MODEL',
      imageWebp: '/images/careeros/architecture-page-11.webp',
      imagePng: '/images/careeros/architecture-page-11.png',
      alt: '7-Dimensional Matching Engine Spider Radar Model',
      transition: 'Once data enters the consolidated pipeline, how does CareerOS evaluate whether a role is genuinely right for the person?',
      whatThisLayerRepresents: 'The 7-dimensional spider/radar matching model: (1) Role Alignment, (2) Skill Overlap, (3) Experience / Seniority, (4) Location Eligibility, (5) Target Company Status, (6) Employment Type, and (7) Career Direction.',
      whyItMatters: 'Moving past naive keyword density prevents high-score mismatches. A senior operator should not be matched to an entry-level role simply because both mention "operations".',
      productThinking: 'UX Rule: "A match score is useless without context." The interface must expose the explicit breakdown behind the percentage so the candidate understands the algorithmic rationale.'
    },
    {
      pageNumber: 12,
      id: 'architecture-12',
      chapter: 'SYSTEM ARCHITECTURE / 12',
      title: 'UX Direction: High Information Density, Low Cognitive Load',
      badge: 'INTERFACE SPECIFICATION',
      imageWebp: '/images/careeros/architecture-page-12.webp',
      imagePng: '/images/careeros/architecture-page-12.png',
      alt: 'Job Card Dashboard Wireframe and Structural Anatomy',
      transition: 'A sophisticated data model requires an equally disciplined interface design to keep the candidate focused and decisive.',
      whatThisLayerRepresents: 'The Job Card Dashboard UX anatomy: Verified Source Badge, Match % with explicit reasoning breakdown popover, Strict Remote Classification and Confirmed Salary benchmarks, predictable vertical hierarchy handling missing data gracefully, and Canonical Save/Apply action buttons.',
      whyItMatters: 'Candidates review hundreds of cards. Visual inconsistency and erratic layout shifts cause cognitive fatigue; predictable information density enables rapid scanning and confident decisions.',
      productThinking: '"The feed must feel like a career command center, not a search-results dump." The card must maintain a predictable vertical structure, gracefully handling missing edge-case data without breaking alignment.'
    },
    {
      pageNumber: 13,
      id: 'architecture-13',
      chapter: 'SYSTEM ARCHITECTURE / 13',
      title: 'Redefining the Definition of Done (DoD)',
      badge: 'ENGINEERING GOVERNANCE',
      imageWebp: '/images/careeros/architecture-page-13.webp',
      imagePng: '/images/careeros/architecture-page-13.png',
      alt: 'Definition of Done Comparison: Build Compilation vs System Reality',
      transition: 'Architectural principles are meaningless without rigorous engineering standards to enforce them.',
      whatThisLayerRepresents: 'Rejecting the old naive standard ("npm run build: success") in favor of true operational Definition of Done (DoD): (1) Data reality: Active feed strictly <= 7 days. (2) Verified source execution (not just registered in a database). (3) Zero duplicate leaks across feeds and views. (4) Flawless coexistence of editable manual filters and automated profile filters. (5) Telemetry that reflects actual system reality.',
      whyItMatters: 'Code that compiles can still produce completely broken or stale user experiences. Engineering criteria must align with data correctness and user trust.',
      productThinking: 'A discovery feature is not complete merely because the code compiles. Product quality is measured by verified end-to-end behavior.'
    },
    {
      pageNumber: 14,
      id: 'architecture-14',
      chapter: 'SYSTEM ARCHITECTURE / 14',
      title: 'Execution Roadmap: Prioritizing System Stability Over New Features',
      badge: 'SEQUENCED ROADMAP',
      imageWebp: '/images/careeros/architecture-page-14.webp',
      imagePng: '/images/careeros/architecture-page-14.png',
      alt: 'Three Tier Execution Roadmap: P0 Domain Consolidation, P1 UX Reliability, P2 Advanced AI',
      transition: 'Engineering execution requires strict sequencing to avoid building on quicksand.',
      whatThisLayerRepresents: 'The three-tier priority waterfall: P0 (Domain Consolidation): Discovery correctness, canonical query engine, profile integration, strict taxonomy. P1 (UX Reliability): Control state synchronization, job card responsive redesign, diagnostic accuracy. P2 (Advanced AI): Skill gap analysis, market intelligence, personalized opportunity explanations.',
      whyItMatters: 'Jumping straight to LLM features (P2) without a rock-solid domain model and deterministic queries (P0) results in hallucinated matches and user disillusionment.',
      productThinking: 'Strategy Note: "We cannot build advanced AI recommendations (P2) until the foundational data model and query architecture (P0) are absolutely bulletproof."'
    },
    {
      pageNumber: 15,
      id: 'architecture-15',
      chapter: 'SYSTEM ARCHITECTURE / 15',
      title: 'The Ultimate PM Synthesis',
      badge: 'EXECUTIVE SYNTHESIS',
      imageWebp: '/images/careeros/architecture-page-15.webp',
      imagePng: '/images/careeros/architecture-page-15.png',
      alt: 'Executive PM Synthesis and Four-Stage Methodology Loop',
      transition: 'The journey of architecting CareerOS offers fundamental insights for building complex, data-driven systems.',
      whatThisLayerRepresents: 'The core executive synthesis: "Feature completeness is not the same as product completeness." Building CareerOS proved that as a product scales, standardizing the underlying domain model (What is a job? What does remote mean? What makes it fresh?) is infinitely more valuable than adding surface-level features.',
      whyItMatters: 'Distills technical architecture into foundational product leadership principles that apply across enterprise software, SaaS, and AI systems.',
      productThinking: 'A masterclass in operator clarity: moving from chaotic feature velocity to disciplined systems thinking: Problem Discovery → System Architecture → Data Modeling → Iterative Prioritization.'
    }
  ],
  systemSummary: {
    eyebrow: 'END-TO-END FLOW',
    heading: 'CareerOS as a Career Operating System',
    intro: 'A closed-loop, profile-orchestrated pipeline where every stage feeds institutional intelligence back into the candidate\'s career engine.',
    steps: [
      { id: '01', name: 'PROFILE', tag: 'Intelligence Layer', desc: 'Structured skills, seniority, compensation, and career trajectory vectors act as the query baseline.' },
      { id: '02', name: 'DISCOVERY', tag: 'Ingestion Registry', desc: 'Automated multi-source registry continuously ingests raw market signals across targeted companies and platforms.' },
      { id: '03', name: 'VERIFICATION', tag: 'Freshness SLA', desc: 'Strict 7-day posting date enforcement and URL liveness telemetry validate that listings actually exist.' },
      { id: '04', name: 'MATCHING', tag: 'Radar Algorithm', desc: '7-dimensional radar evaluation weighs role alignment, skills, seniority, and geographic eligibility.' },
      { id: '05', name: 'RESEARCH', tag: 'Target Workspaces', desc: 'Target company workspaces surface organizational trajectory, funding health, and team composition.' },
      { id: '06', name: 'DECISION', tag: 'Command Center', desc: 'High-density job card displays explicit match reasoning breakdown, enabling fast, confident choices.' },
      { id: '07', name: 'APPLICATION', tag: 'Contextual Assembly', desc: 'Contextual document assembly creates role-tailored positioning briefs without generic buzzwords.' },
      { id: '08', name: 'INTERVIEW', tag: 'Workflow Prep', desc: 'Structured preparation tracks company interview stages, key discussion notes, and objections.' },
      { id: '09', name: 'TRACKING', tag: 'State Machine', desc: 'Deterministic state machine governs pipeline transitions (Applied → Discovery → Final → Offer) with SLA benchmarks.' },
      { id: '10', name: 'LEARNING', tag: 'Feedback Loop', desc: 'Rejection reasons, response latencies, and conversion outcomes calibrate future matching weights.' }
    ]
  },
  productThinking: {
    eyebrow: 'FOUNDATIONAL PRINCIPLES',
    heading: 'Product Thinking Behind CareerOS',
    intro: 'Five architectural and product management principles that guide every decision within CareerOS.',
    principles: [
      {
        num: '01',
        title: 'Profile as Intelligence Layer',
        concept: 'The user\'s profile is not merely a static resume. It becomes the active foundation for discovering, filtering, and evaluating relevant opportunities automatically.',
        status: 'DESIGNED & PROTOTYPED'
      },
      {
        num: '02',
        title: 'Discovery → Matching → Action',
        concept: 'CareerOS reduces the cognitive gap between finding an opportunity and acting on it, moving from passive indexing to actionable workflows.',
        status: 'ACTIVE LOCAL BUILD'
      },
      {
        num: '03',
        title: 'One Connected Workspace',
        concept: 'The system eliminates fragmentation between job boards, spreadsheets, email threads, and company portals into a single, unified operating system.',
        status: 'ARCHITECTED'
      },
      {
        num: '04',
        title: 'Freshness and Verification',
        concept: 'Job discovery becomes useful only when opportunities are treated as time-sensitive data. Listings older than 7 days from posting date are strictly excluded.',
        status: 'CANONICAL MANDATE'
      },
      {
        num: '05',
        title: 'Progressive Intelligence',
        concept: 'Opportunities flow through a disciplined hierarchy: raw opportunity → normalized entity → profile-aware match → user decision → application workflow → state tracking.',
        status: 'SYSTEM STANDARD'
      }
    ]
  },
  currentState: {
    eyebrow: 'SYSTEM INVENTORY',
    heading: 'Current State & Demonstration',
    intro: 'CareerOS is a professional product architecture and engineering laboratory. Credibility matters more than vanity metrics; here is the transparent breakdown of what is built versus what is planned.',
    columns: [
      {
        status: 'Implemented',
        badgeColor: 'emerald',
        items: [
          '15-slide end-to-end product architecture and systems specification',
          'Canonical domain schemas for Opportunities, Roles, and Geography',
          'Local state machine for application lifecycle tracking',
          'Normalized query logic (OR within dimensions, AND across dimensions)'
        ]
      },
      {
        status: 'Designed',
        badgeColor: 'blue',
        items: [
          '7-dimensional matching engine radar model',
          'Job Card Dashboard with explicit match reasoning popover',
          'Canonical role normalization taxonomy (BD, Engineering, Product)',
          'Definition of Done (DoD) verification pipeline'
        ]
      },
      {
        status: 'In Development',
        badgeColor: 'amber',
        items: [
          'Automated source registry worker execution queue',
          'Strict 7-day posting date freshness validator',
          'Multi-source deduplication and URL liveness check',
          'Local JSON AST artifact positioning generator'
        ]
      },
      {
        status: 'Future Work',
        badgeColor: 'purple',
        items: [
          'Multi-tenant cloud synchronization and user collaboration',
          'LLM-assisted interview transcript synthesis and objection handling',
          'Direct ATS webhook dispatch integrations',
          'Predictive career progression modeling'
        ]
      }
    ]
  },
  whyIBuilt: {
    eyebrow: 'FOUNDER REFLECTION',
    heading: 'Why I Built CareerOS',
    narrative: [
      'Traditional job searching is broken by design. Candidates are forced to juggle dozens of job boards, company career portals, messy spreadsheets, fragmented email alerts, and separate note-taking apps. The candidate is turned into the human integration layer.',
      'The product thesis behind CareerOS is simple: treat the career search itself as an operating system rather than a collection of disconnected tasks. The goal is not simply to show more jobs, but to build a connected system that helps a professional discover high-signal opportunities, evaluate true mutual alignment, decide with clarity, execute targeted applications, and learn from market outcomes.',
      'CareerOS represents the convergence of systems thinking, data normalization, and applied AI workflows—engineered to restore agency and clarity to professional progression.'
    ],
    actions: [
      { label: 'Explore Lab Build on Homepage', href: '/#building', primary: true },
      { label: 'Inspect Architecture Slides', href: '#architecture-01', secondary: true },
      { label: 'Connect with Vivek', href: 'mailto:vivekdhoundiyal2901@gmail.com', external: true }
    ]
  }
};

// 1. Update data/siteContent.json
const siteContentPath = path.join(process.cwd(), 'data', 'siteContent.json');
const siteContent = JSON.parse(fs.readFileSync(siteContentPath, 'utf8'));
siteContent.careeros = careerosData;
fs.writeFileSync(siteContentPath, JSON.stringify(siteContent, null, 2), 'utf8');
console.log('Updated data/siteContent.json');

// 2. Update data/siteContent.draft.json
const draftPath = path.join(process.cwd(), 'data', 'siteContent.draft.json');
if (fs.existsSync(draftPath)) {
  const draftContent = JSON.parse(fs.readFileSync(draftPath, 'utf8'));
  draftContent.careeros = careerosData;
  fs.writeFileSync(draftPath, JSON.stringify(draftContent, null, 2), 'utf8');
  console.log('Updated data/siteContent.draft.json');
}
