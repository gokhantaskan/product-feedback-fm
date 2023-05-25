import plugin from "tailwindcss/plugin";

import { borderRadius, breakPoints as screens, colors } from "./appconfig.mjs";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors,
    borderRadius,
    screens,
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", tablet: "2.5rem", desktop: "0" },
    },
    borderColor: theme => ({
      ...theme("colors"),
      DEFAULT: theme("colors.border", "currentColor"),
    }),
    boxShadow: {
      DEFAULT: "0px 10px 40px -7px rgba(55, 63, 104, 0.350492)",
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", `.light &`);
    }),
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
