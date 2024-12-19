const FormSelect = ({
  id,
  name,
  value,
  onChange,
  options = [], // Array of options to populate the select menu
  placeholder = "Select an option", // Default placeholder
  required = false,
  ...props
}) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={"w-full font-nunito font-medium bg-white text-xs px-[4px] py-[6.5px] border border-[var(--platinum)] rounded-lg]"}
      required={required}
      {...props}
    >
      <option value="" disabled style={{ color: "#9E9E9E" }}>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
