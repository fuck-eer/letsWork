import { Meta, Story } from "@storybook/react";
import Text, { TextProps } from "./Text";

export default {
	title: "atoms/Text",
	component: Text,
	argTypes: {
		color: { control: "color" },
	},
	args: {
		color: "#ff5050",
		onHover: true,
		main: true,
		children: "Le'W",
		inline: true,
	},
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const mainText = Template.bind({});
mainText.args = {
	varient: "h",
	size: "xl",
};
