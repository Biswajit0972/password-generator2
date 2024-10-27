import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface CustomInputProps {
  placeHolder?: string;
  className: string;
  register: UseFormRegister<any>;
  required?: boolean;
  errors?: FieldError;
  type?: string;
  name: string;
  errorClass?: string;
  value?: string;
}
const CustomInput: React.FC<CustomInputProps> = ({
  placeHolder,
  className,
  register,
  required = false,
  errors,
  type,
  name,
  errorClass,
 value
}) => {
  
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeHolder}
        className={className}
        value={value}
        {...register(name, { required })}
      />

      {errors && <p className={errorClass}>{errors.message}</p>}
    </div>
  );
};

export default CustomInput;
