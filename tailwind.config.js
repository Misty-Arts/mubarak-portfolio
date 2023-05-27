import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      raleway: ["var(--font-raleway)", ...fontFamily.sans],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "900px",
        lg: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
