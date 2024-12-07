import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mountains of Christmas', 'cursive'],
      },
      colors: {
        'brown': {
          600: '#8B4513',
        },
      },
    },
  },
  plugins: [],
}
export default config

