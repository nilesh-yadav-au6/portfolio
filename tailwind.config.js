/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#242628",
        green: "#05AA3C",
        pink: "#FA50B5",
        purple: "#AC39F2",
        cream: "#E2E4DD",
        orange: "#FF6101",
        yellow: "#FFB202",
      },
      fontFamily: {
        Bungee: ["Bungee Inline", "sans-serif"],
      },
    },
  },
  plugins: [],
};
