import Input from "../Input";

const DataFieldFurniture = ({
  height,
  width,
  length,
  onChange,
  onBlur,
  errorMessage,
  showError,
  descriptionMessage,
  showDescription,
}) => {
  return (
    <div className="data-field furniture">
      <Input
        id="height"
        name="height"
        type="number"
        label="Height (Cm) *"
        placeholder="Enter height in Cm"
        value={height}
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage.height}
        showError={!!errorMessage.height}
        
      />
      <Input
        id="width"
        name="width"
        type="number"
        label="Width (Cm) *"
        placeholder="Enter width in Cm"
        value={width}
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage.width}
        showError={!!errorMessage.width}
       
      />
      <Input
        id="length"
        name="length"
        type="number"
        label="Length (Cm) *"
        placeholder="Enter length in Cm"
        value={length}
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage.length}
        showError={!!errorMessage.length}
      />
      {showDescription && descriptionMessage && (
        <p className="message description">{descriptionMessage}</p>
      )}
    </div>
  );
};

export default DataFieldFurniture;
