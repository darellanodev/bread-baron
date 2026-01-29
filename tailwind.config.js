/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#eca013',
        // Light mode colors
        bgLight: '#f4f3f0',
        textLight: '#181511',
        bgSecondary: '#f8f7f6',
        borderLight: '#d6d2cb',
        inputLight: '#e6e2db',
        bgCream: '#fdf5e6',
        // Dark mode colors
        bgDark: '#221c10',
        cardDark: '#2a2418',
        deepDark: '#1a150d',
        borderDark: '#3a3121',
        // Brown/Wood colors (for bakery)
        brownDark: '#8b4513',
        brownDarker: '#5e2f0d',
        brownDarkest: '#3a1d08',
        brownDeep: '#1a0f05',
        // Secondary text color
        textSecondary: '#897b61',
      },
    },
  },
  plugins: [],
}
