/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        sans: ['Strait', 'sans-serif'],
        display: ['Strait', 'sans-serif'],
    },
    extend: {
        colors: {
            'primary': '#0a7fee',
            'secondary-dark': '#0b0a15',
            'logo-dark': '#fefefe',
            'logo-light': '#171d2b',
        },
    },
  },
  darkMode: 'selector',
  plugins: [],
}