import "./ProductAddForm.style.scss";
import Input from "../Input";
import Button from "../Button";
import ProductTypeSwitcher from "../ProductTypeSwitcher";
import DataFieldBook from "../DataFieldBook";
import DataFieldDVD from "../DataFieldDVD";
import DataFieldFurniture from "../DataFieldFurniture";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validateField,
  validateForm,
} from "../../Utils/Validation/FormValidation";

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

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = validateField(name, value, formData, errors);
    setErrors(newErrors);
  };

  const handleProductTypeChange = (e) => {
    setFormData({ ...formData, productType: e.target.value });
    const newErrors = validateForm(formData);
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log(formData);
      navigate("/");
    } else {
      setErrors(newErrors);
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
      <p>* Indicates mandatory fields</p>
      <div className="product_form-fields">
        <Input
          label="SKU *"
          id="sku"
          name="sku"
          placeholder="Enter SKU"
          value={formData.sku}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.sku}
          showError={!!errors.sku}
        />
        <Input
          label="Name *"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.name}
          showError={!!errors.name}
        />
        <Input
          type="number"
          label="Price ($) *"
          id="price"
          name="price"
          placeholder="Enter Price"
          value={formData.price}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.price}
          showError={!!errors.price}
        />
        <ProductTypeSwitcher
          productType={formData.productType}
          onChange={handleProductTypeChange}
          onBlur={handleBlur}
          errorMessage={errors.productType}
          showError={!!errors.productType}
        />
        {formData.productType === "Book" && (
          <DataFieldBook
            weight={formData.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.weight}
            showError={!!errors.weight}
            descriptionMessage="Please, provide weight!"
            showDescription={!errors.size}
          />
        )}
        {formData.productType === "DVD" && (
          <DataFieldDVD
            size={formData.size}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.size}
            showError={!!errors.size}
            descriptionMessage="Please, provide size!"
            showDescription={!errors.size}
          />
        )}
        {formData.productType === "Furniture" && (
          <DataFieldFurniture
            height={formData.height}
            width={formData.width}
            length={formData.length}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={{
              height: errors.height,
              width: errors.width,
              length: errors.length,
            }}
            showError={!!errors.height || !!errors.width || !!errors.length}
            descriptionMessage="Please, provide dimensions!"
            showDescription={!errors.height && !errors.width && !errors.length}
          />
        )}
      </div>
    </form>
  );
};

export default ProductAddForm;
