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
      colors: {
        bg: "#EFF0F4"
      },
      maxWidth: {
        "500px": "500px",
      },
      fontSize: {
        "64px": ["64px", {
          lineHeight: "70px",
          letterSpacing: "0.01em",
          fontWeight: "bold",
        }],
      },
      colors: {
        grey: "#616163",
        blue: "#2EB1ED",
      },
      maxWidth: {
        "655px": "655px",
      },
      spacing: {
        30: "120px",
      },
    },
  },
  plugins: [],
};
