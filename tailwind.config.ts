import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070809",
        graphite: "#101214",
        fog: "#f4f7ef",
        muted: "#8c9487",
        volt: "#c8f82e",
        acid: "#8fff00"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 32px rgba(200, 248, 46, 0.28)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 18% 12%, rgba(200,248,46,.18), transparent 28%), radial-gradient(circle at 78% 18%, rgba(244,247,239,.08), transparent 24%), linear-gradient(135deg, rgba(255,255,255,.07) 0 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
