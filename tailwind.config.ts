import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: orange — the one brand color
        primary: {
          50:  '#FFF4EE',
          100: '#FFE4D0',
          200: '#FFC5A0',
          300: '#FF9E6A',
          400: '#FF7A3D',
          500: '#F95A0A',
          600: '#E04500',
          700: '#B83800',
          800: '#8A2A00',
          900: '#5C1C00',
        },
        // Secondary: neutral dark — contrast & text
        secondary: {
          50:  '#F8F8F8',
          100: '#EFEFEF',
          200: '#DCDCDC',
          300: '#BDBDBD',
          400: '#989898',
          500: '#757575',
          600: '#555555',
          700: '#383838',
          800: '#1F1F1F',
          900: '#0F0F0F',
        },
        // Accent: same orange family, lighter tint
        accent: {
          50:  '#FFF4EE',
          100: '#FFE4D0',
          200: '#FFC5A0',
          300: '#FF9E6A',
          400: '#FF7A3D',
          500: '#F95A0A',
          600: '#E04500',
          700: '#B83800',
          800: '#8A2A00',
          900: '#5C1C00',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
