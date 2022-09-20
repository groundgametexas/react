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

export type DemoFormFields = {
  firstName: string;
};

export const form = (args: FormInputProps & LabelProps & DemoFormFields) => {
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
        <FormInput<DemoFormFields>
          type="text"
          name="firstName"
          id={`firstName`}
          placeholder={`First name`}
          register={register}
          rules={{ required: "First name is a required field" }}
          errors={errors}
        />
        <Button type="submit" variant={`primary`}>
          Submit
        </Button>
      </form>
    </>
  );
};
form.argTypes = {};
form.args = {};
form.storyName = "Form Input";
