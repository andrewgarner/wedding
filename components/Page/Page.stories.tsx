import { Meta, Story } from "@storybook/react";
import React from "react";

import { Page, PageProps } from "./Page";

export default {
  title: "Layout/Page",
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "The quick brown fox jumps over the lazy dog",
};
