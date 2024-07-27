import Input from "../Input";

const DataFieldDVD = ({size, onChange, errorMessage}) => {
  return (
    <div className="data-field dvd">
        <Input
            id="size"
            name="size"
            type="number"
            label="Size (in MB)"
            placeholder="Enter size in MB"
            value={size}
            onChange={onChange}
            errorMessage={errorMessage}
        />
    </div>
  )
}

export default DataFieldDVD