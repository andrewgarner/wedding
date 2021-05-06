import { Meta, Story } from "@storybook/react";
import React from "react";
import { Text, TextProps } from "./Text";

export default {
  title: "Typography/Text",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
);

export const Default = Template.bind({});
Default.args = {};
