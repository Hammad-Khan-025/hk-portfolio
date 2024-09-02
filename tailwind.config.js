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
      },
      textShadow: {
        'custom': '2px 2px 2px rgba(30, 64, 175, 0.7)', // Example custom text shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          'text-shadow': '2px 2px 2px rgba(30, 64, 175, 0.7)', // Your custom text shadow
        },
      });
    },
  ],
}

