/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Audiowide", "sans-serif"],
      serif: ["Quicksand", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
