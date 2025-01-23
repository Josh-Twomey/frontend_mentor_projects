const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      width: {
        45: "45%",
      },
      height: {
        vh: "90vh",
      },
      colors: {
        Lime: "hsl(61, 70%, 52%)",
        Red: "hsl(4, 69%, 50%)",
        White: "hsl(0, 0%, 100%)",
        Blue : {
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)"
        },
      }
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".arrow-hide": {
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "-moz-appearance": "textfield", // Firefox specific style to hide the spinner
        },
        'input[type="number"]': {
          "-moz-appearance": "textfield", // Firefox disables the spinner
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
        },
      });
    }),
  ],
};
