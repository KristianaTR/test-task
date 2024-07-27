import Input from "../Input";

const DataFieldBook = ({weight, onChange, errorMessage}) => {
  return (
    <div className="data-field book">
        <Input
            id="weight"
            name="weight"
            type="number"
            label="Weight (Kg)"
            placeholder="Enter weight in Kg"
            value={weight}
            onChange={onChange}
            errorMessage={errorMessage}
        />
    </div>
  )
}

export default DataFieldBook