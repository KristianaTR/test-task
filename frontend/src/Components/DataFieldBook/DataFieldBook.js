import Input from "../Input";

const DataFieldBook = ({weight, onChange, onBlur, errorMessage, showError, descriptionMessage, showDescription}) => {
  return (
    <div className="data-field book">
        <Input
            id="weight"
            name="weight"
            type="number"
            label="Weight (Kg) *"
            placeholder="Enter weight in Kg"
            value={weight}
            onChange={onChange}
            onBlur={onBlur}
            errorMessage={errorMessage}
            showError={showError}
            descriptionMessage={descriptionMessage}
            showDescription={!showError}
        />
    </div>
  )
}

export default DataFieldBook