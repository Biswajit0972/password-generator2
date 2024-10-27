/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A19",
        secondary: "#FFCF9D",
        "secondary-300": "#859F3D",
        "white-500": "#F6FCDF",
      },
      fontFamily: {
        primary: ["Rubik Wet Paint", "system-ui"],
        secondary: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
}