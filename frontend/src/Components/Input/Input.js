import "./Input.style.scss";

const Input = ({
  type = "text",
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  errorMessage,
  showError = false,
  descriptionMessage,
  showDescription = true,
}) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        className={`input ${showError && "error"}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {showError && errorMessage && (
        <p className="message error">{errorMessage}</p>
      )}
      {!showError && showDescription && descriptionMessage && (
        <p className="message description">{descriptionMessage}</p>
      )}
    </div>
  );
};

export default Input;
