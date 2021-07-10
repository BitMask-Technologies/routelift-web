import React from "react";

const Button = ({onClick, title, className}) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold w-auto pt-4 pb-4 px-6 whitespace-nowrap inline-flex items-center justify-center text-white rounded-md focus:outline-none text-sm lg:text-base ${
        className || "bg-secondary "
      }`}
    >
      {title || "Get started for free"}
    </button>
  );
};

export default Button;
