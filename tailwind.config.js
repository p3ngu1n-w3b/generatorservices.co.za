/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#07120E",
          800: "#0A1A14",
          700: "#0D2219",
        },
        forest: {
          deep: "#0A2C22",
          DEFAULT: "#0E3B2E",
          light: "#155C45",
        },
        teal: {
          deep: "#0C2A33",
          DEFAULT: "#123A45",
        },
        volt: {
          DEFAULT: "#A6E22E",
          bright: "#C7F94B",
          dim: "#6E9E1C",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        volt: "0 0 0 1px rgba(166,226,46,0.25), 0 18px 50px -12px rgba(166,226,46,0.45)",
        glow: "0 24px 80px -20px rgba(166,226,46,0.35)",
        deep: "0 40px 120px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
}
