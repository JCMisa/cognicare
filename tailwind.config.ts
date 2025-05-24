/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        light: {
          "100": "#F0F1F1",
          "200": "#F7F8F8",
          "300": "#FEFEFE",
          "400": "#FFFFFF",
          "500": "#F3F4F4",
          DEFAULT: "#E8E9E9",
          foreground: "hsl(var(--primary-foreground))",
        },
        dark: {
          "100": "#131619",
          "200": "#1A1D21",
          "300": "#363A3D",
          "400": "#76828D",
          "500": "#ABB8C4",
          DEFAULT: "#0D0F10",
          foreground: "hsl(var(--primary-foreground))",
        },
        primary: {
          "50": "#edfff7", // Very light, almost white with a hint of the hue
          "100": "#d7ffe9",
          "200": "#b1ffdd",
          "300": "#8bffcf",
          "400": "#63f7bf",
          DEFAULT: "#28E5A9", // Your desired default vibrant green-blue
          "600": "#1fbd8a",
          "700": "#19976e",
          "800": "#147253", // Added a slightly darker shade for more depth
          "900": "#0e4d38", // Added an even darker shade for strong contrasts

          foreground: "var(--primary-foreground)",
        },
        secondary: {
          "100": "#152432",
          DEFAULT: "#79B5EC",
          foreground: "hsl(var(--secondary-foreground))",
        },
        warning: {
          "100": "#3E1716",
          "200": "#F24E43",
          DEFAULT: "#F37877",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
