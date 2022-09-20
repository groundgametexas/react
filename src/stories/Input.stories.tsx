import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { useForm } from "react-hook-form";

import { Input, Label, Button } from "..";

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
  return <Input {...args} />;
};
input.argTypes = {};
input.args = {
  placeholder: "First name",
};
input.storyName = "Input";

export type DemoFormFields = {
  firstName: string;
};

export const form = (args: InputProps & LabelProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoFormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log("submitting data...");
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <Label htmlFor={args.name}>First name</Label>
        <Input type="text" name={args.name} {...args} />
        <Button type="submit" variant={`primary`}>
          Submit
        </Button>
      </form>
    </>
  );
};
form.argTypes = {};
form.args = {
  placeholder: "First name",
  name: "first-name",
};
form.storyName = "Form Input";
