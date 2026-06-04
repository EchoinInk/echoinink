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
        // Echo in Ink: EI Aurora Luxe (refer to CSS variables in tokens.css)
        ei: {
          void: 'var(--ei-void)',
          indigo: 'var(--ei-midnight)',
          aurora: 'var(--ei-aurora-blue)',
          cyan: 'var(--ei-electric-cyan)',
          orchid: 'var(--ei-orchid-pink)',
          violet: 'var(--ei-luxe-violet)',
          lavender: 'var(--ei-soft-lavender)',
          ice: 'var(--ei-ice-white)',
          'text-primary': 'var(--ei-text-primary)',
          'text-secondary': 'rgb(var(--ei-ice-white-rgb) / 0.72)',
          'text-tertiary': 'rgb(var(--ei-ice-white-rgb) / 0.58)',
          'text-muted': 'rgb(var(--ei-soft-lavender-rgb) / 0.48)',
          'text-soft': 'rgb(var(--ei-soft-lavender-rgb) / 0.85)',
          'text-accent': 'var(--ei-aurora-blue)',
          'text-accent-secondary': 'var(--ei-orchid-pink)',
          'surface-deep': 'var(--ei-void)',
          'surface-panel': 'rgb(var(--ei-midnight-rgb) / 0.35)',
          'surface-card': 'rgb(var(--ei-midnight-rgb) / 0.25)',
          'surface-elevated': 'rgb(var(--ei-aurora-blue-rgb) / 0.15)',
        },
      },
      bboxShadow: {
  'ei-aurora': '0 0 32px rgb(var(--ei-aurora-blue-rgb) / 0.22)',
  'ei-cyan': '0 0 28px rgb(var(--ei-electric-cyan-rgb) / 0.2)',
  'ei-orchid': '0 0 30px rgb(var(--ei-orchid-pink-rgb) / 0.18)',
  'ei-luxe':
    '0 18px 70px rgb(var(--ei-void-rgb) / 0.55), 0 0 48px rgb(var(--ei-aurora-blue-rgb) / 0.14)',
},
      backgroundImage: {
        'ei-gradient-primary':
          'linear-gradient(135deg, var(--ei-aurora-blue) 0%, var(--ei-luxe-violet) 48%, var(--ei-orchid-pink) 100%)',
        'ei-gradient-glow':
          'radial-gradient(circle, rgb(var(--ei-aurora-blue-rgb) / 0.45), rgb(var(--ei-orchid-pink-rgb) / 0.18), transparent 70%)',
      },
      borderColor: {
        soft: 'rgb(var(--ei-ice-white-rgb) / 0.10)',
        glow: 'rgb(var(--ei-luxe-violet-rgb) / 0.32)',
        card: 'rgb(var(--ei-soft-lavender-rgb) / 0.12)',
        cobalt: 'rgb(var(--ei-aurora-blue-rgb) / 0.28)',
        magenta: 'rgb(var(--ei-orchid-pink-rgb) / 0.25)',
      },
      ringColor: {
        cobalt: 'rgb(var(--ei-aurora-blue-rgb) / 0.5)',
        violet: 'rgb(var(--ei-luxe-violet-rgb) / 0.5)',
        magenta: 'rgb(var(--ei-orchid-pink-rgb) / 0.5)',
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
