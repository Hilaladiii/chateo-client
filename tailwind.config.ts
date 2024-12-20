import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/commons/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#002DE3",
        offWhite: "#F7F7FC",
        active: "#0F1828",
        disabled: "#ADB5BD",
        line: "#EDEDED",
        neutralWeak: "#A4A4A4",
        brandDark: "#001A83",
        brandDefault: "#002DE3",
        brandBackground: "#D2D5F9",
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
