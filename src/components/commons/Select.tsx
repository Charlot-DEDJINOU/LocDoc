// Reusable select dropdown
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ placeholder, options, className = '', ...props }) => (
  <div
    className={
      `relative bg-white bg-opacity-80 border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-primary transition ${className}`
    }
  >
    <select
      className="w-full bg-transparent outline-none text-gray-700 appearance-none"
      {...props}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      ›
    </span>
  </div>
);

export default Select;