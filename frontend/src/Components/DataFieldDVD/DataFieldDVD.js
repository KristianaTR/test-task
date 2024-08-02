import Input from "../Input";

const DataFieldDVD = ({
  size,
  onChange,
  onBlur,
  errorMessage,
  showError,
  descriptionMessage,
  showDescription,
}) => {
  return (
    <div className="data-field dvd">
      <Input
        id="size"
        name="size"
        type="number"
        label="Size (in MB) *"
        placeholder="Enter size in MB"
        value={size}
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        showError={showError}
        descriptionMessage={descriptionMessage}
        showDescription={!showError}
      />
    </div>
  );
};

export default DataFieldDVD;
