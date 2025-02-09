
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        heart: {
          100: "#FDE1D3", // Soft Peach
          200: "#FEC6A1",
          300: "#FFDEE2", // Soft Pink
          400: "#E5DEFF", // Soft Purple
          500: "#D81B60", // Deep Pink (CTA)
          600: "#FFB6C1", // Light Pink
          rosegold: "#B76E79",
          blush: "#FCE4EC", // Primary Background
          gold: "#FFD700", // Accent Gold
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "thread-left": {
          "0%": { transform: "scaleY(0) translateX(20px)", opacity: "0" },
          "100%": { transform: "scaleY(1) translateX(0)", opacity: "1" }
        },
        "thread-right": {
          "0%": { transform: "scaleY(0) translateX(-20px)", opacity: "0" },
          "100%": { transform: "scaleY(1) translateX(0)", opacity: "1" }
        },
        "heart-appear": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "heart-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(216, 27, 96, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(216, 27, 96, 0.8)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
        "thread-left": "thread-left 1s ease-out forwards",
        "thread-right": "thread-right 1s ease-out forwards",
        "heart-appear": "heart-appear 2s ease-out forwards",
        "heart-pulse": "heart-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite"
      },
      backgroundImage: {
        'honeycomb': "url('/lovable-uploads/0ac44933-f49d-4e9c-9d82-4ed141c5ac16.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
