/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 0 20px rgba(249,115,22,1)', // Define your custom shadow
      }
    },
  },
  plugins: [],
}

