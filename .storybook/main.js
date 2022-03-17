const path = require("path");
module.exports = {
	core: {
		builder: "webpack5",
	},
	staticDirs: ["../public"],
	stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		{
			name: "@storybook/addon-postcss",
			options: {
				cssLoaderOptions: {
					modules: {
						auto: true,
						localIdentName: "[name]__[local]--[hash:base64:5]",
					},
				},
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
	],
	framework: "@storybook/react",
};
