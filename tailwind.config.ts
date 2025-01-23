import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#205247',
        secondary: '#357266',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        accent: '#629560',
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
