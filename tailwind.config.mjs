/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pure-white': '#FFFFFF',
        'solid-black': '#000000',
        'pure-black': '#000000',
        'solid-white': '#FFFFFF',
        black: '#000000',
        white: '#FFFFFF',
        contrast: {
          bg: '#000000',
          card: '#121212',
          border: '#FFFFFF',
          text: '#FFFFFF',
          muted: '#A1A1AA',
          accent: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
