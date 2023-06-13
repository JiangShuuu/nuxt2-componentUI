module.exports = {
  important: true,
  // prefix: 'tw-',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  fontFamily: {
    sans: ['Arial', '微軟正黑體', 'Helvetica', 'sans-serif'],
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  theme: {
    extend: {
      colors: {
        primary: {
          extralight: '#E6F9FA',
          light: '#39C8D0',
          DEFAULT: '#00AFB8',
          deep: '#028B95',
        },
        black: {
          DEFAULT: '#292929',
        },
        gray: {
          DEFAULT: '#7E7E7E',
          600: '#A9A9A9',
          500: '#DDDDDD',
          400: '#D9D9D9',
          300: '#DFE2E6',
          200: '#EEEEEE',
          100: '#F3F3F3',
        },
        red: {
          DEFAULT: '#EA475B',
        },
        orange: {
          DEFAULT: '#FFAB31',
          deep: '#FF843F',
        },
        green: {
          DEFAULT: '#70BE20',
        },
        pink: {
          DEFAULT: '#FFE9EC',
        },
        yellow: {
          DEFAULT: '#FCFCFA',
        },
        blue: {
          light: '#4E91FF',
          DEFAULT: '#1654B9',
        },
        purple: {
          light: '#A386D5',
          DEFAULT: '#78269F',
        },
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
}
