import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { useForm } from "react-hook-form";

import { Input, Label, Button, FormInput } from "..";

type InputProps = ComponentProps<typeof Input>;
type LabelProps = ComponentProps<typeof Label>;
type FormInputProps = ComponentProps<typeof FormInput>;

export default {
  title: "Input",
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const input = (args: InputProps) => {
  return <Input {...args} />;
};
input.argTypes = {};
input.args = {
  placeholder: "First name",
};
input.storyName = "Input";
