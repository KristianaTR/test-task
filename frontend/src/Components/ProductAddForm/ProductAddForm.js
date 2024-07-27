import "./ProductAddForm.style.scss";
import Input from "../Input";
import Button from "../Button";
import ProductTypeSwitcher from "../ProductTypeSwitcher";
import DataFieldBook from "../DataFieldBook";
import DataFieldDVD from "../DataFieldDVD";
import DataFieldFurniture from "../DataFieldFurniture";
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
        <ProductTypeSwitcher
          productType={formData.productType}
          onChange={handleProductTypeChange}
        />
        {formData.productType === "Book" && (
          <DataFieldBook
            weight={formData.weight}
            onChange={handleChange}
            errorMessage="I need to set up the logic!!"
          />
        )}
        {formData.productType === "DVD" && (
          <DataFieldDVD
            size={formData.size}
            onChange={handleChange}
            errorMessage="I need to set up the logic!!"
          />
        )}
        {formData.productType === "Furniture" && (
          <DataFieldFurniture
            height={formData.height}
            width={formData.width}
            length={formData.length}
            onChange={handleChange}
            errorMessage="I need to set up the logic!!"
          />
        )}
      </div>
    </form>
  );
};

export default ProductAddForm;
