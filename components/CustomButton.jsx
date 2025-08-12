import React from "react";

export default function CustomButton({
  type = "submit",
  text = "submit",
  onClick,
  icon,
  customStyle,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${customStyle}`}
    >
      <span>{text}</span>

      {icon}
    </button>
  );
}
