/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Sailec, Arial, sans-serif",
      display: "PolySans, Arial, sans-serif",
    },
    extend: {
      colors: {
        blue: "#4DB5D3",
        "dark-blue": "#0B2559",
        "off-white": "#fdfdfc",
        "light-blue": "#2196F3",
        "xdark-blue": "#061835",
        "vibrant-blue": "#00E9F4",
        "midnight-blue": "#006293",
        "forest-blue": "#0685B2",
        "spring-blue": "#3A9AC5",
        "light-gray": "#bdbdbd",
        error: "#EA0000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
