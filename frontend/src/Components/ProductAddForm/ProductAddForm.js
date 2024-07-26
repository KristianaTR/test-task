import "./ProductAddForm.style.scss";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductAddForm = () => {
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    price: "",
    size: "",
    weight: "",
    height: "",
    width: "",
    length: "",
    productType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProductTypeChange = (e) => {
    setFormData({ ...formData, productType: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.sku) newErrors.sku = "SKU is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.price) newErrors.price = "Price is required";
    // Add more validation as needed

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log(formData);
      navigate("/product-list");
    }
  };

  const navigate = useNavigate();
  const goToProductListPage = () => {
    navigate("/");
  };

  return (
    <form id="product_form" onSubmit={handleSubmit}>
      <div className="product_form-actions">
        <Button text="Save" type="submit" />
        <Button text="Cancel" onClick={goToProductListPage} />
      </div>
      <div className="product_form-fields">
        <Input
          label="SKU"
          id="sku"
          name="sku"
          placeholder="Enter SKU"
          value={formData.sku}
          onChange={handleChange}
          alertMessage={errors.sku}
          showAlert={!!errors.sku}
        />
        <Input
          label="Name"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          alertMessage={errors.name}
          showAlert={!!errors.name}
        />
        <Input
          type="number"
          label="Price ($)"
          id="price"
          name="price"
          placeholder="Enter Price"
          value={formData.price}
          onChange={handleChange}
          alertMessage={errors.price}
          showAlert={!!errors.price}
        />
        <div className="type-switcher">
          <label htmlFor="productType">Type Switcher</label>
          <select
            id="productType"
            name="productType"
            value={formData.productType}
            onChange={handleProductTypeChange}
          >
            <option value="">Select a product type</option>
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default ProductAddForm;
