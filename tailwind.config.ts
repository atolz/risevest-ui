import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          "2xl": "1100px",
        },
        padding: "1rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        primary: "var(--primary)",
        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
        "teal-4": "var(--teal-4)",
        "--grey-white": "var(--grey-white)",
      },
      fontFamily: {
        "tomato-grotesk": ["var(--font-tomato-grotesk)", "sans-serif"],
        "dm-sans": ["var(--dm-sans)"],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
