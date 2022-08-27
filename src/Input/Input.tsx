import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  ref: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, ...delegated }, ref) => {
    return (
      <label>
        {label}
        <input {...delegated} name={name} ref={ref} />
      </label>
    );
  }
);

export default Input;
