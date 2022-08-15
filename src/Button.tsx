import React from "react";
import { styled } from "./stitches.config";

const StyledButton = styled("button", {});

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <StyledButton
      css={{
        borderRadius: "1",
        backgroundColor: "var(--scale-forest-green-300)",
        "&:hover": {
          backgroundColor: "var(--scale-forest-green-700)",
          color: "white",
        },
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
