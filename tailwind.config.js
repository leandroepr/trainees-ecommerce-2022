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
        black: 'rgb(var(--black)  / 1 )',
        white: 'rgb(var(--white) / 1 )',
        grey: 'rgb(var(--grey) / 1 )',
        lightGrey: 'rgb(var(--light-grey)  / 1 )',
        yellow: 'rgb(var(--yellow) / 1 )',
        blue: 'rgb(var(--blue) / 1 )',
        darkBlue: 'rgb(var(--dark-blue) / 1 )',
        thinBlue: 'rgb(var(--thin-blue) / 1 )',
        green: 'rgb(var(--green) / 1 )',
        red: 'rgb(var(--red) / 1 )',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
