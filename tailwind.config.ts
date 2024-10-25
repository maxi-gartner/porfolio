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
        secondary: "#009688", // Un verde azulado moderno
        darkBg: "#1c1c1e", // Un negro suave
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(0, 150, 136, 0.5) -5.91%, rgba(33, 150, 243, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
