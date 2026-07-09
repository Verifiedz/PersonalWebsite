/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette — luxury Black & Gold
        gold: {
          DEFAULT: "#B8860B", // flat accent gold
          light: "#FCF6BA", // metallic highlight
          dark: "#B38728", // deep gold
          bronze: "#BF953F",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        gold: "0 0 24px -2px rgba(184,134,11,0.45)",
        "gold-lg": "0 0 40px -4px rgba(184,134,11,0.55)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "gold-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(184,134,11,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(184,134,11,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        // Slow ambient "breathing" drift for the hero background orbs.
        "glow-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.2" },
          "50%": {
            transform: "translate(6%, -8%) scale(1.2)",
            opacity: "0.28",
          },
        },
        "glow-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1.1)", opacity: "0.18" },
          "50%": {
            transform: "translate(-7%, 6%) scale(0.9)",
            opacity: "0.24",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "gold-pulse": "gold-pulse 2s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "glow-a": "glow-a 14s ease-in-out infinite",
        "glow-b": "glow-b 12s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
