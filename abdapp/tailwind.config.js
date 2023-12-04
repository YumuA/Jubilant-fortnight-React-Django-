/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'amber': {
          '50': 'hsl(48, 100%, 96%)',
          '100': 'hsl(48, 96%, 89%)',
          '200': 'hsl(48, 97%, 77%)',
          '300': 'hsl(46, 97%, 65%)',
          '400': 'hsl(43, 96%, 56%)',
          '500': 'hsl(38, 92%, 50%)',
          '600': 'hsl(32, 95%, 44%)',
          '700': 'hsl(26, 90%, 37%)',
          '800': 'hsl(23, 83%, 31%)',
          '900': 'hsl(22, 78%, 26%)',
          '950': 'hsl(21, 92%, 14%)',
      },
      'blue': {
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#bfdbfe',
        '300': '#93c5fd',
        '400': '#60a5fa',
        '500': '#3b82f6',
        '600': '#2563eb',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a',
        '950': '#172554',
    },
    
      
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

