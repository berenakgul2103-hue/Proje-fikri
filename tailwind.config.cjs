/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        eco: {
          50: '#f2fbf6',
          100: '#dff6e8',
          200: '#beead1',
          300: '#92dcb5',
          400: '#5dc592',
          500: '#36ad78',
          600: '#258b61',
          700: '#1f6f50',
          800: '#1e5842',
          900: '#1b4938',
          950: '#0b221b'
        },
        moss: {
          100: '#ecf3df',
          300: '#b8cf8c',
          500: '#7a9654',
          700: '#54683b'
        }
      }
    }
  },
  plugins: []
}
