import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        ember: {
          DEFAULT: "var(--ember)",
          hot: "var(--ember-hot)",
        },
        ash: "var(--ash)",
        graphite: "var(--graphite)",
        line: "var(--line)",
        mist: "var(--mist)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-ar-display)", "sans-serif"],
        sans: ["var(--font-sans)", "var(--font-ar-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
