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
      maxWidth: {
        "414px": "414px",
        "500px": "500px",
        "655px": "655px",
        "1010px": "1010px",
      },
      fontSize: {
        "40px": ["40px", { lineHeight: "40px" }],
        "64px": [
          "64px",
          {
            lineHeight: "63px",
            letterSpacing: "0.01em",
            fontWeight: "bold",
          },
        ],
        "32px": [
          "32px",
          {
            lineHeight: "57px",
            letterSpacing: "0.01em",
            fontWeight: "bold",
          },
        ],
      },
      colors: {
        grey: "#616163",
        "faint-grey": "#D3D3D4",
        blue: "#2EB1ED",
        bg: "#EFF0F4",
        orange: "#EC9412",
        wine: "#CC3A3B",
        green: "#1FC586",
      },
      spacing: {
        30: "120px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
