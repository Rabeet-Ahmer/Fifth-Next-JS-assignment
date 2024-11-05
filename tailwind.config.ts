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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        rye:["Rye","cursive"],
        nunito: ['"Nunito Sans"', 'sans-serif'],
        'libre-bodoni': ['"Libre Bodoni"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
