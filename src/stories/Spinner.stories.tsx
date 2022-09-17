import React, { ComponentProps } from "react";
import type * as Stitches from "@stitches/react";

import { Meta, Story } from "@storybook/react";
import {Spinner } from "..";

type SpinnerProps = ComponentProps<typeof Spinner>;

export default {
  title: "Spinner",
  component: Spinner,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const spinner = (args: SpinnerProps) => {
  return (
    <Spinner {...args} />
  );
};
spinner.argTypes = {
};
spinner.args = {
  size: 'medium',
  variant: 'charcoal'
};
spinner.storyName = "Spinner";

