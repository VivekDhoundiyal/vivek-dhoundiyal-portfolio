import React from 'react'
import Image from 'next/image'

function CompassIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="7" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v2m-5 9l3.5-7m6.5 7l-3.5-7m-5 3h7" />
    </svg>
  )
}

function RocketIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.12-4.8a6 6 0 00-7.38 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58-5.84m4.8.12a6 6 0 017.38-5.84v4.8" />
    </svg>
  )
}

function BriefcaseIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v1.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  )
}

function ChartTrendingIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  )
}

function TerminalIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 3-3 3m4.5 0h4.5M3.75 4.5h16.5A1.5 1.5 0 0121.75 6v12a1.5 1.5 0 01-1.5 1.5H3.75A1.5 1.5 0 012.25 18V6a1.5 1.5 0 011.5-1.5z" />
    </svg>
  )
}

export default function AboutBackground() {
  const journeyStages = [
    {
      stage: '01',
      title: 'ENGINEERING',
      period: '2014–2018',
      sentence: 'First-principles systems rigor and thermodynamic problem-solving at Manav Rachna.',
      icon: CompassIcon,
      accent: '#2563EB'
    },
    {
      stage: '02',
      title: 'ENTREPRENEURSHIP',
      period: '2017–2023',
      sentence: 'Scaling an automotive marketplace with 50+ garages and daily morning restaurant supply.',
      icon: RocketIcon,
      accent: '#7C3AED'
    },
    {
      stage: '03',
      title: 'B2B SALES',
      period: '2023–2024',
      sentence: 'Closing enterprise consultative deals and brand sponsorships at CollegeDunia and KreedOn.',
      icon: BriefcaseIcon,
      accent: '#059669'
    },
    {
      stage: '04',
      title: 'GROWTH',
      period: '2024–PRESENT',
      sentence: 'Advising B2B founders on cold outbound pipeline engineering and CRM stage velocity.',
      icon: ChartTrendingIcon,
      accent: '#D97706'
    },
    {
      stage: '05',
      title: 'PRODUCT + AI',
      period: 'ACTIVE',
      sentence: 'Architecting CareerOS and automated webhook pipelines to eliminate professional friction.',
      icon: TerminalIcon,
      accent: '#2563EB'
    }
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAF8] text-[#111318] border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header with Global Network Visual */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/50 text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-wider font-semibold">10 · Personal Journey</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111318] leading-tight">
              Personal Journey &amp; Trajectory
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] max-w-lg leading-relaxed font-normal pt-1">
              From first-principles engineering to 0→1 business building, enterprise commercial sales, and AI software architecture.
            </p>
          </div>

          {/* 3D Glass Global Network Illustration */}
          <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-[#E5E7EB] shadow-xs self-start lg:self-auto hover:border-[#2563EB]/40 transition-all">
            <div className="relative w-20 h-18 sm:w-24 sm:h-20 flex-shrink-0 animate-float-medium illustration-tilt">
              <Image
                src="/illustrations/global-network-illustration.png"
                alt="Global Markets & Partnerships 3D Glass Globe Illustration"
                width={120}
                height={100}
                className="object-contain w-full h-full drop-shadow-md"
              />
            </div>
            <div className="space-y-1 pr-2">
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#2563EB] font-bold block">
                Global Perspective
              </span>
              <div className="text-xs font-semibold text-[#111318]">
                Markets · Partnerships
              </div>
              <p className="text-[11px] text-[#737984]">
                Continuous scale &amp; expansion
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* VISUAL CONNECTED JOURNEY TIMELINE                    */}
        {/* ==================================================== */}
        <div className="relative">
          
          {/* Subtle Desktop Connector Line */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-10 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-200 via-purple-300 via-emerald-300 to-blue-400 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {journeyStages.map((st) => {
              const Icon = st.icon
              return (
                <div
                  key={st.stage}
                  className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 hover-card-elevate transition-all duration-300 flex flex-col justify-between space-y-4 reveal-on-scroll group"
                >
                  <div className="space-y-3">
                    {/* Top Bar: Icon & Stage Number */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="w-11 h-11 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] flex items-center justify-center text-[#111318] group-hover:scale-110 transition-transform shadow-2xs">
                        <Icon className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#737984]">
                        {st.stage}
                      </span>
                    </div>

                    {/* Stage Title & Period */}
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-[#737984] uppercase tracking-wider block">
                        {st.period}
                      </span>
                      <h3 className="text-base font-extrabold tracking-tight text-[#111318] group-hover:text-[#2563EB] transition-colors">
                        {st.title}
                      </h3>
                    </div>

                    {/* Exact 1-Sentence Description (< 15 words) */}
                    <p className="text-xs text-[#555B66] leading-relaxed">
                      {st.sentence}
                    </p>
                  </div>

                  {/* Stage Status Marker */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-[#737984]">
                    <span>Trajectory</span>
                    <span className="text-[#2563EB] font-bold">Verified →</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* Operating Philosophy Quote Card with 3D Scalable Growth Illustration */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-[#111318] to-slate-900 text-white shadow-md relative overflow-hidden reveal-on-scroll">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-blue-200">
                Core Operating Thesis
              </span>
              <blockquote className="text-base sm:text-xl font-medium leading-relaxed text-slate-100">
                "The most durable software systems are built by operators who understand the ground-level economic reality of the customer first, and write code second."
              </blockquote>
              <div className="text-xs font-mono text-blue-300 pt-1">
                — Vivek Dhoundiyal · Commercial Operator &amp; Builder
              </div>
            </div>

            {/* 3D Glass Scalable Growth Illustration */}
            <div className="relative w-40 sm:w-48 h-28 sm:h-32 flex-shrink-0 animate-float-medium illustration-tilt self-center sm:self-auto">
              <Image
                src="/illustrations/scalable-growth-illustration.png"
                alt="Scalable Growth 3D Glass Chart Illustration"
                fill
                sizes="200px"
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
