module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif']
      },
      screens: {
        'print': {'raw': 'print'},
      }
    }
  }
}
