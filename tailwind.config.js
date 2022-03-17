module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "376px",
			md: "769px",
			lg: "1281px",
		},
		colors: {
			transparent: "#00000000",
			white: "#ffffff",
			"off-white": "#f5f5f5",
			black: "#000000",
			red: "#ff5050",
			"dark-gray": "#333333",
			gray: "#444444",
			"light-gray": "#eee",
		},
		extend: {},
		fontFamily: {
			pop: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
