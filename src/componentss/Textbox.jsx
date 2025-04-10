import React from "react";
import clsx from "clsx";

const Textbox = ({ type, name, placeholder, label, register, error }) => {
  return (
    <div className="flex flex-col space-y-1">
      {/* Label */}
      {label && (
        <label htmlFor={name} className="text-gray-700 font-medium">
          {label}
        </label>
      )}

      {/* Input Field with Conditional Styling */}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className={clsx(
          "px-4 py-2 border rounded-md focus:outline-none focus:ring-2",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        )}
      />

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Textbox;
