/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    animations: {
      blink: {
        "0%, 100%": { opacity: 0 },
        "50%": { opacity: 1 },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
