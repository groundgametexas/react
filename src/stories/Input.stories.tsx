import React, { ComponentProps } from "react";
import type * as Stitches from "@stitches/react";

import { Meta, Story } from "@storybook/react";
import {Input, Label } from "..";

type InputProps = ComponentProps<typeof Input>;
type LabelProps = ComponentProps<typeof Label>;

export default {
  title: "Input",
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const input = (args: InputProps) => {
  return (
    <Input {...args}/>
  );
};
input.argTypes = {
};
input.args = {
  placeholder: 'First name',
};
input.storyName = "Input";

export const form = (args: InputProps & LabelProps) => {
  return (
    <>
    <form>
      <Label htmlFor={args.name}>First name</Label>
      <Input type="text" name={args.name} {...args}/>
    </form>
    </>
    
  );
};
form.argTypes = {
};
form.args = {
  placeholder: 'First name',
  name: 'first-name'
};
form.storyName = "Form Input";
