const Input = ({
  type,
  label,
  id,
  value,
  placeholder,
  onChange,
  min,
  max,
  disabled,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-md text-gray-900 font-bold"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`border text-gray-200 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 ${
          type == "number" ? "text-center" : ""
        }`}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        min={min}
        max={max}
        aria-describedby="helper-text-explanation"
        required
      />
    </>
  );
};
export default Input;
