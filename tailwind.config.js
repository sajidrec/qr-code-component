/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "custom-Light-gray": "hsl(212, 45%, 89%)",
        "custom-Grayish-blue": "hsl(220, 15%, 55%)",
        "custom-Dark-blue": "hsl(218, 44%, 22%)"
      },
      fontFamily: {
        Outfit : ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

