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
      scale: {
        '85': "0.85"
      },
      screens: {
        sm: "640px",
        md: "900px",
        lg: "1200px",
        xl: "1440px",
      },
      maxWidth: {
        "350px": "350px",
        "389px": "389px",
        "412px": "412px",
        "414px": "414px",
        "418px": "418px",
        "450px": "450px",
        "500px": "500px",
        "517px": "517px",
        "528px": "528px",
        "655px": "655px",
        "682px": "682px",
        "680px": "680px",
        "728px": "728px",
        "1010px": "1010px",
      },
      maxHeight: {
        "172px": "172px",
      },
      minHeight: {
        96: "24rem"
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
        "article-blue": "#B8E4EF",
        "article-orange": "#FEEAB7",
        "article-yellow": "#F2FFB8",
        "article-yellow-50": "#F3EBD5",
      },
      spacing: {
        13.5: "58px",
        15: "60px",
        22: "22px",
        30: "120px",
        "7px": "7px",
        "15px": "15px",
        "24px": "24px",
        "28px": "28px",
        "32px": "32px",
        "172px": "172px",
        "400px": "400px",
        "414px": "414px",
        "11.61%": "11.61%",
        "31.6%": "31.6%",
        "37.75%": "37.75%",
        "62.24%": "62.24%",
      },
    },
  },
  plugins: [],
};
