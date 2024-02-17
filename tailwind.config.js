/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors : {
      color: {
        realBlue: '#0556BF',
        aqua: '#00ffff',
        red: '#DC143C',
        dark: '#282d34',
        black: '#000000',
        white: '#ffffff',
        blue: '#40A2E3',
        1: '#436850',
        2: '#F8FAE5',
      }
    }
  },
  plugins: [],
};
