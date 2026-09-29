-- Seed site_content with initial authentic content
INSERT INTO site_content (id, published_content, draft_content, published_at, updated_at, published_by)
VALUES (
  'active',
  '{
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "name": "01 · Hero Section",
      "enabled": true,
      "order": 0
    },
    {
      "id": "what-i-do",
      "type": "capabilities",
      "name": "02 · What I Do",
      "enabled": true,
      "order": 1
    },
    {
      "id": "work",
      "type": "entrepreneurial",
      "name": "03 · Entrepreneurial Experience",
      "enabled": true,
      "order": 2
    },
    {
      "id": "corporate",
      "type": "corporate",
      "name": "04 · Corporate Experience",
      "enabled": true,
      "order": 3
    },
    {
      "id": "experience",
      "type": "timeline",
      "name": "05 · Professional Experience Summary",
      "enabled": true,
      "order": 4
    },
    {
      "id": "education-certifications",
      "type": "education-certifications",
      "name": "06 · Education & Certifications",
      "enabled": true,
      "order": 5
    },
    {
      "id": "building",
      "type": "building",
      "name": "07 · Where I Am Building",
      "enabled": true,
      "order": 6
    },
    {
      "id": "thinking",
      "type": "thinking",
      "name": "08 · Thinking & Writing",
      "enabled": true,
      "order": 7
    },
    {
      "id": "tools",
      "type": "tools",
      "name": "09 · Tools & Capabilities",
      "enabled": true,
      "order": 8
    },
    {
      "id": "about-contact",
      "type": "about-contact",
      "name": "10 · About & Direct Contact",
      "enabled": true,
      "order": 9
    }
  ],
  "whereIAmBuilding": {
    "eyebrow": "07 · FORWARD FOCUS & SYSTEMS",
    "title": "Where I Am Building",
    "intro": "I’m continuing to build at the intersection of business, technology, automation and digital products — applying my experience in revenue, operations and entrepreneurship to practical systems and products."
  },
  "profile": {
    "name": "Vivek Dhoundiyal",
    "role": "Revenue • Growth • Commercial Operator",
    "location": "India / Remote",
    "availability": "Open for revenue leadership, strategic growth consulting & 0-to-1 ventures",
    "email": "vivekdhoundiyal2901@gmail.com",
    "phone": "+91 75030 16766",
    "whatsapp": "+91 75030 16766",
    "linkedin": "https://www.linkedin.com/in/vivekdhoundiyal",
    "x": "https://x.com/Vivek_Dh_",
    "github": "https://github.com/VivekDhoundiyal",
    "heroEyebrow": "REVENUE • BUSINESS DEVELOPMENT • GROWTH",
    "heroHeadline": "I build revenue, relationships and businesses.",
    "heroDescription": "I am a commercial operator and business builder with 8+ years of experience across B2B sales, revenue generation, partnerships, entrepreneurship and commercial operations. Today, I am applying that experience to technology, AI workflows and systems — including CareerOS.",
    "portraitImage": "/images/vivek-canonical.png",
    "avatarImage": "/images/vivek-canonical.png",
    "education": "B.Tech in Mechanical Engineering, Manav Rachna International University (2014–2018)",
    "languages": [
      "English",
      "Hindi"
    ],
    "experienceYears": "8+ Years",
    "heroHeadlineAlt": "I help businesses grow and run better.",
    "milestones": [
      {
        "value": "8+ Years",
        "title": "Sales · Partnerships",
        "subtitle": "Operations · Entrepreneurship"
      },
      {
        "value": "3+ Ventures",
        "title": "Built · Operated · Scaled",
        "subtitle": "Marketplace, B2B food supply & distribution"
      },
      {
        "value": "Next Chapter",
        "title": "Product · AI · Systems",
        "subtitle": "Applying commercial leverage to technology"
      }
    ]
  },
  "contact": {
    "title": "Let''s build something useful.",
    "subtitle": "CONTACT",
    "description": "Open to conversations around revenue, business development, growth, partnerships and technology.",
    "email": "vivekdhoundiyal2901@gmail.com",
    "emailSubject": "Contact from your website",
    "emailMessage": "Hi Vivek, I found your website and would like to connect.",
    "whatsappNumber": "+91 75030 16766",
    "whatsappMessage": "Hi Vivek, I found your website and would like to connect.",
    "phone": "+91 75030 16766",
    "phoneDisplay": "+91 75030 16766",
    "primaryButtonText": "Let''s Talk",
    "secondaryButtonText": "View Resume"
  },
  "modalContact": {
    "title": "Let''s connect.",
    "subtitle": "Choose the easiest way to reach me.",
    "call": {
      "label": "Call Me",
      "display": "+91 75030 16766",
      "action": "tel:+917503016766",
      "desc": "Direct phone conversation"
    },
    "whatsapp": {
      "label": "WhatsApp",
      "display": "+91 75030 16766",
      "action": "https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.",
      "desc": "Direct encrypted chat"
    },
    "linkedin": {
      "label": "LinkedIn",
      "display": "in/vivekdhoundiyal",
      "action": "https://www.linkedin.com/in/vivekdhoundiyal",
      "desc": "Professional background & network"
    },
    "email": {
      "label": "Email",
      "display": "vivekdhoundiyal2901@gmail.com",
      "action": "mailto:vivekdhoundiyal2901@gmail.com?subject=Contact%20from%20your%20website&body=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.",
      "desc": "Asynchronous in-depth inquiries"
    }
  },
  "social": {
    "linkedin": "https://www.linkedin.com/in/vivekdhoundiyal",
    "x": "https://x.com/Vivek_Dh_",
    "github": "https://github.com/VivekDhoundiyal",
    "email": "vivekdhoundiyal2901@gmail.com",
    "whatsapp": "https://wa.me/917503016766"
  },
  "site": {
    "title": "Vivek Dhoundiyal — Builder · Systems · Growth",
    "description": "I build products, businesses and systems. 8+ years across entrepreneurship, commercial growth, operations and software.",
    "logo": "/images/vivek-canonical.png",
    "profileImage": "/images/vivek-canonical.png",
    "favicon": "/favicon.ico"
  },
  "hero": {
    "eyebrow": "REVENUE • BUSINESS DEVELOPMENT • GROWTH",
    "title": "I build revenue, relationships and businesses.",
    "description": "I am a commercial operator and business builder with 8+ years of experience across B2B sales, revenue generation, partnerships, entrepreneurship and commercial operations. Today, I am applying that experience to technology, AI workflows and systems — including CareerOS.",
    "primaryButtonText": "Explore My Work",
    "primaryButtonUrl": "#work",
    "secondaryButtonText": "View Resume",
    "secondaryButtonUrl": "/resume",
    "titleAlt": "I help businesses\ngrow and run better."
  },
  "resumes": [
    {
      "id": "b2b-sales",
      "title": "B2B Sales & Business Development Resume",
      "subtitle": "B2B Sales · Enterprise Development · Revenue Operations · Partnerships",
      "filename": "Vivek_Dhoundiyal_B2B_Sales_Resume.pdf",
      "url": "/resumes/Vivek_Dhoundiyal_B2B_Sales_Resume.pdf",
      "description": "Detailed record of 8+ years driving commercial revenue, consultative B2B sales cycles, client negotiation, and outbound pipeline architecture.",
      "focusAreas": [
        "Enterprise B2B Sales & Consultative Selling",
        "Lead Generation & Multi-Channel Outbound",
        "Commercial Negotiation & Contract Closing",
        "Key Account Management & Revenue Retention",
        "CRM Pipeline Architecture (Zoho, Apollo, Lusha)"
      ]
    }
  ],
  "projects": [
    {
      "id": "settlemycar",
      "slug": "settlemycar",
      "title": "SettleMyCar",
      "projectType": "MARKETPLACE · HISTORICAL",
      "category": "Marketplace / Business",
      "role": "Co-founder",
      "year": "2018–2021",
      "status": "Built & Operated",
      "statusType": "historical",
      "featured": true,
      "tagline": "Automotive-services marketplace connecting car owners with vetted multi-brand workshops.",
      "summary": "Co-founded and scaled an automotive repair and maintenance marketplace across Delhi-NCR, onboarding 50+ garage partners and fulfilling over 1,000+ consumer transactions.",
      "evidence": [
        {
          "label": "Network Scale",
          "value": "50+",
          "sub": "vetted service centers & garages"
        },
        {
          "label": "Transactions",
          "value": "1,000+",
          "sub": "fulfilled customer service orders"
        },
        {
          "label": "Operating Radius",
          "value": "Delhi-NCR",
          "sub": "end-to-end doorstep logistics"
        }
      ],
      "problem": "The automotive repair ecosystem in urban centers was heavily fragmented: customers faced pricing asymmetry, opaque diagnostics, and uncertain turnaround times, while independent garages struggled with customer acquisition and capacity utilization.",
      "solution": "Designed a centralized service marketplace with standardized pricing tiers, digital estimation workflows, and vehicle pickup/drop logistics to bridge trust between car owners and workshop operators.",
      "responsibilities": "Managed workshop partner acquisition, contract negotiation, service pricing matrices, digital customer acquisition channels, and dispute resolution workflows.",
      "execution": "Audited over 100+ local garages for tooling and technician capability, onboarded 50 qualified workshops, instituted milestone-based customer communication, and ran digital outbound funnels.",
      "outcomes": "Achieved 1,000+ completed vehicle service transactions with strong customer satisfaction and established a repeatable unit-level operating playbook.",
      "learning": "0-to-1 marketplaces live or die by supply-side consistency. Standardizing operational quality at the ground level matters far more than software feature bloat."
    },
    {
      "id": "dark-kitchen",
      "slug": "dark-kitchen",
      "title": "Dark Kitchen",
      "projectType": "B2B FOOD SUPPLY · VENTURE",
      "category": "B2B Supply / System",
      "role": "Founder",
      "year": "2020–2023",
      "status": "Built & Operated",
      "statusType": "historical",
      "featured": true,
      "tagline": "B2B food-supply venture serving commercial kitchens and restaurants with predictable supply chains.",
      "summary": "Engineered an end-to-end B2B supply system for restaurants and cloud kitchens, managing daily farm-to-kitchen procurement, inventory forecasting, temperature-controlled delivery, and recurring supplier relationships.",
      "evidence": [
        {
          "label": "Supply System",
          "value": "End-to-End",
          "sub": "sourcing to daily delivery"
        },
        {
          "label": "Order Cadence",
          "value": "Daily Recurring",
          "sub": "just-in-time morning fulfillment"
        },
        {
          "label": "Operations",
          "value": "Zero Stockout",
          "sub": "predictive demand replenishment"
        }
      ],
      "problem": "Commercial kitchens suffer from volatile ingredient pricing, erratic early-morning vendor deliveries, and unpredictable quality defects that jeopardize daily restaurant service.",
      "solution": "Built a reliable, recurring B2B supply pipeline combining bulk agricultural procurement, daily morning delivery SLA routes, and pre-negotiated wholesale pricing tiers.",
      "responsibilities": "Handled wholesale mandi supplier procurement, restaurant client acquisition, daily logistics route scheduling, quality inspection, and working capital management.",
      "execution": "Established direct wholesale farmer/mandi supply channels, set strict visual grading criteria, and built an automated order dispatch system guaranteeing delivery before 8:00 AM.",
      "outcomes": "Maintained high client retention with recurring revenue and protected restaurants against sudden raw material inflation.",
      "learning": "B2B customer retention is a byproduct of ruthless reliability. Eliminating operational anxiety for a business customer creates an enduring commercial moat."
    },
    {
      "id": "fixins",
      "slug": "fixins",
      "title": "Fixins",
      "projectType": "B2B DISTRIBUTION · BUSINESS",
      "category": "Business / Operations",
      "role": "Co-founder / Partner",
      "year": "2017–2020",
      "status": "Completed",
      "statusType": "historical",
      "featured": false,
      "tagline": "B2B distribution and commercial supply operation.",
      "summary": "Managed commercial distribution channels, wholesale buyer relationships, credit terms, and logistical fulfillment across regional supply routes.",
      "evidence": [
        {
          "label": "Model",
          "value": "B2B Distribution",
          "sub": "wholesale & commercial accounts"
        },
        {
          "label": "Fulfillment",
          "value": "Regional",
          "sub": "multi-point supply distribution"
        }
      ],
      "problem": "Local retail buyers experienced inconsistent wholesale supply and fragmented credit terms.",
      "solution": "Structured dependable regional distribution routes with transparent credit cycles and scheduled fulfillment.",
      "responsibilities": "Channel expansion, credit assessment, supplier negotiation, and delivery supervision.",
      "execution": "Built route schedules, signed distributor agreements, and established working capital management.",
      "outcomes": "Maintained positive cash-flow distribution operations across regional accounts.",
      "learning": "Cash flow and working capital governance are the bedrock of any physical distribution venture."
    },
    {
      "id": "supersurge",
      "slug": "supersurge",
      "title": "SuperSurge Consulting",
      "projectType": "REVENUE ARCHITECTURE · CONSULTING",
      "category": "Growth / Commercial",
      "role": "Growth & Revenue Consultant",
      "year": "Oct 2024 – Present",
      "status": "Active Engagement",
      "statusType": "active",
      "featured": false,
      "tagline": "Outbound pipeline design, revenue operations, and commercial growth advisory.",
      "summary": "Advising B2B startups and commercial ventures on go-to-market structure, ICP segmentation, multichannel outbound architecture, and conversion funnel optimization.",
      "evidence": [
        {
          "label": "Tenure",
          "value": "Oct 2024 – Present",
          "sub": "strategic revenue consulting"
        },
        {
          "label": "Focus",
          "value": "GTM & Ops",
          "sub": "outbound systems & pipeline velocity"
        }
      ],
      "problem": "Early and growth-stage B2B ventures often burn capital on unfocused outbound campaigns that yield low response rates and bloated sales cycles.",
      "solution": "Re-engineered outbound frameworks through tight ICP definition, verified intent triggers, and automated research dossiers that empower reps to pitch with high relevance.",
      "responsibilities": "Advisory, sales process auditing, cold outbound playbook design, and CRM pipeline restructuring.",
      "execution": "Designed targeted outbound campaigns, set up multi-channel email/LinkedIn cadences, and established SLA benchmarks for sales follow-ups.",
      "outcomes": "Helped founders achieve higher reply rates and tighter pipeline predictability.",
      "learning": "High-performing revenue teams succeed not through volume, but through extreme precision in prospect selection and context-rich positioning."
    },
    {
      "id": "commercial-partnerships",
      "slug": "commercial-partnerships",
      "title": "CollegeDunia & KreedOn",
      "projectType": "B2B SALES & PARTNERSHIPS · ENTERPRISE",
      "category": "Experience / Commercial",
      "role": "Senior BD Manager (CollegeDunia) / Media Sales Manager (KreedOn)",
      "year": "2023–2024",
      "status": "Track Record",
      "statusType": "historical",
      "featured": false,
      "tagline": "Enterprise solution selling, brand sponsorships, and multi-stakeholder commercial deals.",
      "summary": "Spearheaded enterprise revenue generation across digital media and edtech: managing consultative sales cycles, pitch presentations, commercial negotiations, and institutional partnerships.",
      "evidence": [
        {
          "label": "Domains",
          "value": "EdTech & Sports Media",
          "sub": "institutional & brand accounts"
        },
        {
          "label": "Core Strength",
          "value": "Solution Selling",
          "sub": "consultative pipeline execution"
        }
      ],
      "problem": "Enterprise institutional clients have complex decision-making structures, multi-layered procurement reviews, and high demands for measurable ROI.",
      "solution": "Built value-oriented consultative proposals that mapped directly to institutional growth objectives and sponsorship exposure KPIs.",
      "responsibilities": "Prospecting enterprise accounts, pitching CXO/Dean-level stakeholders, negotiating contracts, and ensuring delivery fulfillment.",
      "execution": "Ran outbound discovery calls, presented customized data-backed pitches, and collaborated with delivery teams to ensure sponsor satisfaction.",
      "outcomes": "Closed high-ticket institutional and corporate sponsorship deals across both platforms.",
      "learning": "Enterprise sales is empathy in commercial clothing. Closing complex deals requires solving the personal and organizational anxieties of the buyer."
    }
  ],
  "experience": {
    "headline": "A builder with deep commercial and operating foundations.",
    "subhead": "The verified trajectory: Engineering → Entrepreneurship → 0→1 Building → B2B Sales & Growth → Operations → Product.",
    "intro": "I began with an engineering background where I learned system constraints, logic, and debugging. Moving into entrepreneurship and commercial roles, I learned how businesses actually acquire customers, negotiate terms, manage cash flows, and build repeatable operational machines.",
    "nodes": [
      {
        "id": "corporate-collegedunia",
        "category": "Corporate",
        "company": "CollegeDunia Web Pvt Ltd",
        "role": "Senior Manager – Business Development",
        "period": "Apr 2023 – Sep 2023",
        "location": "India",
        "badge": "Corporate · Enterprise Sales",
        "summary": "Drove institutional partnerships, digital marketing solutions, and consultative sales cycles for higher education clients.",
        "scope": "Enterprise discovery, multi-stakeholder contract closing, and digital student acquisition pipelines.",
        "link": "/experience/collegedunia",
        "takeaway": "Institutional enterprise deals require deep stakeholder alignment and navigating multi-stakeholder approval dynamics."
      },
      {
        "id": "corporate-kreedon",
        "category": "Corporate",
        "company": "KreedOn (Voice of Indian Sports)",
        "role": "Media Sales Manager",
        "period": "Dec 2023 – Oct 2024",
        "location": "India",
        "badge": "Corporate · Media Sales",
        "summary": "Led B2B brand sponsorships and media monetization; formulated tailored proposals for corporate brands and advertising agencies.",
        "scope": "Media inventory packaging, brand sponsorship sales, and sports campaign ROI attribution.",
        "link": "/experience/kreedon",
        "takeaway": "Sponsorship and media deals require translating audience attention into tangible, brand-aligned commercial outcomes."
      },
      {
        "id": "entrepreneurship",
        "category": "Entrepreneurship",
        "company": "0→1 Ventures (SettleMyCar, Dark Kitchen, Fixins)",
        "role": "Founder / Co-Founder & Operator",
        "period": "2017 – 2023",
        "location": "Delhi-NCR, India",
        "badge": "Entrepreneurship · 0→1 Ventures",
        "summary": "Built, operated, and navigated 0-to-1 ventures in automotive marketplace logistics, B2B food supply, and commercial distribution.",
        "scope": "Unit economics governance, supplier SLAs, 50+ garage partnerships, and 1,000+ fulfilled service orders.",
        "link": "/#work",
        "takeaway": "Developed deep comfort with ambiguity, unit economics accountability, supplier governance, and hands-on customer acquisition."
      },
      {
        "id": "consulting",
        "category": "Consulting",
        "company": "SuperSurge Consulting",
        "role": "Growth & Revenue Consultant",
        "period": "Oct 2024 – Present",
        "location": "India / Remote",
        "badge": "Consulting · GTM Architecture",
        "summary": "Advising B2B ventures on go-to-market architecture, ICP definition, outbound engines, and revenue operations.",
        "scope": "Outbound sales process auditing, multi-channel email/LinkedIn cadences, and CRM pipeline restructuring.",
        "link": "/experience/supersurge",
        "takeaway": "Revenue is an engineering problem: when you constrain inputs to high-intent signals and repeatable cadences, pipeline growth becomes deterministic."
      }
    ]
  },
  "howIThink": [
    {
      "id": "understand",
      "stage": "01",
      "title": "Understand",
      "tagline": "Root-cause diagnostics & stakeholder context",
      "question": "What problem are we actually solving?",
      "lookFor": "Customer context, commercial constraints, emotional & operational friction, economic incentives.",
      "produce": "Problem boundary document, stakeholder map, baseline friction audit.",
      "relatedWork": "SettleMyCar"
    },
    {
      "id": "frame",
      "stage": "02",
      "title": "Frame",
      "tagline": "Unit economics & structural levers",
      "question": "What are the structural levers and unit economics?",
      "lookFor": "Incentive misalignments, bottleneck constraints, margin profiles, customer willingness to pay.",
      "produce": "Unit-economic thesis, decision boundaries, success criteria.",
      "relatedWork": "Dark Kitchen"
    },
    {
      "id": "explore",
      "stage": "03",
      "title": "Explore",
      "tagline": "Alternative pathways & technical feasibility",
      "question": "What are the lowest-friction paths to resolution?",
      "lookFor": "Industry analogs, existing workarounds, leverage from modern tooling & APIs.",
      "produce": "Opportunity matrix, trade-off comparison, technical feasibility notes.",
      "relatedWork": "CareerOS"
    },
    {
      "id": "decide",
      "stage": "04",
      "title": "Decide",
      "tagline": "Ruthless scoping & non-goals",
      "question": "What are we deliberately NOT doing?",
      "lookFor": "Scope creep traps, asymmetric upside, critical path dependencies.",
      "produce": "Scoped PRD / build spec, explicit non-goals, milestone roadmap.",
      "relatedWork": "SuperSurge"
    },
    {
      "id": "build",
      "stage": "05",
      "title": "Build",
      "tagline": "Rapid modular execution & delivery cadence",
      "question": "How fast can we put a real mechanism into user hands?",
      "lookFor": "Execution drag, manual edge cases, speed to first feedback loop.",
      "produce": "Working system, operational SOPs, telemetry instrumentation.",
      "relatedWork": "Dark Kitchen"
    },
    {
      "id": "learn",
      "stage": "06",
      "title": "Learn",
      "tagline": "Behavioral reality & systematic iteration",
      "question": "What did actual behavior teach us about reality?",
      "lookFor": "Unexpected drop-offs, user workarounds, margin deviations, customer retention.",
      "produce": "Iterative feedback log, system optimization playbook, v2 backlog.",
      "relatedWork": "SettleMyCar"
    }
  ],
  "currentlyBuilding": [
    {
      "id": "careeros",
      "title": "CareerOS",
      "category": "Independent Software Product",
      "status": "ACTIVE",
      "focus": "AI-Powered Career Operating System",
      "tagline": "Architecting a unified system for career progression — centralizing opportunity discovery, intelligent positioning artifacts, application pipeline tracking, and interview preparation workflows.",
      "description": "An AI-powered career operating system I am building to streamline opportunity discovery, eliminate pipeline fragmentation, and accelerate professional growth.",
      "currentObjective": "Engineering core opportunity indexing and state-machine pipeline tracking modules locally.",
      "whatIsBeingBuilt": "Full-stack interface with local state management, structured candidate profile generators, and opportunity ranking algorithms.",
      "technology": [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Local Storage APIs"
      ],
      "progress": "Opportunity Discovery & Pipeline Tracking modules engineered in local build.",
      "milestone": "Active local architecture & engineering (zero fabricated metrics)",
      "link": "#building",
      "lastUpdated": "September 2026",
      "highlight": true,
      "badge": "Active Build"
    }
  ],
  "tools": [
    {
      "id": "chatgpt",
      "name": "ChatGPT",
      "category": "AI",
      "desc": "Synthetic customer scenario modeling, prompt engineering & conversational synthesis"
    },
    {
      "id": "claude",
      "name": "Claude",
      "category": "AI",
      "desc": "Complex systems reasoning, spec critique & analytical document generation"
    },
    {
      "id": "gemini",
      "name": "Gemini",
      "category": "AI",
      "desc": "Multimodal analysis, large-context document processing & research extraction"
    },
    {
      "id": "cursor",
      "name": "Cursor",
      "category": "AI",
      "desc": "AI-native code engineering, rapid prototyping & interface building"
    },
    {
      "id": "perplexity",
      "name": "Perplexity",
      "category": "Research",
      "desc": "Real-time market discovery, competitor intelligence & verified industry research"
    },
    {
      "id": "apollo",
      "name": "Apollo",
      "category": "Research",
      "desc": "B2B prospect intelligence, verified account mapping & outbound intent triggers"
    },
    {
      "id": "lusha",
      "name": "Lusha",
      "category": "Research",
      "desc": "Verified decision-maker contact data & enterprise account enrichment"
    },
    {
      "id": "hubspot",
      "name": "HubSpot",
      "category": "CRM",
      "desc": "Inbound marketing, deal pipeline tracking, contact lifecycle stages & automated sequences"
    },
    {
      "id": "zoho-crm",
      "name": "Zoho CRM",
      "category": "CRM",
      "desc": "Pipeline management, lead status machines & revenue forecasting"
    },
    {
      "id": "stripe",
      "name": "Stripe",
      "category": "CRM",
      "desc": "Commercial billing infrastructure, checkout flows, recurring billing & invoices"
    },
    {
      "id": "n8n",
      "name": "n8n",
      "category": "Automation",
      "desc": "Self-hosted workflow automations, custom webhooks & API connectors"
    },
    {
      "id": "make",
      "name": "Make",
      "category": "Automation",
      "desc": "Visual multi-app integration routers & event-triggered pipelines"
    },
    {
      "id": "zapier",
      "name": "Zapier",
      "category": "Automation",
      "desc": "Rapid connector pipelines for zero-to-one prototype validation"
    },
    {
      "id": "notion",
      "name": "Notion",
      "category": "Productivity",
      "desc": "Operating playbooks, project documentation, PRDs & company knowledge architecture"
    },
    {
      "id": "linear",
      "name": "Linear",
      "category": "Productivity",
      "desc": "High-velocity issue tracking, sprint cadences & milestone execution"
    },
    {
      "id": "clickup",
      "name": "ClickUp",
      "category": "Productivity",
      "desc": "Operational workflow tracking, resource coordination & task maps"
    },
    {
      "id": "google-workspace",
      "name": "Google Workspace",
      "category": "Productivity",
      "desc": "Executive memos, financial modeling, spreadsheets & shared collaboration"
    },
    {
      "id": "monday",
      "name": "Monday.com",
      "category": "Productivity",
      "desc": "Cross-functional operational boards, project tracking & resource management"
    },
    {
      "id": "python",
      "name": "Python",
      "category": "Development",
      "desc": "Data transformation scripts, web scrapers & automated ETL utilities"
    },
    {
      "id": "figma",
      "name": "Figma",
      "category": "Development",
      "desc": "Design systems, interactive prototypes & high-fidelity wireframing"
    },
    {
      "id": "webflow",
      "name": "Webflow",
      "category": "Development",
      "desc": "Landing pages, rapid commercial test sites & editorial publishing"
    },
    {
      "id": "posthog",
      "name": "PostHog",
      "category": "Analytics",
      "desc": "Product analytics, event tracking, user journeys & session telemetry"
    },
    {
      "id": "slack",
      "name": "Slack",
      "category": "Communication",
      "desc": "Async team coordination, real-time alert webhooks & integration hubs"
    },
    {
      "id": "loom",
      "name": "Loom",
      "category": "Communication",
      "desc": "Async video walkthroughs, design critiques & asynchronous team updates"
    }
  ],
  "thinking": [
    {
      "id": "operator-to-product",
      "slug": "operator-to-product",
      "title": "From Operator to Product: Bridging the Commercial-Engineering Gap",
      "category": "PRODUCT",
      "date": "2026-08-12",
      "readingTime": "5 min read",
      "excerpt": "Why the most effective product builders think like business operators first, and how commercial realities shape superior software architecture.",
      "tags": [
        "Product Thinking",
        "Commercial Strategy",
        "Unit Economics"
      ]
    },
    {
      "id": "systems-that-outlive-builders",
      "slug": "systems-that-outlive-builders",
      "title": "Designing Systems That Outlive Their Builders",
      "category": "SYSTEMS",
      "date": "2026-07-28",
      "readingTime": "6 min read",
      "excerpt": "How to structure documentation, operating playbooks, and automated workflows so businesses execute with high velocity without depending on heroics.",
      "tags": [
        "Operations",
        "System Architecture",
        "Scalability"
      ]
    },
    {
      "id": "ai-commercial-loop",
      "slug": "ai-product-loop",
      "title": "AI in the Commercial Loop: Augmentation Over Automation",
      "category": "AI",
      "date": "2026-06-19",
      "readingTime": "7 min read",
      "excerpt": "Why full automation often breaks trust in professional workflows, and how to design human-in-the-loop AI interfaces that operators actually rely on.",
      "tags": [
        "Artificial Intelligence",
        "Workflows",
        "Agentic Systems"
      ]
    }
  ],
  "seo": {
    "siteTitle": "Vivek Dhoundiyal — Builder · Systems · Growth",
    "siteDescription": "I build products, businesses and systems. 8+ years across entrepreneurship, commercial growth, operations and software.",
    "canonicalUrl": "https://vivekdhoundiyal.com",
    "ogImage": "/images/vivek-canonical.png",
    "twitterHandle": "@Vivek_Dh_"
  },
  "whatIDo": {
    "eyebrow": "CAPABILITIES",
    "headline": "What I do",
    "intro": "I work across business development, revenue generation, partnerships and commercial execution — turning opportunities into measurable outcomes.",
    "pillars": [
      {
        "id": "revenue-bd",
        "title": "Revenue & Business Development",
        "tag": "Commercial Execution",
        "description": "B2B sales, pipeline development, consultative selling, account growth and commercial execution."
      },
      {
        "id": "partnerships-growth",
        "title": "Partnerships & Growth",
        "tag": "Market Expansion",
        "description": "Strategic partnerships, business development, market expansion and relationship building."
      },
      {
        "id": "business-ops",
        "title": "Business & Operations",
        "tag": "System Design",
        "description": "Entrepreneurship, process design, operational execution and building repeatable systems."
      }
    ]
  },
  "whereImGoing": {
    "eyebrow": "FUTURE DIRECTION",
    "title": "Where I''m going next",
    "narrative": "My career has moved from engineering and commercial execution into business development, entrepreneurship, growth and operations. I''m now increasingly focused on technology, AI and product building — using my commercial background to approach products from both the customer and business side.",
    "stages": [
      {
        "label": "Current",
        "role": "Revenue / Business Development / Growth / Operations",
        "desc": "Deep commercial domain knowledge and customer problem understanding."
      },
      {
        "label": "Evolving",
        "role": "Technology / AI Workflows / Products",
        "desc": "Building software systems like CareerOS and automating operational workflows."
      },
      {
        "label": "Future",
        "role": "Commercial Software Products & Applied AI Systems",
        "desc": "Applying commercial rigor, systems design, and AI automation to high-impact business products."
      }
    ]
  },
  "proof": {
    "eyebrow": "CREDENTIALS & TRACK RECORD",
    "headline": "Commercial foundation, verified ventures and systems execution.",
    "items": [
      {
        "value": "8+ Years",
        "label": "Commercial Execution",
        "sub": "B2B sales, revenue architecture & deal closing"
      },
      {
        "value": "3+ Ventures",
        "label": "Built & Operated",
        "sub": "Automotive marketplace, B2B food supply & distribution"
      },
      {
        "value": "Enterprise BD",
        "label": "Consultative Selling",
        "sub": "CollegeDunia & KreedOn institutional accounts"
      },
      {
        "value": "Operations",
        "label": "Supply Systems",
        "sub": "Farm-to-kitchen routes & workshop networks"
      },
      {
        "value": "AI Workflows",
        "label": "Systems & Tools",
        "sub": "Agentic pipelines, n8n automations & CareerOS"
      }
    ]
  },
  "capabilities": [
    {
      "id": "revenue-bd",
      "slug": "revenue-business-development",
      "title": "Revenue & Business Development",
      "tag": "Commercial Execution",
      "headline": "Consultative pipeline architecture, enterprise deal closing and recurring revenue systems.",
      "summary": "I build predictable commercial revenue engines. From initial ICP identification and outbound research to multi-stakeholder consultative pitching and contract negotiation, I focus on commercial durability rather than empty volume.",
      "approach": "Revenue is an engineering problem. When you define clear ICP boundaries, map buyer incentives, and automate context-rich research dossiers, sales cycles shorten and conversion rates compound.",
      "problemsSolved": [
        "Unfocused outbound campaigns resulting in single-digit reply rates and bloated sales cycles",
        "Opacity in CRM pipeline stages and lack of conversion visibility",
        "Misalignment between commercial pitch decks and executive buyer ROI metrics",
        "Stalled enterprise deals caused by unmapped procurement and legal stakeholders"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Signal & ICP Definition",
          "desc": "Filter high-intent accounts using data intelligence (Apollo, Lusha) and hiring/funding triggers."
        },
        {
          "step": "02",
          "name": "Context-Rich Outreach",
          "desc": "Craft hyper-personalized value theses addressing the specific operational friction of the target CXO."
        },
        {
          "step": "03",
          "name": "Consultative Discovery",
          "desc": "Uncover unstated anxieties, decision hierarchies, and unit economic constraints."
        },
        {
          "step": "04",
          "name": "Commercial Structuring & Close",
          "desc": "Align multi-tiered pricing, pilot milestones, and contractual SLA terms."
        }
      ],
      "relevantExperience": [
        {
          "company": "SuperSurge",
          "role": "Growth & Revenue Consultant",
          "highlight": "Advising B2B founders on GTM pipeline velocity and outbound frameworks."
        },
        {
          "company": "CollegeDunia",
          "role": "Senior Manager – BD",
          "highlight": "Spearheaded consultative sales cycles for higher education institutional clients."
        },
        {
          "company": "KreedOn",
          "role": "Media Sales Manager",
          "highlight": "Closed brand sponsorships and digital media monetization deals."
        }
      ],
      "toolsUsed": [
        "Zoho CRM",
        "HubSpot",
        "Apollo",
        "Lusha",
        "LinkedIn Sales Navigator",
        "Google Workspace"
      ],
      "outcomes": "Consistently exceeded enterprise quarterly targets, closed multi-thousand dollar accounts, and engineered outbound playbooks currently in active client production.",
      "lessons": "Enterprise sales is empathy in commercial clothing. Closing complex deals requires solving the personal and organizational anxieties of the buyer."
    },
    {
      "id": "partnerships-growth",
      "slug": "partnerships-growth",
      "title": "Partnerships & Growth",
      "tag": "Market Expansion",
      "headline": "Strategic alliances, distribution channels, and high-trust commercial ecosystems.",
      "summary": "Growth rarely happens in isolation. I design mutual-upside partnership agreements that leverage existing distribution networks, align strategic incentives, and open non-linear growth channels.",
      "approach": "The best partnerships are not formal marketing stunts; they are structural win-win agreements where both parties gain immediate operational leverage or margin protection.",
      "problemsSolved": [
        "High customer acquisition costs (CAC) in saturated direct marketing channels",
        "Fragmented supply partners with inconsistent service quality and low platform retention",
        "Slow market entry into competitive regional territories",
        "Lack of structured co-marketing and co-selling agreements"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Ecosystem Mapping",
          "desc": "Identify non-competing entities that already own the trust and attention of your target audience."
        },
        {
          "step": "02",
          "name": "Economic Incentive Design",
          "desc": "Structure fee-splits, referral margins, and co-branded deliverables that make partnering a no-brainer."
        },
        {
          "step": "03",
          "name": "Partner Enablement",
          "desc": "Create operational SOPs, onboarding materials, and digital workflows so partners execute seamlessly."
        },
        {
          "step": "04",
          "name": "Performance Governance",
          "desc": "Track partner transaction volume, SLA fulfillment, and customer satisfaction scores."
        }
      ],
      "relevantExperience": [
        {
          "company": "SettleMyCar",
          "role": "Co-founder",
          "highlight": "Onboarded and managed 50+ multi-brand garage partners across Delhi-NCR."
        },
        {
          "company": "CollegeDunia",
          "role": "Senior Manager – BD",
          "highlight": "Structured long-term academic partnership agreements with university administrators."
        },
        {
          "company": "Fixins",
          "role": "Co-founder / Partner",
          "highlight": "Managed regional wholesale buyer distributor networks and credit terms."
        }
      ],
      "toolsUsed": [
        "Slack",
        "Notion",
        "ClickUp",
        "Google Workspace",
        "Zapier"
      ],
      "outcomes": "50+ signed workshop agreements, 1,000+ completed marketplace fulfillment orders, and durable wholesale distribution routes.",
      "lessons": "A partnership agreement is only as good as the operational ease of fulfillment. If execution is complex, even the best contracts decay."
    },
    {
      "id": "business-operations",
      "slug": "business-operations",
      "title": "Business & Operations",
      "tag": "System Design",
      "headline": "Unit economics, ground-level logistics, working capital governance, and repeatable operating machines.",
      "summary": "I build and run physical and digital operational systems. From morning farm-to-kitchen fresh supply deliveries to multi-point automotive workshop repair logistics, I design systems that eliminate friction and protect cash flow.",
      "approach": "Operations is about turning uncertainty into predictable routines. By breaking down complex workflows into deterministic checkpoints and clear SLAs, businesses scale without chaotic fire-fighting.",
      "problemsSolved": [
        "Volatile supplier quality and erratic early-morning logistics delivery failures",
        "Working capital depletion caused by loose credit terms and delayed receivables",
        "High human dependency in daily routine tasks without documented playbooks",
        "Operational opacity between ground fulfillment teams and management"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Process Decomposition",
          "desc": "Map every human and technical step from order ingestion to final delivery."
        },
        {
          "step": "02",
          "name": "SLA & Quality Checkpoints",
          "desc": "Institute strict visual grading, timestamp milestones, and pre-dispatch checklists."
        },
        {
          "step": "03",
          "name": "Cash Flow & Credit Guardrails",
          "desc": "Implement milestone-based disbursements, escrow mechanisms, and tight receivables cadences."
        },
        {
          "step": "04",
          "name": "Automation & Exception Routing",
          "desc": "Automate routine notifications via webhooks and flag anomalies immediately to operators."
        }
      ],
      "relevantExperience": [
        {
          "company": "Dark Kitchen",
          "role": "Founder",
          "highlight": "Engineered daily farm-to-kitchen morning procurement and logistics routes."
        },
        {
          "company": "SettleMyCar",
          "role": "Co-founder",
          "highlight": "Orchestrated doorstep vehicle pickup, digital estimation, and workshop repair workflows."
        },
        {
          "company": "Fixins",
          "role": "Partner",
          "highlight": "Governed inventory turnaround, warehouse dispatch, and wholesale credit governance."
        }
      ],
      "toolsUsed": [
        "n8n",
        "Make",
        "Monday.com",
        "ClickUp",
        "Google Sheets / Workspace",
        "Python"
      ],
      "outcomes": "Maintained zero stockouts across daily restaurant supply, completed 1,000+ vehicle service cycles, and achieved positive operating cash flow.",
      "lessons": "B2B customer retention is a byproduct of ruthless reliability. Eliminating operational anxiety for a business customer creates an enduring commercial moat."
    }
  ],
  "corporateExperience": [
    {
      "id": "collegedunia",
      "slug": "collegedunia",
      "company": "CollegeDunia Web Pvt Ltd",
      "role": "Senior Manager – Business Development",
      "period": "Apr 2023 – Sep 2023",
      "location": "India",
      "badge": "Enterprise Sales",
      "tagline": "Enterprise consultative selling, institutional partnerships, and multi-stakeholder contract closing.",
      "summary": "Led consultative business development cycles for higher education institutions, pitching institutional leaders, structuring customized digital marketing and student acquisition solutions, and managing contract negotiations.",
      "context": "Higher education institutions operate with complex governance structures where purchase decisions require consensus across Deans, Trustees, Admissions Directors, and finance committees.",
      "responsibilities": [
        "Identified and prospected high-value institutional education accounts across target geographies",
        "Conducted consultative discovery sessions with University Directors and marketing leadership",
        "Formulated bespoke data-backed proposals mapping digital reach to verified enrollment projections",
        "Negotiated contract scope, payment cycles, and renewal parameters to ensure margin retention"
      ],
      "challenges": "Overcoming institutional inertia, lengthy bureaucratic approval cycles, and demand for guaranteed ROI attribution.",
      "execution": "Constructed custom ROI projection models demonstrating student enrollment acquisition economics, pre-empted procurement objections, and maintained aggressive executive follow-up cadences.",
      "outcomes": "Closed key institutional accounts, drove quarterly revenue targets, and expanded client retention through clear delivery governance.",
      "skills": [
        "Enterprise B2B Sales",
        "Consultative Selling",
        "Contract Negotiation",
        "Executive Stakeholder Management",
        "Pipeline Velocity"
      ],
      "lessons": "In enterprise sales, you are never pitching a product; you are solving the buyer’s professional vulnerability by derisking their decision."
    },
    {
      "id": "kreedon",
      "slug": "kreedon",
      "company": "KreedOn (Voice of Indian Sports)",
      "role": "Media Sales Manager",
      "period": "Dec 2023 – Oct 2024",
      "location": "India",
      "badge": "Media Sales & Sponsorships",
      "tagline": "Brand sponsorships, sports media monetization, and commercial campaign architecture.",
      "summary": "Spearheaded B2B brand partnerships and media sponsorship deals, translating sports audience attention into high-impact commercial campaigns for consumer brands, corporate sponsors, and advertising agencies.",
      "context": "Digital sports media monetization requires bridging the gap between raw viewer attention and tangible corporate brand objectives, brand awareness, and lead generation.",
      "responsibilities": [
        "Built and executed outbound GTM strategies targeting FMCG, consumer tech, and sports lifestyle brands",
        "Structured innovative sponsorship packages combining branded content, athlete IP, and social distribution",
        "Pitched Brand Heads, CMOs, and media buying agency directors on commercial ROI",
        "Supervised campaign delivery milestones and post-campaign analytical reporting"
      ],
      "challenges": "Navigating highly competitive brand sponsorship budgets and demanding performance attribution from media buyers.",
      "execution": "Created performance-linked sponsorship decks with contextual audience insights, mapped campaign deliverables to concrete brand reach metrics, and fostered direct agency relationships.",
      "outcomes": "Secured high-value brand sponsorships and established repeatable sponsorship inventory packages that accelerated sales velocity.",
      "skills": [
        "Media Monetization",
        "Brand Sponsorships",
        "Agency Relationship Management",
        "Commercial Campaign Design",
        "Pitch Presentations"
      ],
      "lessons": "Selling media is selling trust in attention. The more clearly you translate engagement into business impact, the faster corporate sponsors commit."
    },
    {
      "id": "supersurge",
      "slug": "supersurge",
      "company": "SuperSurge Consulting",
      "role": "Growth & Revenue Consultant",
      "period": "Oct 2024 – Present",
      "location": "India / Remote",
      "badge": "Active Advisory",
      "tagline": "GTM outbound architecture, revenue operations, and pipeline engineering for B2B ventures.",
      "summary": "Advising B2B founders and commercial teams on go-to-market structure, ICP segmentation, multichannel outbound engine design, and conversion optimization.",
      "context": "Early and growth-stage B2B ventures often burn capital on unfocused outbound campaigns that yield low response rates, unqualified discovery calls, and bloated sales cycles.",
      "responsibilities": [
        "Audit existing commercial sales pipelines, messaging frameworks, and lead routing mechanics",
        "Design targeted ICP criteria using verified intent data, tech-stack signals, and hiring triggers",
        "Build automated multi-touch outbound cadences combining email, LinkedIn, and direct research dossiers",
        "Implement CRM operational workflows in Zoho and Apollo with strict SLA benchmarks"
      ],
      "challenges": "Ensuring sales reps adopt structured prospecting habits without falling back on spam-and-hope outbound volume.",
      "execution": "Re-engineered client outbound playbooks, automated manual enrichment using n8n and data APIs, and instituted disciplined pipeline qualification criteria.",
      "outcomes": "Helped founders achieve significantly higher response rates, tightened qualification cadences, and improved pipeline predictability.",
      "skills": [
        "GTM Strategy",
        "Revenue Operations",
        "Outbound Pipeline Engineering",
        "ICP Architecture",
        "CRM Optimization"
      ],
      "lessons": "High-performing revenue teams succeed not through volume, but through extreme precision in prospect selection and context-rich positioning."
    }
  ],
  "certifications": [
    {
      "id": "google-pm",
      "name": "Google Project Management Professional Certificate",
      "issuer": "Google / Coursera",
      "date": "2024",
      "credentialId": "Verified Professional Credential",
      "credentialUrl": "https://coursera.org/share/67ea64a2fef42c262142277d33b497fe",
      "status": "Verified",
      "description": "Comprehensive 6-course professional curriculum covering project initiation, planning, execution, Agile and Scrum frameworks, documentation, risk mitigation, and stakeholder management.",
      "skills": [
        "Agile & Scrum",
        "Project Planning",
        "Risk Management",
        "Stakeholder Alignment",
        "Documentation & PRDs",
        "Sprint Cadences"
      ]
    }
  ],
  "education": {
    "degree": "B.Tech in Mechanical Engineering",
    "institution": "Manav Rachna International University",
    "location": "Faridabad, India",
    "period": "2014 – 2018",
    "summary": "Rigorous engineering foundation grounded in physical systems, mathematical modeling, thermodynamics, and modular systems analysis.",
    "takeaway": "Instilled respect for physical constraints, first-principles logic, and the discipline of clean modular systems."
  },
  "buildingToward": {
    "eyebrow": "STRATEGIC FOCUS",
    "title": "Where I am Building",
    "narrative": "My foundation began in engineering and evolved through 8+ years of 0→1 entrepreneurship, enterprise B2B sales, revenue architecture, and commercial operations. Today, I am channeling that commercial leverage into technology, automated business systems, AI workflows, and digital products.",
    "focusAreas": [
      {
        "title": "Independent Software Products",
        "desc": "Architecting utilities like CareerOS that solve high-friction professional workflows through clean interfaces and intelligent automation."
      },
      {
        "title": "AI & Agentic Workflows",
        "desc": "Deploying LLM prompt chaining, webhook automations (n8n, Make), and deterministic schemas to eliminate commercial drag."
      },
      {
        "title": "Scalable Business Systems",
        "desc": "Designing self-sustaining operational machines where revenue generation, partner onboarding, and customer retention run with predictable velocity."
      }
    ]
  }
}',
  '{
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "name": "01 · Hero Section",
      "enabled": true,
      "order": 0
    },
    {
      "id": "what-i-do",
      "type": "capabilities",
      "name": "02 · What I Do",
      "enabled": true,
      "order": 1
    },
    {
      "id": "work",
      "type": "entrepreneurial",
      "name": "03 · Entrepreneurial Experience",
      "enabled": true,
      "order": 2
    },
    {
      "id": "corporate",
      "type": "corporate",
      "name": "04 · Corporate Experience",
      "enabled": true,
      "order": 3
    },
    {
      "id": "experience",
      "type": "timeline",
      "name": "05 · Professional Experience Summary",
      "enabled": true,
      "order": 4
    },
    {
      "id": "education-certifications",
      "type": "education-certifications",
      "name": "06 · Education & Certifications",
      "enabled": true,
      "order": 5
    },
    {
      "id": "building",
      "type": "building",
      "name": "07 · Where I Am Building",
      "enabled": true,
      "order": 6
    },
    {
      "id": "thinking",
      "type": "thinking",
      "name": "08 · Thinking & Writing",
      "enabled": true,
      "order": 7
    },
    {
      "id": "tools",
      "type": "tools",
      "name": "09 · Tools & Capabilities",
      "enabled": true,
      "order": 8
    },
    {
      "id": "about-contact",
      "type": "about-contact",
      "name": "10 · About & Direct Contact",
      "enabled": true,
      "order": 9
    }
  ],
  "whereIAmBuilding": {
    "eyebrow": "07 · FORWARD FOCUS & SYSTEMS",
    "title": "Where I Am Building",
    "intro": "I’m continuing to build at the intersection of business, technology, automation and digital products — applying my experience in revenue, operations and entrepreneurship to practical systems and products."
  },
  "profile": {
    "name": "Vivek Dhoundiyal",
    "role": "Revenue • Growth • Commercial Operator",
    "location": "India / Remote",
    "availability": "Open for revenue leadership, strategic growth consulting & 0-to-1 ventures",
    "email": "vivekdhoundiyal2901@gmail.com",
    "phone": "+91 75030 16766",
    "whatsapp": "+91 75030 16766",
    "linkedin": "https://www.linkedin.com/in/vivekdhoundiyal",
    "x": "https://x.com/Vivek_Dh_",
    "github": "https://github.com/VivekDhoundiyal",
    "heroEyebrow": "REVENUE • BUSINESS DEVELOPMENT • GROWTH",
    "heroHeadline": "I build revenue, relationships and businesses.",
    "heroDescription": "I am a commercial operator and business builder with 8+ years of experience across B2B sales, revenue generation, partnerships, entrepreneurship and commercial operations. Today, I am applying that experience to technology, AI workflows and systems — including CareerOS.",
    "portraitImage": "/images/vivek-canonical.png",
    "avatarImage": "/images/vivek-canonical.png",
    "education": "B.Tech in Mechanical Engineering, Manav Rachna International University (2014–2018)",
    "languages": [
      "English",
      "Hindi"
    ],
    "experienceYears": "8+ Years",
    "heroHeadlineAlt": "I help businesses grow and run better.",
    "milestones": [
      {
        "value": "8+ Years",
        "title": "Sales · Partnerships",
        "subtitle": "Operations · Entrepreneurship"
      },
      {
        "value": "3+ Ventures",
        "title": "Built · Operated · Scaled",
        "subtitle": "Marketplace, B2B food supply & distribution"
      },
      {
        "value": "Next Chapter",
        "title": "Product · AI · Systems",
        "subtitle": "Applying commercial leverage to technology"
      }
    ]
  },
  "contact": {
    "title": "Let''s build something useful.",
    "subtitle": "CONTACT",
    "description": "Open to conversations around revenue, business development, growth, partnerships and technology.",
    "email": "vivekdhoundiyal2901@gmail.com",
    "emailSubject": "Contact from your website",
    "emailMessage": "Hi Vivek, I found your website and would like to connect.",
    "whatsappNumber": "+91 75030 16766",
    "whatsappMessage": "Hi Vivek, I found your website and would like to connect.",
    "phone": "+91 75030 16766",
    "phoneDisplay": "+91 75030 16766",
    "primaryButtonText": "Let''s Talk",
    "secondaryButtonText": "View Resume"
  },
  "modalContact": {
    "title": "Let''s connect.",
    "subtitle": "Choose the easiest way to reach me.",
    "call": {
      "label": "Call Me",
      "display": "+91 75030 16766",
      "action": "tel:+917503016766",
      "desc": "Direct phone conversation"
    },
    "whatsapp": {
      "label": "WhatsApp",
      "display": "+91 75030 16766",
      "action": "https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.",
      "desc": "Direct encrypted chat"
    },
    "linkedin": {
      "label": "LinkedIn",
      "display": "in/vivekdhoundiyal",
      "action": "https://www.linkedin.com/in/vivekdhoundiyal",
      "desc": "Professional background & network"
    },
    "email": {
      "label": "Email",
      "display": "vivekdhoundiyal2901@gmail.com",
      "action": "mailto:vivekdhoundiyal2901@gmail.com?subject=Contact%20from%20your%20website&body=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.",
      "desc": "Asynchronous in-depth inquiries"
    }
  },
  "social": {
    "linkedin": "https://www.linkedin.com/in/vivekdhoundiyal",
    "x": "https://x.com/Vivek_Dh_",
    "github": "https://github.com/VivekDhoundiyal",
    "email": "vivekdhoundiyal2901@gmail.com",
    "whatsapp": "https://wa.me/917503016766"
  },
  "site": {
    "title": "Vivek Dhoundiyal — Builder · Systems · Growth",
    "description": "I build products, businesses and systems. 8+ years across entrepreneurship, commercial growth, operations and software.",
    "logo": "/images/vivek-canonical.png",
    "profileImage": "/images/vivek-canonical.png",
    "favicon": "/favicon.ico"
  },
  "hero": {
    "eyebrow": "REVENUE • BUSINESS DEVELOPMENT • GROWTH",
    "title": "I build revenue, relationships and businesses.",
    "description": "I am a commercial operator and business builder with 8+ years of experience across B2B sales, revenue generation, partnerships, entrepreneurship and commercial operations. Today, I am applying that experience to technology, AI workflows and systems — including CareerOS.",
    "primaryButtonText": "Explore My Work",
    "primaryButtonUrl": "#work",
    "secondaryButtonText": "View Resume",
    "secondaryButtonUrl": "/resume",
    "titleAlt": "I help businesses\ngrow and run better."
  },
  "resumes": [
    {
      "id": "b2b-sales",
      "title": "B2B Sales & Business Development Resume",
      "subtitle": "B2B Sales · Enterprise Development · Revenue Operations · Partnerships",
      "filename": "Vivek_Dhoundiyal_B2B_Sales_Resume.pdf",
      "url": "/resumes/Vivek_Dhoundiyal_B2B_Sales_Resume.pdf",
      "description": "Detailed record of 8+ years driving commercial revenue, consultative B2B sales cycles, client negotiation, and outbound pipeline architecture.",
      "focusAreas": [
        "Enterprise B2B Sales & Consultative Selling",
        "Lead Generation & Multi-Channel Outbound",
        "Commercial Negotiation & Contract Closing",
        "Key Account Management & Revenue Retention",
        "CRM Pipeline Architecture (Zoho, Apollo, Lusha)"
      ]
    }
  ],
  "projects": [
    {
      "id": "settlemycar",
      "slug": "settlemycar",
      "title": "SettleMyCar",
      "projectType": "MARKETPLACE · HISTORICAL",
      "category": "Marketplace / Business",
      "role": "Co-founder",
      "year": "2018–2021",
      "status": "Built & Operated",
      "statusType": "historical",
      "featured": true,
      "tagline": "Automotive-services marketplace connecting car owners with vetted multi-brand workshops.",
      "summary": "Co-founded and scaled an automotive repair and maintenance marketplace across Delhi-NCR, onboarding 50+ garage partners and fulfilling over 1,000+ consumer transactions.",
      "evidence": [
        {
          "label": "Network Scale",
          "value": "50+",
          "sub": "vetted service centers & garages"
        },
        {
          "label": "Transactions",
          "value": "1,000+",
          "sub": "fulfilled customer service orders"
        },
        {
          "label": "Operating Radius",
          "value": "Delhi-NCR",
          "sub": "end-to-end doorstep logistics"
        }
      ],
      "problem": "The automotive repair ecosystem in urban centers was heavily fragmented: customers faced pricing asymmetry, opaque diagnostics, and uncertain turnaround times, while independent garages struggled with customer acquisition and capacity utilization.",
      "solution": "Designed a centralized service marketplace with standardized pricing tiers, digital estimation workflows, and vehicle pickup/drop logistics to bridge trust between car owners and workshop operators.",
      "responsibilities": "Managed workshop partner acquisition, contract negotiation, service pricing matrices, digital customer acquisition channels, and dispute resolution workflows.",
      "execution": "Audited over 100+ local garages for tooling and technician capability, onboarded 50 qualified workshops, instituted milestone-based customer communication, and ran digital outbound funnels.",
      "outcomes": "Achieved 1,000+ completed vehicle service transactions with strong customer satisfaction and established a repeatable unit-level operating playbook.",
      "learning": "0-to-1 marketplaces live or die by supply-side consistency. Standardizing operational quality at the ground level matters far more than software feature bloat."
    },
    {
      "id": "dark-kitchen",
      "slug": "dark-kitchen",
      "title": "Dark Kitchen",
      "projectType": "B2B FOOD SUPPLY · VENTURE",
      "category": "B2B Supply / System",
      "role": "Founder",
      "year": "2020–2023",
      "status": "Built & Operated",
      "statusType": "historical",
      "featured": true,
      "tagline": "B2B food-supply venture serving commercial kitchens and restaurants with predictable supply chains.",
      "summary": "Engineered an end-to-end B2B supply system for restaurants and cloud kitchens, managing daily farm-to-kitchen procurement, inventory forecasting, temperature-controlled delivery, and recurring supplier relationships.",
      "evidence": [
        {
          "label": "Supply System",
          "value": "End-to-End",
          "sub": "sourcing to daily delivery"
        },
        {
          "label": "Order Cadence",
          "value": "Daily Recurring",
          "sub": "just-in-time morning fulfillment"
        },
        {
          "label": "Operations",
          "value": "Zero Stockout",
          "sub": "predictive demand replenishment"
        }
      ],
      "problem": "Commercial kitchens suffer from volatile ingredient pricing, erratic early-morning vendor deliveries, and unpredictable quality defects that jeopardize daily restaurant service.",
      "solution": "Built a reliable, recurring B2B supply pipeline combining bulk agricultural procurement, daily morning delivery SLA routes, and pre-negotiated wholesale pricing tiers.",
      "responsibilities": "Handled wholesale mandi supplier procurement, restaurant client acquisition, daily logistics route scheduling, quality inspection, and working capital management.",
      "execution": "Established direct wholesale farmer/mandi supply channels, set strict visual grading criteria, and built an automated order dispatch system guaranteeing delivery before 8:00 AM.",
      "outcomes": "Maintained high client retention with recurring revenue and protected restaurants against sudden raw material inflation.",
      "learning": "B2B customer retention is a byproduct of ruthless reliability. Eliminating operational anxiety for a business customer creates an enduring commercial moat."
    },
    {
      "id": "fixins",
      "slug": "fixins",
      "title": "Fixins",
      "projectType": "B2B DISTRIBUTION · BUSINESS",
      "category": "Business / Operations",
      "role": "Co-founder / Partner",
      "year": "2017–2020",
      "status": "Completed",
      "statusType": "historical",
      "featured": false,
      "tagline": "B2B distribution and commercial supply operation.",
      "summary": "Managed commercial distribution channels, wholesale buyer relationships, credit terms, and logistical fulfillment across regional supply routes.",
      "evidence": [
        {
          "label": "Model",
          "value": "B2B Distribution",
          "sub": "wholesale & commercial accounts"
        },
        {
          "label": "Fulfillment",
          "value": "Regional",
          "sub": "multi-point supply distribution"
        }
      ],
      "problem": "Local retail buyers experienced inconsistent wholesale supply and fragmented credit terms.",
      "solution": "Structured dependable regional distribution routes with transparent credit cycles and scheduled fulfillment.",
      "responsibilities": "Channel expansion, credit assessment, supplier negotiation, and delivery supervision.",
      "execution": "Built route schedules, signed distributor agreements, and established working capital management.",
      "outcomes": "Maintained positive cash-flow distribution operations across regional accounts.",
      "learning": "Cash flow and working capital governance are the bedrock of any physical distribution venture."
    },
    {
      "id": "supersurge",
      "slug": "supersurge",
      "title": "SuperSurge Consulting",
      "projectType": "REVENUE ARCHITECTURE · CONSULTING",
      "category": "Growth / Commercial",
      "role": "Growth & Revenue Consultant",
      "year": "Oct 2024 – Present",
      "status": "Active Engagement",
      "statusType": "active",
      "featured": false,
      "tagline": "Outbound pipeline design, revenue operations, and commercial growth advisory.",
      "summary": "Advising B2B startups and commercial ventures on go-to-market structure, ICP segmentation, multichannel outbound architecture, and conversion funnel optimization.",
      "evidence": [
        {
          "label": "Tenure",
          "value": "Oct 2024 – Present",
          "sub": "strategic revenue consulting"
        },
        {
          "label": "Focus",
          "value": "GTM & Ops",
          "sub": "outbound systems & pipeline velocity"
        }
      ],
      "problem": "Early and growth-stage B2B ventures often burn capital on unfocused outbound campaigns that yield low response rates and bloated sales cycles.",
      "solution": "Re-engineered outbound frameworks through tight ICP definition, verified intent triggers, and automated research dossiers that empower reps to pitch with high relevance.",
      "responsibilities": "Advisory, sales process auditing, cold outbound playbook design, and CRM pipeline restructuring.",
      "execution": "Designed targeted outbound campaigns, set up multi-channel email/LinkedIn cadences, and established SLA benchmarks for sales follow-ups.",
      "outcomes": "Helped founders achieve higher reply rates and tighter pipeline predictability.",
      "learning": "High-performing revenue teams succeed not through volume, but through extreme precision in prospect selection and context-rich positioning."
    },
    {
      "id": "commercial-partnerships",
      "slug": "commercial-partnerships",
      "title": "CollegeDunia & KreedOn",
      "projectType": "B2B SALES & PARTNERSHIPS · ENTERPRISE",
      "category": "Experience / Commercial",
      "role": "Senior BD Manager (CollegeDunia) / Media Sales Manager (KreedOn)",
      "year": "2023–2024",
      "status": "Track Record",
      "statusType": "historical",
      "featured": false,
      "tagline": "Enterprise solution selling, brand sponsorships, and multi-stakeholder commercial deals.",
      "summary": "Spearheaded enterprise revenue generation across digital media and edtech: managing consultative sales cycles, pitch presentations, commercial negotiations, and institutional partnerships.",
      "evidence": [
        {
          "label": "Domains",
          "value": "EdTech & Sports Media",
          "sub": "institutional & brand accounts"
        },
        {
          "label": "Core Strength",
          "value": "Solution Selling",
          "sub": "consultative pipeline execution"
        }
      ],
      "problem": "Enterprise institutional clients have complex decision-making structures, multi-layered procurement reviews, and high demands for measurable ROI.",
      "solution": "Built value-oriented consultative proposals that mapped directly to institutional growth objectives and sponsorship exposure KPIs.",
      "responsibilities": "Prospecting enterprise accounts, pitching CXO/Dean-level stakeholders, negotiating contracts, and ensuring delivery fulfillment.",
      "execution": "Ran outbound discovery calls, presented customized data-backed pitches, and collaborated with delivery teams to ensure sponsor satisfaction.",
      "outcomes": "Closed high-ticket institutional and corporate sponsorship deals across both platforms.",
      "learning": "Enterprise sales is empathy in commercial clothing. Closing complex deals requires solving the personal and organizational anxieties of the buyer."
    }
  ],
  "experience": {
    "headline": "A builder with deep commercial and operating foundations.",
    "subhead": "The verified trajectory: Engineering → Entrepreneurship → 0→1 Building → B2B Sales & Growth → Operations → Product.",
    "intro": "I began with an engineering background where I learned system constraints, logic, and debugging. Moving into entrepreneurship and commercial roles, I learned how businesses actually acquire customers, negotiate terms, manage cash flows, and build repeatable operational machines.",
    "nodes": [
      {
        "id": "corporate-collegedunia",
        "category": "Corporate",
        "company": "CollegeDunia Web Pvt Ltd",
        "role": "Senior Manager – Business Development",
        "period": "Apr 2023 – Sep 2023",
        "location": "India",
        "badge": "Corporate · Enterprise Sales",
        "summary": "Drove institutional partnerships, digital marketing solutions, and consultative sales cycles for higher education clients.",
        "scope": "Enterprise discovery, multi-stakeholder contract closing, and digital student acquisition pipelines.",
        "link": "/experience/collegedunia",
        "takeaway": "Institutional enterprise deals require deep stakeholder alignment and navigating multi-stakeholder approval dynamics."
      },
      {
        "id": "corporate-kreedon",
        "category": "Corporate",
        "company": "KreedOn (Voice of Indian Sports)",
        "role": "Media Sales Manager",
        "period": "Dec 2023 – Oct 2024",
        "location": "India",
        "badge": "Corporate · Media Sales",
        "summary": "Led B2B brand sponsorships and media monetization; formulated tailored proposals for corporate brands and advertising agencies.",
        "scope": "Media inventory packaging, brand sponsorship sales, and sports campaign ROI attribution.",
        "link": "/experience/kreedon",
        "takeaway": "Sponsorship and media deals require translating audience attention into tangible, brand-aligned commercial outcomes."
      },
      {
        "id": "entrepreneurship",
        "category": "Entrepreneurship",
        "company": "0→1 Ventures (SettleMyCar, Dark Kitchen, Fixins)",
        "role": "Founder / Co-Founder & Operator",
        "period": "2017 – 2023",
        "location": "Delhi-NCR, India",
        "badge": "Entrepreneurship · 0→1 Ventures",
        "summary": "Built, operated, and navigated 0-to-1 ventures in automotive marketplace logistics, B2B food supply, and commercial distribution.",
        "scope": "Unit economics governance, supplier SLAs, 50+ garage partnerships, and 1,000+ fulfilled service orders.",
        "link": "/#work",
        "takeaway": "Developed deep comfort with ambiguity, unit economics accountability, supplier governance, and hands-on customer acquisition."
      },
      {
        "id": "consulting",
        "category": "Consulting",
        "company": "SuperSurge Consulting",
        "role": "Growth & Revenue Consultant",
        "period": "Oct 2024 – Present",
        "location": "India / Remote",
        "badge": "Consulting · GTM Architecture",
        "summary": "Advising B2B ventures on go-to-market architecture, ICP definition, outbound engines, and revenue operations.",
        "scope": "Outbound sales process auditing, multi-channel email/LinkedIn cadences, and CRM pipeline restructuring.",
        "link": "/experience/supersurge",
        "takeaway": "Revenue is an engineering problem: when you constrain inputs to high-intent signals and repeatable cadences, pipeline growth becomes deterministic."
      }
    ]
  },
  "howIThink": [
    {
      "id": "understand",
      "stage": "01",
      "title": "Understand",
      "tagline": "Root-cause diagnostics & stakeholder context",
      "question": "What problem are we actually solving?",
      "lookFor": "Customer context, commercial constraints, emotional & operational friction, economic incentives.",
      "produce": "Problem boundary document, stakeholder map, baseline friction audit.",
      "relatedWork": "SettleMyCar"
    },
    {
      "id": "frame",
      "stage": "02",
      "title": "Frame",
      "tagline": "Unit economics & structural levers",
      "question": "What are the structural levers and unit economics?",
      "lookFor": "Incentive misalignments, bottleneck constraints, margin profiles, customer willingness to pay.",
      "produce": "Unit-economic thesis, decision boundaries, success criteria.",
      "relatedWork": "Dark Kitchen"
    },
    {
      "id": "explore",
      "stage": "03",
      "title": "Explore",
      "tagline": "Alternative pathways & technical feasibility",
      "question": "What are the lowest-friction paths to resolution?",
      "lookFor": "Industry analogs, existing workarounds, leverage from modern tooling & APIs.",
      "produce": "Opportunity matrix, trade-off comparison, technical feasibility notes.",
      "relatedWork": "CareerOS"
    },
    {
      "id": "decide",
      "stage": "04",
      "title": "Decide",
      "tagline": "Ruthless scoping & non-goals",
      "question": "What are we deliberately NOT doing?",
      "lookFor": "Scope creep traps, asymmetric upside, critical path dependencies.",
      "produce": "Scoped PRD / build spec, explicit non-goals, milestone roadmap.",
      "relatedWork": "SuperSurge"
    },
    {
      "id": "build",
      "stage": "05",
      "title": "Build",
      "tagline": "Rapid modular execution & delivery cadence",
      "question": "How fast can we put a real mechanism into user hands?",
      "lookFor": "Execution drag, manual edge cases, speed to first feedback loop.",
      "produce": "Working system, operational SOPs, telemetry instrumentation.",
      "relatedWork": "Dark Kitchen"
    },
    {
      "id": "learn",
      "stage": "06",
      "title": "Learn",
      "tagline": "Behavioral reality & systematic iteration",
      "question": "What did actual behavior teach us about reality?",
      "lookFor": "Unexpected drop-offs, user workarounds, margin deviations, customer retention.",
      "produce": "Iterative feedback log, system optimization playbook, v2 backlog.",
      "relatedWork": "SettleMyCar"
    }
  ],
  "currentlyBuilding": [
    {
      "id": "careeros",
      "title": "CareerOS",
      "category": "Independent Software Product",
      "status": "ACTIVE",
      "focus": "AI-Powered Career Operating System",
      "tagline": "Architecting a unified system for career progression — centralizing opportunity discovery, intelligent positioning artifacts, application pipeline tracking, and interview preparation workflows.",
      "description": "An AI-powered career operating system I am building to streamline opportunity discovery, eliminate pipeline fragmentation, and accelerate professional growth.",
      "currentObjective": "Engineering core opportunity indexing and state-machine pipeline tracking modules locally.",
      "whatIsBeingBuilt": "Full-stack interface with local state management, structured candidate profile generators, and opportunity ranking algorithms.",
      "technology": [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Local Storage APIs"
      ],
      "progress": "Opportunity Discovery & Pipeline Tracking modules engineered in local build.",
      "milestone": "Active local architecture & engineering (zero fabricated metrics)",
      "link": "#building",
      "lastUpdated": "September 2026",
      "highlight": true,
      "badge": "Active Build"
    }
  ],
  "tools": [
    {
      "id": "chatgpt",
      "name": "ChatGPT",
      "category": "AI",
      "desc": "Synthetic customer scenario modeling, prompt engineering & conversational synthesis"
    },
    {
      "id": "claude",
      "name": "Claude",
      "category": "AI",
      "desc": "Complex systems reasoning, spec critique & analytical document generation"
    },
    {
      "id": "gemini",
      "name": "Gemini",
      "category": "AI",
      "desc": "Multimodal analysis, large-context document processing & research extraction"
    },
    {
      "id": "cursor",
      "name": "Cursor",
      "category": "AI",
      "desc": "AI-native code engineering, rapid prototyping & interface building"
    },
    {
      "id": "perplexity",
      "name": "Perplexity",
      "category": "Research",
      "desc": "Real-time market discovery, competitor intelligence & verified industry research"
    },
    {
      "id": "apollo",
      "name": "Apollo",
      "category": "Research",
      "desc": "B2B prospect intelligence, verified account mapping & outbound intent triggers"
    },
    {
      "id": "lusha",
      "name": "Lusha",
      "category": "Research",
      "desc": "Verified decision-maker contact data & enterprise account enrichment"
    },
    {
      "id": "hubspot",
      "name": "HubSpot",
      "category": "CRM",
      "desc": "Inbound marketing, deal pipeline tracking, contact lifecycle stages & automated sequences"
    },
    {
      "id": "zoho-crm",
      "name": "Zoho CRM",
      "category": "CRM",
      "desc": "Pipeline management, lead status machines & revenue forecasting"
    },
    {
      "id": "stripe",
      "name": "Stripe",
      "category": "CRM",
      "desc": "Commercial billing infrastructure, checkout flows, recurring billing & invoices"
    },
    {
      "id": "n8n",
      "name": "n8n",
      "category": "Automation",
      "desc": "Self-hosted workflow automations, custom webhooks & API connectors"
    },
    {
      "id": "make",
      "name": "Make",
      "category": "Automation",
      "desc": "Visual multi-app integration routers & event-triggered pipelines"
    },
    {
      "id": "zapier",
      "name": "Zapier",
      "category": "Automation",
      "desc": "Rapid connector pipelines for zero-to-one prototype validation"
    },
    {
      "id": "notion",
      "name": "Notion",
      "category": "Productivity",
      "desc": "Operating playbooks, project documentation, PRDs & company knowledge architecture"
    },
    {
      "id": "linear",
      "name": "Linear",
      "category": "Productivity",
      "desc": "High-velocity issue tracking, sprint cadences & milestone execution"
    },
    {
      "id": "clickup",
      "name": "ClickUp",
      "category": "Productivity",
      "desc": "Operational workflow tracking, resource coordination & task maps"
    },
    {
      "id": "google-workspace",
      "name": "Google Workspace",
      "category": "Productivity",
      "desc": "Executive memos, financial modeling, spreadsheets & shared collaboration"
    },
    {
      "id": "monday",
      "name": "Monday.com",
      "category": "Productivity",
      "desc": "Cross-functional operational boards, project tracking & resource management"
    },
    {
      "id": "python",
      "name": "Python",
      "category": "Development",
      "desc": "Data transformation scripts, web scrapers & automated ETL utilities"
    },
    {
      "id": "figma",
      "name": "Figma",
      "category": "Development",
      "desc": "Design systems, interactive prototypes & high-fidelity wireframing"
    },
    {
      "id": "webflow",
      "name": "Webflow",
      "category": "Development",
      "desc": "Landing pages, rapid commercial test sites & editorial publishing"
    },
    {
      "id": "posthog",
      "name": "PostHog",
      "category": "Analytics",
      "desc": "Product analytics, event tracking, user journeys & session telemetry"
    },
    {
      "id": "slack",
      "name": "Slack",
      "category": "Communication",
      "desc": "Async team coordination, real-time alert webhooks & integration hubs"
    },
    {
      "id": "loom",
      "name": "Loom",
      "category": "Communication",
      "desc": "Async video walkthroughs, design critiques & asynchronous team updates"
    }
  ],
  "thinking": [
    {
      "id": "operator-to-product",
      "slug": "operator-to-product",
      "title": "From Operator to Product: Bridging the Commercial-Engineering Gap",
      "category": "PRODUCT",
      "date": "2026-08-12",
      "readingTime": "5 min read",
      "excerpt": "Why the most effective product builders think like business operators first, and how commercial realities shape superior software architecture.",
      "tags": [
        "Product Thinking",
        "Commercial Strategy",
        "Unit Economics"
      ]
    },
    {
      "id": "systems-that-outlive-builders",
      "slug": "systems-that-outlive-builders",
      "title": "Designing Systems That Outlive Their Builders",
      "category": "SYSTEMS",
      "date": "2026-07-28",
      "readingTime": "6 min read",
      "excerpt": "How to structure documentation, operating playbooks, and automated workflows so businesses execute with high velocity without depending on heroics.",
      "tags": [
        "Operations",
        "System Architecture",
        "Scalability"
      ]
    },
    {
      "id": "ai-commercial-loop",
      "slug": "ai-product-loop",
      "title": "AI in the Commercial Loop: Augmentation Over Automation",
      "category": "AI",
      "date": "2026-06-19",
      "readingTime": "7 min read",
      "excerpt": "Why full automation often breaks trust in professional workflows, and how to design human-in-the-loop AI interfaces that operators actually rely on.",
      "tags": [
        "Artificial Intelligence",
        "Workflows",
        "Agentic Systems"
      ]
    }
  ],
  "seo": {
    "siteTitle": "Vivek Dhoundiyal — Builder · Systems · Growth",
    "siteDescription": "I build products, businesses and systems. 8+ years across entrepreneurship, commercial growth, operations and software.",
    "canonicalUrl": "https://vivekdhoundiyal.com",
    "ogImage": "/images/vivek-canonical.png",
    "twitterHandle": "@Vivek_Dh_"
  },
  "whatIDo": {
    "eyebrow": "CAPABILITIES",
    "headline": "What I do",
    "intro": "I work across business development, revenue generation, partnerships and commercial execution — turning opportunities into measurable outcomes.",
    "pillars": [
      {
        "id": "revenue-bd",
        "title": "Revenue & Business Development",
        "tag": "Commercial Execution",
        "description": "B2B sales, pipeline development, consultative selling, account growth and commercial execution."
      },
      {
        "id": "partnerships-growth",
        "title": "Partnerships & Growth",
        "tag": "Market Expansion",
        "description": "Strategic partnerships, business development, market expansion and relationship building."
      },
      {
        "id": "business-ops",
        "title": "Business & Operations",
        "tag": "System Design",
        "description": "Entrepreneurship, process design, operational execution and building repeatable systems."
      }
    ]
  },
  "whereImGoing": {
    "eyebrow": "FUTURE DIRECTION",
    "title": "Where I''m going next",
    "narrative": "My career has moved from engineering and commercial execution into business development, entrepreneurship, growth and operations. I''m now increasingly focused on technology, AI and product building — using my commercial background to approach products from both the customer and business side.",
    "stages": [
      {
        "label": "Current",
        "role": "Revenue / Business Development / Growth / Operations",
        "desc": "Deep commercial domain knowledge and customer problem understanding."
      },
      {
        "label": "Evolving",
        "role": "Technology / AI Workflows / Products",
        "desc": "Building software systems like CareerOS and automating operational workflows."
      },
      {
        "label": "Future",
        "role": "Commercial Software Products & Applied AI Systems",
        "desc": "Applying commercial rigor, systems design, and AI automation to high-impact business products."
      }
    ]
  },
  "proof": {
    "eyebrow": "CREDENTIALS & TRACK RECORD",
    "headline": "Commercial foundation, verified ventures and systems execution.",
    "items": [
      {
        "value": "8+ Years",
        "label": "Commercial Execution",
        "sub": "B2B sales, revenue architecture & deal closing"
      },
      {
        "value": "3+ Ventures",
        "label": "Built & Operated",
        "sub": "Automotive marketplace, B2B food supply & distribution"
      },
      {
        "value": "Enterprise BD",
        "label": "Consultative Selling",
        "sub": "CollegeDunia & KreedOn institutional accounts"
      },
      {
        "value": "Operations",
        "label": "Supply Systems",
        "sub": "Farm-to-kitchen routes & workshop networks"
      },
      {
        "value": "AI Workflows",
        "label": "Systems & Tools",
        "sub": "Agentic pipelines, n8n automations & CareerOS"
      }
    ]
  },
  "capabilities": [
    {
      "id": "revenue-bd",
      "slug": "revenue-business-development",
      "title": "Revenue & Business Development",
      "tag": "Commercial Execution",
      "headline": "Consultative pipeline architecture, enterprise deal closing and recurring revenue systems.",
      "summary": "I build predictable commercial revenue engines. From initial ICP identification and outbound research to multi-stakeholder consultative pitching and contract negotiation, I focus on commercial durability rather than empty volume.",
      "approach": "Revenue is an engineering problem. When you define clear ICP boundaries, map buyer incentives, and automate context-rich research dossiers, sales cycles shorten and conversion rates compound.",
      "problemsSolved": [
        "Unfocused outbound campaigns resulting in single-digit reply rates and bloated sales cycles",
        "Opacity in CRM pipeline stages and lack of conversion visibility",
        "Misalignment between commercial pitch decks and executive buyer ROI metrics",
        "Stalled enterprise deals caused by unmapped procurement and legal stakeholders"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Signal & ICP Definition",
          "desc": "Filter high-intent accounts using data intelligence (Apollo, Lusha) and hiring/funding triggers."
        },
        {
          "step": "02",
          "name": "Context-Rich Outreach",
          "desc": "Craft hyper-personalized value theses addressing the specific operational friction of the target CXO."
        },
        {
          "step": "03",
          "name": "Consultative Discovery",
          "desc": "Uncover unstated anxieties, decision hierarchies, and unit economic constraints."
        },
        {
          "step": "04",
          "name": "Commercial Structuring & Close",
          "desc": "Align multi-tiered pricing, pilot milestones, and contractual SLA terms."
        }
      ],
      "relevantExperience": [
        {
          "company": "SuperSurge",
          "role": "Growth & Revenue Consultant",
          "highlight": "Advising B2B founders on GTM pipeline velocity and outbound frameworks."
        },
        {
          "company": "CollegeDunia",
          "role": "Senior Manager – BD",
          "highlight": "Spearheaded consultative sales cycles for higher education institutional clients."
        },
        {
          "company": "KreedOn",
          "role": "Media Sales Manager",
          "highlight": "Closed brand sponsorships and digital media monetization deals."
        }
      ],
      "toolsUsed": [
        "Zoho CRM",
        "HubSpot",
        "Apollo",
        "Lusha",
        "LinkedIn Sales Navigator",
        "Google Workspace"
      ],
      "outcomes": "Consistently exceeded enterprise quarterly targets, closed multi-thousand dollar accounts, and engineered outbound playbooks currently in active client production.",
      "lessons": "Enterprise sales is empathy in commercial clothing. Closing complex deals requires solving the personal and organizational anxieties of the buyer."
    },
    {
      "id": "partnerships-growth",
      "slug": "partnerships-growth",
      "title": "Partnerships & Growth",
      "tag": "Market Expansion",
      "headline": "Strategic alliances, distribution channels, and high-trust commercial ecosystems.",
      "summary": "Growth rarely happens in isolation. I design mutual-upside partnership agreements that leverage existing distribution networks, align strategic incentives, and open non-linear growth channels.",
      "approach": "The best partnerships are not formal marketing stunts; they are structural win-win agreements where both parties gain immediate operational leverage or margin protection.",
      "problemsSolved": [
        "High customer acquisition costs (CAC) in saturated direct marketing channels",
        "Fragmented supply partners with inconsistent service quality and low platform retention",
        "Slow market entry into competitive regional territories",
        "Lack of structured co-marketing and co-selling agreements"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Ecosystem Mapping",
          "desc": "Identify non-competing entities that already own the trust and attention of your target audience."
        },
        {
          "step": "02",
          "name": "Economic Incentive Design",
          "desc": "Structure fee-splits, referral margins, and co-branded deliverables that make partnering a no-brainer."
        },
        {
          "step": "03",
          "name": "Partner Enablement",
          "desc": "Create operational SOPs, onboarding materials, and digital workflows so partners execute seamlessly."
        },
        {
          "step": "04",
          "name": "Performance Governance",
          "desc": "Track partner transaction volume, SLA fulfillment, and customer satisfaction scores."
        }
      ],
      "relevantExperience": [
        {
          "company": "SettleMyCar",
          "role": "Co-founder",
          "highlight": "Onboarded and managed 50+ multi-brand garage partners across Delhi-NCR."
        },
        {
          "company": "CollegeDunia",
          "role": "Senior Manager – BD",
          "highlight": "Structured long-term academic partnership agreements with university administrators."
        },
        {
          "company": "Fixins",
          "role": "Co-founder / Partner",
          "highlight": "Managed regional wholesale buyer distributor networks and credit terms."
        }
      ],
      "toolsUsed": [
        "Slack",
        "Notion",
        "ClickUp",
        "Google Workspace",
        "Zapier"
      ],
      "outcomes": "50+ signed workshop agreements, 1,000+ completed marketplace fulfillment orders, and durable wholesale distribution routes.",
      "lessons": "A partnership agreement is only as good as the operational ease of fulfillment. If execution is complex, even the best contracts decay."
    },
    {
      "id": "business-operations",
      "slug": "business-operations",
      "title": "Business & Operations",
      "tag": "System Design",
      "headline": "Unit economics, ground-level logistics, working capital governance, and repeatable operating machines.",
      "summary": "I build and run physical and digital operational systems. From morning farm-to-kitchen fresh supply deliveries to multi-point automotive workshop repair logistics, I design systems that eliminate friction and protect cash flow.",
      "approach": "Operations is about turning uncertainty into predictable routines. By breaking down complex workflows into deterministic checkpoints and clear SLAs, businesses scale without chaotic fire-fighting.",
      "problemsSolved": [
        "Volatile supplier quality and erratic early-morning logistics delivery failures",
        "Working capital depletion caused by loose credit terms and delayed receivables",
        "High human dependency in daily routine tasks without documented playbooks",
        "Operational opacity between ground fulfillment teams and management"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Process Decomposition",
          "desc": "Map every human and technical step from order ingestion to final delivery."
        },
        {
          "step": "02",
          "name": "SLA & Quality Checkpoints",
          "desc": "Institute strict visual grading, timestamp milestones, and pre-dispatch checklists."
        },
        {
          "step": "03",
          "name": "Cash Flow & Credit Guardrails",
          "desc": "Implement milestone-based disbursements, escrow mechanisms, and tight receivables cadences."
        },
        {
          "step": "04",
          "name": "Automation & Exception Routing",
          "desc": "Automate routine notifications via webhooks and flag anomalies immediately to operators."
        }
      ],
      "relevantExperience": [
        {
          "company": "Dark Kitchen",
          "role": "Founder",
          "highlight": "Engineered daily farm-to-kitchen morning procurement and logistics routes."
        },
        {
          "company": "SettleMyCar",
          "role": "Co-founder",
          "highlight": "Orchestrated doorstep vehicle pickup, digital estimation, and workshop repair workflows."
        },
        {
          "company": "Fixins",
          "role": "Partner",
          "highlight": "Governed inventory turnaround, warehouse dispatch, and wholesale credit governance."
        }
      ],
      "toolsUsed": [
        "n8n",
        "Make",
        "Monday.com",
        "ClickUp",
        "Google Sheets / Workspace",
        "Python"
      ],
      "outcomes": "Maintained zero stockouts across daily restaurant supply, completed 1,000+ vehicle service cycles, and achieved positive operating cash flow.",
      "lessons": "B2B customer retention is a byproduct of ruthless reliability. Eliminating operational anxiety for a business customer creates an enduring commercial moat."
    }
  ],
  "corporateExperience": [
    {
      "id": "collegedunia",
      "slug": "collegedunia",
      "company": "CollegeDunia Web Pvt Ltd",
      "role": "Senior Manager – Business Development",
      "period": "Apr 2023 – Sep 2023",
      "location": "India",
      "badge": "Enterprise Sales",
      "tagline": "Enterprise consultative selling, institutional partnerships, and multi-stakeholder contract closing.",
      "summary": "Led consultative business development cycles for higher education institutions, pitching institutional leaders, structuring customized digital marketing and student acquisition solutions, and managing contract negotiations.",
      "context": "Higher education institutions operate with complex governance structures where purchase decisions require consensus across Deans, Trustees, Admissions Directors, and finance committees.",
      "responsibilities": [
        "Identified and prospected high-value institutional education accounts across target geographies",
        "Conducted consultative discovery sessions with University Directors and marketing leadership",
        "Formulated bespoke data-backed proposals mapping digital reach to verified enrollment projections",
        "Negotiated contract scope, payment cycles, and renewal parameters to ensure margin retention"
      ],
      "challenges": "Overcoming institutional inertia, lengthy bureaucratic approval cycles, and demand for guaranteed ROI attribution.",
      "execution": "Constructed custom ROI projection models demonstrating student enrollment acquisition economics, pre-empted procurement objections, and maintained aggressive executive follow-up cadences.",
      "outcomes": "Closed key institutional accounts, drove quarterly revenue targets, and expanded client retention through clear delivery governance.",
      "skills": [
        "Enterprise B2B Sales",
        "Consultative Selling",
        "Contract Negotiation",
        "Executive Stakeholder Management",
        "Pipeline Velocity"
      ],
      "lessons": "In enterprise sales, you are never pitching a product; you are solving the buyer’s professional vulnerability by derisking their decision."
    },
    {
      "id": "kreedon",
      "slug": "kreedon",
      "company": "KreedOn (Voice of Indian Sports)",
      "role": "Media Sales Manager",
      "period": "Dec 2023 – Oct 2024",
      "location": "India",
      "badge": "Media Sales & Sponsorships",
      "tagline": "Brand sponsorships, sports media monetization, and commercial campaign architecture.",
      "summary": "Spearheaded B2B brand partnerships and media sponsorship deals, translating sports audience attention into high-impact commercial campaigns for consumer brands, corporate sponsors, and advertising agencies.",
      "context": "Digital sports media monetization requires bridging the gap between raw viewer attention and tangible corporate brand objectives, brand awareness, and lead generation.",
      "responsibilities": [
        "Built and executed outbound GTM strategies targeting FMCG, consumer tech, and sports lifestyle brands",
        "Structured innovative sponsorship packages combining branded content, athlete IP, and social distribution",
        "Pitched Brand Heads, CMOs, and media buying agency directors on commercial ROI",
        "Supervised campaign delivery milestones and post-campaign analytical reporting"
      ],
      "challenges": "Navigating highly competitive brand sponsorship budgets and demanding performance attribution from media buyers.",
      "execution": "Created performance-linked sponsorship decks with contextual audience insights, mapped campaign deliverables to concrete brand reach metrics, and fostered direct agency relationships.",
      "outcomes": "Secured high-value brand sponsorships and established repeatable sponsorship inventory packages that accelerated sales velocity.",
      "skills": [
        "Media Monetization",
        "Brand Sponsorships",
        "Agency Relationship Management",
        "Commercial Campaign Design",
        "Pitch Presentations"
      ],
      "lessons": "Selling media is selling trust in attention. The more clearly you translate engagement into business impact, the faster corporate sponsors commit."
    },
    {
      "id": "supersurge",
      "slug": "supersurge",
      "company": "SuperSurge Consulting",
      "role": "Growth & Revenue Consultant",
      "period": "Oct 2024 – Present",
      "location": "India / Remote",
      "badge": "Active Advisory",
      "tagline": "GTM outbound architecture, revenue operations, and pipeline engineering for B2B ventures.",
      "summary": "Advising B2B founders and commercial teams on go-to-market structure, ICP segmentation, multichannel outbound engine design, and conversion optimization.",
      "context": "Early and growth-stage B2B ventures often burn capital on unfocused outbound campaigns that yield low response rates, unqualified discovery calls, and bloated sales cycles.",
      "responsibilities": [
        "Audit existing commercial sales pipelines, messaging frameworks, and lead routing mechanics",
        "Design targeted ICP criteria using verified intent data, tech-stack signals, and hiring triggers",
        "Build automated multi-touch outbound cadences combining email, LinkedIn, and direct research dossiers",
        "Implement CRM operational workflows in Zoho and Apollo with strict SLA benchmarks"
      ],
      "challenges": "Ensuring sales reps adopt structured prospecting habits without falling back on spam-and-hope outbound volume.",
      "execution": "Re-engineered client outbound playbooks, automated manual enrichment using n8n and data APIs, and instituted disciplined pipeline qualification criteria.",
      "outcomes": "Helped founders achieve significantly higher response rates, tightened qualification cadences, and improved pipeline predictability.",
      "skills": [
        "GTM Strategy",
        "Revenue Operations",
        "Outbound Pipeline Engineering",
        "ICP Architecture",
        "CRM Optimization"
      ],
      "lessons": "High-performing revenue teams succeed not through volume, but through extreme precision in prospect selection and context-rich positioning."
    }
  ],
  "certifications": [
    {
      "id": "google-pm",
      "name": "Google Project Management Professional Certificate",
      "issuer": "Google / Coursera",
      "date": "2024",
      "credentialId": "Verified Professional Credential",
      "credentialUrl": "https://coursera.org/share/67ea64a2fef42c262142277d33b497fe",
      "status": "Verified",
      "description": "Comprehensive 6-course professional curriculum covering project initiation, planning, execution, Agile and Scrum frameworks, documentation, risk mitigation, and stakeholder management.",
      "skills": [
        "Agile & Scrum",
        "Project Planning",
        "Risk Management",
        "Stakeholder Alignment",
        "Documentation & PRDs",
        "Sprint Cadences"
      ]
    }
  ],
  "education": {
    "degree": "B.Tech in Mechanical Engineering",
    "institution": "Manav Rachna International University",
    "location": "Faridabad, India",
    "period": "2014 – 2018",
    "summary": "Rigorous engineering foundation grounded in physical systems, mathematical modeling, thermodynamics, and modular systems analysis.",
    "takeaway": "Instilled respect for physical constraints, first-principles logic, and the discipline of clean modular systems."
  },
  "buildingToward": {
    "eyebrow": "STRATEGIC FOCUS",
    "title": "Where I am Building",
    "narrative": "My foundation began in engineering and evolved through 8+ years of 0→1 entrepreneurship, enterprise B2B sales, revenue architecture, and commercial operations. Today, I am channeling that commercial leverage into technology, automated business systems, AI workflows, and digital products.",
    "focusAreas": [
      {
        "title": "Independent Software Products",
        "desc": "Architecting utilities like CareerOS that solve high-friction professional workflows through clean interfaces and intelligent automation."
      },
      {
        "title": "AI & Agentic Workflows",
        "desc": "Deploying LLM prompt chaining, webhook automations (n8n, Make), and deterministic schemas to eliminate commercial drag."
      },
      {
        "title": "Scalable Business Systems",
        "desc": "Designing self-sustaining operational machines where revenue generation, partner onboarding, and customer retention run with predictable velocity."
      }
    ]
  }
}',
  1790659200149,
  1790659200149,
  'vivekdhoundiyal2901@gmail.com'
)
ON CONFLICT(id) DO NOTHING;

