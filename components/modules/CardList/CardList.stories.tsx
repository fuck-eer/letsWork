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
			company: {
				id: "1",
				name: "Amazon.Inc",
				websiteUrl: "www.amazon.com",
			},
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: true,
			locationNames: "USA",
			commitment: {
				id: "1",
				title: "Full-Time",
			},
		},
		{
			id: "2",
			company: {
				id: "1",
				name: "Amazon.Inc",
				websiteUrl: "www.amazon.com",
			},
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: {
				id: "1",
				title: "Full-Time",
			},
		},
		{
			id: "3",
			company: {
				id: "1",
				name: "Amazon.Inc",
				websiteUrl: "www.amazon.com",
			},
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: {
				id: "1",
				title: "Full-Time",
			},
		},
		{
			id: "4",
			company: {
				id: "1",
				name: "Amazon.Inc",
				websiteUrl: "www.amazon.com",
			},
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: {
				id: "1",
				title: "Full-Time",
			},
		},
		{
			id: "5",
			company: {
				id: "1",
				name: "Amazon.Inc",
				websiteUrl: "www.amazon.com",
			},
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: true,
			locationNames: "USA",
			commitment: {
				id: "1",
				title: "Full-Time",
			},
		},
		{
			id: "6",
			company: {
				id: "1",
				name: "Amazon.Inc",
				websiteUrl: "www.amazon.com",
			},
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: {
				id: "1",
				title: "Full-Time",
			},
		},
		{
			id: "7",
			company: {
				id: "1",
				name: "Amazon.Inc",
				websiteUrl: "www.amazon.com",
			},
			title: "Senior-Frontend Developer",
			postedAt: new Date(),
			isFeatured: false,
			locationNames: "USA",
			commitment: {
				id: "1",
				title: "Full-Time",
			},
		},
	],
};
