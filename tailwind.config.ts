import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink:      "#070809",
        graphite: "#101214",
        card:     "#0f1012",
        surface:  "#14171c",
        fog:      "#f4f7ef",
        muted:    "#8c9487",
        dim:      "#6c726b",
        volt:     "#c8f82e",
        acid:     "#8fff00",
        cyan:     "#57e0e6"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        sans:    ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon:  "0 0 32px rgba(200,248,46,.28)",
        phone: "0 50px 90px -20px rgba(0,0,0,.95), 0 0 80px rgba(200,248,46,.08)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 18% 12%,rgba(200,248,46,.18),transparent 28%), radial-gradient(circle at 78% 18%,rgba(244,247,239,.08),transparent 24%), linear-gradient(135deg,rgba(255,255,255,.07) 0 1px,transparent 1px)"
      },
      keyframes: {
        voltpulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(200,248,46,.45)" },
          "50%":      { boxShadow: "0 0 0 14px rgba(200,248,46,0)" }
        },
        glow: {
          "0%,100%": { opacity: "0.06" },
          "50%":      { opacity: "0.15" }
        },
        floatup: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" }
        }
      },
      animation: {
        voltpulse: "voltpulse 3.2s ease-in-out infinite",
        glow:      "glow 8s ease-in-out infinite",
        floatup:   "floatup 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