-- Initial Baseline Revision 1
INSERT INTO revisions (id, version_number, content, note, created_at, created_by)
VALUES (
  'rev_initial_baseline',
  1,
  '{
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "name": "01 · Hero Section",
      "enabled": true,
      "order": 0
    },
    {
      "id": "what-i-do",
      "type": "capabilities",
      "name": "02 · What I Do",
      "enabled": true,
      "order": 1
    },
    {
      "id": "work",
      "type": "entrepreneurial",
      "name": "03 · Entrepreneurial Experience",
      "enabled": true,
      "order": 2
    },
    {
      "id": "corporate",
      "type": "corporate",
      "name": "04 · Corporate Experience",
      "enabled": true,
      "order": 3
    },
    {
      "id": "experience",
      "type": "timeline",
      "name": "05 · Professional Experience Summary",
      "enabled": true,
      "order": 4
    },
    {
      "id": "education-certifications",
      "type": "education-certifications",
      "name": "06 · Education & Certifications",
      "enabled": true,
      "order": 5
    },
    {
      "id": "building",
      "type": "building",
      "name": "07 · Where I Am Building",
      "enabled": true,
      "order": 6
    },
    {
      "id": "thinking",
      "type": "thinking",
      "name": "08 · Thinking & Writing",
      "enabled": true,
      "order": 7
    },
    {
      "id": "tools",
      "type": "tools",
      "name": "09 · Tools & Capabilities",
      "enabled": true,
      "order": 8
    },
    {
      "id": "about-contact",
      "type": "about-contact",
      "name": "10 · About & Direct Contact",
      "enabled": true,
      "order": 9
    }
  ],
  "whereIAmBuilding": {
    "eyebrow": "07 · FORWARD FOCUS & SYSTEMS",
    "title": "Where I Am Building",
    "intro": "I’m continuing to build at the intersection of business, technology, automation and digital products — applying my experience in revenue, operations and entrepreneurship to practical systems and products."
  },
  "profile": {
    "name": "Vivek Dhoundiyal",
    "role": "Revenue • Growth • Commercial Operator",
    "location": "India / Remote",
    "availability": "Open for revenue leadership, strategic growth consulting & 0-to-1 ventures",
    "email": "vivekdhoundiyal2901@gmail.com",
    "phone": "+91 75030 16766",
    "whatsapp": "+91 75030 16766",
    "linkedin": "https://www.linkedin.com/in/vivekdhoundiyal",
    "x": "https://x.com/Vivek_Dh_",
    "github": "https://github.com/VivekDhoundiyal",
    "heroEyebrow": "REVENUE • BUSINESS DEVELOPMENT • GROWTH",
    "heroHeadline": "I build revenue, relationships and businesses.",
    "heroDescription": "I am a commercial operator and business builder with 8+ years of experience across B2B sales, revenue generation, partnerships, entrepreneurship and commercial operations. Today, I am applying that experience to technology, AI workflows and systems — including CareerOS.",
    "portraitImage": "/images/vivek-canonical.png",
    "avatarImage": "/images/vivek-canonical.png",
    "education": "B.Tech in Mechanical Engineering, Manav Rachna International University (2014–2018)",
    "languages": [
      "English",
      "Hindi"
    ],
    "experienceYears": "8+ Years",
    "heroHeadlineAlt": "I help businesses grow and run better.",
    "milestones": [
      {
        "value": "8+ Years",
        "title": "Sales · Partnerships",
        "subtitle": "Operations · Entrepreneurship"
      },
      {
        "value": "3+ Ventures",
        "title": "Built · Operated · Scaled",
        "subtitle": "Marketplace, B2B food supply & distribution"
      },
      {
        "value": "Next Chapter",
        "title": "Product · AI · Systems",
        "subtitle": "Applying commercial leverage to technology"
      }
    ]
  },
  "contact": {
    "title": "Let''s build something useful.",
    "subtitle": "CONTACT",
    "description": "Open to conversations around revenue, business development, growth, partnerships and technology.",
    "email": "vivekdhoundiyal2901@gmail.com",
    "emailSubject": "Contact from your website",
    "emailMessage": "Hi Vivek, I found your website and would like to connect.",
    "whatsappNumber": "+91 75030 16766",
    "whatsappMessage": "Hi Vivek, I found your website and would like to connect.",
    "phone": "+91 75030 16766",
    "phoneDisplay": "+91 75030 16766",
    "primaryButtonText": "Let''s Talk",
    "secondaryButtonText": "View Resume"
  },
  "modalContact": {
    "title": "Let''s connect.",
    "subtitle": "Choose the easiest way to reach me.",
    "call": {
      "label": "Call Me",
      "display": "+91 75030 16766",
      "action": "tel:+917503016766",
      "desc": "Direct phone conversation"
    },
    "whatsapp": {
      "label": "WhatsApp",
      "display": "+91 75030 16766",
      "action": "https://wa.me/917503016766?text=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.",
      "desc": "Direct encrypted chat"
    },
    "linkedin": {
      "label": "LinkedIn",
      "display": "in/vivekdhoundiyal",
      "action": "https://www.linkedin.com/in/vivekdhoundiyal",
      "desc": "Professional background & network"
    },
    "email": {
      "label": "Email",
      "display": "vivekdhoundiyal2901@gmail.com",
      "action": "mailto:vivekdhoundiyal2901@gmail.com?subject=Contact%20from%20your%20website&body=Hi%20Vivek%2C%20I%20found%20your%20website%20and%20would%20like%20to%20connect.",
      "desc": "Asynchronous in-depth inquiries"
    }
  },
  "social": {
    "linkedin": "https://www.linkedin.com/in/vivekdhoundiyal",
    "x": "https://x.com/Vivek_Dh_",
    "github": "https://github.com/VivekDhoundiyal",
    "email": "vivekdhoundiyal2901@gmail.com",
    "whatsapp": "https://wa.me/917503016766"
  },
  "site": {
    "title": "Vivek Dhoundiyal — Builder · Systems · Growth",
    "description": "I build products, businesses and systems. 8+ years across entrepreneurship, commercial growth, operations and software.",
    "logo": "/images/vivek-canonical.png",
    "profileImage": "/images/vivek-canonical.png",
    "favicon": "/favicon.ico"
  },
  "hero": {
    "eyebrow": "REVENUE • BUSINESS DEVELOPMENT • GROWTH",
    "title": "I build revenue, relationships and businesses.",
    "description": "I am a commercial operator and business builder with 8+ years of experience across B2B sales, revenue generation, partnerships, entrepreneurship and commercial operations. Today, I am applying that experience to technology, AI workflows and systems — including CareerOS.",
    "primaryButtonText": "Explore My Work",
    "primaryButtonUrl": "#work",
    "secondaryButtonText": "View Resume",
    "secondaryButtonUrl": "/resume",
    "titleAlt": "I help businesses\ngrow and run better."
  },
  "resumes": [
    {
      "id": "b2b-sales",
      "title": "B2B Sales & Business Development Resume",
      "subtitle": "B2B Sales · Enterprise Development · Revenue Operations · Partnerships",
      "filename": "Vivek_Dhoundiyal_B2B_Sales_Resume.pdf",
      "url": "/resumes/Vivek_Dhoundiyal_B2B_Sales_Resume.pdf",
      "description": "Detailed record of 8+ years driving commercial revenue, consultative B2B sales cycles, client negotiation, and outbound pipeline architecture.",
      "focusAreas": [
        "Enterprise B2B Sales & Consultative Selling",
        "Lead Generation & Multi-Channel Outbound",
        "Commercial Negotiation & Contract Closing",
        "Key Account Management & Revenue Retention",
        "CRM Pipeline Architecture (Zoho, Apollo, Lusha)"
      ]
    }
  ],
  "projects": [
    {
      "id": "settlemycar",
      "slug": "settlemycar",
      "title": "SettleMyCar",
      "projectType": "MARKETPLACE · HISTORICAL",
      "category": "Marketplace / Business",
      "role": "Co-founder",
      "year": "2018–2021",
      "status": "Built & Operated",
      "statusType": "historical",
      "featured": true,
      "tagline": "Automotive-services marketplace connecting car owners with vetted multi-brand workshops.",
      "summary": "Co-founded and scaled an automotive repair and maintenance marketplace across Delhi-NCR, onboarding 50+ garage partners and fulfilling over 1,000+ consumer transactions.",
      "evidence": [
        {
          "label": "Network Scale",
          "value": "50+",
          "sub": "vetted service centers & garages"
        },
        {
          "label": "Transactions",
          "value": "1,000+",
          "sub": "fulfilled customer service orders"
        },
        {
          "label": "Operating Radius",
          "value": "Delhi-NCR",
          "sub": "end-to-end doorstep logistics"
        }
      ],
      "problem": "The automotive repair ecosystem in urban centers was heavily fragmented: customers faced pricing asymmetry, opaque diagnostics, and uncertain turnaround times, while independent garages struggled with customer acquisition and capacity utilization.",
      "solution": "Designed a centralized service marketplace with standardized pricing tiers, digital estimation workflows, and vehicle pickup/drop logistics to bridge trust between car owners and workshop operators.",
      "responsibilities": "Managed workshop partner acquisition, contract negotiation, service pricing matrices, digital customer acquisition channels, and dispute resolution workflows.",
      "execution": "Audited over 100+ local garages for tooling and technician capability, onboarded 50 qualified workshops, instituted milestone-based customer communication, and ran digital outbound funnels.",
      "outcomes": "Achieved 1,000+ completed vehicle service transactions with strong customer satisfaction and established a repeatable unit-level operating playbook.",
      "learning": "0-to-1 marketplaces live or die by supply-side consistency. Standardizing operational quality at the ground level matters far more than software feature bloat."
    },
    {
      "id": "dark-kitchen",
      "slug": "dark-kitchen",
      "title": "Dark Kitchen",
      "projectType": "B2B FOOD SUPPLY · VENTURE",
      "category": "B2B Supply / System",
      "role": "Founder",
      "year": "2020–2023",
      "status": "Built & Operated",
      "statusType": "historical",
      "featured": true,
      "tagline": "B2B food-supply venture serving commercial kitchens and restaurants with predictable supply chains.",
      "summary": "Engineered an end-to-end B2B supply system for restaurants and cloud kitchens, managing daily farm-to-kitchen procurement, inventory forecasting, temperature-controlled delivery, and recurring supplier relationships.",
      "evidence": [
        {
          "label": "Supply System",
          "value": "End-to-End",
          "sub": "sourcing to daily delivery"
        },
        {
          "label": "Order Cadence",
          "value": "Daily Recurring",
          "sub": "just-in-time morning fulfillment"
        },
        {
          "label": "Operations",
          "value": "Zero Stockout",
          "sub": "predictive demand replenishment"
        }
      ],
      "problem": "Commercial kitchens suffer from volatile ingredient pricing, erratic early-morning vendor deliveries, and unpredictable quality defects that jeopardize daily restaurant service.",
      "solution": "Built a reliable, recurring B2B supply pipeline combining bulk agricultural procurement, daily morning delivery SLA routes, and pre-negotiated wholesale pricing tiers.",
      "responsibilities": "Handled wholesale mandi supplier procurement, restaurant client acquisition, daily logistics route scheduling, quality inspection, and working capital management.",
      "execution": "Established direct wholesale farmer/mandi supply channels, set strict visual grading criteria, and built an automated order dispatch system guaranteeing delivery before 8:00 AM.",
      "outcomes": "Maintained high client retention with recurring revenue and protected restaurants against sudden raw material inflation.",
      "learning": "B2B customer retention is a byproduct of ruthless reliability. Eliminating operational anxiety for a business customer creates an enduring commercial moat."
    },
    {
      "id": "fixins",
      "slug": "fixins",
      "title": "Fixins",
      "projectType": "B2B DISTRIBUTION · BUSINESS",
      "category": "Business / Operations",
      "role": "Co-founder / Partner",
      "year": "2017–2020",
      "status": "Completed",
      "statusType": "historical",
      "featured": false,
      "tagline": "B2B distribution and commercial supply operation.",
      "summary": "Managed commercial distribution channels, wholesale buyer relationships, credit terms, and logistical fulfillment across regional supply routes.",
      "evidence": [
        {
          "label": "Model",
          "value": "B2B Distribution",
          "sub": "wholesale & commercial accounts"
        },
        {
          "label": "Fulfillment",
          "value": "Regional",
          "sub": "multi-point supply distribution"
        }
      ],
      "problem": "Local retail buyers experienced inconsistent wholesale supply and fragmented credit terms.",
      "solution": "Structured dependable regional distribution routes with transparent credit cycles and scheduled fulfillment.",
      "responsibilities": "Channel expansion, credit assessment, supplier negotiation, and delivery supervision.",
      "execution": "Built route schedules, signed distributor agreements, and established working capital management.",
      "outcomes": "Maintained positive cash-flow distribution operations across regional accounts.",
      "learning": "Cash flow and working capital governance are the bedrock of any physical distribution venture."
    },
    {
      "id": "supersurge",
      "slug": "supersurge",
      "title": "SuperSurge Consulting",
      "projectType": "REVENUE ARCHITECTURE · CONSULTING",
      "category": "Growth / Commercial",
      "role": "Growth & Revenue Consultant",
      "year": "Oct 2024 – Present",
      "status": "Active Engagement",
      "statusType": "active",
      "featured": false,
      "tagline": "Outbound pipeline design, revenue operations, and commercial growth advisory.",
      "summary": "Advising B2B startups and commercial ventures on go-to-market structure, ICP segmentation, multichannel outbound architecture, and conversion funnel optimization.",
      "evidence": [
        {
          "label": "Tenure",
          "value": "Oct 2024 – Present",
          "sub": "strategic revenue consulting"
        },
        {
          "label": "Focus",
          "value": "GTM & Ops",
          "sub": "outbound systems & pipeline velocity"
        }
      ],
      "problem": "Early and growth-stage B2B ventures often burn capital on unfocused outbound campaigns that yield low response rates and bloated sales cycles.",
      "solution": "Re-engineered outbound frameworks through tight ICP definition, verified intent triggers, and automated research dossiers that empower reps to pitch with high relevance.",
      "responsibilities": "Advisory, sales process auditing, cold outbound playbook design, and CRM pipeline restructuring.",
      "execution": "Designed targeted outbound campaigns, set up multi-channel email/LinkedIn cadences, and established SLA benchmarks for sales follow-ups.",
      "outcomes": "Helped founders achieve higher reply rates and tighter pipeline predictability.",
      "learning": "High-performing revenue teams succeed not through volume, but through extreme precision in prospect selection and context-rich positioning."
    },
    {
      "id": "commercial-partnerships",
      "slug": "commercial-partnerships",
      "title": "CollegeDunia & KreedOn",
      "projectType": "B2B SALES & PARTNERSHIPS · ENTERPRISE",
      "category": "Experience / Commercial",
      "role": "Senior BD Manager (CollegeDunia) / Media Sales Manager (KreedOn)",
      "year": "2023–2024",
      "status": "Track Record",
      "statusType": "historical",
      "featured": false,
      "tagline": "Enterprise solution selling, brand sponsorships, and multi-stakeholder commercial deals.",
      "summary": "Spearheaded enterprise revenue generation across digital media and edtech: managing consultative sales cycles, pitch presentations, commercial negotiations, and institutional partnerships.",
      "evidence": [
        {
          "label": "Domains",
          "value": "EdTech & Sports Media",
          "sub": "institutional & brand accounts"
        },
        {
          "label": "Core Strength",
          "value": "Solution Selling",
          "sub": "consultative pipeline execution"
        }
      ],
      "problem": "Enterprise institutional clients have complex decision-making structures, multi-layered procurement reviews, and high demands for measurable ROI.",
      "solution": "Built value-oriented consultative proposals that mapped directly to institutional growth objectives and sponsorship exposure KPIs.",
      "responsibilities": "Prospecting enterprise accounts, pitching CXO/Dean-level stakeholders, negotiating contracts, and ensuring delivery fulfillment.",
      "execution": "Ran outbound discovery calls, presented customized data-backed pitches, and collaborated with delivery teams to ensure sponsor satisfaction.",
      "outcomes": "Closed high-ticket institutional and corporate sponsorship deals across both platforms.",
      "learning": "Enterprise sales is empathy in commercial clothing. Closing complex deals requires solving the personal and organizational anxieties of the buyer."
    }
  ],
  "experience": {
    "headline": "A builder with deep commercial and operating foundations.",
    "subhead": "The verified trajectory: Engineering → Entrepreneurship → 0→1 Building → B2B Sales & Growth → Operations → Product.",
    "intro": "I began with an engineering background where I learned system constraints, logic, and debugging. Moving into entrepreneurship and commercial roles, I learned how businesses actually acquire customers, negotiate terms, manage cash flows, and build repeatable operational machines.",
    "nodes": [
      {
        "id": "corporate-collegedunia",
        "category": "Corporate",
        "company": "CollegeDunia Web Pvt Ltd",
        "role": "Senior Manager – Business Development",
        "period": "Apr 2023 – Sep 2023",
        "location": "India",
        "badge": "Corporate · Enterprise Sales",
        "summary": "Drove institutional partnerships, digital marketing solutions, and consultative sales cycles for higher education clients.",
        "scope": "Enterprise discovery, multi-stakeholder contract closing, and digital student acquisition pipelines.",
        "link": "/experience/collegedunia",
        "takeaway": "Institutional enterprise deals require deep stakeholder alignment and navigating multi-stakeholder approval dynamics."
      },
      {
        "id": "corporate-kreedon",
        "category": "Corporate",
        "company": "KreedOn (Voice of Indian Sports)",
        "role": "Media Sales Manager",
        "period": "Dec 2023 – Oct 2024",
        "location": "India",
        "badge": "Corporate · Media Sales",
        "summary": "Led B2B brand sponsorships and media monetization; formulated tailored proposals for corporate brands and advertising agencies.",
        "scope": "Media inventory packaging, brand sponsorship sales, and sports campaign ROI attribution.",
        "link": "/experience/kreedon",
        "takeaway": "Sponsorship and media deals require translating audience attention into tangible, brand-aligned commercial outcomes."
      },
      {
        "id": "entrepreneurship",
        "category": "Entrepreneurship",
        "company": "0→1 Ventures (SettleMyCar, Dark Kitchen, Fixins)",
        "role": "Founder / Co-Founder & Operator",
        "period": "2017 – 2023",
        "location": "Delhi-NCR, India",
        "badge": "Entrepreneurship · 0→1 Ventures",
        "summary": "Built, operated, and navigated 0-to-1 ventures in automotive marketplace logistics, B2B food supply, and commercial distribution.",
        "scope": "Unit economics governance, supplier SLAs, 50+ garage partnerships, and 1,000+ fulfilled service orders.",
        "link": "/#work",
        "takeaway": "Developed deep comfort with ambiguity, unit economics accountability, supplier governance, and hands-on customer acquisition."
      },
      {
        "id": "consulting",
        "category": "Consulting",
        "company": "SuperSurge Consulting",
        "role": "Growth & Revenue Consultant",
        "period": "Oct 2024 – Present",
        "location": "India / Remote",
        "badge": "Consulting · GTM Architecture",
        "summary": "Advising B2B ventures on go-to-market architecture, ICP definition, outbound engines, and revenue operations.",
        "scope": "Outbound sales process auditing, multi-channel email/LinkedIn cadences, and CRM pipeline restructuring.",
        "link": "/experience/supersurge",
        "takeaway": "Revenue is an engineering problem: when you constrain inputs to high-intent signals and repeatable cadences, pipeline growth becomes deterministic."
      }
    ]
  },
  "howIThink": [
    {
      "id": "understand",
      "stage": "01",
      "title": "Understand",
      "tagline": "Root-cause diagnostics & stakeholder context",
      "question": "What problem are we actually solving?",
      "lookFor": "Customer context, commercial constraints, emotional & operational friction, economic incentives.",
      "produce": "Problem boundary document, stakeholder map, baseline friction audit.",
      "relatedWork": "SettleMyCar"
    },
    {
      "id": "frame",
      "stage": "02",
      "title": "Frame",
      "tagline": "Unit economics & structural levers",
      "question": "What are the structural levers and unit economics?",
      "lookFor": "Incentive misalignments, bottleneck constraints, margin profiles, customer willingness to pay.",
      "produce": "Unit-economic thesis, decision boundaries, success criteria.",
      "relatedWork": "Dark Kitchen"
    },
    {
      "id": "explore",
      "stage": "03",
      "title": "Explore",
      "tagline": "Alternative pathways & technical feasibility",
      "question": "What are the lowest-friction paths to resolution?",
      "lookFor": "Industry analogs, existing workarounds, leverage from modern tooling & APIs.",
      "produce": "Opportunity matrix, trade-off comparison, technical feasibility notes.",
      "relatedWork": "CareerOS"
    },
    {
      "id": "decide",
      "stage": "04",
      "title": "Decide",
      "tagline": "Ruthless scoping & non-goals",
      "question": "What are we deliberately NOT doing?",
      "lookFor": "Scope creep traps, asymmetric upside, critical path dependencies.",
      "produce": "Scoped PRD / build spec, explicit non-goals, milestone roadmap.",
      "relatedWork": "SuperSurge"
    },
    {
      "id": "build",
      "stage": "05",
      "title": "Build",
      "tagline": "Rapid modular execution & delivery cadence",
      "question": "How fast can we put a real mechanism into user hands?",
      "lookFor": "Execution drag, manual edge cases, speed to first feedback loop.",
      "produce": "Working system, operational SOPs, telemetry instrumentation.",
      "relatedWork": "Dark Kitchen"
    },
    {
      "id": "learn",
      "stage": "06",
      "title": "Learn",
      "tagline": "Behavioral reality & systematic iteration",
      "question": "What did actual behavior teach us about reality?",
      "lookFor": "Unexpected drop-offs, user workarounds, margin deviations, customer retention.",
      "produce": "Iterative feedback log, system optimization playbook, v2 backlog.",
      "relatedWork": "SettleMyCar"
    }
  ],
  "currentlyBuilding": [
    {
      "id": "careeros",
      "title": "CareerOS",
      "category": "Independent Software Product",
      "status": "ACTIVE",
      "focus": "AI-Powered Career Operating System",
      "tagline": "Architecting a unified system for career progression — centralizing opportunity discovery, intelligent positioning artifacts, application pipeline tracking, and interview preparation workflows.",
      "description": "An AI-powered career operating system I am building to streamline opportunity discovery, eliminate pipeline fragmentation, and accelerate professional growth.",
      "currentObjective": "Engineering core opportunity indexing and state-machine pipeline tracking modules locally.",
      "whatIsBeingBuilt": "Full-stack interface with local state management, structured candidate profile generators, and opportunity ranking algorithms.",
      "technology": [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Local Storage APIs"
      ],
      "progress": "Opportunity Discovery & Pipeline Tracking modules engineered in local build.",
      "milestone": "Active local architecture & engineering (zero fabricated metrics)",
      "link": "#building",
      "lastUpdated": "September 2026",
      "highlight": true,
      "badge": "Active Build"
    }
  ],
  "tools": [
    {
      "id": "chatgpt",
      "name": "ChatGPT",
      "category": "AI",
      "desc": "Synthetic customer scenario modeling, prompt engineering & conversational synthesis"
    },
    {
      "id": "claude",
      "name": "Claude",
      "category": "AI",
      "desc": "Complex systems reasoning, spec critique & analytical document generation"
    },
    {
      "id": "gemini",
      "name": "Gemini",
      "category": "AI",
      "desc": "Multimodal analysis, large-context document processing & research extraction"
    },
    {
      "id": "cursor",
      "name": "Cursor",
      "category": "AI",
      "desc": "AI-native code engineering, rapid prototyping & interface building"
    },
    {
      "id": "perplexity",
      "name": "Perplexity",
      "category": "Research",
      "desc": "Real-time market discovery, competitor intelligence & verified industry research"
    },
    {
      "id": "apollo",
      "name": "Apollo",
      "category": "Research",
      "desc": "B2B prospect intelligence, verified account mapping & outbound intent triggers"
    },
    {
      "id": "lusha",
      "name": "Lusha",
      "category": "Research",
      "desc": "Verified decision-maker contact data & enterprise account enrichment"
    },
    {
      "id": "hubspot",
      "name": "HubSpot",
      "category": "CRM",
      "desc": "Inbound marketing, deal pipeline tracking, contact lifecycle stages & automated sequences"
    },
    {
      "id": "zoho-crm",
      "name": "Zoho CRM",
      "category": "CRM",
      "desc": "Pipeline management, lead status machines & revenue forecasting"
    },
    {
      "id": "stripe",
      "name": "Stripe",
      "category": "CRM",
      "desc": "Commercial billing infrastructure, checkout flows, recurring billing & invoices"
    },
    {
      "id": "n8n",
      "name": "n8n",
      "category": "Automation",
      "desc": "Self-hosted workflow automations, custom webhooks & API connectors"
    },
    {
      "id": "make",
      "name": "Make",
      "category": "Automation",
      "desc": "Visual multi-app integration routers & event-triggered pipelines"
    },
    {
      "id": "zapier",
      "name": "Zapier",
      "category": "Automation",
      "desc": "Rapid connector pipelines for zero-to-one prototype validation"
    },
    {
      "id": "notion",
      "name": "Notion",
      "category": "Productivity",
      "desc": "Operating playbooks, project documentation, PRDs & company knowledge architecture"
    },
    {
      "id": "linear",
      "name": "Linear",
      "category": "Productivity",
      "desc": "High-velocity issue tracking, sprint cadences & milestone execution"
    },
    {
      "id": "clickup",
      "name": "ClickUp",
      "category": "Productivity",
      "desc": "Operational workflow tracking, resource coordination & task maps"
    },
    {
      "id": "google-workspace",
      "name": "Google Workspace",
      "category": "Productivity",
      "desc": "Executive memos, financial modeling, spreadsheets & shared collaboration"
    },
    {
      "id": "monday",
      "name": "Monday.com",
      "category": "Productivity",
      "desc": "Cross-functional operational boards, project tracking & resource management"
    },
    {
      "id": "python",
      "name": "Python",
      "category": "Development",
      "desc": "Data transformation scripts, web scrapers & automated ETL utilities"
    },
    {
      "id": "figma",
      "name": "Figma",
      "category": "Development",
      "desc": "Design systems, interactive prototypes & high-fidelity wireframing"
    },
    {
      "id": "webflow",
      "name": "Webflow",
      "category": "Development",
      "desc": "Landing pages, rapid commercial test sites & editorial publishing"
    },
    {
      "id": "posthog",
      "name": "PostHog",
      "category": "Analytics",
      "desc": "Product analytics, event tracking, user journeys & session telemetry"
    },
    {
      "id": "slack",
      "name": "Slack",
      "category": "Communication",
      "desc": "Async team coordination, real-time alert webhooks & integration hubs"
    },
    {
      "id": "loom",
      "name": "Loom",
      "category": "Communication",
      "desc": "Async video walkthroughs, design critiques & asynchronous team updates"
    }
  ],
  "thinking": [
    {
      "id": "operator-to-product",
      "slug": "operator-to-product",
      "title": "From Operator to Product: Bridging the Commercial-Engineering Gap",
      "category": "PRODUCT",
      "date": "2026-08-12",
      "readingTime": "5 min read",
      "excerpt": "Why the most effective product builders think like business operators first, and how commercial realities shape superior software architecture.",
      "tags": [
        "Product Thinking",
        "Commercial Strategy",
        "Unit Economics"
      ]
    },
    {
      "id": "systems-that-outlive-builders",
      "slug": "systems-that-outlive-builders",
      "title": "Designing Systems That Outlive Their Builders",
      "category": "SYSTEMS",
      "date": "2026-07-28",
      "readingTime": "6 min read",
      "excerpt": "How to structure documentation, operating playbooks, and automated workflows so businesses execute with high velocity without depending on heroics.",
      "tags": [
        "Operations",
        "System Architecture",
        "Scalability"
      ]
    },
    {
      "id": "ai-commercial-loop",
      "slug": "ai-product-loop",
      "title": "AI in the Commercial Loop: Augmentation Over Automation",
      "category": "AI",
      "date": "2026-06-19",
      "readingTime": "7 min read",
      "excerpt": "Why full automation often breaks trust in professional workflows, and how to design human-in-the-loop AI interfaces that operators actually rely on.",
      "tags": [
        "Artificial Intelligence",
        "Workflows",
        "Agentic Systems"
      ]
    }
  ],
  "seo": {
    "siteTitle": "Vivek Dhoundiyal — Builder · Systems · Growth",
    "siteDescription": "I build products, businesses and systems. 8+ years across entrepreneurship, commercial growth, operations and software.",
    "canonicalUrl": "https://vivekdhoundiyal.com",
    "ogImage": "/images/vivek-canonical.png",
    "twitterHandle": "@Vivek_Dh_"
  },
  "whatIDo": {
    "eyebrow": "CAPABILITIES",
    "headline": "What I do",
    "intro": "I work across business development, revenue generation, partnerships and commercial execution — turning opportunities into measurable outcomes.",
    "pillars": [
      {
        "id": "revenue-bd",
        "title": "Revenue & Business Development",
        "tag": "Commercial Execution",
        "description": "B2B sales, pipeline development, consultative selling, account growth and commercial execution."
      },
      {
        "id": "partnerships-growth",
        "title": "Partnerships & Growth",
        "tag": "Market Expansion",
        "description": "Strategic partnerships, business development, market expansion and relationship building."
      },
      {
        "id": "business-ops",
        "title": "Business & Operations",
        "tag": "System Design",
        "description": "Entrepreneurship, process design, operational execution and building repeatable systems."
      }
    ]
  },
  "whereImGoing": {
    "eyebrow": "FUTURE DIRECTION",
    "title": "Where I''m going next",
    "narrative": "My career has moved from engineering and commercial execution into business development, entrepreneurship, growth and operations. I''m now increasingly focused on technology, AI and product building — using my commercial background to approach products from both the customer and business side.",
    "stages": [
      {
        "label": "Current",
        "role": "Revenue / Business Development / Growth / Operations",
        "desc": "Deep commercial domain knowledge and customer problem understanding."
      },
      {
        "label": "Evolving",
        "role": "Technology / AI Workflows / Products",
        "desc": "Building software systems like CareerOS and automating operational workflows."
      },
      {
        "label": "Future",
        "role": "Commercial Software Products & Applied AI Systems",
        "desc": "Applying commercial rigor, systems design, and AI automation to high-impact business products."
      }
    ]
  },
  "proof": {
    "eyebrow": "CREDENTIALS & TRACK RECORD",
    "headline": "Commercial foundation, verified ventures and systems execution.",
    "items": [
      {
        "value": "8+ Years",
        "label": "Commercial Execution",
        "sub": "B2B sales, revenue architecture & deal closing"
      },
      {
        "value": "3+ Ventures",
        "label": "Built & Operated",
        "sub": "Automotive marketplace, B2B food supply & distribution"
      },
      {
        "value": "Enterprise BD",
        "label": "Consultative Selling",
        "sub": "CollegeDunia & KreedOn institutional accounts"
      },
      {
        "value": "Operations",
        "label": "Supply Systems",
        "sub": "Farm-to-kitchen routes & workshop networks"
      },
      {
        "value": "AI Workflows",
        "label": "Systems & Tools",
        "sub": "Agentic pipelines, n8n automations & CareerOS"
      }
    ]
  },
  "capabilities": [
    {
      "id": "revenue-bd",
      "slug": "revenue-business-development",
      "title": "Revenue & Business Development",
      "tag": "Commercial Execution",
      "headline": "Consultative pipeline architecture, enterprise deal closing and recurring revenue systems.",
      "summary": "I build predictable commercial revenue engines. From initial ICP identification and outbound research to multi-stakeholder consultative pitching and contract negotiation, I focus on commercial durability rather than empty volume.",
      "approach": "Revenue is an engineering problem. When you define clear ICP boundaries, map buyer incentives, and automate context-rich research dossiers, sales cycles shorten and conversion rates compound.",
      "problemsSolved": [
        "Unfocused outbound campaigns resulting in single-digit reply rates and bloated sales cycles",
        "Opacity in CRM pipeline stages and lack of conversion visibility",
        "Misalignment between commercial pitch decks and executive buyer ROI metrics",
        "Stalled enterprise deals caused by unmapped procurement and legal stakeholders"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Signal & ICP Definition",
          "desc": "Filter high-intent accounts using data intelligence (Apollo, Lusha) and hiring/funding triggers."
        },
        {
          "step": "02",
          "name": "Context-Rich Outreach",
          "desc": "Craft hyper-personalized value theses addressing the specific operational friction of the target CXO."
        },
        {
          "step": "03",
          "name": "Consultative Discovery",
          "desc": "Uncover unstated anxieties, decision hierarchies, and unit economic constraints."
        },
        {
          "step": "04",
          "name": "Commercial Structuring & Close",
          "desc": "Align multi-tiered pricing, pilot milestones, and contractual SLA terms."
        }
      ],
      "relevantExperience": [
        {
          "company": "SuperSurge",
          "role": "Growth & Revenue Consultant",
          "highlight": "Advising B2B founders on GTM pipeline velocity and outbound frameworks."
        },
        {
          "company": "CollegeDunia",
          "role": "Senior Manager – BD",
          "highlight": "Spearheaded consultative sales cycles for higher education institutional clients."
        },
        {
          "company": "KreedOn",
          "role": "Media Sales Manager",
          "highlight": "Closed brand sponsorships and digital media monetization deals."
        }
      ],
      "toolsUsed": [
        "Zoho CRM",
        "HubSpot",
        "Apollo",
        "Lusha",
        "LinkedIn Sales Navigator",
        "Google Workspace"
      ],
      "outcomes": "Consistently exceeded enterprise quarterly targets, closed multi-thousand dollar accounts, and engineered outbound playbooks currently in active client production.",
      "lessons": "Enterprise sales is empathy in commercial clothing. Closing complex deals requires solving the personal and organizational anxieties of the buyer."
    },
    {
      "id": "partnerships-growth",
      "slug": "partnerships-growth",
      "title": "Partnerships & Growth",
      "tag": "Market Expansion",
      "headline": "Strategic alliances, distribution channels, and high-trust commercial ecosystems.",
      "summary": "Growth rarely happens in isolation. I design mutual-upside partnership agreements that leverage existing distribution networks, align strategic incentives, and open non-linear growth channels.",
      "approach": "The best partnerships are not formal marketing stunts; they are structural win-win agreements where both parties gain immediate operational leverage or margin protection.",
      "problemsSolved": [
        "High customer acquisition costs (CAC) in saturated direct marketing channels",
        "Fragmented supply partners with inconsistent service quality and low platform retention",
        "Slow market entry into competitive regional territories",
        "Lack of structured co-marketing and co-selling agreements"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Ecosystem Mapping",
          "desc": "Identify non-competing entities that already own the trust and attention of your target audience."
        },
        {
          "step": "02",
          "name": "Economic Incentive Design",
          "desc": "Structure fee-splits, referral margins, and co-branded deliverables that make partnering a no-brainer."
        },
        {
          "step": "03",
          "name": "Partner Enablement",
          "desc": "Create operational SOPs, onboarding materials, and digital workflows so partners execute seamlessly."
        },
        {
          "step": "04",
          "name": "Performance Governance",
          "desc": "Track partner transaction volume, SLA fulfillment, and customer satisfaction scores."
        }
      ],
      "relevantExperience": [
        {
          "company": "SettleMyCar",
          "role": "Co-founder",
          "highlight": "Onboarded and managed 50+ multi-brand garage partners across Delhi-NCR."
        },
        {
          "company": "CollegeDunia",
          "role": "Senior Manager – BD",
          "highlight": "Structured long-term academic partnership agreements with university administrators."
        },
        {
          "company": "Fixins",
          "role": "Co-founder / Partner",
          "highlight": "Managed regional wholesale buyer distributor networks and credit terms."
        }
      ],
      "toolsUsed": [
        "Slack",
        "Notion",
        "ClickUp",
        "Google Workspace",
        "Zapier"
      ],
      "outcomes": "50+ signed workshop agreements, 1,000+ completed marketplace fulfillment orders, and durable wholesale distribution routes.",
      "lessons": "A partnership agreement is only as good as the operational ease of fulfillment. If execution is complex, even the best contracts decay."
    },
    {
      "id": "business-operations",
      "slug": "business-operations",
      "title": "Business & Operations",
      "tag": "System Design",
      "headline": "Unit economics, ground-level logistics, working capital governance, and repeatable operating machines.",
      "summary": "I build and run physical and digital operational systems. From morning farm-to-kitchen fresh supply deliveries to multi-point automotive workshop repair logistics, I design systems that eliminate friction and protect cash flow.",
      "approach": "Operations is about turning uncertainty into predictable routines. By breaking down complex workflows into deterministic checkpoints and clear SLAs, businesses scale without chaotic fire-fighting.",
      "problemsSolved": [
        "Volatile supplier quality and erratic early-morning logistics delivery failures",
        "Working capital depletion caused by loose credit terms and delayed receivables",
        "High human dependency in daily routine tasks without documented playbooks",
        "Operational opacity between ground fulfillment teams and management"
      ],
      "methodology": [
        {
          "step": "01",
          "name": "Process Decomposition",
          "desc": "Map every human and technical step from order ingestion to final delivery."
        },
        {
          "step": "02",
          "name": "SLA & Quality Checkpoints",
          "desc": "Institute strict visual grading, timestamp milestones, and pre-dispatch checklists."
        },
        {
          "step": "03",
          "name": "Cash Flow & Credit Guardrails",
          "desc": "Implement milestone-based disbursements, escrow mechanisms, and tight receivables cadences."
        },
        {
          "step": "04",
          "name": "Automation & Exception Routing",
          "desc": "Automate routine notifications via webhooks and flag anomalies immediately to operators."
        }
      ],
      "relevantExperience": [
        {
          "company": "Dark Kitchen",
          "role": "Founder",
          "highlight": "Engineered daily farm-to-kitchen morning procurement and logistics routes."
        },
        {
          "company": "SettleMyCar",
          "role": "Co-founder",
          "highlight": "Orchestrated doorstep vehicle pickup, digital estimation, and workshop repair workflows."
        },
        {
          "company": "Fixins",
          "role": "Partner",
          "highlight": "Governed inventory turnaround, warehouse dispatch, and wholesale credit governance."
        }
      ],
      "toolsUsed": [
        "n8n",
        "Make",
        "Monday.com",
        "ClickUp",
        "Google Sheets / Workspace",
        "Python"
      ],
      "outcomes": "Maintained zero stockouts across daily restaurant supply, completed 1,000+ vehicle service cycles, and achieved positive operating cash flow.",
      "lessons": "B2B customer retention is a byproduct of ruthless reliability. Eliminating operational anxiety for a business customer creates an enduring commercial moat."
    }
  ],
  "corporateExperience": [
    {
      "id": "collegedunia",
      "slug": "collegedunia",
      "company": "CollegeDunia Web Pvt Ltd",
      "role": "Senior Manager – Business Development",
      "period": "Apr 2023 – Sep 2023",
      "location": "India",
      "badge": "Enterprise Sales",
      "tagline": "Enterprise consultative selling, institutional partnerships, and multi-stakeholder contract closing.",
      "summary": "Led consultative business development cycles for higher education institutions, pitching institutional leaders, structuring customized digital marketing and student acquisition solutions, and managing contract negotiations.",
      "context": "Higher education institutions operate with complex governance structures where purchase decisions require consensus across Deans, Trustees, Admissions Directors, and finance committees.",
      "responsibilities": [
        "Identified and prospected high-value institutional education accounts across target geographies",
        "Conducted consultative discovery sessions with University Directors and marketing leadership",
        "Formulated bespoke data-backed proposals mapping digital reach to verified enrollment projections",
        "Negotiated contract scope, payment cycles, and renewal parameters to ensure margin retention"
      ],
      "challenges": "Overcoming institutional inertia, lengthy bureaucratic approval cycles, and demand for guaranteed ROI attribution.",
      "execution": "Constructed custom ROI projection models demonstrating student enrollment acquisition economics, pre-empted procurement objections, and maintained aggressive executive follow-up cadences.",
      "outcomes": "Closed key institutional accounts, drove quarterly revenue targets, and expanded client retention through clear delivery governance.",
      "skills": [
        "Enterprise B2B Sales",
        "Consultative Selling",
        "Contract Negotiation",
        "Executive Stakeholder Management",
        "Pipeline Velocity"
      ],
      "lessons": "In enterprise sales, you are never pitching a product; you are solving the buyer’s professional vulnerability by derisking their decision."
    },
    {
      "id": "kreedon",
      "slug": "kreedon",
      "company": "KreedOn (Voice of Indian Sports)",
      "role": "Media Sales Manager",
      "period": "Dec 2023 – Oct 2024",
      "location": "India",
      "badge": "Media Sales & Sponsorships",
      "tagline": "Brand sponsorships, sports media monetization, and commercial campaign architecture.",
      "summary": "Spearheaded B2B brand partnerships and media sponsorship deals, translating sports audience attention into high-impact commercial campaigns for consumer brands, corporate sponsors, and advertising agencies.",
      "context": "Digital sports media monetization requires bridging the gap between raw viewer attention and tangible corporate brand objectives, brand awareness, and lead generation.",
      "responsibilities": [
        "Built and executed outbound GTM strategies targeting FMCG, consumer tech, and sports lifestyle brands",
        "Structured innovative sponsorship packages combining branded content, athlete IP, and social distribution",
        "Pitched Brand Heads, CMOs, and media buying agency directors on commercial ROI",
        "Supervised campaign delivery milestones and post-campaign analytical reporting"
      ],
      "challenges": "Navigating highly competitive brand sponsorship budgets and demanding performance attribution from media buyers.",
      "execution": "Created performance-linked sponsorship decks with contextual audience insights, mapped campaign deliverables to concrete brand reach metrics, and fostered direct agency relationships.",
      "outcomes": "Secured high-value brand sponsorships and established repeatable sponsorship inventory packages that accelerated sales velocity.",
      "skills": [
        "Media Monetization",
        "Brand Sponsorships",
        "Agency Relationship Management",
        "Commercial Campaign Design",
        "Pitch Presentations"
      ],
      "lessons": "Selling media is selling trust in attention. The more clearly you translate engagement into business impact, the faster corporate sponsors commit."
    },
    {
      "id": "supersurge",
      "slug": "supersurge",
      "company": "SuperSurge Consulting",
      "role": "Growth & Revenue Consultant",
      "period": "Oct 2024 – Present",
      "location": "India / Remote",
      "badge": "Active Advisory",
      "tagline": "GTM outbound architecture, revenue operations, and pipeline engineering for B2B ventures.",
      "summary": "Advising B2B founders and commercial teams on go-to-market structure, ICP segmentation, multichannel outbound engine design, and conversion optimization.",
      "context": "Early and growth-stage B2B ventures often burn capital on unfocused outbound campaigns that yield low response rates, unqualified discovery calls, and bloated sales cycles.",
      "responsibilities": [
        "Audit existing commercial sales pipelines, messaging frameworks, and lead routing mechanics",
        "Design targeted ICP criteria using verified intent data, tech-stack signals, and hiring triggers",
        "Build automated multi-touch outbound cadences combining email, LinkedIn, and direct research dossiers",
        "Implement CRM operational workflows in Zoho and Apollo with strict SLA benchmarks"
      ],
      "challenges": "Ensuring sales reps adopt structured prospecting habits without falling back on spam-and-hope outbound volume.",
      "execution": "Re-engineered client outbound playbooks, automated manual enrichment using n8n and data APIs, and instituted disciplined pipeline qualification criteria.",
      "outcomes": "Helped founders achieve significantly higher response rates, tightened qualification cadences, and improved pipeline predictability.",
      "skills": [
        "GTM Strategy",
        "Revenue Operations",
        "Outbound Pipeline Engineering",
        "ICP Architecture",
        "CRM Optimization"
      ],
      "lessons": "High-performing revenue teams succeed not through volume, but through extreme precision in prospect selection and context-rich positioning."
    }
  ],
  "certifications": [
    {
      "id": "google-pm",
      "name": "Google Project Management Professional Certificate",
      "issuer": "Google / Coursera",
      "date": "2024",
      "credentialId": "Verified Professional Credential",
      "credentialUrl": "https://coursera.org/share/67ea64a2fef42c262142277d33b497fe",
      "status": "Verified",
      "description": "Comprehensive 6-course professional curriculum covering project initiation, planning, execution, Agile and Scrum frameworks, documentation, risk mitigation, and stakeholder management.",
      "skills": [
        "Agile & Scrum",
        "Project Planning",
        "Risk Management",
        "Stakeholder Alignment",
        "Documentation & PRDs",
        "Sprint Cadences"
      ]
    }
  ],
  "education": {
    "degree": "B.Tech in Mechanical Engineering",
    "institution": "Manav Rachna International University",
    "location": "Faridabad, India",
    "period": "2014 – 2018",
    "summary": "Rigorous engineering foundation grounded in physical systems, mathematical modeling, thermodynamics, and modular systems analysis.",
    "takeaway": "Instilled respect for physical constraints, first-principles logic, and the discipline of clean modular systems."
  },
  "buildingToward": {
    "eyebrow": "STRATEGIC FOCUS",
    "title": "Where I am Building",
    "narrative": "My foundation began in engineering and evolved through 8+ years of 0→1 entrepreneurship, enterprise B2B sales, revenue architecture, and commercial operations. Today, I am channeling that commercial leverage into technology, automated business systems, AI workflows, and digital products.",
    "focusAreas": [
      {
        "title": "Independent Software Products",
        "desc": "Architecting utilities like CareerOS that solve high-friction professional workflows through clean interfaces and intelligent automation."
      },
      {
        "title": "AI & Agentic Workflows",
        "desc": "Deploying LLM prompt chaining, webhook automations (n8n, Make), and deterministic schemas to eliminate commercial drag."
      },
      {
        "title": "Scalable Business Systems",
        "desc": "Designing self-sustaining operational machines where revenue generation, partner onboarding, and customer retention run with predictable velocity."
      }
    ]
  }
}',
  'Initial baseline site content import',
  1790659200149,
  'vivekdhoundiyal2901@gmail.com'
)
ON CONFLICT(id) DO NOTHING;
