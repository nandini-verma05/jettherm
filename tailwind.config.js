
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}', // Include your JSX files here
  ],
  theme: {
    extend: {
     
      keyframes: {
        utilises: {
          '.pause': {
            'animation-play-state': 'paused',
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
      },
    },
  },
}
}
  }
}
