import React, { ComponentProps } from "react";
import type * as Stitches from "@stitches/react";

import { Meta, Story } from "@storybook/react";
import {Input } from "..";

type InputProps = ComponentProps<typeof Input>;

export default {
  title: "Input",
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const input = (args: InputProps) => {
  return (
    <Input />
  );
};
input.argTypes = {
};
input.args = {
};
input.storyName = "Input";
