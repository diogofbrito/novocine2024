/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				custom: '12px',
				'34px': '34px',
			},
			screens: {
				'max-md': { max: '768px' },
			},
			spacing: {
				2.6: '0.65rem',
				'7px': '5px',
				'8px': '8px',
				'3px': '1px',
			},

			fontSize: {
				'0.7rem': '0.7rem',
			},
			fontFamily: {
				cine: ['Cine-Display', 'sans-serif'],
				regular: ['PPTelegraf-Regular', 'sans-serif'],
				bold: ['PPTelegraf-Bold', 'sans-serif'],
				oblique: ['PPTelegraf-Oblique', 'sans-serif'],
			},
			margin: {
				'10px': '10px',
			},
			boxShadow: {
				custom: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
			scale: {
				104: '1.04',
				107: '1.07',
			},
			backgroundImage: {
				'hero-home': "url('/imgs/1.png')",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.writing-vertical-rl': {
					writingMode: 'vertical-rl',
				},
				'.text-upright': {
					textOrientation: 'upright',
				},
			});
		},
	],
};
