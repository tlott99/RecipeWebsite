/** @type {import('tailwindcss').Config} */
const defaultTheme = require( 'tailwindcss/defaultTheme' );

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,.js}"
  ],

  theme: {
    screens: {
			...defaultTheme.screens,
			'container': '1110px',
		},
    extend: {},
  },
  plugins: [],
}

