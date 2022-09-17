import React, { ComponentProps } from "react";
import type * as Stitches from "@stitches/react";

import { Meta, Story } from "@storybook/react";
import {Button } from "..";

type ButtonProps = ComponentProps<typeof Button>;

export default {
  title: "Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const button = (args: ButtonProps) => {
  return (
    <Button {...args} onClick={() => alert('Button pressed!')}>Hello world</Button>
  );
};
button.argTypes = {
};
button.args = {
  size: 'medium',
};
button.storyName = "Button";

