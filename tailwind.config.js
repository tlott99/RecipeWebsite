/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      screens: {
        'container': '1110px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}