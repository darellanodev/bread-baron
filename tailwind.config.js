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
        // Dark mode colors
        bgDark: '#221c10',
        cardDark: '#2a2418',
        deepDark: '#1a150d',
        borderDark: '#3a3121',
      },
    },
  },
  plugins: [],
}
