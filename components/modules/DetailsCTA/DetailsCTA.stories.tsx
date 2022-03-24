import { Meta, Story } from "@storybook/react";
import DetailsCTA, { CTAProps } from "./DetailsCTA";

export default {
	title: "modules/CTA",
	component: DetailsCTA,
} as Meta;

const Template: Story<CTAProps> = (args) => <DetailsCTA {...args} />;

export const Cta = Template.bind({});
Cta.args = {
	date: new Date(),
	location: "London",
	url: "www.amazon.com",
};
