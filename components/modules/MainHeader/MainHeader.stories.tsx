import { Meta, Story } from "@storybook/react";
import MainHeader from "./MainHeader";

export default {
	title: "modules/Header",
	component: MainHeader,
} as Meta;

const Template: Story<{}> = (args) => <MainHeader {...args} />;

export const Main = Template.bind({});
Main.args = {};
