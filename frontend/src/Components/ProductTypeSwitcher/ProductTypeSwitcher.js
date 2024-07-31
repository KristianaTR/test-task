import "./ProductTypeSwitcher.style.scss";

const ProductTypeSwitcher = ({
  productType,
  onChange,
  onBlur,
  errorMessage,
  showError,
}) => {
  return (
    <div className="type-switcher">
      <label htmlFor="productType">Type Switcher *</label>
      <select
        className={showError && "error"}
        id="productType"
        name="productType"
        value={productType}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">Select a product type</option>
        <option value="DVD">DVD</option>
        <option value="Book">Book</option>
        <option value="Furniture">Furniture</option>
      </select>
      {showError && errorMessage && (
        <p className="message error">{errorMessage}</p>
      )}
    </div>
  );
};

export default ProductTypeSwitcher;
