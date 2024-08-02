export const validateField = (name, value, formData, errors) => {
  let newErrors = { ...errors };
  const errormessage = {
    required: "Please, submit required data.",
    invalid: "Please, provide the data of indicated type.",
  };

  switch (name) {
    case "sku":
      if (!value) newErrors.sku = errormessage.required;
      else if (!/^[a-zA-Z0-9]+$/.test(value))
        newErrors.sku = errormessage.invalid;
      else delete newErrors.sku;
      break;
    case "name":
      if (!value) newErrors.name = errormessage.required;
      else delete newErrors.name;
      break;
    case "price":
      if (!value) newErrors.price = errormessage.required;
      else if (isNaN(value) || value <= 0)
        newErrors.price = errormessage.invalid;
      else delete newErrors.price;
      break;
    case "productType":
      if (!value) newErrors.productType = errormessage.required;
      else delete newErrors.productType;
      break;
    case "weight":
      if (formData.productType === "Book") {
        if (!value) newErrors.weight = errormessage.required;
        else if (isNaN(value) || value <= 0)
          newErrors.weight = errormessage.invalid;
        else delete newErrors.weight;
      }
      break;
    case "size":
      if (formData.productType === "DVD") {
        if (!value) newErrors.size = errormessage.required;
        else if (isNaN(value) || value <= 0)
          newErrors.size = errormessage.invalid;
        else delete newErrors.size;
      }
      break;
    case "height":
      if (formData.productType === "Furniture") {
        if (!value) newErrors.height = errormessage.required;
        else if (isNaN(value) || value <= 0)
          newErrors.height = errormessage.invalid;
        else delete newErrors.height;
      }
      break;
    case "width":
      if (formData.productType === "Furniture") {
        if (!value) newErrors.width = errormessage.required;
        else if (isNaN(value) || value <= 0)
          newErrors.width = errormessage.invalid;
        else delete newErrors.width;
      }
      break;
    case "length":
      if (formData.productType === "Furniture") {
        if (!value) newErrors.length = errormessage.required;
        else if (isNaN(value) || value <= 0)
          newErrors.length = errormessage.invalid;
        else delete newErrors.length;
      }
      break;
    default:
      break;
  }

  return newErrors;
};

export const validateForm = (formData) => {
  let newErrors = {};
  const errormessage = {
    required: "Please, submit required data.",
    invalid: "Please, provide the data of indicated type.",
  };

  // Validate SKU: Assuming SKU is alphanumeric
  if (!formData.sku) newErrors.sku = errormessage.required;
  else if (formData.sku && !/^[a-zA-Z0-9]+$/.test(formData.sku)) {
    newErrors.sku = errormessage.invalid;
  }

  if (!formData.name) newErrors.name = errormessage.required;

  // Validate price: Must be a positive number
  if (!formData.price) newErrors.price = errormessage.required;
  else if (formData.price && (isNaN(formData.price) || formData.price <= 0)) {
    newErrors.price = errormessage.invalid;
  }

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

  return newErrors;
};
