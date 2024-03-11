const { default: styled } = require('@emotion/styled');
const { height } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#14a800',
        hbtn: '#d3ecd3',
        devlop: '#f2f7f2',
        fcolor: '#5e6d55',
        blue: '#4a77ce',
        tab: '#beccbe',
        design: '#fccd81',
        sals: '#1f57c3',
        admin: '#254d97',
        adm: '#4a3328'
      },
      width: {
        '61': '60vw',
        '55': '55vw',
        '99': '99%',
        '70': '70%',
        '14.8': '14.8rem',
        '42':'42rem',
        '35': '35rem',
        '157': '157%'
      },
      height: {
        '31': '31rem',
        '45': '45rem',
      }
    },
  },
  plugins: [],
}
