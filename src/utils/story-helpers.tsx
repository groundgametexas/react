import React, { ComponentProps } from "react";
import { globalCss } from "@stitches/react";
import { ArgTypes } from "@storybook/react";
import { InputType } from "@storybook/csf";

import { Box } from "..";

// we don't import StoryContext from storybook because of exports that conflict
type StoryContext = Record<string, unknown> & {
  parameters: Record<string, unknown>;
};

// set global theme styles for each story
export const globalStyles = globalCss({
  body: { margin: 0 },
  table: { borderCollapse: "collapse " },
});

export const withStitchesProvider = (
  Story: React.FC<React.PropsWithChildren<StoryContext>>,
  context: StoryContext
) => {
  globalStyles();
  return (
    <Box>
      <div>
        <Story {...context} />
      </div>
    </Box>
  );
};
