import Input from "../Input";

const DataFieldFurniture = ({height, width, length, onChange, errorMessage}) => {
  return (
    <div className="data-field furniture">
        <Input
            id="height"
            name="height"
            type="number"
            label="Height (Cm)"
            placeholder="Enter height in Cm"
            value={height}
            onChange={onChange}
            errorMessage={errorMessage}
        />
        <Input
            id="width"
            name="width"
            type="number"
            label="Width (Cm)"
            placeholder="Enter width in Cm"
            value={width}
            onChange={onChange}
            errorMessage={errorMessage}
        />
        <Input
            id="length"
            name="length"
            type="number"
            label="Length (Cm)"
            placeholder="Enter length in Cm"
            value={length}
            onChange={onChange}
            errorMessage={errorMessage}
        />
    </div>
  )
}

export default DataFieldFurniture