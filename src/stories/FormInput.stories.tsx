import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FormInput, Label, Button } from "..";

type LabelProps = ComponentProps<typeof Label>;
type FormInputProps = ComponentProps<typeof FormInput>;

export default {
  title: "Input",
  component: FormInput,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export type DemoFormFields = {
  firstName: string;
};

export const form = (args: FormInputProps & LabelProps & DemoFormFields) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
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
