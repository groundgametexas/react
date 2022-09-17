import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { styled } from "../stitches.config";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: "email" | "text";
  label?: string;
  ref?: string;
  placeholder?: string;
  UNSAFE_className?: string;
}

/**
 * Input component
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { name, label, type, size, UNSAFE_className, placeholder, ...delegated },
    ref
  ) => {
    return (
      <>
        <StyledInput
          {...delegated}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          ref={ref}
          className={UNSAFE_className}
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
  variants: {
    size: {
      small: {
        fontSize: "$2",
        padding: "$2",
      },
      large: {
        fontSize: "$4",
        padding: "$4",
        borderRadius: "$3",
      },
    },
  },
});

export default Input;
