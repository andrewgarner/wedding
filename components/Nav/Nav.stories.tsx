import { Meta, Story } from "@storybook/react";
import React from "react";
import { Nav } from "./Nav";

export default {
  title: "Layout/Nav",
  component: Nav,
} as Meta;

const Template: Story = (args) => <Nav />;

export const Default = Template.bind({});
