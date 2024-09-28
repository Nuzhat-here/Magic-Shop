/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#EBEBEB",
        secondary: "#9C020C",
        brandDark: "#ABABAB",
        bgw: "#FFFFFF",
        bg2: "#EBEBEB",
        bg3: "#C5C3C6",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html, body': {
          margin: '0',
          padding: '0',
          overflowX: 'hidden',  
        },
      });
    }
  ],
}

