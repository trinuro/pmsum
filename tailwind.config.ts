import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hover-pattern': "url(/image/team/hover_pattern_dayak_motif.png)",
        'bunga-terung': "url(/image/team/bg_bunga_terung.png)",
        'dayak-motif' : "url('/image/Dayak_Motif.png')",
        'dayak-motif-2' : "url('/image/Dayak_Motif_2.png')",
        'pls-delete' : "url('/image/pls_delete.png')",
        'river-in-sarawak': "url('/image/river_in_sarawak.jpg')",
        'dun-drawn-medium' : "url('/image/DUN_DRAWN_MD.png')",
        'dun-drawn-large' : "url('/image/DUN_DRAWN_LARGE.png')",
        'hero-bg' : "url('/image/test_hero_bg.png')",
        'dtc-bcm-dun' : "url('/image/dtc_bcm_dun.png')",
        'dtc-dun' : "url('/image/dtc_dun.png')",
      },
      colors: {
        yellow: {
          'dark' : '#FFCA11',
        },
        red : {
          'dark' : '#CE1126'
        },
        'federalisme' : '#F6786A',
        'gray-text' : '#363636',
      },
      fontFamily: {
        hightide: ['var(--font-hightide)'],
        leagueSpartan: ['var(--font-league)'],
        horta: ['var(--font-horta)'],
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      boxShadow: {
        'inner-bottom': 'inset 0 -2px 2px rgba(0, 0, 0, 0.1)', // Bottom inner shadow
      },
    },
  },
  plugins: [],
};
export default config;
