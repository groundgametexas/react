import React from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../stitches.config";

const StyledStack = styled("div", {
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    gap: {
      0: {
        gap: 0,
      },
      1: {
        gap: "4px",
      },
      2: {
        gap: "8px",
      },
      3: {
        gap: "16px",
      },
      4: {
        gap: "20px",
      },
      5: {
        gap: "24px",
      },
      6: {
        gap: "32px",
      },
      7: {
        gap: "40px",
      },
      8: {
        gap: "48px",
      },
      9: {
        gap: "56px",
      },
    },
    width: {
      full: {
        width: "100%",
      },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
    },
  },
});

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Gap between items
   */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  /**
   * Direction the stack should render
   */
  direction: "row" | "column";
  /**
   * Stack alignement
   */
  align?: "center" | "start" | "end";
  /**
   * Stack justification
   */
  justify?: "center" | "start" | "end" | "between";
  /**
   * Whether or not the stack should be full-width
   */
  width?: "full";
  /**
   * Children to render in the stack
   */
  children: React.ReactNode;
  /**
   * Whether the stack items should wrap
   */
  wrap?: boolean;
  /**
   * CSS to apply to the stack
   */
  css?: Stitches.CSS;
};

/**
 * Stack is a low-level utility component for arranging items in a horizontal or vertical stack, with even spacing between the items.
 */
export default function Stack({
  gap,
  direction,
  align,
  justify,
  width,
  wrap,
  children,
  css,
  ...props
}: StackProps) {
  return (
    <StyledStack
      gap={gap}
      direction={direction}
      align={align}
      justify={justify}
      width={width}
      css={css}
      wrap={wrap}
      {...props}
    >
      {children}
    </StyledStack>
  );
}
