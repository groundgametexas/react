import React, { ComponentProps } from "react";
import { styled } from "../stitches.config";

type LabelBaseProps = {
  size?: string;
  variant?: LabelColorOptions;
  children?: React.ReactNode;
};

type LabelColorOptions = "primary" | "error" | "success";

const Label = ({ ...props }: LabelBaseProps) => {
  let { children, ...additionalProps } = props;

  return <StyledLabel {...additionalProps}>{children}</StyledLabel>;
};

const StyledLabel = styled("label", {
  display: "block",
  fontSize: ".75rem",
  fontWeight: "$medium",
});

export type LabelProps = ComponentProps<typeof Label>;
export default Label;
