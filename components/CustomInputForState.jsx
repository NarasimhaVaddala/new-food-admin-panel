import React, { useId, useState } from "react";

export default function CustomInputForState({
  type = "text",
  placeholder,
  label,
  value,
  setValue,
  className,
}) {
  const id = useId();

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="mt-1">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          className={`appearance-none block w-full px-3 py-2 border ${"border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
        />
      </div>
    </div>
  );
}
