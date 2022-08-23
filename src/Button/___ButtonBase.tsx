import React, { ForwardedRef, useRef, HTMLAttributes, ComponentPropsWithRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { AriaButtonProps } from "@react-types/button";

export type ButtonBaseProps = {
  /** The content to display in the button. */
  children?: React.ReactNode;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** Use UNSAFE_className as a last resort */
  UNSAFE_className?: string;
  /** @deprecated Please use onPress instead*/
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Mutable reference to an object, the DOM entity passed to a child component that is created by its parent component. Allows the child component to read and modify the element from any location where it is used. */
  forwardedRef?: ForwardedRef<ButtonBaseProps>;
  /** Whether the button is currently pressed.*/
  isPressed?: boolean
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: boolean | 'true' | 'false',
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false',
  /** Identifies the element (or elements) whose contents or presence are controlled by the current element. */
  'aria-controls'?: string,
  /** Indicates the current "pressed" state of toggle buttons. */
  'aria-pressed'?: boolean | 'true' | 'false' | 'mixed',
  /**
   * The behavior of the button when used in an HTML form.
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset'
} & AriaButtonProps;

const BUTTON_BASE_NAME = "ButtonBase";
const BUTTON_BASE_DEFAULT_TAG = "button";

export type ButtonBasePrimitive = Polymorphic.ForwardRefComponent<
  typeof BUTTON_BASE_DEFAULT_TAG,
  ButtonBaseProps
>;

/**
 * `ButtonBase` is the base element that renders a semantic `button`.
 */
export const ButtonBase = React.forwardRef<HTMLElement, ButtonBaseProps>(({...props}, forwardedRef) => {
  let fallbackRef = useRef(null);
  let domRef = forwardedRef || fallbackRef;

  let { buttonProps, isPressed } = useButton({...props}, forwardedRef);

  return (
    <button {...buttonProps} ref={forwardedRef}>
      {props.children}
    </button>
  );
}) as ButtonBasePrimitive;

ButtonBase.displayName = "ButtonBase"

export default {
  ButtonBase: ButtonBase
};

// button: 
// return (
//   <ButtonBase
//     UNSAFE_className={UNSAFE_className}
//     ref={ref}
//     css={{
//       borderRadius: "$3",
//       backgroundColor: "var(--scale-forest-green-300)",
//       "&:hover": {
//         backgroundColor: "var(--scale-forest-green-700)",
//         color: "white",
//       },
//     }}
//   >
//     {children}
//   </ButtonBase>
// );
// };
