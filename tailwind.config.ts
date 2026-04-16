import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f6f2ee",
        surface: "#fbf8f5",
        "surface-strong": "#fffdfb",
        line: "#e6ddd4",
        text: "#221f1c",
        muted: "#6b625b",
        dark: "#11100f",
        accent: "#ed622a",
        "accent-soft": "#f7d4c5",
        // backward-compat aliases
        primary: "#11100f",
        background: "#f6f2ee",
        foreground: "#221f1c",
        stone: "#e6ddd4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "card-lg": "32px",
        "card-md": "24px",
        "card-sm": "18px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 24px 80px rgba(17, 16, 15, 0.08)",
        topbar: "0 18px 50px rgba(17, 16, 15, 0.08)",
        "accent-glow": "0 14px 34px rgba(237, 98, 42, 0.24)",
        contact: "0 26px 90px rgba(0, 0, 0, 0.22)",
        lift: "0 16px 50px rgba(17, 16, 15, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
