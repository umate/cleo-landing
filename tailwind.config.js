/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        pink: {
          50: "#ffe9f0",
          100: "#ffd3e1",
          200: "#ffa6c3",
          300: "#ff7aa5",
          400: "#ff4d87",
          500: "#ff2169",
          600: "#cc1a54",
          700: "#99143f",
          800: "#660d2a",
          900: "#330715"
        },
        yellow: {
          50: "#fffbeb",
          100: "#fef6d7",
          200: "#feedae",
          300: "#fde586",
          400: "#fddc5d",
          500: "#fcd335",
          600: "#caa92a",
          700: "#977f20",
          800: "#655415",
          900: "#322a0b"
        }
      },
      fontFamily: {
        sans: ["pp", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: []
};
