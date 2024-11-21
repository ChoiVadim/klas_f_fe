import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/routes/**/*.{js,ts,jsx,tsx,mdx}',
    './src/index.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: '#FFF5F5',
        primary: {
          DEFAULT: '#6B4242',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F3F4F6',
          foreground: '#1F2937',
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#6B7280',
        },
        accent: {
          DEFAULT: '#F9FAFB',
          foreground: '#111827',
        },
        destructive: {
          DEFAULT: '#FCA5A5',
          foreground: '#7F1D1D',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937',
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#6B4242',
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      boxShadow: {
        sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
      rounded: {
        lg: '0.7rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}

export default config