import React, {
  ForwardedRef,
  useRef,
  HTMLAttributes,
  ComponentPropsWithRef,
} from "react";

export type ButtonBaseProps = {
  /** The content to display in the button. */
  children?: React.ReactNode;
  /** Mutable reference to an object, the DOM entity passed to a child component that is created by its parent component. Allows the child component to read and modify the element from any location where it is used. */
  forwardedRef?: ForwardedRef<ButtonBaseProps>;
  /** @deprecated Please use onPress instead*/
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * The behavior of the button when used in an HTML form.
   * @default 'button'
   */
  type?: "button" | "submit" | "reset";
};

/**
 * `ButtonBase` is the base element that renders a semantic `button`.
 */
export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <button {...props} ref={forwardedRef}>
        {props.children}
      </button>
    );
  }
);

ButtonBase.displayName = "ButtonBase";

export default {
  ButtonBase: ButtonBase,
};
