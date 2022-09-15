import React, {
  ForwardedRef,
  Component
} from "react";
import {Box} from '..'
import type * as Polymorphic from "@radix-ui/react-polymorphic";

export interface ButtonBaseProps {
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
  /** Show loading button style and spinner. */
  isLoading?: boolean;
  /** A helper rendered at the start of the button. */
  leadingVisual?: () => React.ReactNode;
  /** A helper rendered at the end of the button. */
  trailingVisual?: () => React.ReactNode;
  /** A helper rendered as a loading state. */
  loadingEnhancer?: () => React.ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'invisible'
  /** Size */
  size?: 'small' | 'medium' | 'large'
  /** Whether the button should be full width */
  block?: boolean
} 


/**
 * `ButtonBase` is the base element that renders a semantic `button`.
 */
export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ size='medium',  ...props }, forwardedRef) => {
    return (
      <button {...props as any} ref={forwardedRef}>
        {props.children}
      </button>    
    );
  }
);

ButtonBase.displayName = "ButtonBase";

/* -------------------------------------------------------------------------------------------------
 * ButtonContent
 * -----------------------------------------------------------------------------------------------*/
export type ButtonContentProps = Pick<
  ButtonBaseProps,
  "leadingVisual" | "trailingVisual" | "isLoading" | "loadingEnhancer"
>;

const BUTTON_CONTENT_NAME = "ButtonContent";
const BUTTON_CONTENT_DEFAULT_TAG = "span";

export type ButtonContentPrimitive = Polymorphic.ForwardRefComponent<
  typeof BUTTON_CONTENT_DEFAULT_TAG,
  ButtonContentProps
>;

/**
 * `ButtonContent` contains the content of a `Button`.
 */
export const ButtonContent = React.forwardRef((props, forwardedRef) => {
  const {
    leadingVisual,
    trailingVisual,
    loadingEnhancer,
    isLoading,
    children,
  } = props;

  return (
    <React.Fragment>
      {isLoading ? null : leadingVisual && leadingVisual()}

      {children}

      {isLoading ? null : trailingVisual && trailingVisual()}
    </React.Fragment>
  );
}) as ButtonContentPrimitive;

ButtonContent.displayName = BUTTON_CONTENT_NAME;

/* -------------------------------------------------------------------------------------------------
 * ButtonLoadingContainer
 * -----------------------------------------------------------------------------------------------*/
export type ButtonLoadingContainerProps = Pick<ButtonBaseProps, "isLoading">;

const BUTTON_LOADING_CONTAINER_NAME = "ButtonLoadingContainer";
const BUTTON_LOADING_CONTAINER_DEFAULT_TAG = "span";

export type ButtonLoadingContainerPrimitive = Polymorphic.ForwardRefComponent<
  typeof BUTTON_LOADING_CONTAINER_DEFAULT_TAG,
  ButtonLoadingContainerProps
>;

/**
 * `ButtonLoadingContainer` handles animations for any a `loadingEnhancer` used in `ButtonContent`.
 */
export const ButtonLoadingContainer = React.forwardRef(
  (props, forwardedRef) => {
    const {
      as = BUTTON_LOADING_CONTAINER_DEFAULT_TAG,
      isLoading,
      children,
      ...buttonLoadingContainerProps
    } = props;

    return isLoading ? (
      <Box
        {...buttonLoadingContainerProps}
        as={as}
        ref={forwardedRef}
        data-loading={isLoading ? "true" : "false"}
      >
        {children}
      </Box>
    ) : null;
  }
) as ButtonLoadingContainerPrimitive;

ButtonLoadingContainer.displayName = BUTTON_LOADING_CONTAINER_NAME;

export default {
  Base: ButtonBase,
  Content: ButtonContent,
  LoadingContainer: ButtonLoadingContainer
};
