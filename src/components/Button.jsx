import React from "react";
import clsx from "clsx"; // Import clsx for conditional classes

const Button = ({ type = "button", label, onClick, className, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "w-full bg-blue-600 text-white py-2 rounded-md font-semibold transition-all",
        "hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed",
        className // Allow additional custom styles
      )}
    >
      {label}
    </button>
  );
};

export default Button;
