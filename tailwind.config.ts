import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1a2744",
        orange: "#e8752a",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 30px rgba(26, 39, 68, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
