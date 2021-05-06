import { Meta, Story } from "@storybook/react";
import React from "react";
import { Header } from "./Header";

export default {
  title: "Layout/Header",
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
