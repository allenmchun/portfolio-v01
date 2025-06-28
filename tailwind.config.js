/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-blue': '#000cff',
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "carousel-spin": "carousel-spin 30s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "carousel-spin": {
          from: { transform: "rotateY(360deg)" },
          to: { transform: "rotateY(0deg)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};