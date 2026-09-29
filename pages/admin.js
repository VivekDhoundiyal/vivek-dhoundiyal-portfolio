import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getSiteContent } from '../lib/content'
import { authenticateRequest, generateCsrfToken, ADMIN_EMAIL } from '../lib/auth'
import { CheckIcon, ArrowRight, ArrowUpRight, SearchIcon } from '../components/Icons'
import SectionManager from '../components/admin/SectionManager'
import LivePreviewModal from '../components/admin/LivePreviewModal'
import PublishModal from '../components/admin/PublishModal'
import RevisionHistoryModal from '../components/admin/RevisionHistoryModal'

export default function AdminDashboard({ isAuthenticated, initialContent, csrfToken: initialCsrf, adminEmail }) {
  const [authed, setAuthed] = useState(isAuthenticated)
  const [csrfToken, setCsrfToken] = useState(initialCsrf)
  const [currentUser, setCurrentUser] = useState(adminEmail || ADMIN_EMAIL)
  
  // Login form state
  const [emailInput, setEmailInput] = useState(ADMIN_EMAIL)
  const [passwordInput, setPasswordInput] = useState('')
  const [authError, setAuthError] = useState('')
  const [authLoading, setAuthLoading] = useState(false)

  // CMS state
  const [activeTab, setActiveTab] = useState('sections')
  const [content, setContent] = useState(initialContent || {})
  const [saveStatus, setSaveStatus] = useState('')
  const [gitStatusMessage, setGitStatusMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [isPublishing, setIsPublishing] = useState(false)
  const [lastSavedDraftTime, setLastSavedDraftTime] = useState(null)

  // Modal states
  const [showPreviewModal, setShowPreviewModal] = useState(false)
  const [showPublishModal, setShowPublishModal] = useState(false)
  const [showRevisionModal, setShowRevisionModal] = useState(false)

  // On client mount, check if an existing authenticated session is active
  React.useEffect(() => {
    fetch('/api/content?mode=draft', { credentials: 'include' })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error('Not authenticated')
      })
      .then(draftData => {
        if (draftData && !draftData.error) {
          setContent(draftData)
          setAuthed(true)
        }
      })
      .catch(() => {
        // Not authenticated, remain on login security guard
      })
  }, [])

  // Handle Login via Server-side Auth API
  const handleLogin = async (e) => {
    e.preventDefault()
    setAuthError('')
    setAuthLoading(true)

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        // Fetch fresh draft content
        const contentRes = await fetch('/api/content?mode=draft', { credentials: 'include' })
        const contentData = await contentRes.json()
        setContent(contentData)
        setCsrfToken(data.csrfToken)
        setCurrentUser(data.user)
        setAuthed(true)
      } else {
        setAuthError(data.error || 'Authentication rejected')
      }
    } catch {
      setAuthError('Network error connecting to security server')
    } finally {
      setAuthLoading(false)
    }
  }

  // Handle Logout
  const handleLogout = async () => {
    try {
      await fetch('/api/auth?action=logout', {
        method: 'POST',
        credentials: 'include'
      })
    } catch {
      // ignore
    }
    setAuthed(false)
    setContent({})
    setPasswordInput('')
  }

  // Save Working Draft (Cloudflare D1 / Local SQLite)
  const handleSaveDraft = async () => {
    setIsSaving(true)
    setSaveStatus('Saving draft to D1...')
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken || ''
        },
        credentials: 'include',
        body: JSON.stringify(content),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setLastSavedDraftTime(new Date().toLocaleTimeString())
        setSaveStatus('Draft Saved!')
        setTimeout(() => setSaveStatus(''), 4000)
      } else {
        setSaveStatus(`Draft error: ${data.error || 'Failed'}`)
      }
    } catch (err) {
      setSaveStatus(`Error: ${err.message}`)
    } finally {
      setIsSaving(false)
    }
  }

  // Publish to Live Website (Cloudflare D1 & Edge CDN)
  const handlePublish = async (note) => {
    setIsPublishing(true)
    setSaveStatus('Publishing live...')
    try {
      // 1. Ensure draft is saved first
      await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken || ''
        },
        credentials: 'include',
        body: JSON.stringify(content),
      })

      // 2. Trigger atomic publish
      const res = await fetch('/api/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken || ''
        },
        credentials: 'include',
        body: JSON.stringify({ note })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setShowPublishModal(false)
        setSaveStatus(`Published Live (v${data.version})!`)
        alert(`Success! Version ${data.version} is now live on the public website and recorded in D1 revision history.`)
        setTimeout(() => setSaveStatus(''), 5000)
      } else {
        alert(`Publish failed: ${data.error || 'Unknown error'}`)
      }
    } catch (err) {
      alert(`Publish error: ${err.message}`)
    } finally {
      setIsPublishing(false)
    }
  }

  // Restore Revision to Draft
  const handleRestoreSuccess = (restoredContent, restoredVersion) => {
    setContent(restoredContent)
    setSaveStatus(`Restored v${restoredVersion} into Draft!`)
    alert(`Version ${restoredVersion} restored into your working draft! You can preview it or click Publish Live to make it active on the public site.`)
  }

  // Quick Action: Add New Project
  const handleAddProject = () => {
    const newProject = {
      id: `project-${Date.now()}`,
      slug: `new-project-${Date.now()}`,
      title: 'New Venture / Project',
      projectType: 'VENTURE · IN PROGRESS',
      category: 'Product / System',
      role: 'Builder / Founder',
      year: '2026',
      status: 'In Development',
      statusType: 'building',
      featured: false,
      tagline: 'One-line summary of the problem and mechanism.',
      summary: 'Detailed summary of the initiative, operational mechanics, and goals.',
      evidence: [
        { label: 'Metric', value: '1.0', sub: 'initial milestone' }
      ],
      problem: '',
      solution: '',
      responsibilities: '',
      execution: '',
      outcomes: '',
      learning: ''
    }
    setContent({
      ...content,
      projects: [newProject, ...(content.projects || [])]
    })
    setActiveTab('work')
  }

  // Quick Action: Add New Tool
  const handleAddTool = () => {
    const newTool = {
      id: `tool-${Date.now()}`,
      name: 'New Tool',
      category: 'AI & Research',
      desc: 'Purpose and operational application'
    }
    setContent({
      ...content,
      tools: [...(content.tools || []), newTool]
    })
    setActiveTab('tools')
  }

  // Quick Action: Add New Experience Node
  const handleAddExperience = () => {
    const newNode = {
      id: `exp-${Date.now()}`,
      company: 'Organization Name',
      role: 'Role Title',
      period: '2026 – Present',
      location: 'Remote / India',
      badge: 'Active Role',
      summary: 'Summary of scope, responsibilities, and initiatives led.',
      takeaway: 'Key operating insight or first-principles takeaway.'
    }
    setContent({
      ...content,
      experience: {
        ...content.experience,
        nodes: [newNode, ...(content.experience?.nodes || [])]
      }
    })
    setActiveTab('experience')
  }

  // Quick Action: Add New Certification
  const handleAddCertification = () => {
    const newCert = {
      id: `cert-${Date.now()}`,
      name: 'New Professional Certificate',
      issuer: 'Issuing Organization',
      date: '2026',
      credentialId: '',
      credentialUrl: '',
      certificateFile: '',
      status: 'Verified',
      description: 'Scope and curriculum covered by this certification.',
      skills: ['Competency 1', 'Competency 2']
    }
    setContent({
      ...content,
      certifications: [...(content.certifications || []), newCert]
    })
    setActiveTab('certifications')
  }

  const handleDeleteCertification = (index) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      const updated = [...(content.certifications || [])]
      updated.splice(index, 1)
      setContent({ ...content, certifications: updated })
    }
  }

  const handleMoveCertification = (index, direction) => {
    const updated = [...(content.certifications || [])]
    const targetIndex = index + direction
    if (targetIndex < 0 || targetIndex >= updated.length) return
    const temp = updated[index]
    updated[index] = updated[targetIndex]
    updated[targetIndex] = temp
    setContent({ ...content, certifications: updated })
  }

  // ==========================================
  // VIEW A: UNTOUCHABLE SECURE LOGIN SCREEN
  // ==========================================
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center p-4 selection:bg-blue-600/15 selection:text-[#111318]">
        <Head>
          <title>Administrator Security Guard — Vivek Dhoundiyal</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        
        <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-elevated space-y-6 text-[#111318]">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-[#2563EB]">
              <span className="w-3 h-3 rounded-full bg-[#2563EB] animate-pulse" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#111318] pt-2">
              Administrator Security Guard
            </h1>
            <p className="text-xs text-[#555B66]">
              Authorized Operator: <span className="font-mono text-[#2563EB] font-semibold">{ADMIN_EMAIL}</span>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#737984] block mb-1 font-semibold">
                Authorized Identity (Email)
              </label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                placeholder="administrator@domain.com"
                className="w-full px-4 py-2.5 rounded-xl text-xs font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#111318] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#737984] block mb-1 font-semibold">
                Administrator Passphrase
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-2.5 rounded-xl text-xs font-mono bg-[#FAFAF8] border border-[#E5E7EB] text-[#111318] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 text-center font-mono">
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#111318] text-white hover:bg-[#2563EB] transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <span>{authLoading ? 'Verifying Identity...' : 'Authenticate & Unlock'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="pt-2 text-center border-t border-slate-100">
            <Link href="/" className="text-xs font-mono text-[#737984] hover:text-[#111318] transition-colors">
              ← Return to public website
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ==========================================
  // VIEW B: AUTHORIZED CMS DASHBOARD
  // ==========================================
  const profile = content.profile || {}
  const hero = content.hero || {}
  const contact = content.contact || {}
  const social = content.social || {}
  const seo = content.seo || {}
  const projects = content.projects || []
  const experience = content.experience || {}
  const thinking = content.thinking || []
  const currentlyBuilding = content.currentlyBuilding || []
  const tools = content.tools || []
  const resumes = content.resumes || []

  const capabilities = content.capabilities || []
  const corporateExperience = content.corporateExperience || []
  const certifications = content.certifications || []
  const education = content.education || {}

  const navTabs = [
    { id: 'sections', label: 'Section Architecture (Reorder)' },
    { id: 'dashboard', label: 'Dashboard Overview' },
    { id: 'homepage', label: 'Hero & Master Statement' },
    { id: 'capabilities', label: `What I Do (${capabilities.length})` },
    { id: 'corporate', label: `Corporate Track Record (${corporateExperience.length})` },
    { id: 'work', label: `Entrepreneurial Experience (${projects.length})` },
    { id: 'experience', label: `Executive Timeline (${(experience.nodes || []).length})` },
    { id: 'certifications', label: 'Education & Certifications' },
    { id: 'where-i-am-building', label: 'Where I Am Building' },
    { id: 'thinking', label: `Thinking & Writing (${thinking.length})` },
    { id: 'tools', label: `Tools Stack (${tools.length})` },
    { id: 'profile', label: 'Profile & Identity' },
    { id: 'resumes', label: `Resumes (${resumes.length})` },
    { id: 'contact', label: 'About & Contact Channels' },
    { id: 'seo', label: 'SEO & Metadata' },
    { id: 'revisions', label: 'Revision History & Rollback' }
  ]

  return (
    <div className="min-h-screen bg-ink-950 text-slate-200 selection:bg-signal-blue selection:text-white pb-24">
      <Head>
        <title>Content Management Console — Vivek Dhoundiyal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Top Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-3xl bg-ink-900 border border-white/10 shadow-elevated">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-signal-green animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black tracking-tight text-white">Content Management System</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-signal-blue/20 text-signal-cyan border border-signal-blue/30 font-bold tracking-wider">
                  CLOUDFLARE D1 · FREE TIER
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Operator: <span className="text-white font-semibold">{currentUser}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {saveStatus && (
              <span className="text-xs font-mono text-signal-cyan font-bold px-2 py-1 rounded-lg bg-signal-blue/10 border border-signal-blue/20 animate-pulse">
                {saveStatus}
              </span>
            )}

            {lastSavedDraftTime && !saveStatus && (
              <span className="text-[11px] font-mono text-slate-400">
                Draft: {lastSavedDraftTime}
              </span>
            )}

            {/* 1. Save Draft Button */}
            <button
              onClick={handleSaveDraft}
              disabled={isSaving}
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-sm flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
            >
              <span>{isSaving ? 'Saving...' : 'Save Draft'}</span>
            </button>

            {/* 2. Live Preview Button */}
            <button
              onClick={() => setShowPreviewModal(true)}
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Preview Draft 👁</span>
            </button>

            {/* 3. Publish to Live Button */}
            <button
              onClick={() => setShowPublishModal(true)}
              disabled={isPublishing}
              className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-black transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
            >
              <CheckIcon className="w-3.5 h-3.5" />
              <span>Publish Live</span>
            </button>

            {/* 4. Revision History Button */}
            <button
              onClick={() => setShowRevisionModal(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-mono border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="View revision history & rollback"
            >
              <span>History ↺</span>
            </button>

            {/* 5. View Public Site */}
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-xl text-xs font-mono border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1.5"
            >
              <span>Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* 6. Logout */}
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl text-xs font-mono text-red-400 hover:text-white hover:bg-red-500/20 border border-red-500/30 transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </header>

        {gitStatusMessage && (
          <div className="p-3.5 rounded-2xl bg-signal-blue/10 border border-signal-blue/20 text-xs font-mono text-signal-cyan flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal-cyan" />
            <span>{gitStatusMessage}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-white/10">
          {navTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-signal-blue text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================================================== */}
        {/* TAB: SECTION ARCHITECTURE & REORDERING               */}
        {/* ==================================================== */}
        {activeTab === 'sections' && (
          <SectionManager
            sections={content.sections || [
              { id: 'hero', type: 'hero', name: '01 · Hero Section', enabled: true, order: 0 },
              { id: 'what-i-do', type: 'capabilities', name: '02 · What I Do', enabled: true, order: 1 },
              { id: 'work', type: 'entrepreneurial', name: '03 · Entrepreneurial Experience', enabled: true, order: 2 },
              { id: 'corporate', type: 'corporate', name: '04 · Corporate Experience', enabled: true, order: 3 },
              { id: 'experience', type: 'timeline', name: '05 · Professional Experience Summary', enabled: true, order: 4 },
              { id: 'education-certifications', type: 'education-certifications', name: '06 · Education & Certifications', enabled: true, order: 5 },
              { id: 'building', type: 'building', name: '07 · Where I Am Building', enabled: true, order: 6 },
              { id: 'thinking', type: 'thinking', name: '08 · Thinking & Writing', enabled: true, order: 7 },
              { id: 'tools', type: 'tools', name: '09 · Tools & Capabilities', enabled: true, order: 8 },
              { id: 'about-contact', type: 'about-contact', name: '10 · About & Direct Contact', enabled: true, order: 9 }
            ]}
            onUpdate={(updatedSections) => setContent({ ...content, sections: updatedSections })}
            onEditSection={(type) => {
              if (type === 'hero') setActiveTab('homepage')
              else if (type === 'capabilities') setActiveTab('capabilities')
              else if (type === 'entrepreneurial') setActiveTab('work')
              else if (type === 'corporate') setActiveTab('corporate')
              else if (type === 'timeline') setActiveTab('experience')
              else if (type === 'education-certifications') setActiveTab('certifications')
              else if (type === 'building') setActiveTab('where-i-am-building')
              else if (type === 'thinking') setActiveTab('thinking')
              else if (type === 'tools') setActiveTab('tools')
              else if (type === 'about-contact') setActiveTab('contact')
            }}
          />
        )}

        {/* ==================================================== */}
        {/* TAB: DASHBOARD OVERVIEW (Section 22)                 */}
        {/* ==================================================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn">
            {/* KPI Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-6 rounded-3xl bg-ink-900 border border-white/10 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">Published Projects</span>
                <div className="text-3xl font-black text-white">{projects.length}</div>
                <div className="text-[11px] text-signal-cyan font-mono">SettleMyCar, Dark Kitchen, etc.</div>
              </div>
              <div className="p-6 rounded-3xl bg-ink-900 border border-white/10 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">Active R&D Lab</span>
                <div className="text-3xl font-black text-white">{currentlyBuilding.length}</div>
                <div className="text-[11px] text-amber-300 font-mono">Live In Development</div>
              </div>
              <div className="p-6 rounded-3xl bg-ink-900 border border-white/10 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">Tools in Stack</span>
                <div className="text-3xl font-black text-white">{tools.length}</div>
                <div className="text-[11px] text-slate-400 font-mono">With Real Brand SVGs</div>
              </div>
              <div className="p-6 rounded-3xl bg-ink-900 border border-white/10 space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">Verified Resumes</span>
                <div className="text-3xl font-black text-white">{resumes.length}</div>
                <div className="text-[11px] text-signal-green font-mono">B2B Sales & Operations</div>
              </div>
            </div>

            {/* Quick Actions Strip (Mandatory Section 22) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-4">
              <div className="text-sm font-bold text-white font-mono uppercase">
                Quick Actions
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAddProject}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all flex items-center gap-1.5"
                >
                  <span>+ New Project</span>
                </button>
                <button
                  onClick={handleAddTool}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all flex items-center gap-1.5"
                >
                  <span>+ Add Tool</span>
                </button>
                <button
                  onClick={handleAddExperience}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all flex items-center gap-1.5"
                >
                  <span>+ Add Experience</span>
                </button>
                <button
                  onClick={handleAddCertification}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all flex items-center gap-1.5"
                >
                  <span>+ Add Certification</span>
                </button>
                <button
                  onClick={() => setActiveTab('resumes')}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all flex items-center gap-1.5"
                >
                  <span>Manage Resumes</span>
                </button>
              </div>
            </div>

            {/* Quick Project Summary */}
            <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white font-mono uppercase">Recent Projects</span>
                <button onClick={() => setActiveTab('work')} className="text-xs font-mono text-signal-cyan hover:underline">
                  Manage all ({projects.length}) →
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {projects.slice(0, 3).map((p) => (
                  <div key={p.id} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono text-signal-cyan uppercase font-bold">{p.projectType}</span>
                    <div className="text-sm font-bold text-white">{p.title}</div>
                    <div className="text-xs text-slate-400 truncate">{p.tagline}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: PROFILE & IDENTITY                             */}
        {/* ==================================================== */}
        {activeTab === 'profile' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-6 animate-fadeIn">
            <h2 className="text-lg font-black text-white">Profile & Identity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={profile.name || ''}
                  onChange={e => setContent({ ...content, profile: { ...profile, name: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Role / Positioning</label>
                <input
                  type="text"
                  value={profile.role || ''}
                  onChange={e => setContent({ ...content, profile: { ...profile, role: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Canonical Portrait Path</label>
                <input
                  type="text"
                  value={profile.portraitImage || ''}
                  onChange={e => setContent({ ...content, profile: { ...profile, portraitImage: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Location</label>
                <input
                  type="text"
                  value={profile.location || ''}
                  onChange={e => setContent({ ...content, profile: { ...profile, location: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-mono text-slate-400 block mb-1">Availability Statement</label>
                <input
                  type="text"
                  value={profile.availability || ''}
                  onChange={e => setContent({ ...content, profile: { ...profile, availability: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-mono text-slate-400 block mb-1">Education Background</label>
                <input
                  type="text"
                  value={profile.education || ''}
                  onChange={e => setContent({ ...content, profile: { ...profile, education: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: HOMEPAGE & HERO                                */}
        {/* ==================================================== */}
        {activeTab === 'homepage' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-6 animate-fadeIn">
            <h2 className="text-lg font-black text-white">Hero & Master Statements</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Hero Eyebrow Label</label>
                <input
                  type="text"
                  value={hero.eyebrow || profile.heroEyebrow || ''}
                  onChange={e => setContent({
                    ...content,
                    hero: { ...hero, eyebrow: e.target.value },
                    profile: { ...profile, heroEyebrow: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Dominant Headline (use \n for line break)</label>
                <textarea
                  rows={2}
                  value={hero.title || profile.heroHeadline || ''}
                  onChange={e => setContent({
                    ...content,
                    hero: { ...hero, title: e.target.value },
                    profile: { ...profile, heroHeadline: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Supporting Narrative Statement</label>
                <textarea
                  rows={4}
                  value={hero.description || profile.heroDescription || ''}
                  onChange={e => setContent({
                    ...content,
                    hero: { ...hero, description: e.target.value },
                    profile: { ...profile, heroDescription: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: WORK & PROJECTS (Structured Fields)             */}
        {/* ==================================================== */}
        {activeTab === 'work' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-white">Selected Projects & Case Studies</h2>
              <button
                onClick={handleAddProject}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-signal-blue text-white hover:bg-signal-blueDark transition-colors"
              >
                + Add Project
              </button>
            </div>

            {projects.map((proj, pIdx) => (
              <div key={proj.id || pIdx} className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-signal-cyan font-bold uppercase">{proj.title}</span>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    {/* Reorder Buttons */}
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
                      <button
                        type="button"
                        disabled={pIdx === 0}
                        onClick={() => {
                          const arr = [...projects]
                          const temp = arr[pIdx]
                          arr[pIdx] = arr[pIdx - 1]
                          arr[pIdx - 1] = temp
                          setContent({ ...content, projects: arr })
                        }}
                        className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                        title="Move project up"
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        disabled={pIdx === projects.length - 1}
                        onClick={() => {
                          const arr = [...projects]
                          const temp = arr[pIdx]
                          arr[pIdx] = arr[pIdx + 1]
                          arr[pIdx + 1] = temp
                          setContent({ ...content, projects: arr })
                        }}
                        className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                        title="Move project down"
                      >
                        ↓
                      </button>
                    </div>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={Boolean(proj.featured)}
                        onChange={e => {
                          const newProjs = [...projects]
                          newProjs[pIdx].featured = e.target.checked
                          setContent({ ...content, projects: newProjs })
                        }}
                      />
                      <span>Featured</span>
                    </label>
                    <button
                      onClick={() => {
                        const newProjs = projects.filter((_, idx) => idx !== pIdx)
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Title</label>
                    <input
                      type="text"
                      value={proj.title || ''}
                      onChange={e => {
                        const newProjs = [...projects]
                        newProjs[pIdx].title = e.target.value
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Slug</label>
                    <input
                      type="text"
                      value={proj.slug || ''}
                      onChange={e => {
                        const newProjs = [...projects]
                        newProjs[pIdx].slug = e.target.value
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Project Type</label>
                    <input
                      type="text"
                      value={proj.projectType || ''}
                      onChange={e => {
                        const newProjs = [...projects]
                        newProjs[pIdx].projectType = e.target.value
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Role</label>
                    <input
                      type="text"
                      value={proj.role || ''}
                      onChange={e => {
                        const newProjs = [...projects]
                        newProjs[pIdx].role = e.target.value
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Status</label>
                    <input
                      type="text"
                      value={proj.status || ''}
                      onChange={e => {
                        const newProjs = [...projects]
                        newProjs[pIdx].status = e.target.value
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Tenure / Year</label>
                    <input
                      type="text"
                      value={proj.year || ''}
                      onChange={e => {
                        const newProjs = [...projects]
                        newProjs[pIdx].year = e.target.value
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-xs font-mono text-slate-400 block mb-1">Tagline</label>
                    <input
                      type="text"
                      value={proj.tagline || ''}
                      onChange={e => {
                        const newProjs = [...projects]
                        newProjs[pIdx].tagline = e.target.value
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-xs font-mono text-slate-400 block mb-1">Executive Summary</label>
                    <textarea
                      rows={2}
                      value={proj.summary || ''}
                      onChange={e => {
                        const newProjs = [...projects]
                        newProjs[pIdx].summary = e.target.value
                        setContent({ ...content, projects: newProjs })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: RESUMES (Single Verified Sales Resume)         */}
        {/* ==================================================== */}
        {activeTab === 'resumes' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black text-white">Verified Positioning Document — B2B Sales Resume</h2>
                <p className="text-xs text-slate-400 font-mono">Single official public resume record.</p>
              </div>
            </div>
            {resumes.map((r, rIdx) => (
              <div key={r.id || rIdx} className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-4">
                <div className="text-xs font-mono text-signal-cyan font-bold uppercase">{r.title}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Title</label>
                    <input
                      type="text"
                      value={r.title || ''}
                      onChange={e => {
                        const newR = [...resumes]
                        newR[rIdx].title = e.target.value
                        setContent({ ...content, resumes: newR })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">PDF File URL</label>
                    <input
                      type="text"
                      value={r.url || ''}
                      onChange={e => {
                        const newR = [...resumes]
                        newR[rIdx].url = e.target.value
                        setContent({ ...content, resumes: newR })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-mono text-slate-400 block mb-1">Subtitle / Subhead</label>
                    <input
                      type="text"
                      value={r.subtitle || ''}
                      onChange={e => {
                        const newR = [...resumes]
                        newR[rIdx].subtitle = e.target.value
                        setContent({ ...content, resumes: newR })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-mono text-slate-400 block mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={r.description || ''}
                      onChange={e => {
                        const newR = [...resumes]
                        newR[rIdx].description = e.target.value
                        setContent({ ...content, resumes: newR })
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: CONTACT & LET'S TALK MODAL                     */}
        {/* ==================================================== */}
        {activeTab === 'contact' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-6 animate-fadeIn">
            <h2 className="text-lg font-black text-white">Contact & Direct Channels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  value={contact.email || ''}
                  onChange={e => setContent({
                    ...content,
                    contact: { ...contact, email: e.target.value },
                    profile: { ...profile, email: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Phone / Call Number</label>
                <input
                  type="text"
                  value={contact.phone || ''}
                  onChange={e => setContent({
                    ...content,
                    contact: { ...contact, phone: e.target.value, phoneDisplay: e.target.value },
                    profile: { ...profile, phone: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">WhatsApp Number</label>
                <input
                  type="text"
                  value={contact.whatsappNumber || ''}
                  onChange={e => setContent({
                    ...content,
                    contact: { ...contact, whatsappNumber: e.target.value },
                    profile: { ...profile, whatsapp: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">LinkedIn URL</label>
                <input
                  type="text"
                  value={social.linkedin || profile.linkedin || ''}
                  onChange={e => setContent({
                    ...content,
                    social: { ...social, linkedin: e.target.value },
                    profile: { ...profile, linkedin: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: TOOLS & TECH STACK                             */}
        {/* ==================================================== */}
        {activeTab === 'tools' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-white">Active Technology Stack ({tools.length} Tools)</h2>
              <button
                onClick={handleAddTool}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-signal-blue text-white hover:bg-signal-blueDark transition-colors"
              >
                + Add Tool
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tools.map((t, tIdx) => (
                <div key={t.id || tIdx} className="p-4 rounded-2xl bg-ink-900 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-white">{t.name}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-signal-cyan">{t.category}</span>
                      <div className="flex items-center bg-white/5 rounded p-0.5 border border-white/10">
                        <button
                          type="button"
                          disabled={tIdx === 0}
                          onClick={() => {
                            const newT = [...tools]
                            const temp = newT[tIdx]
                            newT[tIdx] = newT[tIdx - 1]
                            newT[tIdx - 1] = temp
                            setContent({ ...content, tools: newT })
                          }}
                          className="px-1.5 py-0.5 text-[10px] text-slate-300 hover:text-white disabled:opacity-30"
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          disabled={tIdx === tools.length - 1}
                          onClick={() => {
                            const newT = [...tools]
                            const temp = newT[tIdx]
                            newT[tIdx] = newT[tIdx + 1]
                            newT[tIdx + 1] = temp
                            setContent({ ...content, tools: newT })
                          }}
                          className="px-1.5 py-0.5 text-[10px] text-slate-300 hover:text-white disabled:opacity-30"
                          title="Move down"
                        >
                          ↓
                        </button>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={t.desc || ''}
                    onChange={e => {
                      const newT = [...tools]
                      newT[tIdx].desc = e.target.value
                      setContent({ ...content, tools: newT })
                    }}
                    className="w-full px-2.5 py-1 text-xs rounded-lg bg-black/40 border border-white/15 text-slate-200"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: CAPABILITIES                                   */}
        {/* ==================================================== */}
        {activeTab === 'capabilities' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-lg font-black text-white">Commercial Capabilities ({capabilities.length})</h2>
            <div className="space-y-4">
              {capabilities.map((cap, cIdx) => (
                <div key={cap.id || cIdx} className="p-6 rounded-2xl bg-ink-900 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-base">{cap.title}</span>
                      <span className="text-xs font-mono text-signal-cyan">({cap.tag})</span>
                    </div>

                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
                      <button
                        type="button"
                        disabled={cIdx === 0}
                        onClick={() => {
                          const newCaps = [...capabilities]
                          const temp = newCaps[cIdx]
                          newCaps[cIdx] = newCaps[cIdx - 1]
                          newCaps[cIdx - 1] = temp
                          setContent({ ...content, capabilities: newCaps })
                        }}
                        className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                        title="Move up"
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        disabled={cIdx === capabilities.length - 1}
                        onClick={() => {
                          const newCaps = [...capabilities]
                          const temp = newCaps[cIdx]
                          newCaps[cIdx] = newCaps[cIdx + 1]
                          newCaps[cIdx + 1] = temp
                          setContent({ ...content, capabilities: newCaps })
                        }}
                        className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                        title="Move down"
                      >
                        ↓
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Headline</label>
                    <input
                      type="text"
                      value={cap.headline || ''}
                      onChange={e => {
                        const newCaps = [...capabilities]
                        newCaps[cIdx].headline = e.target.value
                        setContent({ ...content, capabilities: newCaps })
                      }}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Summary</label>
                    <textarea
                      rows={2}
                      value={cap.summary || ''}
                      onChange={e => {
                        const newCaps = [...capabilities]
                        newCaps[cIdx].summary = e.target.value
                        setContent({ ...content, capabilities: newCaps })
                      }}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: CORPORATE TRACK RECORD                         */}
        {/* ==================================================== */}
        {activeTab === 'corporate' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black text-white">Corporate Experience Track Record ({corporateExperience.length})</h2>
                <p className="text-xs text-slate-400 font-mono">CollegeDunia & KreedOn commercial sales leadership.</p>
              </div>
            </div>
            <div className="space-y-4">
              {corporateExperience.map((corp, cIdx) => (
                <div key={corp.id || cIdx} className="p-6 rounded-2xl bg-ink-900 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-base">{corp.company}</span>
                      <span className="text-xs font-mono text-signal-cyan">({corp.role})</span>
                    </div>

                    {/* Reorder Buttons */}
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
                      <button
                        type="button"
                        disabled={cIdx === 0}
                        onClick={() => {
                          const newCorps = [...corporateExperience]
                          const temp = newCorps[cIdx]
                          newCorps[cIdx] = newCorps[cIdx - 1]
                          newCorps[cIdx - 1] = temp
                          setContent({ ...content, corporateExperience: newCorps })
                        }}
                        className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                        title="Move up"
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        disabled={cIdx === corporateExperience.length - 1}
                        onClick={() => {
                          const newCorps = [...corporateExperience]
                          const temp = newCorps[cIdx]
                          newCorps[cIdx] = newCorps[cIdx + 1]
                          newCorps[cIdx + 1] = temp
                          setContent({ ...content, corporateExperience: newCorps })
                        }}
                        className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                        title="Move down"
                      >
                        ↓
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Tagline</label>
                    <input
                      type="text"
                      value={corp.tagline || ''}
                      onChange={e => {
                        const newCorps = [...corporateExperience]
                        newCorps[cIdx].tagline = e.target.value
                        setContent({ ...content, corporateExperience: newCorps })
                      }}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Executive Summary</label>
                    <textarea
                      rows={2}
                      value={corp.summary || ''}
                      onChange={e => {
                        const newCorps = [...corporateExperience]
                        newCorps[cIdx].summary = e.target.value
                        setContent({ ...content, corporateExperience: newCorps })
                      }}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: PROFESSIONAL EXPERIENCE SUMMARY (TIMELINE)     */}
        {/* ==================================================== */}
        {activeTab === 'experience' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black text-white">Professional Experience Summary Timeline ({(experience.nodes || []).length})</h2>
                <p className="text-xs text-slate-400 font-mono">Executive career overview nodes. (CareerOS is excluded from employment).</p>
              </div>
              <button
                type="button"
                onClick={handleAddExperience}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-signal-blue text-white hover:bg-blue-600 transition-colors shadow-sm"
              >
                + Add Experience Node
              </button>
            </div>

            <div className="space-y-4">
              {(experience.nodes || []).map((node, nIdx) => (
                <div key={node.id || nIdx} className="p-6 rounded-2xl bg-ink-900 border border-white/10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-signal-cyan" />
                      <span className="text-xs font-mono font-bold text-white uppercase">{node.company || 'New Entry'}</span>
                      <span className="text-[11px] font-mono text-slate-400">• {node.role}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
                        <button
                          type="button"
                          disabled={nIdx === 0}
                          onClick={() => {
                            const newNodes = [...(experience.nodes || [])]
                            const temp = newNodes[nIdx]
                            newNodes[nIdx] = newNodes[nIdx - 1]
                            newNodes[nIdx - 1] = temp
                            setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                          }}
                          className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          disabled={nIdx === (experience.nodes || []).length - 1}
                          onClick={() => {
                            const newNodes = [...(experience.nodes || [])]
                            const temp = newNodes[nIdx]
                            newNodes[nIdx] = newNodes[nIdx + 1]
                            newNodes[nIdx + 1] = temp
                            setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                          }}
                          className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                          title="Move down"
                        >
                          ↓
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Remove "${node.company}" from timeline?`)) {
                            const newNodes = (experience.nodes || []).filter((_, idx) => idx !== nIdx)
                            setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                          }
                        }}
                        className="text-xs font-mono text-red-400 hover:underline px-2 py-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Company Name</label>
                      <input
                        type="text"
                        value={node.company || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].company = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Role Title</label>
                      <input
                        type="text"
                        value={node.role || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].role = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Period / Dates</label>
                      <input
                        type="text"
                        value={node.period || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].period = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Badge (Category)</label>
                      <input
                        type="text"
                        value={node.badge || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].badge = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Location</label>
                      <input
                        type="text"
                        value={node.location || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].location = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Deep Dive Link (e.g. /experience/collegedunia)</label>
                      <input
                        type="text"
                        value={node.link || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].link = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label className="text-xs font-mono text-slate-400 block mb-1">Scope of Responsibility</label>
                      <input
                        type="text"
                        value={node.scope || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].scope = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label className="text-xs font-mono text-slate-400 block mb-1">Executive Summary</label>
                      <textarea
                        rows={2}
                        value={node.summary || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].summary = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label className="text-xs font-mono text-slate-400 block mb-1">Operating Takeaway / Principle</label>
                      <input
                        type="text"
                        value={node.takeaway || ''}
                        onChange={e => {
                          const newNodes = [...(experience.nodes || [])]
                          newNodes[nIdx].takeaway = e.target.value
                          setContent({ ...content, experience: { ...experience, nodes: newNodes } })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white italic"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: THINKING & WRITING                             */}
        {/* ==================================================== */}
        {activeTab === 'thinking' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black text-white">Thinking & Writing ({thinking.length})</h2>
                <p className="text-xs text-slate-400 font-mono">Perspectives on operatorship, product loops, and systems.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const newPost = {
                    id: `thinking-${Date.now()}`,
                    slug: `essay-${Date.now().toString().slice(-4)}`,
                    title: 'New Editorial Essay',
                    category: 'Operating Philosophy',
                    date: '2026',
                    readTime: '4 min read',
                    summary: 'Summary of first-principles thinking and practical applications.',
                    status: 'Published'
                  }
                  setContent({ ...content, thinking: [newPost, ...(content.thinking || [])] })
                }}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-signal-blue text-white hover:bg-blue-600 transition-colors shadow-sm"
              >
                + Add Essay
              </button>
            </div>

            <div className="space-y-4">
              {thinking.map((post, postIdx) => (
                <div key={post.id || postIdx} className="p-6 rounded-2xl bg-ink-900 border border-white/10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-signal-cyan" />
                      <span className="text-xs font-mono font-bold text-white uppercase">{post.title}</span>
                      <span className="text-[11px] font-mono text-slate-400">• {post.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
                        <button
                          type="button"
                          disabled={postIdx === 0}
                          onClick={() => {
                            const newPosts = [...thinking]
                            const temp = newPosts[postIdx]
                            newPosts[postIdx] = newPosts[postIdx - 1]
                            newPosts[postIdx - 1] = temp
                            setContent({ ...content, thinking: newPosts })
                          }}
                          className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          disabled={postIdx === thinking.length - 1}
                          onClick={() => {
                            const newPosts = [...thinking]
                            const temp = newPosts[postIdx]
                            newPosts[postIdx] = newPosts[postIdx + 1]
                            newPosts[postIdx + 1] = temp
                            setContent({ ...content, thinking: newPosts })
                          }}
                          className="px-2 py-0.5 text-xs text-slate-300 hover:text-white disabled:opacity-30"
                          title="Move down"
                        >
                          ↓
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Remove "${post.title}"?`)) {
                            const newPosts = thinking.filter((_, idx) => idx !== postIdx)
                            setContent({ ...content, thinking: newPosts })
                          }
                        }}
                        className="text-xs font-mono text-red-400 hover:underline px-2 py-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="text-xs font-mono text-slate-400 block mb-1">Title</label>
                      <input
                        type="text"
                        value={post.title || ''}
                        onChange={e => {
                          const newPosts = [...thinking]
                          newPosts[postIdx].title = e.target.value
                          setContent({ ...content, thinking: newPosts })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Slug (URL path)</label>
                      <input
                        type="text"
                        value={post.slug || ''}
                        onChange={e => {
                          const newPosts = [...thinking]
                          newPosts[postIdx].slug = e.target.value
                          setContent({ ...content, thinking: newPosts })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Category</label>
                      <input
                        type="text"
                        value={post.category || ''}
                        onChange={e => {
                          const newPosts = [...thinking]
                          newPosts[postIdx].category = e.target.value
                          setContent({ ...content, thinking: newPosts })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Date</label>
                      <input
                        type="text"
                        value={post.date || ''}
                        onChange={e => {
                          const newPosts = [...thinking]
                          newPosts[postIdx].date = e.target.value
                          setContent({ ...content, thinking: newPosts })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Read Time</label>
                      <input
                        type="text"
                        value={post.readTime || ''}
                        onChange={e => {
                          const newPosts = [...thinking]
                          newPosts[postIdx].readTime = e.target.value
                          setContent({ ...content, thinking: newPosts })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label className="text-xs font-mono text-slate-400 block mb-1">Summary / Abstract</label>
                      <textarea
                        rows={2}
                        value={post.summary || ''}
                        onChange={e => {
                          const newPosts = [...thinking]
                          newPosts[postIdx].summary = e.target.value
                          setContent({ ...content, thinking: newPosts })
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: CERTIFICATIONS & EDUCATION                     */}
        {/* ==================================================== */}
        {activeTab === 'certifications' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">Education & Certifications</h2>
                <p className="text-xs text-slate-400 font-mono">
                  Academic foundation record and continuous professional credentials.
                </p>
              </div>
              <button
                type="button"
                onClick={handleAddCertification}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-signal-blue text-white hover:bg-blue-600 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>+ Add Certification</span>
              </button>
            </div>

            {/* Subsection 01: Academic Education */}
            <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-signal-cyan uppercase font-bold tracking-wider">
                  01 — Academic Grounding (Education Record Only)
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Strictly Non-Work Experience
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Institution</label>
                  <input
                    type="text"
                    value={education.institution || ''}
                    onChange={e => setContent({ ...content, education: { ...education, institution: e.target.value } })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Degree / Qualification</label>
                  <input
                    type="text"
                    value={education.degree || ''}
                    onChange={e => setContent({ ...content, education: { ...education, degree: e.target.value } })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Tenure / Period</label>
                  <input
                    type="text"
                    value={education.period || ''}
                    onChange={e => setContent({ ...content, education: { ...education, period: e.target.value } })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Location</label>
                  <input
                    type="text"
                    value={education.location || ''}
                    onChange={e => setContent({ ...content, education: { ...education, location: e.target.value } })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-mono text-slate-400 block mb-1">Academic Summary</label>
                  <textarea
                    rows={2}
                    value={education.summary || ''}
                    onChange={e => setContent({ ...content, education: { ...education, summary: e.target.value } })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-mono text-slate-400 block mb-1">Core Takeaway / First-Principles Insight</label>
                  <input
                    type="text"
                    value={education.takeaway || ''}
                    onChange={e => setContent({ ...content, education: { ...education, takeaway: e.target.value } })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                  />
                </div>
              </div>
            </div>

            {/* Subsection 02: Professional Certifications */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono text-signal-cyan uppercase font-bold tracking-wider">
                  02 — Professional Certifications ({certifications.length})
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Expandable & Clickable Credential System
                </span>
              </div>

              {certifications.length === 0 ? (
                <div className="p-8 rounded-2xl bg-ink-900 border border-dashed border-white/15 text-center space-y-3">
                  <p className="text-xs font-mono text-slate-400">
                    No certifications registered yet. Click below to add one.
                  </p>
                  <button
                    type="button"
                    onClick={handleAddCertification}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>+ Add First Certification</span>
                  </button>
                </div>
              ) : (
                certifications.map((cert, certIdx) => (
                  <div key={cert.id || certIdx} className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-5">
                    {/* Item Toolbar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-signal-cyan" />
                        <span className="text-xs font-mono font-bold text-white uppercase">
                          Certification #{certIdx + 1}
                        </span>
                        {cert.status && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {cert.status}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={certIdx === 0}
                          onClick={() => handleMoveCertification(certIdx, -1)}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 border border-white/10"
                          title="Move Up"
                        >
                          ↑ Up
                        </button>
                        <button
                          type="button"
                          disabled={certIdx === certifications.length - 1}
                          onClick={() => handleMoveCertification(certIdx, 1)}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 border border-white/10"
                          title="Move Down"
                        >
                          ↓ Down
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteCertification(certIdx)}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30"
                          title="Delete Certification"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Fields Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="text-xs font-mono text-slate-400 block mb-1">Certification Name *</label>
                        <input
                          type="text"
                          required
                          value={cert.name || ''}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].name = e.target.value
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                          placeholder="e.g. Google Project Management Professional Certificate"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Issuing Organization *</label>
                        <input
                          type="text"
                          required
                          value={cert.issuer || ''}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].issuer = e.target.value
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                          placeholder="e.g. Google / Coursera"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Completion Date</label>
                        <input
                          type="text"
                          value={cert.date || ''}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].date = e.target.value
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                          placeholder="e.g. 2024"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Credential URL (Verification Link)</label>
                        <input
                          type="url"
                          value={cert.credentialUrl || ''}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].credentialUrl = e.target.value
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono focus:outline-none focus:border-signal-blue"
                          placeholder="https://coursera.org/share/..."
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Credential ID (Optional)</label>
                        <input
                          type="text"
                          value={cert.credentialId || ''}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].credentialId = e.target.value
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono focus:outline-none focus:border-signal-blue"
                          placeholder="e.g. Verified Professional Credential"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Certificate Image / PDF Path or URL</label>
                        <input
                          type="text"
                          value={cert.certificateFile || cert.certificateUrl || ''}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].certificateFile = e.target.value
                            newCerts[certIdx].certificateUrl = e.target.value
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono focus:outline-none focus:border-signal-blue"
                          placeholder="/certificates/google-pm.pdf or https://..."
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Status Badge Text</label>
                        <input
                          type="text"
                          value={cert.status || ''}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].status = e.target.value
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                          placeholder="e.g. Verified"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-mono text-slate-400 block mb-1">Short Description / Curriculum Scope</label>
                        <textarea
                          rows={2}
                          value={cert.description || ''}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].description = e.target.value
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                          placeholder="Summary of the curriculum, methods, and principles mastered..."
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-mono text-slate-400 block mb-1">
                          Skills & Topics Covered (comma-separated)
                        </label>
                        <input
                          type="text"
                          value={(cert.skills || []).join(', ')}
                          onChange={e => {
                            const newCerts = [...certifications]
                            newCerts[certIdx].skills = e.target.value
                              .split(',')
                              .map(s => s.trim())
                              .filter(Boolean)
                            setContent({ ...content, certifications: newCerts })
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-signal-blue"
                          placeholder="Agile & Scrum, Project Planning, Risk Management, Stakeholder Alignment"
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: SEO & METADATA                                 */}
        {/* ==================================================== */}
        {activeTab === 'seo' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-4 animate-fadeIn">
            <h2 className="text-lg font-black text-white">Search Engine Optimization & Metadata</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Site Title</label>
                <input
                  type="text"
                  value={seo.siteTitle || ''}
                  onChange={e => setContent({ ...content, seo: { ...seo, siteTitle: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Canonical URL</label>
                <input
                  type="text"
                  value={seo.canonicalUrl || ''}
                  onChange={e => setContent({ ...content, seo: { ...seo, canonicalUrl: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-mono text-slate-400 block mb-1">Site Meta Description</label>
                <textarea
                  rows={2}
                  value={seo.siteDescription || ''}
                  onChange={e => setContent({ ...content, seo: { ...seo, siteDescription: e.target.value } })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: WHERE I AM BUILDING (Digital Products, AI, Systems) */}
        {/* ==================================================== */}
        {activeTab === 'where-i-am-building' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h2 className="text-lg font-black text-white">Where I Am Building (Forward Focus & Systems)</h2>
                <p className="text-xs text-slate-400 mt-0.5">Manage introductory narrative and 3 differentiated technical cards.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Eyebrow Badge</label>
                <input
                  type="text"
                  value={content.whereIAmBuilding?.eyebrow || '07 · FORWARD FOCUS & SYSTEMS'}
                  onChange={e => setContent({
                    ...content,
                    whereIAmBuilding: { ...(content.whereIAmBuilding || {}), eyebrow: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Section Title</label>
                <input
                  type="text"
                  value={content.whereIAmBuilding?.title || 'Where I Am Building'}
                  onChange={e => setContent({
                    ...content,
                    whereIAmBuilding: { ...(content.whereIAmBuilding || {}), title: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Introductory Narrative</label>
                <textarea
                  rows={3}
                  value={content.whereIAmBuilding?.intro || 'I’m continuing to build at the intersection of business, technology, automation and digital products — applying my experience in revenue, operations and entrepreneurship to practical systems and products.'}
                  onChange={e => setContent({
                    ...content,
                    whereIAmBuilding: { ...(content.whereIAmBuilding || {}), intro: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white leading-relaxed"
                />
              </div>

              {/* 3 Differentiated Cards */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">3 Technical Focus Cards</h3>
                
                {[0, 1, 2].map((cardIdx) => {
                  const cardDefaults = [
                    { category: '01 — DIGITAL PRODUCTS', badge: 'Active Exploration', title: 'Practical Software & Digital Products' },
                    { category: '02 — AI & AUTOMATION', badge: 'Applied Workflows', title: 'AI-Assisted Workflows & Intelligent Systems' },
                    { category: '03 — BUSINESS SYSTEMS', badge: 'Operating Architecture', title: 'Repeatable Operating Processes & Systems' }
                  ][cardIdx]
                  const card = content.whereIAmBuilding?.cards?.[cardIdx] || cardDefaults

                  const updateCard = (field, val) => {
                    const currentCards = content.whereIAmBuilding?.cards ? [...content.whereIAmBuilding.cards] : [{}, {}, {}]
                    currentCards[cardIdx] = { ...(currentCards[cardIdx] || cardDefaults), [field]: val }
                    setContent({
                      ...content,
                      whereIAmBuilding: { ...(content.whereIAmBuilding || {}), cards: currentCards }
                    })
                  }

                  return (
                    <div key={cardIdx} className="p-5 rounded-2xl bg-ink-950 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-signal-cyan font-bold uppercase">{card.category}</span>
                        <input
                          type="text"
                          placeholder="Badge label"
                          value={card.badge || ''}
                          onChange={e => updateCard('badge', e.target.value)}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-black/40 border border-white/15 text-slate-300 font-mono"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-0.5">Card Title</label>
                        <input
                          type="text"
                          value={card.title || ''}
                          onChange={e => updateCard('title', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white font-semibold"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-0.5">Description</label>
                        <textarea
                          rows={2}
                          value={card.description || ''}
                          onChange={e => updateCard('description', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-0.5">Practical Application / Spotlight</label>
                        <textarea
                          rows={2}
                          value={card.spotlight || ''}
                          onChange={e => updateCard('spotlight', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: REVISION HISTORY & AUDIT LOG                    */}
        {/* ==================================================== */}
        {activeTab === 'revisions' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-ink-900 border border-white/10 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h2 className="text-lg font-black text-white">Revision History & Rollback Engine</h2>
                <p className="text-xs text-slate-400 font-mono">Immutable audit snapshots in Cloudflare D1</p>
              </div>
              <button
                onClick={() => setShowRevisionModal(true)}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-signal-blue hover:bg-blue-600 text-white cursor-pointer shadow-md"
              >
                Open Audit Console
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every time you click "Publish Live", a cryptographic snapshot of the full website state is captured with a sequential version number, timestamp, and changelog note in Cloudflare D1. You can restore any past version at any time with 1 click.
            </p>
          </div>
        )}

      </div>

      {/* Live Preview Modal */}
      <LivePreviewModal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
      />

      {/* Publish Modal */}
      <PublishModal
        isOpen={showPublishModal}
        onClose={() => setShowPublishModal(false)}
        onConfirm={handlePublish}
        isPublishing={isPublishing}
      />

      {/* Revision History Modal */}
      <RevisionHistoryModal
        isOpen={showRevisionModal}
        onClose={() => setShowRevisionModal(false)}
        onRestoreSuccess={handleRestoreSuccess}
      />
    </div>
  )
}

AdminDashboard.getLayout = function getLayout(page) {
  return page
}

export async function getStaticProps() {
  const content = getSiteContent()
  return {
    props: {
      isAuthenticated: false,
      initialContent: content,
      csrfToken: null,
      adminEmail: ADMIN_EMAIL,
    }
  }
}
