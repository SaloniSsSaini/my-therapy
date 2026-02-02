import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "rgb(var(--color-text-primary) / <alpha-value>)",
        textSecondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
        bgMain: "rgb(var(--color-bg-main) / <alpha-value>)",
        bgMuted: "rgb(var(--color-bg-muted) / <alpha-value>)",
        borderColor: "rgb(var(--color-border) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
