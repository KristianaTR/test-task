import './Input.style.scss';

const Input = ({
  type = "text",
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
  showError = false,
}) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {showError && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
