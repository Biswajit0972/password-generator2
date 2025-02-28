import React, { useEffect, useState } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { checkPasswordValid } from "../hooks/passwordGenerator";

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
  setPassword?: (e: string) => void;
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
  value,
  setPassword,
}) => {

  const [passwordStrength,  setPasswordStrength] = useState<string>("");

   useEffect(() => {
    const genStrength = checkPasswordValid(value||"")
    setPasswordStrength(genStrength);
   }, [value])
  return (
    <div className="relative">
      <input
        {...register(name, { required })}
        type={type}
        placeholder={placeHolder}
        className={className}
        value={value}
        onChange={(e) => {
           if (setPassword) {
            setPassword(e.target.value);
           }
        }}
      />
      {name === "password" && (
        <p className="font-secondary my-3">
          <span className="text-white-500">Strength of Password:</span> {passwordStrength}{" "}
        </p>
      )}
      {errors && <p className={errorClass}>{errors.message}</p>}
    </div>
  );
};

export default CustomInput;
