/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],

	theme: {
		colors: {
			"brand-500": "#5e8dd9",
			"brand-600": "#456fcb",
			"brand-700": "#3b5cba",
			"dark": "#1c1d1e",
			"text": "#f2f6fc",
			"offwhite": "#FBFBFB",
			"white": "#FFFFFF"
		},

		fontFamily: {
			sans: ["Nunito sans", "sans_serif"],
		},
		fontSize: {
			/* body font-sizes */
			"fs-tiny": ["clamp(0.625rem, 0.103vw + 0.592rem, 0.75rem)", "1.4"],
			"fs-small": ["clamp(0.75rem, 0.082vw + 0.724rem, 0.85rem)", "1.4"],
			"fs-base": ["clamp(1rem, 0.206vw + 0.934rem, 1.25rem)", "1.5"],
			"fs-medium": ["clamp(1.25rem, 0.206vw + 0.934rem, 1.375rem)", "1.5"],

			/* heading font-sizes */
			"fs-huge": ["clamp(2.5rem, 1.875vw + 1.9rem, 4.78rem)", "1.1"],
			"fs-3xl": ["clamp(2rem, 1.493vw + 1.522rem, 3.815rem)", "1"],
			"fs-2xl": ["clamp(1.75rem, 0.617vw + 1.553rem, 2.5rem)", "1.1"],
			"fs-xl": ["clamp(1.5rem, 0.411vw + 1.368rem, 2rem)", "1.1"],
			"fs-lg": ["clamp(1.375rem, 0.308vw + 1.276rem, 1.75rem)", "1.2"],

		},
		extend: {},
	},
	plugins: [

	],
}