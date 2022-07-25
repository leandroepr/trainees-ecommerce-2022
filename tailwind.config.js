/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / 1 )',
        secondary: 'rgb(var(--secondary) / 1 )',
        dark: 'rgb(var(--dark) / 1 )',
        light: 'rgb(var(--light) / 1 )',
        success: 'rgb(var(--success) / 1 )',
        info: 'rgb(var(--info) / 1 )',
        warning: 'rgb(var(--warning) / 1 )',
        danger: 'rgb(var(--danger) / 1 )',
      },
      fontFamily: {
        custom: ['ubuntu-mono', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
