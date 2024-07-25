import PreviousMap from "postcss/lib/previous-map";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E4356",
        secondary: "#082f49",
        color3: "#E8F0FE",
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto Condensed",
        playwrite: "Playwrite DK Loopet",
      },
      textColor: {
        textColor: "#0ea5e9",
        primary: "#1E4356",
      },
    },
  },
  plugins: [],
};
