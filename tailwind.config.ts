import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amora: {
          50: "#faf8ff",
          100: "#f0edff",
          200: "#e0d9ff",
          300: "#c7b8ff",
          400: "#a88eff",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        creative: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        warm: {
          50: "#fff8f3",
          100: "#ffede0",
          200: "#ffd9bc",
          300: "#ffbd8f",
          400: "#ff9a5c",
          500: "#ff7a2f",
          600: "#f05d14",
          700: "#c74812",
          800: "#9e3a16",
          900: "#7f3115",
        },
        coral: {
          50: "#fff5f5",
          100: "#ffe0e0",
          200: "#ffc6c6",
          300: "#ff9e9e",
          400: "#ff6b6b",
          500: "#f83e3e",
          600: "#e51d1d",
          700: "#c11414",
          800: "#a01414",
          900: "#841818",
        },
        sky: {
          50: "#f0f9ff",
          100: "#dff2ff",
          200: "#b8e3ff",
          300: "#7aceff",
          400: "#3bb5ff",
          500: "#0e9aff",
          600: "#007bdf",
          700: "#0062b5",
        800: "#005395",
        900: "#00467a",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["Cabinet Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "blob": "blob 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}

export default config
