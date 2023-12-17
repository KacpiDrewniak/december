/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        green100: "#E1F5D2",
        green200: "#C3EDA9",
        green300: "#9EDF77",
        green400: "#7BCE4D",
        green50: "#F2FBEA",
        green500: "#63C132",
        green600: "#448F21",
        green700: "#366D1E",
        green800: "#2F571D",
        green900: "#294B1C",
        green950: "#12280B",
        typography100: "#151A30",
        typography1100: "#101426",
        typography200: "#F7F9FC",
        typography300: "#EDF1F7",
        typography400: "#E4E9F2",
        typography500: "#C5CEE0",
        typography600: "#8F9B83",
        typography700: "#2E3A59",
        typography800: "#222B45",
        typography900: "#192038",
      },
    },
  },
  plugins: [],
};
