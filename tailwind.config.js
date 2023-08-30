/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(223, 87%, 63%)",
        },
        secondary: {
          paleBlue: "hsl(223, 100%, 88%)",
          lightRed: "hsl(354, 100%, 66%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 59%)",
          veryDarkBlue: "hsl(209, 33%, 12%)",
        },
      },
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
      },
      boxShadow: {
        "btn-shadow": "0px 5px 10px 2px rgba(76, 123, 243, 0.23)",
      },
    },
  },
  plugins: [],
}
