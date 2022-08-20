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
    <Button onPress={() => alert('Button pressed!')}>Button</Button>
  );
};
button.argTypes = {
};
button.args = {
};
button.storyName = "Button";
