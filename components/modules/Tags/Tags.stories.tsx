import { Meta, Story } from "@storybook/react";
import Tag, { TagProps } from "./Tags";

export default {
	title: "modules/Tag",
	component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;
export const normTag = Template.bind({});
normTag.args = {
	id: "01",
	name: "React",
};
