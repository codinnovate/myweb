import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll":'loop-scroll 50s linear infinite',
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"},
        },
      },
      colors: {
        'primary':'#f1efee',
        'pink':'#e91e63',
        'black':{
         '100': '#1a1a1a',
         '200': '#191919',
         '500':'#222222'
        },
      },
    },
  },
  plugins: [],
};
export default config;
