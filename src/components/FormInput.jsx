const FormInput = ({
  id,
  type = "text", // Default to "text" input
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
  ...props
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full font-nunito font-medium bg-white text-xs px-[8px] py-[6.5px] border border-[var(--platinum)] rounded-lg text-[var(--arsenic)] ${className}`}
      placeholder={placeholder}
      required={required}
      {...props}
    />
  );
};

export default FormInput;