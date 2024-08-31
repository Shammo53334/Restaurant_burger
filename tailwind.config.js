/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '380px',
			md: '780px',
			lg: '1150px',
			xl: '1720px',
		},
		extend: {
			colors: {
				darkColor: '#000',
			},
			fontFamily: {
				oswald: ['Oswald', 'sans-serif'],
				nunito: ['Nunito'],
			},
			keyframes: {
				move: {
					'50%': {transform: 'translateY(-1rem)'},
				},
			},
			animation: {
				movingY: 'move 2s linear infinite',
			},
		},
	},
	plugins: [],
};
