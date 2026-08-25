import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: "#060d17",
          900: "#0b1524",
          850: "#101e33",
          800: "#162844",
          700: "#1e375c",
          600: "#284a7a",
        },
        aqua: {
          DEFAULT: "#06b6d4",
          light: "#38bdf8",
          dark: "#0891b2",
        },
        gold: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        coral: {
          DEFAULT: "#f43f5e",
          light: "#fb7185",
          dark: "#e11d48",
        },
        foam: "#f0fdfa",
      },
    },
  },
  plugins: [],
};

export default config;
