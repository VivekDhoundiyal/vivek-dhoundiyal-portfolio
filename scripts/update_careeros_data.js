const fs = require('fs');
const path = require('path');

const careerosData = {
  seo: {
    title: 'CareerOS: The AI-Powered Career Operating System — Product Case Study | Vivek Dhoundiyal',
    description: 'Comprehensive product case study and systems architecture for CareerOS: inverting job discovery into an active, profile-driven intelligence engine.',
    canonical: 'https://vivekdhoundiyal.com/work/careeros'
  },
  hero: {
    eyebrow: 'CASE STUDY / SYSTEMS ARCHITECTURE',
    title: 'CareerOS: The AI-Powered Career Operating System',
    subtitle: 'A continuous, profile-driven career operating system that shifts the integration burden away from the candidate and transforms job discovery into an automated intelligence engine.',
    role: 'Product Management & Systems Architecture',
    author: 'Vivek Dhoundiyal',
    status: 'Product Concept & Systems Architecture',
    category: 'Independent Software Product',
    thesis: "A person's career profile should become an active search engine for their career. The system should continuously evaluate opportunities against the user, rather than forcing the user to search through thousands of jobs."
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
    body: 'The following architecture sections present the core system models, forensic failure-mode analyses, domain normalization schemas, query engines, and engineering standards formulated during system discovery. Each chapter illustrates a foundational layer of the end-to-end product architecture.'
  },
  architecturePages: [
    {
      pageNumber: 1,
      id: 'architecture-01',
      chapter: 'SYSTEM DESIGN · FOUNDATIONAL THESIS',
      badge: 'FOUNDATIONAL THESIS',
      title: 'CareerOs: The AI-Powered Career Operating System',
      imageWebp: '/images/careeros/architecture-page-01.webp',
      imagePng: '/images/careeros/architecture-page-01.png',
      alt: 'CareerOS Foundational Inversion Model',
      transition: 'The case study begins with the fundamental inversion of how professionals discover and evaluate opportunities.',
      whatThisLayerRepresents: 'The foundational thesis of CareerOS: inverting the traditional job search model. Instead of an individual manually scanning through thousands of disconnected, unverified job listings, the candidate profile acts as a continuously running query engine that pulls, parses, and evaluates opportunities against structured candidate criteria.',
      whyItMatters: 'Manual job searching incurs massive cognitive fatigue, context switching, and high search friction. Treating the profile as an active search engine converts career discovery from a reactive, intermittent chore into an automated, systematic background service.',
      productThinking: 'Inverting user agency: the system brings verified opportunities to the candidate rather than requiring the candidate to repeatedly query fragmented job boards.'
    },
    {
      pageNumber: 2,
      id: 'architecture-02',
      chapter: 'SYSTEM DESIGN · PROBLEM DISCOVERY',
      badge: 'PROBLEM DISCOVERY',
      title: 'Shifting the Integration Burden Away from the User',
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
      chapter: 'DOMAIN MODEL · PERSISTENT ARCHITECTURE',
      badge: 'DOMAIN ARCHITECTURE',
      title: 'Evolving from Temporary Job Cards to a Persistent Intelligence System',
      imageWebp: '/images/careeros/architecture-page-03.webp',
      imagePng: '/images/careeros/architecture-page-03.png',
      alt: 'Evolution from Ephemeral Job Cards to Persistent Intelligence System',
      transition: 'Moving past initial discovery requires defining what kind of software artifact CareerOS actually is.',
      whatThisLayerRepresents: 'The structural shift from ephemeral UI widgets to a persistent intelligence system. While traditional boards discard listings once clicked, CareerOS maintains an immutable, versioned domain graph connecting candidate profile vectors, normalized job specs, application history, and historical outcomes.',
      whyItMatters: 'Career trajectories span months and years, not single search sessions. An ephemeral UI prevents long-term feedback loops, predictive matching improvements, and cumulative market intelligence.',
      productThinking: 'Long-term product moat comes from persistent state and continuous learning, transforming a transactional search session into an enduring professional asset.'
    },
    {
      pageNumber: 4,
      id: 'architecture-04',
      chapter: 'FAILURE ANALYSIS · TECHNICAL DEBT',
      badge: 'FAILURE ANALYSIS',
      title: 'Feature Accumulation Led to Architectural Fragmentation',
      imageWebp: '/images/careeros/architecture-page-04.webp',
      imagePng: '/images/careeros/architecture-page-04.png',
      alt: 'Forensic System Decomposition of Feature Creep',
      transition: 'A forensic audit of early prototype iterations revealed critical structural failure modes.',
      whatThisLayerRepresents: 'A forensic decomposition of early prototype failure modes. Rapid feature additions (custom scrapers, reactive filters, un-indexed tags, ad-hoc alerting) without canonical domain schemas created race conditions, duplicate listings, corrupted state transitions, and degraded query performance.',
      whyItMatters: 'Uncontrolled feature velocity without domain boundaries creates compounding architectural fragility, crippling user trust when jobs show incorrect status or outdated requirements.',
      productThinking: 'Rigorous root-cause analysis is senior PM hygiene. Acknowledging architectural debt early is essential to building high-integrity platforms that scale.'
    },
    {
      pageNumber: 5,
      id: 'architecture-05',
      chapter: 'ROOT CAUSE DIAGNOSIS · SYSTEM RESILIENCE',
      badge: 'ROOT CAUSE DIAGNOSIS',
      title: 'The Solution is Not Another Collection of UI Fixes',
      imageWebp: '/images/careeros/architecture-page-05.webp',
      imagePng: '/images/careeros/architecture-page-05.png',
      alt: 'Root Cause Diagnosis Across Ingestion, Domain, Logic, and Pipeline',
      transition: 'Diagnosing the root causes showed that superficial visual polish could not solve underlying data fragmentation.',
      whatThisLayerRepresents: 'Categorization of system breakdowns across four core tiers: Ingestion Fragmentation (unvalidated schema ingestion), Domain Ambiguity (loose entity boundaries), Logic Collisions (competing filter heuristics), and Pipeline Mutation (inconsistent state progression).',
      whyItMatters: 'Treating structural ingestion and domain failures with cosmetic frontend changes creates technical debt while leaving data inaccuracies and pipeline drop-offs unresolved.',
      productThinking: 'Product managers must address the root systemic causes rather than masking architectural flaws behind polished UI facades.'
    },
    {
      pageNumber: 6,
      id: 'architecture-06',
      chapter: 'QUERY ENGINE · CANONICAL FILTER LOGIC',
      badge: 'QUERY LOGIC',
      title: 'Normalizing the Domain: Canonical Filter Logic',
      imageWebp: '/images/careeros/architecture-page-06.webp',
      imagePng: '/images/careeros/architecture-page-06.png',
      alt: 'Canonical Filter Logic Rules: Disjunctive Within, Conjunctive Across',
      transition: 'To eliminate search ambiguities, we formalized the foundational query engine rules.',
      whatThisLayerRepresents: 'Formal specification of the CareerOS query algebra: Disjunctive (OR) evaluation within categorical dimensions (e.g. Remote OR Hybrid), combined with Conjunctive (AND) evaluation across orthogonal dimensions (Role AND Seniority AND Compensation AND Location).',
      whyItMatters: 'Ambiguous boolean evaluation is the primary driver of search irrelevance on traditional platforms, returning false positives that waste valuable candidate review time.',
      productThinking: 'Deterministic query behavior builds deep user confidence. The candidate must always understand exactly why a specific opportunity was matched or excluded.'
    },
    {
      pageNumber: 7,
      id: 'architecture-07',
      chapter: 'TAXONOMY ENGINE · ENTITY NORMALIZATION',
      badge: 'TAXONOMY ENGINE',
      title: 'Defining Canonical Entities for Roles and Remote Work',
      imageWebp: '/images/careeros/architecture-page-07.webp',
      imagePng: '/images/careeros/architecture-page-07.png',
      alt: 'Canonical Entity Normalization Engine',
      transition: 'With query algebra established, incoming unstandardized job metadata required strict entity normalization.',
      whatThisLayerRepresents: 'The multi-tiered normalization schema that maps raw text inputs from hundreds of ATS platforms into canonical domain models (e.g., mapping "Staff PM", "Lead Product Owner", "Group PM" into standardized role archetypes and location bands).',
      whyItMatters: 'ATS nomenclature varies wildly across companies. Without normalization, candidates miss critical opportunities simply due to divergent naming conventions.',
      productThinking: 'Taxonomy is core product infrastructure. Normalizing disparate terminology enables accurate cross-platform comparisons and automated matchmaking.'
    },
    {
      pageNumber: 8,
      id: 'architecture-08',
      chapter: 'DATA INTEGRITY · TELEMETRY & FRESHNESS',
      badge: 'DATA INTEGRITY',
      title: 'Enforcing a Strict Freshness Mandate and True Telemetry',
      imageWebp: '/images/careeros/architecture-page-08.webp',
      imagePng: '/images/careeros/architecture-page-08.png',
      alt: 'Strict Freshness Mandate and Real-Time Telemetry Specification',
      transition: 'Beyond taxonomy, stale data undermines trust, necessitating a strict operational freshness mandate.',
      whatThisLayerRepresents: 'The strict operational SLA: listings older than 7 days from first verification are flagged for re-validation; unverified postings are purged. Real-time telemetry tracks API response latency, worker extraction health, and URL dead-link rates.',
      whyItMatters: 'Ghost jobs and zombie listings on legacy job boards consume candidate energy on opportunities that have already closed or been filled weeks prior.',
      productThinking: 'Freshness is an uncompromisable product contract. A smaller, verified catalog of active opportunities creates far higher utility than millions of stale records.'
    },
    {
      pageNumber: 9,
      id: 'architecture-09',
      chapter: 'PRODUCT STRATEGY · QUALITY TRADEOFF',
      badge: 'PRODUCT STRATEGY',
      title: 'The Core PM Trade-off: Quality Over Volume',
      imageWebp: '/images/careeros/architecture-page-09.webp',
      imagePng: '/images/careeros/architecture-page-09.png',
      alt: 'Core PM Strategic Tradeoff Matrix: Quality vs Volume',
      transition: 'Enforcing strict freshness and normalization required making an explicit strategic trade-off.',
      whatThisLayerRepresents: 'The foundational product trade-off matrix: deliberately rejecting aggregate volume metrics in favor of high-signal precision, schema completeness, verified posting dates, and low noise.',
      whyItMatters: 'Vanity metrics prioritize displaying tens of thousands of low-quality jobs. For candidates, noise creates decision paralysis and wasted effort.',
      productThinking: 'High-conviction product positioning: CareerOS is engineered for the candidate seeking 10 exceptional, verified matches rather than 500 dubious listings.'
    },
    {
      pageNumber: 10,
      id: 'architecture-10',
      chapter: 'PIPELINE ARCHITECTURE · CONSOLIDATED FLOW',
      badge: 'PIPELINE ARCHITECTURE',
      title: 'The Rebuilt Architecture: A Single, Consolidated Pipeline',
      imageWebp: '/images/careeros/architecture-page-10.webp',
      imagePng: '/images/careeros/architecture-page-10.png',
      alt: 'Unified End-to-End Pipeline Architecture',
      transition: 'With strategic trade-offs defined, we engineered the consolidated end-to-end processing pipeline.',
      whatThisLayerRepresents: 'The unified system architecture: Raw multi-source ingestion → Canonical entity normalization → Freshness validation engine → Profile vector matching → Stateful application tracking.',
      whyItMatters: 'A single, observable pipeline prevents split-brain state, eliminates race conditions, and guarantees consistent data flow from external job boards into candidate tracking.',
      productThinking: 'Clean architecture enables sustainable iteration. Consolidating fragmented micro-scripts into a unified pipeline dramatically lowers maintenance overhead.'
    },
    {
      pageNumber: 11,
      id: 'architecture-11',
      chapter: 'MATCHING ENGINE · MULTI-DIMENSIONAL MODEL',
      badge: 'ALGORITHMIC MODEL',
      title: 'Moving Beyond Keywords: The Matching Engine Paradigm',
      imageWebp: '/images/careeros/architecture-page-11.webp',
      imagePng: '/images/careeros/architecture-page-11.png',
      alt: 'Seven-Dimensional Matching Engine Architecture',
      transition: 'With clean data flowing through the pipeline, we rebuilt the core intelligence: the 7-dimensional matching engine.',
      whatThisLayerRepresents: 'The multi-dimensional matching engine evaluating 7 orthogonal vectors: Domain Skills, Scope & Seniority, Strategic Alignment, Working Modality, Cultural Attributes, Compensation Bracket, and Growth Trajectory.',
      whyItMatters: 'Naive keyword searches match irrelevant jobs containing identical words while missing deeply relevant roles with slightly different titles.',
      productThinking: 'Explainable AI over black-box scoring: every match score provides candidate-visible rationale detailing exact strengths and potential gaps.'
    },
    {
      pageNumber: 12,
      id: 'architecture-12',
      chapter: 'INTERFACE SPECIFICATION · UX ARCHITECTURE',
      badge: 'INTERFACE SPECIFICATION',
      title: 'UX Direction: High Information Density, Low Cognitive Load',
      imageWebp: '/images/careeros/architecture-page-12.webp',
      imagePng: '/images/careeros/architecture-page-12.png',
      alt: 'High Information Density Interface Layout Specification',
      transition: 'Complex multi-dimensional matching required an interface optimized for cognitive clarity.',
      whatThisLayerRepresents: 'The UX specification prioritizing high information density with low cognitive load: modular job cards, instant dimensional match indicators, expandable audit criteria, and keyboard-first workflow navigation.',
      whyItMatters: 'Poor UX forces users to open dozens of browser tabs to evaluate basic requirements. High-density interfaces enable rapid, confident decision-making.',
      productThinking: 'Productivity tool design philosophy: respectful of candidate attention, minimizing unnecessary clicks, and presenting high-context signals upfront.'
    },
    {
      pageNumber: 13,
      id: 'architecture-13',
      chapter: 'ENGINEERING GOVERNANCE · DEFINITION OF DONE',
      badge: 'ENGINEERING GOVERNANCE',
      title: 'Redefining the Definition of Done (DoD)',
      imageWebp: '/images/careeros/architecture-page-13.webp',
      imagePng: '/images/careeros/architecture-page-13.png',
      alt: 'Definition of Done (DoD) Engineering Governance Framework',
      transition: 'To sustain system integrity, engineering releases must adhere to a strict Definition of Done.',
      whatThisLayerRepresents: 'Engineering governance framework mandating that every deployed feature passes schema validation, automated freshness verification, unit test coverage, and end-to-end pipeline integration before release.',
      whyItMatters: 'Without rigorous release gates, edge cases in web extraction and data parsing quickly corrupt downstream candidate tracking states.',
      productThinking: 'Operational discipline as product strategy. Reliability is a non-negotiable feature that compounds user trust over time.'
    },
    {
      pageNumber: 14,
      id: 'architecture-14',
      chapter: 'SEQUENCED ROADMAP · EXECUTION STRATEGY',
      badge: 'SEQUENCED ROADMAP',
      title: 'Execution Roadmap: Prioritizing System Stability Over New Features',
      imageWebp: '/images/careeros/architecture-page-14.webp',
      imagePng: '/images/careeros/architecture-page-14.png',
      alt: 'Sequenced Product Execution Roadmap',
      transition: 'Governed by this standard, the implementation roadmap phases technical stability ahead of feature expansion.',
      whatThisLayerRepresents: 'The phased execution roadmap prioritizing core architecture, data integrity, and matching precision in Phase 1 before expanding to advanced automation, interview copilots, and multi-tenant capabilities in Phase 2 & 3.',
      whyItMatters: 'Premature feature expansion on unstable foundations leads to technical collapse. Solidifying core domain mechanics ensures future capabilities scale effortlessly.',
      productThinking: 'Sequencing is the essence of product leadership: knowing what not to build yet is as important as knowing what to build first.'
    },
    {
      pageNumber: 15,
      id: 'architecture-15',
      chapter: 'EXECUTIVE SYNTHESIS · STRATEGIC PM MATRIX',
      badge: 'EXECUTIVE SYNTHESIS',
      title: 'The Ultimate PM Synthesis',
      imageWebp: '/images/careeros/architecture-page-15.webp',
      imagePng: '/images/careeros/architecture-page-15.png',
      alt: 'Executive PM Synthesis and Four-Stage Architectural Maturity Model',
      transition: 'The case study concludes with an executive synthesis of the systems architecture and product trajectory.',
      whatThisLayerRepresents: 'Executive synthesis uniting the four pillars of CareerOS: Systems Thinking (holistic lifecycle), Rigorous Prioritization (quality over volume), Transparent Engineering (zero vanity metrics), and Architectural Longevity (persistent data).',
      whyItMatters: 'Demonstrates end-to-end product mastery: bridging strategic market vision, domain architecture, algorithmic matching, and technical execution into a coherent product asset.',
      productThinking: 'True product leadership balances vision with architectural rigor. CareerOS proves how systems thinking transforms broken, fragmented experiences into elegant, high-impact software.'
    }
  ],
  systemSummary: {
    eyebrow: 'CAREEROS AS A CAREER OPERATING SYSTEM',
    heading: 'The Closed-Loop Intelligence Flow',
    intro: 'CareerOS connects fragmented multi-platform job hunting into a 10-stage unified lifecycle where every user action continuously trains the system\'s matching algorithms.',
    steps: [
      { id: '01', tag: 'INGEST', name: 'Multi-Source Aggregation', desc: 'Continuous background workers poll targeted ATS systems (Greenhouse, Lever, Ashby, Workday) directly.' },
      { id: '02', tag: 'NORMALIZE', name: 'Domain Entity Mapping', desc: 'Raw posting payloads are transformed into canonical Opportunity models with standardized taxonomy.' },
      { id: '03', tag: 'VERIFY', name: 'Freshness & SLA Enforcement', desc: 'Listings older than 7 days are discarded; active links and career page sources are cryptographically verified.' },
      { id: '04', tag: 'EVALUATE', name: '7-Dimensional Matching', desc: 'Candidate profile vectors are evaluated across skills, seniority, domain, location, comp, values, and trajectory.' },
      { id: '05', tag: 'SYNTHESIZE', name: 'Explainable Match Scoring', desc: 'Generates transparent reasoning breakdowns explaining exact alignment strengths and critical requirement gaps.' },
      { id: '06', tag: 'CURATE', name: 'Priority Inbox Presentation', desc: 'Opportunities are ranked deterministically with zero algorithmic noise or sponsored listing adulteration.' },
      { id: '07', tag: 'ASSEMBLE', name: 'Targeted Artifact Generation', desc: 'Generates role-specific positioning briefs, tailored resume tailoring signals, and candidate outreach drafts.' },
      { id: '08', tag: 'TRACK', name: 'State-Machine Pipeline', desc: 'Tracks active conversations through strict state transitions (Discovered → Applied → Screening → Offer).' },
      { id: '09', tag: 'PREPARE', name: 'Interview Context Dossier', desc: 'Assembles company intelligence, interviewer background, and historical objection handling notes into a prep pack.' },
      { id: '10', tag: 'LEARN', name: 'Closed-Loop Feedback Loop', desc: 'Market outcomes, interview pass rates, and candidate feedback automatically recalibrate matching vectors.' }
    ]
  },
  productThinking: {
    eyebrow: 'FOUNDATIONAL PRINCIPLES',
    heading: 'Product Thinking Behind CareerOS',
    intro: 'Five architectural and product management principles that guide every decision within CareerOS.',
    principles: [
      {
        num: '01',
        title: 'Shifting the Integration Burden',
        status: 'Core Principle',
        concept: 'The candidate should never be the human glue between job boards, ATS portals, spreadsheets, and emails. The software must absorb the complexity of integration, aggregation, and tracking.'
      },
      {
        num: '02',
        title: 'Profile as an Active Search Engine',
        status: 'Architecture Shift',
        concept: 'Instead of forcing candidates to query thousands of noisy listings repeatedly, candidate credentials, preferences, and trajectory act as an autonomous engine pulling and scoring incoming opportunities.'
      },
      {
        num: '03',
        title: 'Signal Over Volume',
        status: 'Strategic Trade-off',
        concept: 'Presenting 10 high-confidence, verified opportunities with explainable fit is infinitely more valuable than overwhelming the user with 500 unvalidated, stale, or sponsored job cards.'
      },
      {
        num: '04',
        title: 'Deterministic State Over Ephemeral UI',
        status: 'Engineering Mandate',
        concept: 'Career progression is an enduring multi-month workflow. Ephemeral UI states create data loss and friction; persistent state machines with strict SLAs maintain pipeline momentum.'
      },
      {
        num: '05',
        title: 'Explainable AI Over Black-Box Magic',
        status: 'Trust Vector',
        concept: 'High-stakes career decisions require absolute transparency. Every algorithmic recommendation must expose the exact criteria, data points, and trade-offs that produced the match score.'
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
          'End-to-end product architecture and systems specification',
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
          'Local JSON AST layout and positioning engine'
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
      { label: 'Explore Architecture', href: '#architecture-01', secondary: true },
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
