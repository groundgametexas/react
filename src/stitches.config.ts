// stitches.config.ts
import { createStitches } from "@stitches/react";

export const stitchesInstance = createStitches({
  theme: {},
});

const { styled, css, keyframes, theme } = stitchesInstance;

export { styled, css, keyframes, theme };
