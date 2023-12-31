/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'feature-pattern': "url('/assets/images/demo_circle.svg')",
				'hero-bg': "url('/assets/fashion-designer-answering-call.webp')",
				'hero-bg-wide': "url('/assets/black-owned-small-business-open.webp')",
				'purple-lines': "url('/assets/circle.svg')",
			},
			colors: {
				primary: {
					DEFAULT: '#222566',
					dark: '#04084A',
				},
				secondary: {
					DEFAULT: '#70d6f8',
				},
				orange: {
					DEFAULT: '#f97316',
				},
				accent: {
					DEFAULT: '#f1f2ff',
				},
			},
			fontFamily: {
				cursive: 'cursive',
			},
		},
	},
	plugins: [],
}
