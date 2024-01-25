/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dash-primary":"#00668A",
        "dash-secondary":"#004E71",
      },
      fontFamily:{
        Roboto:["Roboto, sans-serif"]
      },
      container: {
        padding:"2rem",
        center:true,
      },
      screens:{
        sm:"648px",
        md:"768px",
      }
    },
  },
  plugins: [],
}