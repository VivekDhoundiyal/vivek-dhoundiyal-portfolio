import React from 'react'

export default function AboutBackground({ experience = {}, about = {} }) {
  const narrativeChapters = [
    {
      stage: '01',
      tag: 'RIGOR & ORIGIN',
      title: 'Engineering Foundation',
      context: 'Mechanical Engineering · 2014–2018',
      narrative: 'Trained in mechanical systems, thermodynamics, and physical constraints at Manav Rachna. Engineering established a baseline of first-principles logic, respect for boundary conditions, and the habit of decomposing complex machines into clear inputs and outputs.',
      mindset: 'First-principles decomposition and structural discipline.'
    },
    {
      stage: '02',
      tag: '0→1 VENTURES',
      title: 'Entrepreneurship & Unit Economics',
      context: 'SettleMyCar, Dark Kitchen & Fixins · 2017–2023',
      narrative: 'Stepped into ground-level business building. Built an automotive repair marketplace with 50+ garages, operated daily morning farm-to-kitchen supply chains for restaurants, and governed regional distribution credit. Learned real customer acquisition, working capital survival, and supplier reliability.',
      mindset: 'Cashflow survival, vendor trust, and unit economics.'
    },
    {
      stage: '03',
      tag: 'COMMERCIAL SCALE',
      title: 'Enterprise B2B Sales & GTM',
      context: 'CollegeDunia, KreedOn & SuperSurge · 2023–Present',
      narrative: 'Spearheaded high-stakes consultative revenue cycles. Pitched CXO-level university directors and corporate brand heads, closed high-ticket institutional and media sponsorship deals, and advised B2B founders on cold outbound pipeline engineering and CRM rigor.',
      mindset: 'Consultative closing and multi-stakeholder consensus.'
    },
    {
      stage: '04',
      tag: 'OPERATING SYSTEMS',
      title: 'Systems & Process Architecture',
      context: 'Operating SOPs, Playbooks & Workflows',
      narrative: 'Recognized that heroic human effort does not scale without deterministic operational systems. Designed standard operating playbooks, exception routing, and cross-functional cadences that ensure businesses execute with velocity and consistent quality.',
      mindset: 'Deterministic playbooks over ad-hoc human goodwill.'
    },
    {
      stage: '05',
      tag: 'MODERN TOOLING',
      title: 'Technology & AI Workflows',
      context: 'Agentic Workflows, n8n, Make & LLMs',
      narrative: 'Harnessing modern developer tooling, webhook automation, and AI models to eliminate administrative drag. Connecting CRM databases with data intelligence APIs and LLM prompt chains to multiply commercial productivity.',
      mindset: 'Leverage multiplication through automated pipelines.'
    },
    {
      stage: '06',
      tag: 'ACTIVE BUILD',
      title: 'Software Building & CareerOS',
      context: 'Independent Engineering & Products',
      narrative: 'Actively designing and building digital products. Applying deep commercial and customer insight to software engineering — creating tools like CareerOS to solve tangible friction in professional progression.',
      mindset: 'Grounding software design in commercial operator reality.'
    }
  ]

  const overviewStats = [
    { label: 'Commercial Experience', value: '8+ Years', sub: 'Sales & Operations' },
    { label: 'Partner Garages Scaled', value: '50+', sub: 'Automotive Network' },
    { label: 'Enterprise Roles', value: 'CollegeDunia & KreedOn', sub: 'Institutional BD & Media' },
    { label: 'Flagship AI Product', value: 'CareerOS', sub: '10-Stage Pipeline' }
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAF8] text-[#111318] border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="uppercase tracking-wider font-semibold">10 · Personal Trajectory &amp; Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
            About Vivek Dhoundiyal
          </h2>

          <p className="text-base sm:text-lg text-[#555B66] leading-relaxed font-normal">
            A commercial operator who bridges business understanding, systems thinking, and software building — grounding technology in commercial reality.
          </p>
        </div>

        {/* Executive Overview Stats Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-2xs reveal-on-scroll">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {overviewStats.map((st, sIdx) => (
              <div key={sIdx} className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
                  {st.label}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#111318]">
                  {st.value}
                </div>
                <div className="text-xs text-[#737984]">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Trajectory Grid (3 columns on desktop, 6 chapters) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {narrativeChapters.map((ch, idx) => (
            <div
              key={ch.stage}
              className={`p-7 sm:p-9 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 hover-card-elevate space-y-5 flex flex-col justify-between transition-all duration-300 reveal-on-scroll delay-${(idx % 3) * 100} group`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold text-[#2563EB] bg-blue-50 border border-blue-100">
                    {ch.stage} · {ch.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#737984]">
                    {ch.context}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111318] group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                  {ch.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed font-normal">
                  {ch.narrative}
                </p>

                {/* Key Mindset Shift Callout */}
                <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-0.5">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                    Core Mindset Shift
                  </span>
                  <span className="text-xs font-medium text-[#111318] block leading-snug">
                    {ch.mindset}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-[#737984] flex items-center justify-between">
                <span>Phase {ch.stage}</span>
                <span className="text-[#2563EB] font-medium group-hover:underline">Verified Progression →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Philosophy Quote Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900 via-[#111318] to-slate-900 text-white shadow-md relative overflow-hidden reveal-on-scroll">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-blue-200">
              Core Operating Thesis
            </span>
            <blockquote className="text-lg sm:text-2xl font-medium leading-relaxed tracking-tight text-slate-100">
              "The most durable software and commercial systems are built by operators who understand the ground-level economic reality of the customer first, and write code second."
            </blockquote>
            <div className="text-xs font-mono text-blue-300">
              — Vivek Dhoundiyal · Commercial Operator &amp; Builder
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
