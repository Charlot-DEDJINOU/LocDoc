// Reusable button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={
      `w-full py-3 rounded-md font-semibold shadow-lg bg-gradient-to-r from-secondary to-primary text-white hover:opacity-90 transition ${className}`
    }
    {...props}
  >
    {children}
  </button>
);

export default Button;