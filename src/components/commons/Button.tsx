interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-lg",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;