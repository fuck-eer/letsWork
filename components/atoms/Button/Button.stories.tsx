import { Meta, Story } from "@storybook/react";
import Button, { Props } from "./Button";

export default {
	title: "atoms/Button",
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },
	},
	args: {
		size: "md",
		children: "Clikc Me!",
	},
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const DemoButton = Template.bind({});
DemoButton.args = {
	disabled: false,
	varient: "solid",
	size: "lg",
};

export const DemoLink = Template.bind({});
DemoLink.args = {
	type: "internal",
	href: "#",
	size: "md",
	target: "_self",
};
