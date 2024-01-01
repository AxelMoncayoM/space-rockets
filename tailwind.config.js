/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        //prettier-ignore
        'widescreen': { raw: "(min-aspect-ratio: 3/2)" },
        //prettier-ignore
        'tallscreen': { raw: "(min-aspect-ratio: 1/2)" },
      },
    },
  },
  plugins: [],
};
