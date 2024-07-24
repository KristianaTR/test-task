import "./ProductListPage.style.scss";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import productList from "../../productData";
import ProductListItem from "../../Components/ProductListItem";

const ProductListPage = () => {
  const navigate = useNavigate();
  const goToProductAddPage = () => {
    navigate("/add-product");
  };

  return (
    <section className="product-list">
      <header>
        <h1>Product List</h1>
        <div className="product-list actions">
          <Button text="ADD" onClick={goToProductAddPage} />
          <Button text="MASS DELETE" />
        </div>
      </header>
      <div className="product-list__container">
        {productList.map((product) => (
          <ProductListItem key={product.sku} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default ProductListPage;
