import React from 'react'

export function ChatGPTLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.475 4.475 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4702 4.4702 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.9772-2.8716a4.4992 4.4992 0 0 1 6.5332 4.8874zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

export function PerplexityLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2v20M4 8l16 8M20 8L4 16" />
      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

export function GeminiLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  )
}

export function ClaudeLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}

export function CursorLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3" fill="currentColor" fillOpacity="0.15" />
      <line x1="13" y1="13" x2="21" y2="21" />
    </svg>
  )
}

export function NotionLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.782c-.467-.373-1.213-.7-2.146-.653L2.873 2.155c-.466.046-.56.326-.373.513l1.959 1.54zm-1.4 3.733v13.626c0 .653.373.933.933.933h14.836c.653 0 .84-.373.84-.933V7.615c0-.56-.28-.793-.746-.793H3.805c-.56 0-.746.28-.746.793v.326zm12.316 1.12l.187 8.35c.046.793-.42 1.213-1.12 1.213-.606 0-.98-.327-1.353-.84l-4.665-6.999v6.86c0 .7-.373 1.073-1.073 1.073-.653 0-1.026-.373-1.026-1.073V8.874c0-.746.42-1.166 1.12-1.166.653 0 1.073.42 1.446.933l4.572 6.812V9.06c0-.7.373-1.026 1.073-1.026.606 0 .84.373.84 1.026z" />
    </svg>
  )
}

export function LinearLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0zm9.5-7.5a7.5 7.5 0 0 0-7.5 7.5h15a7.5 7.5 0 0 0-7.5-7.5z" />
    </svg>
  )
}

export function ClickUpLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2 17.5c2.3 1.8 5.6 2.8 9 2.8s6.7-1 9-2.8l-1.9-2.5c-1.8 1.4-4.3 2.1-7.1 2.1s-5.3-.7-7.1-2.1L2 17.5zm4.8-9.4L11 3.9l4.2 4.2 2.3-2.3L11 .3 4.5 6.8l2.3 2.3z" />
    </svg>
  )
}

export function FigmaLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm6-3h3a3 3 0 1 1 0 6h-3V3zm0 6h3a3 3 0 1 1 0 6h-3V9z" />
    </svg>
  )
}

export function PostHogLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
    </svg>
  )
}

export function GoogleWorkspaceLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z" />
    </svg>
  )
}

export function MakeLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4 6.75v8.5L12 20l8-4.75v-8.5L12 10.5z" />
    </svg>
  )
}

export function ZapierLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 1.5h-2v8H3v2h8v8h2v-8h8v-2h-8v-8z" />
      <path d="M4.5 4.5l15 15M19.5 4.5l-15 15" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function N8nLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="5" cy="12" r="3" />
      <circle cx="19" cy="12" r="3" />
      <circle cx="12" cy="5" r="3" />
      <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="19" r="3" />
    </svg>
  )
}

export function PythonLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.9 1c-4.2 0-3.9 1.8-3.9 1.8l.04 1.9h4v.6H6.2S3 5 3 9.3c0 4.2 2.8 4.1 2.8 4.1h1.7v-2.3s-.1-2.8 2.8-2.8h4.8s2.7.04 2.7-2.6V3.8S18.3 1 11.9 1zm-1.8 1.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm1.9 20.6c4.2 0 3.9-1.8 3.9-1.8l-.04-1.9h-4v-.6h5.8s3.2.3 3.2-4c0-4.2-2.8-4.1-2.8-4.1h-1.7v2.3s.1 2.8-2.8 2.8H8.8s-2.7-.04-2.7 2.6v1.9s-.5 2.8 5.9 2.8zm1.8-1.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" />
    </svg>
  )
}

export function ZohoLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="9" height="9" rx="2" />
      <rect x="13" y="2" width="9" height="9" rx="2" fillOpacity="0.7" />
      <rect x="2" y="13" width="9" height="9" rx="2" fillOpacity="0.7" />
      <rect x="13" y="13" width="9" height="9" rx="2" />
    </svg>
  )
}

export function ApolloLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2L15 9H9L12 2ZM4 13L11 11V21L4 13ZM20 13L13 11V21L20 13Z" />
    </svg>
  )
}

