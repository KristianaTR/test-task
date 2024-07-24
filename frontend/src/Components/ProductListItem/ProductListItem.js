import './ProductListItem.style.scss';

const ProductListItem = ({ product }) => {
  return (
    <div className="product-item__container">
      <input type="checkbox" className="delete-checkbox"></input>
      <div className="product-item__details">
        <p>{product.sku}</p>
        <p>{product.name}</p>
        <p>{product.price.toFixed(2)} $</p>
        <p>
          {(product.type === "Book") && `Weight: ${product.attribute.weight}`}
          {(product.type === "DVD-disc") && `Size: ${product.attribute.size}`}
          {(product.type === "Furniture") &&
            `Dimensions: ${product.attribute.dimensions}`}
        </p>
      </div>
    </div>
  );
};

export default ProductListItem;
