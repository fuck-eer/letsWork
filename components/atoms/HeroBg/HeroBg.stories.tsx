import { Meta, Story } from "@storybook/react";
import HeroBg, { HeroBgProps } from "./HeroBg";

export default {
	title: "atoms/Hero Background",
	component: HeroBg,
} as Meta;

const Template: Story<HeroBgProps> = (args) => <HeroBg {...args} />;

export const Background = Template.bind({});
Background.args = {};
