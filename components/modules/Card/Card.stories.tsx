import { Meta, Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
	title: "modules/Card",
	component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const DemoCard = Template.bind({});
DemoCard.args = {
	id: "1",
	companyName: "Amazon.inc",
	companyUrl: "www.amazon.com",
	title: "Senior-Frontend Developer",
	postedAt: new Date(),
	isFeatured: false,
	locationNames: "USA",
	commitment: "Full-Time",
};
export const featuredCard = Template.bind({});
featuredCard.args = {
	id: "1",
	companyName: "Amazon.inc",
	companyUrl: "www.amazon.com",
	title: "Senior-Frontend Developer",
	postedAt: new Date(),
	isFeatured: true,
	locationNames: "USA",
	commitment: "Full-Time",
};
