import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { styled } from "../stitches.config";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  ref?: string;
  placeholder?: string;
}

/**
 * Input component
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, placeholder, ...delegated }, ref) => {
    return (
      <>
        <StyledInput
          {...delegated}
          placeholder={placeholder}
          name={name}
          ref={ref}
        />
      </>
    );
  }
);

const StyledInput = styled("input", {
  display: "block",
  border: "1px solid",
  borderColor: "$borderSubtle",
  width: "100%",
  padding: "$2",
  borderRadius: "$3",
  fontSize: "1rem",
  lineHeight: "$default",
  boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0,0,0,.05)",
  "&:focus": {
    border: "2px solid",
    borderColor: "$scaleBlue700",
  },
  "&:placeholder": {
    color: "$textSubtle",
  },
});

export default Input;
