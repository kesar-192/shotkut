/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Elegant single-accent dark palette, close to shotkut.com's own
        // sign-in screen: near-black base, soft mint action color, teal
        // used sparingly for the wordmark/links/focus states only.
        ink: "#0B0D10",
        surface: "#16181D",
        border: "#262930",
        paper: "#F2F2F2",
        fog: "#8A8F98",
        mint: {
          DEFAULT: "#8FE3B8",
          dark: "#6FD1A0",
        },
        teal: "#2DD9C4",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
