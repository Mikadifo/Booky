const Button = ({ type, label, color, onClick }) => {
  return (
    <button
      type={type}
      className={`bg-${color} text-gray-100 px-4 py-2 rounded-md`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