export function LushaLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="8" cy="12" r="4" />
      <circle cx="16" cy="12" r="4" fillOpacity="0.6" />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function HubSpotLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.8 7.3V4.9c.7-.4 1.2-1.2 1.2-2.1 0-1.4-1.1-2.5-2.5-2.5S15 .2 15 1.6c0 1.2.9 2.2 2.1 2.4v3.3c-1.3.3-2.4 1-3.1 2l-6.7-5.2c.1-.4.2-.7.2-1.1 0-2.2-1.8-4-4-4S-.5 1.8-.5 4s1.8 4 4 4c.6 0 1.1-.1 1.6-.4l6.5 5.1c-.5.8-.8 1.8-.8 2.8s.3 2 .8 2.8L5.1 23.4c-.5-.3-1-.4-1.6-.4-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-.4-.1-.7-.2-1.1l6.7-5.2c.7 1 1.8 1.7 3.1 2v3.3c-1.2.3-2.1 1.2-2.1 2.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.9-.5-1.7-1.2-2.1v-2.4c2.8-.7 4.9-3.2 4.9-6.3 0-3-2.1-5.6-4.9-6.3zm-1.3 9.4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" transform="scale(0.8) translate(3, 1)" />
    </svg>
  )
}

export function MondayLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="5" cy="14" r="3" />
      <path d="M10 8a2 2 0 0 1 4 0v9a2 2 0 1 1-4 0V8z" />
      <path d="M17 11a2 2 0 0 1 4 0v6a2 2 0 1 1-4 0v-6z" />
    </svg>
  )
}

export function StripeLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.652.858 15.134.42 12.518.42c-5.74 0-9.878 2.977-9.878 7.915 0 4.792 3.654 6.643 7.643 8.083 2.502.898 3.513 1.614 3.513 2.657 0 .976-.89 1.517-2.316 1.517-2.366 0-5.323-1.077-7.466-2.285l-.946 5.592c2.403 1.258 5.648 1.981 8.411 1.981 6.073 0 10.233-2.825 10.233-7.893 0-5.111-3.66-6.837-7.736-8.093z" />
    </svg>
  )
}

export function WebflowLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.98 5.48c-1.46 0-2.67.75-3.37 1.88l-2.6 4.38-2.58-4.38c-.7-1.13-1.91-1.88-3.37-1.88-2.21 0-4 1.79-4 4 0 .7.18 1.35.5 1.92l4.89 8.28c.67 1.13 1.88 1.88 3.28 1.88s2.61-.75 3.28-1.88l4.89-8.28c.32-.57.5-1.22.5-1.92 0-2.21-1.79-4-4-4z" />
    </svg>
  )
}

export function SlackLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  )
}

export function LoomLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.5 10.87l-5.63 3.25a1 1 0 0 1-1.5-.87V8.75a1 1 0 0 1 1.5-.87l5.63 3.25a1 1 0 0 1 0 1.74z" />
    </svg>
  )
}

// Map helper to resolve tool ID to real SVG logo
export function getToolBrandLogo(id, className = "w-6 h-6") {
  switch (id) {
    case 'chatgpt':
    case 'openai':
      return <ChatGPTLogo className={className} />
    case 'perplexity':
      return <PerplexityLogo className={className} />
    case 'gemini':
      return <GeminiLogo className={className} />
    case 'claude':
      return <ClaudeLogo className={className} />
    case 'cursor':
      return <CursorLogo className={className} />
    case 'notion':
      return <NotionLogo className={className} />
    case 'linear':
      return <LinearLogo className={className} />
    case 'clickup':
      return <ClickUpLogo className={className} />
    case 'figma':
      return <FigmaLogo className={className} />
    case 'posthog':
      return <PostHogLogo className={className} />
    case 'gsuite':
    case 'google-workspace':
      return <GoogleWorkspaceLogo className={className} />
    case 'make':
      return <MakeLogo className={className} />
    case 'zapier':
      return <ZapierLogo className={className} />
    case 'n8n':
      return <N8nLogo className={className} />
    case 'python':
      return <PythonLogo className={className} />
    case 'zoho':
    case 'zoho-crm':
      return <ZohoLogo className={className} />
    case 'apollo':
      return <ApolloLogo className={className} />
    case 'lusha':
      return <LushaLogo className={className} />
    case 'stripe':
      return <StripeLogo className={className} />
    case 'webflow':
      return <WebflowLogo className={className} />
    case 'hubspot':
      return <HubSpotLogo className={className} />
    case 'monday':
    case 'monday-com':
      return <MondayLogo className={className} />
    case 'slack':
      return <SlackLogo className={className} />
    case 'loom':
      return <LoomLogo className={className} />
    default:
      return (
        <div className={`${className} rounded flex items-center justify-center font-mono font-bold text-xs bg-signal-blue/10 text-signal-blue`}>
          {id?.slice(0, 2).toUpperCase() || 'TL'}
        </div>
      )
  }
}
