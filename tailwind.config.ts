import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        xs2: '360px',
        xs3: '0px',
      }, spacing: {
        '1em': '1em',
        '2em': '2em',
        '3em': '3em',
        '11em': '11em',
        '0.5em': '0.5em',
        'auto': 'auto',
      }, flexGrow: {
        '100': '100',
        '1': '1'
      }
    },
  },
  plugins: [],
};
export default config;
