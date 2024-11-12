/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'max-md': { max: '1024px' },
				iphone: { max: '768px' },
			},
			fontFamily: {
				cine: ['Novocine-Display', 'sans-serif'],
				regular: ['PPTelegraf-Regular', 'sans-serif'],
				bold: ['PPTelegraf-Bold', 'sans-serif'],
				oblique: ['PPTelegraf-Oblique', 'sans-serif'],
			},

			transitionTimingFunction: {
				'ease-custom': 'ease',
			},
			transitionDuration: {
				300: '300ms',
			},
			transitionProperty: {
				all: 'all',
				transform: 'transform',
			},
		},
	},
	plugins: [],
};
