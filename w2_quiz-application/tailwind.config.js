/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto, sans-serif',
        'sansThai': 'IBM Plex Sans Thai, sans-serif',
        'museoModerno': 'MuseoModerno, sans-serif',
        'oswald': 'Oswald, sans-serif',
        'Silkscreen': 'Silkscreen, sans-serif'
      }
    },
  },
  plugins: [],
}
