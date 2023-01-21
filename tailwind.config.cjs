/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Mono']
			},
			colors: {
				brand: {
					dark: '#170312',
					'dark-purple': '#33032F',
					'light-purple': '#531253',
					silver: '#a0acad',
					green: '#97D8B2'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
