import React, { useState } from 'react'
import Image from 'next/image'
import { CheckIcon, ArrowRight } from '../Icons'

// 1. Sticker / Blog Illustration Component
export function Sticker({ src, alt = '', caption = '' }) {
  if (!src) return null

  return (
    <figure className="my-8 sm:my-10 flex flex-col items-center">
      <div className="relative max-w-md w-full flex justify-center p-2 sm:p-4 rounded-2xl bg-white/70 border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow">
        <Image
          src={src}
          alt={alt || 'Article illustration'}
          width={440}
          height={300}
          className="object-contain max-h-72 w-auto drop-shadow-sm select-none"
          priority={false}
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs font-mono text-[#555B66] max-w-md">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// 2. Key Takeaway Callout Box
export function KeyTakeaway({ title = 'Key Principle', text }) {
  return (
    <aside
      aria-label={title}
      className="my-8 p-6 sm:p-7 rounded-2xl bg-blue-50/70 border-l-4 border-l-[#2563EB] border border-blue-200/60 shadow-2xs space-y-2"
    >
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
        <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
        <span>{title}</span>
      </div>
      <p className="text-sm sm:text-base text-[#111318] font-medium leading-relaxed">
        {text}
      </p>
    </aside>
  )
}

// 3. Financial Calculation Block (Unit Economics & Break-Even)
export function CalculationBlock({
  sellingPrice = 2000,
  variableCost = 700,
  contributionMargin = 1300,
  marginPercent = 65,
  fixedCosts = 65000,
  breakEvenCustomers = 50
}) {
  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E7EB]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#2563EB] font-bold">
            Financial Modeling
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#111318] tracking-tight">
            Unit Economics &amp; Break-Even Framework
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto">
          {marginPercent}% Contribution Margin
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Selling Price */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
          <span className="text-xs font-mono text-[#737984]">Selling Price / Unit</span>
          <div className="text-2xl font-extrabold text-[#111318]">₹{sellingPrice.toLocaleString()}</div>
          <p className="text-[11px] text-[#555B66]">Average monthly realized price</p>
        </div>

        {/* Variable Cost */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
          <span className="text-xs font-mono text-[#737984]">Direct Variable Cost</span>
          <div className="text-2xl font-extrabold text-rose-600">- ₹{variableCost.toLocaleString()}</div>
          <p className="text-[11px] text-[#555B66]">Hosting, APIs, payment fee, fulfillment</p>
        </div>

        {/* Contribution Margin */}
        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-1 sm:col-span-2 lg:col-span-1">
          <span className="text-xs font-mono text-[#2563EB] font-bold">Unit Contribution</span>
          <div className="text-2xl font-extrabold text-[#2563EB]">₹{contributionMargin.toLocaleString()}</div>
          <p className="text-[11px] text-blue-700">Surplus available per customer</p>
        </div>
      </div>

      {/* Break-even calculation formula */}
      <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-[#737984] font-semibold">
          Break-Even Volume Formula
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-sm text-[#111318]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs font-bold">
              Fixed Overhead: ₹{fixedCosts.toLocaleString()}
            </span>
            <span>÷</span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs font-bold text-[#2563EB]">
              Unit Margin: ₹{contributionMargin.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2 text-base font-bold text-emerald-700">
            <span>=</span>
            <span className="px-4 py-1.5 rounded-xl bg-emerald-100/70 border border-emerald-300">
              {breakEvenCustomers} Active Customers
            </span>
          </div>
        </div>
        <p className="text-xs text-[#555B66] leading-relaxed pt-1">
          Until reaching 50 customers, each new subscriber pays down fixed infrastructure. Beyond customer 51, every additional account contributes ₹1,300 straight to operational profit.
        </p>
      </div>
    </div>
  )
}

// 4. Interactive Validation Checklist
export function ValidationChecklist() {
  const defaultItems = [
    { id: 'icp', label: 'Define Specific Customer ICP', desc: 'Identified a narrow, reachable niche with demonstrable daily operational pain.' },
    { id: 'problem', label: 'Validate Problem Severity & Cost of Inaction', desc: 'Confirmed high frequency, acute friction, and measurable financial consequences of doing nothing.' },
    { id: 'competitors', label: 'Audit Competitors & Find White Space', desc: 'Evaluated 3+ competitors to uncover service gaps, pricing friction, and review complaints.' },
    { id: 'test', label: 'Test Solution via Smoke Test or Concierge MVP', desc: 'Observed real prospect interaction with a landing page, Figma prototype, or manual pilot.' },
    { id: 'wtp', label: 'Secure Real Willingness-to-Pay Commitment', desc: 'Obtained paid pilot agreements, advance deposits, or signed letters of intent from 3+ non-friends.' },
    { id: 'economics', label: 'Model Unit Economics & Customer Acquisition', desc: 'Verified positive contribution margin (60%+) and realistic break-even volume.' }
  ]

  const [checked, setChecked] = useState({})

  const toggle = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const completedCount = Object.values(checked).filter(Boolean).length
  const total = defaultItems.length
  const progressPercent = Math.round((completedCount / total) * 100)

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E7EB]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#2563EB] font-bold">
            Interactive Audit
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#111318] tracking-tight">
            Idea Validation Readiness Checklist
          </h3>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="text-xs font-mono text-[#555B66]">
            {completedCount} of {total} validated
          </span>
          <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-[#2563EB] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {defaultItems.map(item => {
          const isDone = Boolean(checked[item.id])
          return (
            <label
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer select-none ${
                isDone
                  ? 'bg-blue-50/40 border-blue-200'
                  : 'bg-white border-[#E5E7EB] hover:bg-slate-50/80'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border transition-colors ${
                  isDone
                    ? 'bg-[#2563EB] border-[#2563EB] text-white'
                    : 'bg-white border-slate-300'
                }`}
              >
                {isDone && <CheckIcon className="w-3.5 h-3.5 text-white" />}
              </div>
              <div className="space-y-0.5">
                <span className={`text-sm font-bold block ${isDone ? 'text-[#111318] line-through opacity-85' : 'text-[#111318]'}`}>
                  {item.label}
                </span>
                <span className="text-xs text-[#555B66] leading-relaxed block">
                  {item.desc}
                </span>
              </div>
            </label>
          )
        })}
      </div>

      <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#737984]">
        <span>Tip: Do not build production code until all 6 gates are checked.</span>
        {completedCount > 0 && (
          <button
            type="button"
            onClick={() => setChecked({})}
            className="text-[#2563EB] hover:underline cursor-pointer"
          >
            Reset checklist
          </button>
        )}
      </div>
    </div>
  )
}

// 5. Accessible FAQ Accordion
export function FaqAccordion({ items = [] }) {
  if (!items || items.length === 0) return null

  return (
    <div className="my-8 space-y-4">
      {items.map((item, idx) => (
        <details
          key={idx}
          className="group p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs open:border-[#2563EB]/40 open:shadow-xs transition-all"
        >
          <summary className="flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#111318] cursor-pointer list-none select-none">
            <span>{item.question}</span>
            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform text-[#2563EB] font-mono text-sm">
              ↓
            </span>
          </summary>
          <div className="pt-4 text-sm sm:text-base text-[#555B66] leading-relaxed border-t border-slate-100 mt-4 font-normal">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
