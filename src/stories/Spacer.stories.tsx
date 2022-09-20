import React, { ComponentProps } from "react";
import type * as Stitches from "@stitches/react";

import { Meta, Story } from "@storybook/react";
import {Spacer, Box } from "..";

type SpacerProps = ComponentProps<typeof Spacer>;

export default {
  title: "Spacer",
  component: Spacer,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const spacer = (args: SpacerProps) => {
  return (
    <>
      <Box as="div" css={{
        backgroundColor: "$scaleForestGreen500",
        color: "$textInverse",
        fontSize: 16,
        padding: 16,
        borderRadius: "$3"
      }}>
        Box 1 
      </Box>
      <Spacer {...args} />
      <Box as="div" css={{
        backgroundColor: "$scaleForestGreen500",
        color: "$textInverse",
        fontSize: 16,
        padding: 16,
        borderRadius: "$3"
      }}>
        Box 2 
      </Box>
    </>
    
  );
};
spacer.argTypes = {
};
spacer.args = {
  size: 16,
  axis: 'vertical'
};
spacer.storyName = "Spacer";

