import React, { ComponentProps } from "react";
import type * as Stitches from "@stitches/react";
import { styled, keyframes } from "@stitches/react";

import { Meta, Story } from "@storybook/react";
import { PopoverTrigger, Popover, PopoverContent, PopoverClose } from "..";

const CloseButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

type PopoverProps = ComponentProps<typeof Popover>;

export default {
  title: "Popover",
  component: Popover,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const popover = (args: PopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton aria-label="Update dimensions">Open</IconButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverClose aria-label="Close">
          <CloseButton />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

const IconButton = styled("button", {
  all: "unset",
  borderRadius: "$3",
  padding: "$2",
  height: 24,
  width: "fit-content",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$textDefault",
  background: "$backgroundNeutralDefaultDefault",
  borderColor: "",
  fontFamily: "$sans",
  border: "1px solid transparent",
  fontWeight: "$bold",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "&:focus": {
    outlineColor: "$borderAccentOrange",
    outlineOffset: "4px",
  },
  "&:hover": {
    background: "$backgroundNeutralDefaultHovered",
  }
});

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

const Label = styled("label", {
  fontSize: 13,
  color: "black",
  width: 75,
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  borderRadius: "8px",
  padding: "0 10px",
  fontSize: 13,
  lineHeight: 1,
  color: "black",
  boxShadow: `0 0 0 1px black`,
  height: 25,

  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const Text = styled("div", {
  margin: 0,
  color: "black",
  fontSize: 15,
  lineHeight: "19px",
  variants: {
    faded: {
      true: { color: "black" },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

popover.argTypes = {};
popover.args = {};
popover.storyName = "Popover";
