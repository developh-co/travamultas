import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        beige: '#E8E8E8',
        body: '#294E6B'
      },
      backgroundImage: {
        teaser: 'url(/background/teaser.jpg)'
      }
    }
  },
  plugins: []
}
export default config
