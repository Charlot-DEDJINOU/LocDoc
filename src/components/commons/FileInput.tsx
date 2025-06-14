// Reusable file upload input
import React from "react";
import { HiPaperClip } from 'react-icons/hi';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const FileInput: React.FC<FileInputProps> = ({ placeholder, className = '', ...props }) => (
  <label
    className={
      `flex items-center justify-between bg-white bg-opacity-80 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer transition hover:border-primary ${className}`
    }
  >
    <span className="text-gray-700">{placeholder}</span>
    <HiPaperClip className="w-5 h-5 text-gray-400" />
    <input type="file" className="hidden" {...props} />
  </label>
);

export default FileInput;