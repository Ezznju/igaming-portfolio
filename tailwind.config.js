/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a', // Deep Noir
          light: '#1a1a1a',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#ccff00', // Acid Lime
          light: '#d9ff33',
          dark: '#99cc00',
        },
        accent: {
          DEFAULT: '#7c3aed', // Hyper Violet
          light: '#9d67f0',
          dark: '#5b21b6',
        },
        dark: '#050505',
        light: '#f2f2f2', // Off-white text
        surface: '#121212', // Card backgrounds
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        heading: ['Bricolage Grotesque', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-scale': 'pulseScale 2s ease-in-out infinite',
        'gradient': 'gradientShift 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glow': '0 0 40px rgba(245, 158, 11, 0.3)',
        'glow-lg': '0 0 60px rgba(245, 158, 11, 0.4)',
      },
    },
  },
  plugins: [],
}
