import React, { ForwardedRef, useRef } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

import { useButton } from "@react-aria/button";
import { Primitive } from "@radix-ui/react-primitive";

import { AriaButtonProps } from "@react-types/button";

export type ButtonBaseProps = {
  /**
   * The content to display in the button.
   */
  children?: React.ReactNode;
  /**
   * Whether the button is disabled.
   */
  isDisabled?: boolean;
  /**
   * Use UNSAFE_className as a last resort
   */
  UNSAFE_className?: string;
  /*
   * @deprecated Please use onPress instead
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * 
   */
  forwardedRef?: ForwardedRef<ButtonBaseProps>;
} & AriaButtonProps;

const BUTTON_ROOT_NAME = "ButtonRoot";
const BUTTON_ROOT_DEFAULT_TAG = "button";

export type ButtonRootPrimitive = Polymorphic.ForwardRefComponent<
  typeof BUTTON_ROOT_DEFAULT_TAG,
  ButtonBaseProps
>;
/**
 * `ButtonBase` is the base element that renders a `button`.
 */
export const ButtonBase = ({
  children,
  isDisabled,
  onClick,
  UNSAFE_className,
}: ButtonBaseProps) => {
  let ref = useRef(null);
  let { buttonProps } = useButton({}, ref);

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
};

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
