/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tiltNeon: ["tilt-neon", "sans-serif"],
      },
    },
  },
  plugins: [],
};
