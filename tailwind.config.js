/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // This includes all HTML files under the public directory
    "./public/assets/**/*.{html,js}", // Specifically include HTML, CSS, and JS files in public/assets
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Ensuring sans-serif is the fallback
        'noto-sans': ['"Noto Sans SC"', 'sans-serif'],
        'Anton': ['"Anton SC"', 'sans-serif'],
        'Libre-Barcode': ['"Anton SC"', 'system-ui'],
        'Roboto': ['"Roboto"', 'sans-serif']
      },
      scale: {
        '135': '1.35',
      },
    },
  },
  plugins: [],
}