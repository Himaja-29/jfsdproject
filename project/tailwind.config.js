/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        dark: {
          50: '#e6e8eb',
          100: '#ccd1d7',
          200: '#99a3af',
          300: '#667487',
          400: '#33465f',
          500: '#0a1929',
          600: '#081421',
          700: '#060f19',
          800: '#040a10',
          900: '#020508',
        },
      },
    },
  },
  plugins: [],
};