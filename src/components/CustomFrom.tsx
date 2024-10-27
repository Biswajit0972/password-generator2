import React, { ReactNode } from "react";

interface FormProps {
  className: string;
  handelSubmit: (event: React.FormEvent) => void;
  children?: ReactNode;
}

const CustomFrom: React.FC<FormProps> = ({
  className,
  handelSubmit,
  children,
}) => {
  return (
    <form className={className} onSubmit={handelSubmit}>
      {children}
    </form>
  );
};

export default CustomFrom;
