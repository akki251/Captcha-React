import React from "react";

const CustomInput = ({ labelTitle, htmlFor, children }) => {
  return (
    <div className=" py-1 flex flex-col space-y-2">
      <label htmlFor={htmlFor}>{labelTitle}</label>
      {children}
    </div>
  );
};

export default CustomInput;
