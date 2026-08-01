/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Sylva brand tokens - deep charcoal base, glass surfaces,
        // neon purple + electric cyan as the "aura" accent pair.
        ink: "#0A0A10",
        charcoal: "#111117",
        glass: "rgba(255,255,255,0.045)",
        glassBorder: "rgba(255,255,255,0.09)",
        paper: "#F5F5F8",
        fog: "#9CA3AF",
        purple: {
          DEFAULT: "#A855F7",
          soft: "#C084FC",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        "glow-purple": "0 0 30px -5px rgba(168,85,247,0.5)",
        "glow-cyan": "0 0 30px -5px rgba(34,211,238,0.45)",
      },
    },
  },
  plugins: [],
};
