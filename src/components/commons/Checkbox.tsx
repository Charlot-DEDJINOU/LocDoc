// Reusable checkbox
import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => (
  <label className={`flex items-center text-gray-700 ${className}`}>
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
      {...props}
    />
    <span className="ml-2 text-sm">{label}</span>
  </label>
);

export default Checkbox;