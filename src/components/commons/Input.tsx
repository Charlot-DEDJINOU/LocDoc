import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<{ className?: string }>;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  className = "",
  ...props
}) => (
  <div
    className={`flex items-center bg-white bg-opacity-80 border border-gray-300
      rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition
      ${className}`}
  >
    {Icon && <Icon className="w-5 h-5 text-gray-400 mr-2" />}
    <input
      className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
      {...props}
    />
  </div>
);

export default Input;