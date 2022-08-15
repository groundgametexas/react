import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { Stack } from "..";
type StackProps = ComponentProps<typeof Stack>;

export default {
  title: "Stack",
  component: Stack,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const stack = (args: StackProps) => {
  return (
    <Stack
      gap={args.gap}
      direction={args.direction}
      align={args.align}
      justify={args.justify}
      width={args.width}
    >
      <div
        style={{
          backgroundColor: "var(--background-accent-forest-green-bolder)",
          width: "250px",
          height: "48px",
        }}
      />
      <div
        style={{
          backgroundColor: "var(--background-accent-forest-green-bolder)",
          width: "250px",
          height: "48px",
        }}
      />
      <div
        style={{
          backgroundColor: "var(--background-accent-forest-green-bolder)",
          width: "250px",
          height: "48px",
        }}
      />
    </Stack>
  );
};
stack.args = {
  gap: 1,
  direction: "column",
  align: "start",
  justify: "start",
  wrap: false,
};
stack.storyName = "Stack";
