/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Raleway', 'sans-serif'],
			heading: ['League Gothic', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#899DCE',
				secondary: '#177E89',
				teritary: '#9AE8C7',
				black: '#323232',
				gray: '#C9CBCA',
				white: '#fff'
			},
			boxShadow: {
				'2xl': '0px 0px 20px 2px #E3E9FB',
				'3xl': '0px 0px 50px 2px #E3E9FB'
			}
		}
	},
	plugins: []
};
