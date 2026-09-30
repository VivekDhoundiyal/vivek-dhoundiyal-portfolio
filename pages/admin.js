import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight } from '../components/Icons'

const CMSPanel = dynamic(() => import('../components/admin/CMSPanel'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-ink-950 flex items-center justify-center text-slate-400 font-mono text-xs">
      Loading CMS Console...
    </div>
  )
})

function LoginSecurityGuard({
  emailInput,
  setEmailInput,
  passwordInput,
  setPasswordInput,
  authError,
  authLoading,
  handleLogin
}) {
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
            Restricted Access · Authorized Personnel Only
          </p>
        </div>

        <form onSubmit={handleLogin} autoComplete="off" className="space-y-4">
          <div>
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#737984] block mb-1 font-semibold">
              Authorized Identity (Email)
            </label>
            <input
              type="email"
              required
              autoComplete="off"
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
              autoComplete="off"
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

export default function AdminDashboard() {
  // Explicit 3-state auth machine: 'UNAUTHENTICATED' | 'AUTHENTICATING' | 'AUTHENTICATED'
  // Initial state is ALWAYS strictly 'UNAUTHENTICATED'.
  const [authState, setAuthState] = useState('UNAUTHENTICATED')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [authError, setAuthError] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [csrfToken, setCsrfToken] = useState(null)
  const [cmsContent, setCmsContent] = useState(null)

  // Defend against browser back-forward cache (bfcache)
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted && authState !== 'AUTHENTICATED') {
        setAuthState('UNAUTHENTICATED')
        setCmsContent(null)
      }
    }
    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [authState])

  // Explicit manual login handler ONLY
  const handleLogin = async (e) => {
    e.preventDefault()
    setAuthError('')
    setAuthState('AUTHENTICATING')

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
        // Fetch fresh draft content strictly upon authenticated session
        const contentRes = await fetch('/api/content?mode=draft', { credentials: 'include' })
        if (!contentRes.ok) {
          throw new Error('Failed to load draft content')
        }
        const contentData = await contentRes.json()
        setCmsContent(contentData)
        if (data.csrfToken) setCsrfToken(data.csrfToken)
        setCurrentUser(data.user || emailInput)
        setAuthState('AUTHENTICATED')
      } else {
        setAuthState('UNAUTHENTICATED')
        setAuthError(data.error || 'Invalid email or administrator passphrase.')
      }
    } catch (err) {
      setAuthState('UNAUTHENTICATED')
      setAuthError(err.message || 'Network error connecting to security server')
    }
  }

  // Explicit logout handler
  const handleLogout = async () => {
    try {
      await fetch('/api/auth?action=logout', {
        method: 'POST',
        credentials: 'include'
      })
    } catch {
      // ignore
    }
    setAuthState('UNAUTHENTICATED')
    setCmsContent(null)
    setPasswordInput('')
  }

  // Component Boundary: If NOT strictly 'AUTHENTICATED', render ONLY LoginSecurityGuard
  if (authState !== 'AUTHENTICATED') {
    return (
      <LoginSecurityGuard
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        authError={authError}
        authLoading={authState === 'AUTHENTICATING'}
        handleLogin={handleLogin}
      />
    )
  }

  // When strictly AUTHENTICATED, mount CMSPanel
  return (
    <CMSPanel
      initialContent={cmsContent}
      currentUser={currentUser}
      csrfToken={csrfToken}
      onLogout={handleLogout}
    />
  )
}

AdminDashboard.getLayout = function getLayout(page) {
  return page
}

export async function getStaticProps() {
  return {
    props: {
      isAuthenticated: false,
      initialContent: null,
      csrfToken: null
    }
  }
}
