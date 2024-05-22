/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				theme: {
					black: '#333333',
					gray: '#545454',
					skyblue: '#EAF1FF',
					indigo: '#030718'
				}
			}
		}
	},
	plugins: []
};
