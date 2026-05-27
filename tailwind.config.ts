import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Portfolio custom colors
        link: {
          DEFAULT: "hsl(var(--link))",
          hover: "hsl(var(--link-hover))",
        },
        // Echo in Ink brand palette (EI Colour Brand Kit)
        ei: {
          // Core palette
          "cosmic-black": "#02030A",
          "orbit-blue": "#0B0E96",
          "deep-nebula": "#070454",
          "electric-cobalt": "#1336E7",
          "ion-violet": "#690EB9",
          "void-plum": "#45045D",
          "stellar-lilac": "#CBB9FB",
          "neon-magenta": "#C23BE5",
          "photon-white": "#F7F2FF",
          // Typography
          "text-primary": "#F7F2FF",
          "text-secondary": "rgba(247, 242, 255, 0.72)",
          "text-tertiary": "rgba(247, 242, 255, 0.58)",
          "text-muted": "rgba(203, 185, 251, 0.85)",
          "text-accent": "#1336E7",
          "text-accent-secondary": "#C23BE5",
          // Surfaces
          "surface-deep": "#02030A",
          "surface-panel": "rgba(7, 4, 84, 0.35)",
          "surface-card": "rgba(69, 4, 93, 0.25)",
          "surface-elevated": "rgba(11, 14, 150, 0.15)",
          // Backwards compat aliases
          void: "#02030A",
          midnight: "#070454",
          "indigo-atm": "#070454",
          blue: "#1336E7",
          violet: "#690EB9",
          orchid: "#C23BE5",
          lavender: "#CBB9FB",
          moonlight: "#F7F2FF",
        },
      },
      boxShadow: {
        "orbit": "0 0 60px rgba(19, 54, 231, 0.18)",
        "magenta": "0 0 50px rgba(194, 59, 229, 0.14)",
        "cobalt": "0 0 55px rgba(19, 54, 231, 0.16)",
        "atmospheric": "0 0 80px rgba(105, 14, 185, 0.12)",
        "nebula": "0 0 70px rgba(7, 4, 84, 0.20)",
      },
      backgroundImage: {
        "signature-orbit": "linear-gradient(135deg, #1336E7 0%, #690EB9 48%, #C23BE5 100%)",
        "deep-space": "radial-gradient(circle at 25% 35%, #1336E7 0%, #070454 36%, #02030A 72%)",
        "nebula": "linear-gradient(180deg, #02030A 0%, rgba(7, 4, 84, 0.5) 50%, #02030A 100%)",
        "orbital-border": "linear-gradient(135deg, rgba(105, 14, 185, 0.6) 0%, rgba(194, 59, 229, 0.5) 50%, rgba(105, 14, 185, 0.6) 100%)",
      },
      borderColor: {
        "soft": "rgba(247, 242, 255, 0.10)",
        "glow": "rgba(105, 14, 185, 0.32)",
        "card": "rgba(203, 185, 251, 0.12)",
        "cobalt": "rgba(19, 54, 231, 0.28)",
        "magenta": "rgba(194, 59, 229, 0.25)",
      },
      ringColor: {
        "cobalt": "rgba(19, 54, 231, 0.5)",
        "violet": "rgba(105, 14, 185, 0.5)",
        "magenta": "rgba(194, 59, 229, 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Neue Montreal', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
