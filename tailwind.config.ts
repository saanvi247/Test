import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neumorphic: {
          light: '#e0e7ff',
          DEFAULT: '#f5f7fa',
          shadow: '#a3bec0',
          accent: '#748b93',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        secondary: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      boxShadow: {
        neumorphic: '8px 8px 16px #a3bec0, -8px -8px 16px #ffffff',
        'neumorphic-sm': '4px 4px 8px #a3bec0, -4px -4px 8px #ffffff',
        'neumorphic-lg': '12px 12px 24px #a3bec0, -12px -12px 24px #ffffff',
        'neumorphic-inset': 'inset 4px 4px 8px #a3bec0, inset -4px -4px 8px #ffffff',
      },
      transition: {
        smooth: 'all 0.3s ease-in-out',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.transition-smooth': {
          '@apply transition-all duration-300 ease-in-out': {},
        },
      })
    }),
  ],
}
export default config
