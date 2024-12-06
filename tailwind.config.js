

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            'text-shadow': '0 0 15px rgba(255,255,255,0.5)',
            transform: 'scale(1)'
          },
          '50%': {
            'text-shadow': '0 0 30px rgba(255,255,255,0.8)',
            transform: 'scale(1.05)'
          },
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
      }
    }
  },
  plugins: [
    
  ],
}