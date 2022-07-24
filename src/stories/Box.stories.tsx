import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { Box } from "..";

type BoxProps = ComponentProps<typeof Box>;

export default {
  title: "Box",
  component: Box,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const box = (args: BoxProps) => {
  return (
    <Box
      {...args}
      css={{
        backgroundColor: "tomato",
        color: "black",
        fontSize: 16,
        padding: 16,
        borderRadius: 4,
      }}
    >
      This is a box
    </Box>
  );
};
box.args = {};
box.storyName = "Box";
