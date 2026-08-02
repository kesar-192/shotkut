/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Sylva v2 - elegant single-accent palette. Deep slate base,
        // one restrained teal accent (no dual neon), quiet glass panels.
        ink: "#0B0F17",
        charcoal: "#151B26",
        glass: "rgba(255,255,255,0.035)",
        glassBorder: "rgba(64,161,157,0.2)",
        paper: "#F8FAFC",
        fog: "#94A3B8",
        teal: {
          DEFAULT: "#40A19D",
          soft: "#5FC4C0",
          deep: "#2F7D7A",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        "glow-teal": "0 0 30px -8px rgba(64,161,157,0.55)",
      },
    },
  },
  plugins: [],
};
