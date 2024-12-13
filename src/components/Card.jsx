import { cn } from '../lib/utils';

const Card = ({ className, children }) => {
  return (
    <div className={cn('bg-white rounded-lg py-6 px-7 shadow-blockShadow border border-[var(--platinum)]', className)}>
      {children}
    </div>
  );
};

export default Card;