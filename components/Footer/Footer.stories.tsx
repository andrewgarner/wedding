import { Meta, Story } from "@storybook/react";
import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer />;

export const Default = Template.bind({});
