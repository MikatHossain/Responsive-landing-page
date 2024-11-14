/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"1.5rem",
        md:'2rem'
      }
    },
  
    extend: {
      fontFamily:{
        display: ["Poppins", "sans-serif"],
        body:["Inter", 'sans-serif']
      },
      colors:{
        primary:"#3238f2"
      }
    },
  },
  plugins: [],
}

