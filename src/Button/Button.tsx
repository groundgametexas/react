import React, { ComponentProps } from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

/**
 * Buttons consist of a clickable area usually containing a textual label or an icon that users can click to perform an action.
 *
 * In addition, keyboard users may activate buttons using the Space or Enter keys.
 *
 * Button supports user interactions via mouse, keyboard, and touch.
 *
 */
const Button = ({ ...props }: ButtonBaseProps) => {
  let { children, ...additionalProps } = props;

  return <ButtonBase {...additionalProps}>{children}</ButtonBase>;
};

export type ButtonProps = ComponentProps<typeof Button>;
export default Button;
