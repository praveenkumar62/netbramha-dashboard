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
        'secondary-black': '#595959',
        'custom-blue-1': '#046899',
        'custom-blue-2': '#066A9B',
        'primary-green': '#008A00',
        'primary-dark-green': '#017500',
      },
    },
  },
  plugins: [],
}

