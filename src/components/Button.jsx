import { cn } from '../lib/utils';

const Button = ({ variant = 'default', children, onClick, className = '', ...props }) => {
  const baseStyles = 'flex items-center gap-3 py-[8px] px-[12px] font-montserrat font-bold text-xs rounded-lg transition duration-300 ease-in-out';

  const variantStyles = {
    flat: 'text-sm text-[var(--arsenic)] font-nunito font-medium hover:bg-[var(--cultured)] py-[10px] px-[12px]',
    default: 'text-white bg-[var(--pansy-purple)] hover:bg-[#5a0101]',
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;