import './ProductTypeSwitcher.style.scss';

const ProductTypeSwitcher = ({productType, onChange}) => {
  return (
    <div className="type-switcher">
      <label htmlFor="productType">Type Switcher</label>
      <select
        id="productType"
        name="productType"
        value={productType}
        onChange={onChange}
      >
        <option value="">Select a product type</option>
        <option value="DVD">DVD</option>
        <option value="Book">Book</option>
        <option value="Furniture">Furniture</option>
      </select>
    </div>
  );
};

export default ProductTypeSwitcher;
