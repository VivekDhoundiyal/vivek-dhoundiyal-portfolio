import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from '../Icons'

export default function LivePreviewModal({ isOpen, onClose }) {
  const [device, setDevice] = useState('desktop') // 'desktop' | 'tablet' | 'mobile'

  if (!isOpen) return null

  const getWidth = () => {
    switch (device) {
      case 'mobile': return '390px'
      case 'tablet': return '768px'
      case 'desktop': default: return '100%'
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-fadeIn">
      {/* Top Controller Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Live Draft Preview Engine
          </h3>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            (Rendering unreleased draft content)
          </span>
        </div>

        {/* Breakpoint Switcher */}
        <div className="flex items-center bg-white/10 rounded-xl p-1 border border-white/15 gap-1">
          <button
            onClick={() => setDevice('desktop')}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              device === 'desktop' ? 'bg-signal-blue text-white font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Desktop (100%)
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              device === 'tablet' ? 'bg-signal-blue text-white font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Tablet (768px)
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              device === 'mobile' ? 'bg-signal-blue text-white font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Mobile (390px)
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/?preview=true"
            target="_blank"
            className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors flex items-center gap-1.5"
          >
            <span>Open in New Tab</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-sm px-3 transition-colors"
          >
            Close ✕
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 flex items-center justify-center pt-4 overflow-hidden">
        <div
          style={{ width: getWidth(), height: '100%' }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-300 flex flex-col"
        >
          <iframe
            src="/?preview=true"
            title="Live Preview"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  )
}
