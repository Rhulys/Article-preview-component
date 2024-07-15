/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "VeryDarkGrayishBlue" : "#48556A",
       "DesaturatedDarkBlue" : "#6D7F97",
       "GrayishBlue" : "#9EAFC2",
       "LigthGrayishBlue" : "#ECF2F8"
      },
      fontSize: {
        "13px" : "13px"
      },
      backgroundImage: {
        "drawers" : "url(/drawers.jpg)"
      }
    },
  },
  plugins: [],
}