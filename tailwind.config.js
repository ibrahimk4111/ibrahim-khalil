/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "80%",
        lg: "900px",
        xl: "1050px",
        xxl: "1100px",
      },
    },
    extend: {
      fontSize: {
        xs: "0.5em",
      },
      colors: {
        bgColorsInDark: "var(--darkModeBgColor)",
      },
      dropShadow: {
        glow: [
          "0px 0px 5px cyan",
          "0 0px 55px cyan",
        ],
      },
    },
  },
  plugins: [],
};
