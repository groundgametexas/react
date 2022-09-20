import React, { ComponentProps } from "react";

import { ButtonBase, ButtonContent, ButtonBaseProps } from "./ButtonBase";
import { styled } from "../stitches.config";

/**
 * Buttons consist of a clickable area usually containing a textual label or an icon that users can click to perform an action.
 *
 * In addition, keyboard users may activate buttons using the Space or Enter keys.
 *
 * Button supports user interactions via mouse, keyboard, and touch.
 *
 */
const Button = ({ ...props }: ButtonBaseProps) => {
  let { children, size = "medium", ...additionalProps } = props;

  return (
    <StyledButtonBase size={size} {...additionalProps}>
      <ButtonContent>{children}</ButtonContent>
    </StyledButtonBase>
  );
};

const StyledButtonBase = styled(ButtonBase, {
  color: "$textDefault",
  background: "$backgroundNeutralDefaultDefault",
  display: "inline-flex",
  borderColor: "",
  fontFamily: "$sans",
  border: "1px solid transparent",
  fontWeight: "$bold",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "&:focus": {
    outlineColor: "$borderAccentOrange",
    outlineOffset: "4px",
  },
  variants: {
    size: {
      small: {
        fontSize: "$2",
        padding: "7px 16px",
        borderRadius: "$3",
      },
      medium: {
        fontSize: "$3",
        padding: "7px 16px",
        borderRadius: "$3",
      },
      large: {
        fontSize: "$4",
        padding: "9px 20px",
        borderRadius: "$3",
      },
    },
    variant: {
      primary: {
        backgroundColor: "$scaleOrange500",
        color: "$scaleWhite",
        "&:hover": {
          background: "$scaleOrange700",
        },
      },
      secondary: {
        background: "$scaleTeal500",
        color: "$scaleCharcoal800",
        "&:hover": {
          background: "$scaleTeal700",
        },
      },
      invisible: {
        background: "transparent",
        padding: "$2 $3",
        borderColor: "transparent",
        color: "$scaleCharcoal800",
        "&:hover": {
          background: "$backgroundNeutralDefaultHovered",
        },
        boxShadow: "revert",
      },
    },
    block: {
      true: {
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      },
      false: {
        width: "revert",
      },
    },
  },
});

const StyledButtonContent = styled(ButtonContent, {
  block: {
    true: {
      width: "100%",
      display: "inline-flex",
    },
    false: {
      width: "revert",
    },
  },
});

// const DefaultButton = styled(ButtonBase)`
//   background-color: var(--color-gray100);
//   color: var(--color-text-default);
//   border: 1px solid var(--color-gray300);
//   &:hover {
//     background-color: var(--color-gray200);
//   }
// `

// const PrimaryButton = styled(ButtonBase)`
//   background-color: var(--color-ggtxOrange500);
//   color: var(--color-white);
//   &:hover {
//     background-color: var(--color-ggtxOrange700);
//   }
// `
// const SecondaryButton = styled(ButtonBase)`
//   background-color: var(--color-ggtxTeal500);
//   color: var(--color-ggtxCharcoal800);
//   &:hover {
//     background-color: var(--color-ggtxTeal700);
//   }
// `
// const InvisibleButton = styled(ButtonBase)`
//   color: var(--color-ggtxCharcoal800);
//   background-color: transparent;
//   outline-color: var(--color-gray500);
//   box-shadow: none;
//   &:hover {
//     background: var(--color-transparentGray100);
//     color: var(--color-black);
//   }
// `

export type ButtonProps = ComponentProps<typeof Button>;
export default Button;
