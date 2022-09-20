import React, { ComponentProps } from "react";
import { styled } from "../stitches.config";

function getHeight({ axis, size }: SpacerBaseProps) {
  return axis === "horizontal" ? 1 : size;
}
function getWidth({ axis, size }: SpacerBaseProps) {
  return axis === "vertical" ? 1 : size;
}

type SpacerBaseProps = React.HTMLAttributes<HTMLSpanElement> & {
  /* Size of the spacer */
  size?: number;
  /* Axis the spacer should be applied on */
  axis?: string;
}

type StyledWrapperType = React.ComponentType<SpacerBaseProps>


/**
 * Spacer is a general-purpose utility. Use when margin isn't the right tool for the job.
 */
const Spacer = ({ axis, size }: SpacerBaseProps) => {
  console.log('size: ', size)
  return <Wrapper size={size} axis={axis} />;
};

const Wrapper = styled("span", {
  display: "block",
  width: `${getWidth}px`,
  minWidth: `${getWidth}px`,
  height: `${getHeight}px`,
  minHeight: `${getHeight}px`,
})<{}, StyledWrapperType>;

export type SpacerProps = ComponentProps<typeof Spacer>;
export default Spacer
