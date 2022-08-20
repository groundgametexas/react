import React, { ComponentProps } from "react";
import { ButtonBase } from "./ButtonBase";

/**
 * Buttons consist of a clickable area usually containing a textual label or an icon that users can click to perform an action.
 *
 * In addition, keyboard users may activate buttons using the Space or Enter keys.
 */
const Button = ({ ...props }) => {
  return <button>hello world</button>;
};

export type ButtonProps = ComponentProps<typeof Button>;
export default Button;
