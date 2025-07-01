/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#EC4899',
          blue: '#3B82F6',
        },
        secondary: {
          lightPink: '#F9A8D4',
          lightBlue: '#93C5FD',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}