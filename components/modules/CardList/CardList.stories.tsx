import { Meta, Story } from "@storybook/react";
import CardList, { CardListProps } from "./CardList";

export default {
	title: "modules/CardList",
	component: CardList,
} as Meta;

const Template: Story<CardListProps> = (args) => <CardList {...args} />;

export const List = Template.bind({});
List.args = {
	jobs: [
		{
			id: "1",
			companyName: "Amazon.inc",
			companyUrl: "www.amazon.com",
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: true,
			locationNames: "USA",
			commitment: "Full-Time",
		},
		{
			id: "2",
			companyName: "Amazon.inc",
			companyUrl: "www.amazon.com",
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: "Full-Time",
		},
		{
			id: "3",
			companyName: "Amazon.inc",
			companyUrl: "www.amazon.com",
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: "Full-Time",
		},
		{
			id: "4",
			companyName: "Amazon.inc",
			companyUrl: "www.amazon.com",
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: "Full-Time",
		},
		{
			id: "5",
			companyName: "Amazon.inc",
			companyUrl: "www.amazon.com",
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: true,
			locationNames: "USA",
			commitment: "Full-Time",
		},
		{
			id: "6",
			companyName: "Amazon.inc",
			companyUrl: "www.amazon.com",
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: "Full-Time",
		},
		{
			id: "7",
			companyName: "Amazon.inc",
			companyUrl: "www.amazon.com",
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: "Full-Time",
		},
	],
};
