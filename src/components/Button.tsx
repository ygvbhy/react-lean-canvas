import { FaSpinner } from 'react-icons/fa';

const Button = ({
  children,
  className,
  onClick,
  loading,
}: {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  loading: boolean;
}) => {
  const buttonClass = [
    'bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    className,
  ].join(' ');

  const handleClick = () => {
    if (loading) return;

    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={buttonClass} onClick={handleClick} disabled={loading}>
      <span className="flex items-center justify-center">
        {loading && <FaSpinner className="animate-spin mr-2" />}
        {children}
      </span>
    </button>
  );
};

export default Button;
