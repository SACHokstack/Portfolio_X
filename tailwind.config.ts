import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: '#0B0C10',
        light: '#F5F5F5',
        accent: {
          cyan: '#66FCF1',
          purple: '#C77DFF',
        },
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}

export default config
