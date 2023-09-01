/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				"primary": {
					50: "#FEF0F3",
					100: "#FEE2E7",
					200: "#FDBFCA",
					300: "#FBA2B2",
					400: "#FA7F96",
					500: "#F9627D",
					600: "#F61D45",
					700: "#C9082B",
					800: "#85051C",
					900: "#45030F",
					950: "#220107"
				},
				"secondary": {
					50: "#FAF0F3",
					100: "#F3DDE4",
					200: "#E9BFCC",
					300: "#DD9DB1",
					400: "#D17B96",
					500: "#C65B7C",
					600: "#AA3B5E",
					700: "#812D47",
					800: "#571E30",
					900: "#2A0E17",
					950: "#17080D"
				},
				"tertiary": {
					50: "#F7F5F7",
					100: "#EFEBEE",
					200: "#D6CDD5",
					300: "#BDAFBC",
					400: "#8C738A",
					500: "#5B3758",
					600: "#52324F",
					700: "#372135",
					800: "#291928",
					900: "#1B111A",
				},
				"grey": {
					50: "#F5F5F5",
					100: "#EBEBEB",
					200: "#CCCCCC",
					300: "#ADADAD",
					400: "#707070",
					500: "#333333",
					600: "#2E2E2E",
					700: "#1F1F1F",
					800: "#171717",
					900: "#0F0F0F",
				}
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
