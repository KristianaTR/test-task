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

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleProductTypeChange = (e) => {
    setFormData({ ...formData, productType: e.target.value });
    validateForm();
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    const errormessage = {
      required: "Please, submit required data.",
      invalid: "Please, provide the data of indicated type.",
    };

    switch (name) {
      case "sku":
        if (!value) newErrors.sku = errormessage.required;
        else if (!/^[a-zA-Z0-9]+$/.test(value)) newErrors.sku = errormessage.invalid;
        else delete newErrors.sku;
        break;
      case "name":
        if (!value) newErrors.name = errormessage.required;
        else delete newErrors.name;
        break;
      case "price":
        if (!value) newErrors.price = errormessage.required;
        else if (isNaN(value) || value <= 0) newErrors.price = errormessage.invalid;
        else delete newErrors.price;
        break;
      case "productType":
        if (!value) newErrors.productType = errormessage.required;
        else delete newErrors.productType;
        break;
      case "weight":
        if (formData.productType === "Book") {
          if (!value) newErrors.weight = errormessage.required;
          else if (isNaN(value) || value <= 0) newErrors.weight = errormessage.invalid;
          else delete newErrors.weight;
        }
        break;
      case "size":
        if (formData.productType === "DVD") {
          if (!value) newErrors.size = errormessage.required;
          else if (isNaN(value) || value <= 0) newErrors.size = errormessage.invalid;
          else delete newErrors.size;
        }
        break;
      case "height":
        if (formData.productType === "Furniture") {
          if (!value) newErrors.height = errormessage.required;
          else if (isNaN(value) || value <= 0) newErrors.height = errormessage.invalid;
          else delete newErrors.height;
        }
        break;
      case "width":
        if (formData.productType === "Furniture") {
          if (!value) newErrors.width = errormessage.required;
          else if (isNaN(value) || value <= 0) newErrors.width = errormessage.invalid;
          else delete newErrors.width;
        }
        break;
      case "length":
        if (formData.productType === "Furniture") {
          if (!value) newErrors.length = errormessage.required;
          else if (isNaN(value) || value <= 0) newErrors.length = errormessage.invalid;
          else delete newErrors.length;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    let newErrors = {};
    const errormessage = {
      required: "Please, submit required data.",
      invalid: "Please, provide the data of indicated type.",
    };

    if (!formData.sku) newErrors.sku = errormessage.required;
    if (!formData.name) newErrors.name = errormessage.required;
    if (!formData.price) newErrors.price = errormessage.required;
    if (!formData.productType) newErrors.productType = errormessage.required;

    if (formData.productType === "Book") {
      if (!formData.weight) {
        newErrors.weight = errormessage.required;
      } else if (isNaN(formData.weight) || formData.weight <= 0) {
        newErrors.weight = errormessage.invalid;
      }
    }

    if (formData.productType === "DVD") {
      if (!formData.size) {
        newErrors.size = errormessage.required;
      } else if (isNaN(formData.size) || formData.size <= 0) {
        newErrors.size = errormessage.invalid;
      }
    }

    if (formData.productType === "Furniture") {
      // Validate height
      if (!formData.height) {
        newErrors.height = errormessage.required;
      } else if (isNaN(formData.height) || formData.height <= 0) {
        newErrors.height = errormessage.invalid;
      }

      // Validate width
      if (!formData.width) {
        newErrors.width = errormessage.required;
      } else if (isNaN(formData.width) || formData.width <= 0) {
        newErrors.width = errormessage.invalid;
      }

      // Validate length
      if (!formData.length) {
        newErrors.length = errormessage.required;
      } else if (isNaN(formData.length) || formData.length <= 0) {
        newErrors.length = errormessage.invalid;
      }
    }

    // Validate SKU: Assuming SKU is alphanumeric
    if (formData.sku && !/^[a-zA-Z0-9]+$/.test(formData.sku)) {
      newErrors.sku = errormessage.invalid;
    }

    // Validate price: Must be a positive number
    if (formData.price && (isNaN(formData.price) || formData.price <= 0)) {
      newErrors.price = errormessage.invalid;
    }

    // Add more validation as needed

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log(formData);
      navigate("/");
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
