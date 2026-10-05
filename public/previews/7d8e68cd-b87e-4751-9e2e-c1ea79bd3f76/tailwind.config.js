export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        walnut: {
          950: '#120c08',
          900: '#1c130c',
          800: '#2a1c12',
          700: '#3d2a1a',
          600: '#54371f',
          500: '#6a4527',
        },
        paper: {
          DEFAULT: '#f5eee1',
          dim: '#cfc3ae',
          muted: '#998b77',
        },
        ember: {
          DEFAULT: '#e08a3c',
          deep: '#b9662a',
        },
        ink: '#171310',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        wide2: '0.18em',
      },
    },
  },
}
