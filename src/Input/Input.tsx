import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { styled } from "../stitches.config";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  ref?: string;
}

/**
 * Input component
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, ...delegated }, ref) => {
    return (
      <StyledInput
        {...delegated}
        name={name}
        ref={ref}
        className={`text-base shadow-sm focus:ring-blue-500 focus:border-blue-500`}
      />
    );
  }
);

const StyledInput = styled("input", {
  display: "block",
  border: "1px solid",
  borderColor: "$borderDefault",
  width: "100%",
  paddingTop: "$2",
  paddingBottom: "$2",
  borderRadius: "$3",
  fontSize: "1rem",
  lineHeight: "1.5rem",
});

export default Input;
