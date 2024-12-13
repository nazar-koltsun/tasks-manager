import { cn } from "../lib/utils";

const FormLabel = ({ htmlFor, children, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('block text-xs font-nunito font-medium text-[var(--arsenic)] mb-[2px]', className)}
    >
      {children}
    </label>
  );
};

export default FormLabel;