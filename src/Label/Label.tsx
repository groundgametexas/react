import React, { ComponentProps } from "react";
import { styled } from "../stitches.config";

type LabelColorOptions = "primary" | "error" | "success";

type LabelSizeKeys = "small" | "large";

interface LabelBaseProps {
  size?: LabelSizeKeys;
  variant?: LabelColorOptions;
  children?: React.ReactNode;
  htmlFor?: string;
}

const Label = ({ size = "small", ...props }: LabelBaseProps) => {
  let { children, ...additionalProps } = props;

  return <StyledLabel {...additionalProps}>{children}</StyledLabel>;
};

const StyledLabel = styled("label", {
  display: "inline-flex",
  fontSize: ".75rem",
  fontWeight: "$medium",
  alignItems: "center",
  backgroundColor: "transparent",
  borderWidth: "1px",
  borderRadius: "999px",
  borderStyle: "solid",
  borderColor: "transparent",
  color: "$textSubtle",
  lineHeight: "1",
  whiteSpace: "nowrap",
  variants: {
    size: {
      small: {
        height: "20px",
        padding: "0px 7px",
      },
      large: {
        fontSize: "24px",
        padding: "0px 10px",
      },
    },
  },
});

export type LabelProps = ComponentProps<typeof Label>;
export default Label;
