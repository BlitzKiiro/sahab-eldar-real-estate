/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				theme: {
					black: '#333333',
					gray: '#545454',
					'light-gray': '#D6D6D6',
					'dark-gray': '#9C9C9C',
					'medium-gray': '#787D82',
					skyblue: '#EAF1FF',
					indigo: '#030718',
					cyan: '#EDF5FE',
					'light-blue': '#E4E4FA'
				}
			}
		}
	},
	plugins: []
};
