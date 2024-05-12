import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", defaultTheme.fontFamily.sans],
        serif: ["Bitter", defaultTheme.fontFamily.serif],
        mono: ['"Fira Code"', defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
