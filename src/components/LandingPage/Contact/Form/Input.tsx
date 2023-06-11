import { HTMLDivAttributes, HTMLInputAttributes } from "@/lib/types/common";
import { FieldProps } from "formik";
import { FC } from "react";

export interface FCIInput extends FieldProps<any> {
  name?: string;
  label?: string;
  placeholder?: string;
  inputProps?: HTMLInputAttributes;
  inputContainerProps?: HTMLDivAttributes;
}

const Input: FC<FCIInput> = ({
  field: { name, value, onChange, onBlur },
  inputProps,
  inputContainerProps,
  label,
  placeholder,
  meta,
}) => {
  return (
    <div {...inputContainerProps}>
      <input
        id={name}
        name={name}
        value={value as any}
        className={`form-control`}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        {...inputProps}
      />
      {/* <InputErrorMessage {...meta} /> */}
    </div>
  );
};

export default Input;
