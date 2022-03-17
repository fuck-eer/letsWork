import { Meta, Story } from "@storybook/react";
import HeroComp from "./HeroComp";

export default {
	title: "modules/HeroComp",
} as Meta;

const Template: Story<{}> = (args) => <HeroComp {...args} />;

export const Hero = Template.bind({});
Hero.args = {};
