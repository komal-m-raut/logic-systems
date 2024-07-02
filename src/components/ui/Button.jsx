import React from "react";

const Button = ({ children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="border-[1px] rounded-md py-[3px] px-[7px] hover:bg-themeTealDark hover:text-white duration-300 ease-in"
  >
    {children}
  </button>
);

export default Button;
