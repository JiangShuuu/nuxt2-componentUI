module.exports = {
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffd943',
          DEFAULT: '#ffb01c',
          dark: '#e2931c',
        },
        secondary: {
          light: '#ffe3d7',
          DEFAULT: '#ff6d2d',
          dark: '#CC3D00',
        },
        black: {
          DEFAULT: '#1e1e1e',
          700: '#3C3C3C',
        },
        gray: {
          100: '#faf9f5',
          200: '#f0f0f0',
          300: '#ebebeb',
          400: '#dcdcdc',
          500: '#b4b4b4',
          600: '#969696',
          700: '#615a50',
          800: '#424242',
          900: '#212121',
        },
        blue: {
          DEFAULT: '#0882ec',
          dark: '#36568d',
          light: '#798fa7',
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#0882ec',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        pink: {
          DEFAULT: '#eaac9d',
          light: '#fef0f0',
        },
        yellow: {
          light: '#fdf6e9',
          DEFAULT: '#b49d73',
          dark: '#776e60',
          darker: '#97614f',
        },
        teal: '#107893',
        red: {
          DEFAULT: '#ff0000',
          light: '#e70404',
        },
        orange: {
          extralight: '#FFF9F3',
          light: '#FFF9ED',
          DEFAULT: '#FFF3E5',
          depper: '#FFB066',
          dark: '#FF6D2D',
        },
        cyan: '#4DC4A4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
