import React, { useId } from "react";

export default function CustomSelectForState({
  label,
  value,
  setValue,
  options = [],
  className,
  placeholder = "All",
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
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value ?? option}>
              {option.label ?? option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
