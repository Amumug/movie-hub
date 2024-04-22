/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      borderWidth: {
        border: 'Your value here',
      }, 
      colors: {
        Orange50: "#FFFBEB",
        Orange100: "#FEF3C7",
        Orange200: "#FDE58A",
        Orange300: "#FBD24E",
        Orange400: "#FABE25",
        Orange500: "#F49D0C",
        Orange600: "#D87607",
        Orange700: "#BC560A",
        Orange800: "#923F0E",
        Orange900: "#78340F",
        Orange950: "#451A03",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        marope: ["Manrope"],
        mavenpro: ["Maven Pro"],
        inter: ["Inter"],
        satoshivariable: ["Satoshi Variable"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.border-border': {
          // Your declarations here
        },
      })
    })
  ]
};
