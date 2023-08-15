/** @type {import('tailwindcss').Config} */
module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' }, // Home page
      '/about': { page: '/about' }, // About page
      // ...other routes
    };
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:{
          100:"#48DBFB",
          200:"#2C2C2C",
          300:"#F2F2F2",
          400:"#D3D3D3",
          500:"#282a36"
        },
        navbarColor:{
          100:"#000B0E",
          200:"#363D3F",
          300:"#7779"
        }
      }
    },
  },
  plugins: [],
}
