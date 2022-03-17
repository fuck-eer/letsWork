import { Meta, Story } from "@storybook/react";
import DetailsHeader, { DetHeaderProps } from "./DetailsHeader";

export default {
	title: "modules/Details Header",
	component: DetailsHeader,
	args: {
		companyName: "Amazon.Inc",
		companyUrl: "www.amazon.com",
	},
} as Meta;

const Template: Story<DetHeaderProps> = (args) => <DetailsHeader {...args} />;

export const JobHeader = Template.bind({});
JobHeader.args = {
	title: "Senior-Frontend Developer",
	tags: [
		{ id: "1", name: "React" },
		{ id: "2", name: "Next" },
		{ id: "3", name: "Node" },
		{ id: "4", name: "Mongo DB" },
		{ id: "5", name: "GraphQl" },
	],
};
