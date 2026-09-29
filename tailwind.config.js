/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./posts/**/*.{md,mdx}",
    "./lib/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF8',
        obsidian: '#111318',
        slateText: '#555B66',
        mutedText: '#737984',
        hairline: '#E5E7EB',
        surfaceCard: '#FFFFFF',
        surfaceSubtle: '#F4F5F7',
        primaryBlue: '#2563EB',
        secondaryBlue: '#3B82F6',
        warm: {
          50: '#FAFAF8',
          100: '#F4F5F7',
          200: '#E5E7EB',
          300: '#D1D5DB',
        },
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          800: '#1E293B',
          900: '#0F172A',
          950: '#070B14',
        },
        status: {
          active: '#10B981',
          experiment: '#6366F1',
          research: '#F59E0B',
          archived: '#64748B',
        },
        signal: {
          blue: '#2563EB',
          blueDark: '#1D4ED8',
          cobalt: '#1E40AF',
          cyan: '#0284C7',
          violet: '#7C3AED',
          purple: '#6D28D9',
          green: '#10B981',
          amber: '#F59E0B',
          coral: '#EA580C',
        },
        border: {
          subtle: '#E5E7EB',
          hairline: '#E5E7EB',
          lightHairline: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: [
          'Geist',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"Geist Mono"',
          'JetBrains Mono',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.04em',
        widest: '0.12em',
        micro: '0.18em',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(17, 19, 24, 0.04)',
        subtle: '0 1px 3px 0 rgba(17, 19, 24, 0.05), 0 1px 2px 0 rgba(17, 19, 24, 0.03)',
        card: '0 1px 3px 0 rgba(17, 19, 24, 0.06), 0 4px 12px 0 rgba(17, 19, 24, 0.03)',
        elevated: '0 12px 32px -8px rgba(17, 19, 24, 0.08), 0 4px 12px -4px rgba(17, 19, 24, 0.04)',
        glass: '0 8px 32px 0 rgba(17, 19, 24, 0.06)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
};
