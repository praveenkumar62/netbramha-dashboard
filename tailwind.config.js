/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#E6E6E6',
        'primary-black': '#262626',
      },
    },
  },
  plugins: [],
}

