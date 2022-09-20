import React from "react";
import {
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldValues,
} from "react-hook-form";
import { Input, InputProps } from "..";

// <TFormValues> is a generic type that represents any potential form
export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
} & Omit<InputProps, "name">;

export const FormInput = <TFormValues extends Record<string, unknown>>({
  UNSAFE_className,
  name,
  register,
  rules,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <div className={UNSAFE_className} aria-live="polite">
      <Input name={name} {...props} {...(register && register(name, rules))} />
    </div>
  );
};
