import React from "react";

const InputGroup = ({
  className,
  type,
  label,
  labelColor,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  ...props
}) => {
  return (
    <div className={className || "mb-4 lg:mb-6"}>
      <label html={name} className={`text-sm lg:text-base  ${labelColor || ""}`}>
        {label}
      </label>
      <div className="relative input input-field w-full mb-2">
        <input
          type={type || "text"}
          className={`mt-3 block px-5 h-12 lg:h-14 text-sm lg:text-base w-full rounded-lg border bg-white focus:outline-none ${
            error ? "border-red-600" : " customer-border"
          }`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      </div>
      <span className="text-red-600 text-sm">{error}</span>
    </div>
  );
};

export default InputGroup;
