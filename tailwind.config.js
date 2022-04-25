module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 3s ease-in-out infinite"
      },
      colors: {
        "primary-violet": "#37044E",
        "primary-white": "#FFF8FE"
      },
      keyframes: {
        rotate: {
          "0%": {transform: "rotateY(0deg)"},
          "100%": { transform: "rotateY(360deg)"},

        }
      },
      screens: {
        "xsm": "340px",
      }
    },
  },
  plugins: [],
}
