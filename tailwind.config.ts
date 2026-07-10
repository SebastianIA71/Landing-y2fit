import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink:      "#0a0b0c",
        card:     "#14171c",
        surface:  "#1b1e24",
        border:   "#23262c",
        border2:  "#33373f",
        fog:      "#f3f5f0",
        muted:    "#b9beb4",
        dim:      "#7d827b",
        volt:     "#c8f82e",
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
        floatup: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" }
        },
        breathe: {
          "0%,100%": { transform: "scale(1)", opacity: "0.55" },
          "50%":      { transform: "scale(1.18)", opacity: "0.85" }
        },
        grain: {
          "0%":   { transform: "translate(0,0)" },
          "25%":  { transform: "translate(-2%,1%)" },
          "50%":  { transform: "translate(1%,-2%)" },
          "75%":  { transform: "translate(-1%,2%)" },
          "100%": { transform: "translate(0,0)" }
        }
      },
      animation: {
        voltpulse:       "voltpulse 3.2s ease-in-out infinite",
        floatup:         "floatup 6s ease-in-out infinite",
        marquee:         "marquee 22s linear infinite",
        "marquee-reverse": "marquee 22s linear infinite reverse",
        breathe:         "breathe 7s ease-in-out infinite",
        grain:           "grain 0.9s steps(4) infinite"
      }
    }
  },
  plugins: []
};

export default config;
