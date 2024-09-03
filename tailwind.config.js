/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rootColor: 'var(--primary-color)', // Use the root color variable
      },
      boxShadow: {
        'custom-shadow': '0 0 10px var(--primary-color)', // Use rootColor for shadow
      },
    },
  },
  plugins: [],
}

