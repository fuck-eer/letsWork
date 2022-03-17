import { Meta, Story } from "@storybook/react";
import GithubIcon from "./GithubIcon";
import Icon, { IconProps } from "./Icon";

export default {
	title: "atoms/Icons",
	component: Icon,
	argTypes: {
		color: { control: "color" },
	},
	args: {
		icon: "github",
		color: "#999999",
	},
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const githubIcon = Template.bind({});
githubIcon.args = {};
export const facebookIcon = Template.bind({});
facebookIcon.args = {
	icon: "facebook",
};
export const amazonIcon = Template.bind({});
amazonIcon.args = {
	icon: "amazon",
};
export const invisionIcon = Template.bind({});
invisionIcon.args = {
	icon: "invision",
};
export const googleIcon = Template.bind({});
googleIcon.args = {
	icon: "google",
};
