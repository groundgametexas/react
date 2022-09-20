import React from "react";
import {
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import get from "lodash.get";

import { Input, InputProps } from "..";

// <TFormValues> is a generic type that represents any potential form
export type FormInputProps<TFormValues extends FieldValues> = {
  /** The name of one of the fields in a form. Of type Path in order to access the fields of any nested object or array. Tells react-hook-form which input/field in the form we are trying to register. */
  name: Path<TFormValues>;
  /** Validation rules to pass into the register function for react-hook-form. */
  rules?: RegisterOptions;
  /** Registers the form input with react-hook-form, takes in any type of form. */
  register?: UseFormRegister<TFormValues>;
  /** The validation errors received from react-hook-form. Uses a Partial because there won't always be an error for every single field in our form, errors will dynamically change as the user inputs data, which means there might be an error for the field, or there might not. If the field is valid, there won't be an error. Errors must declare that any field input errors are optional. This is why we use a Partial. See: https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types/#using-partial-types. */
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, "name">;

/**
 * FormInput is a wrapper component that uses Input and react-hook-form to create a reusable component
 * that can be passed any validation rules and potential errors
 */
export const FormInput = <TFormValues extends Record<string, unknown>>({
  UNSAFE_className,
  name,
  register,
  rules,
  errors,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);
  return (
    <div className={UNSAFE_className} aria-live="polite">
      <Input
        name={name}
        aria-invalid={hasError}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => (
          <p className="mt-1 font-serif text-sm text-left block text-red-600">
            {message}
          </p>
        )}
      />
    </div>
  );
};
