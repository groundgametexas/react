import React, { ComponentProps } from "react";
import type * as Stitches from "@stitches/react";
import { styled, keyframes } from "@stitches/react";

import { Meta, Story } from "@storybook/react";
import { PopoverTrigger, Popover, PopoverContent, PopoverClose } from "..";

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
        <IconButton aria-label="Update dimensions">Button</IconButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverClose aria-label="Close">X</PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "8px",
  height: 44,
  width: "fit-content",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  backgroundColor: "white",
  boxShadow: `0 0px 4px #3d3d3d2e`,
  "&:hover": { backgroundColor: "#fafafa" },
  "&:focus": { boxShadow: `0 0 0 2px #3d3d3d2e` },
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
