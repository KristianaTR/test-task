import "./ProductListPage.style.scss";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

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
          <Button text="ADD" onClick={goToProductAddPage}/>
          <Button text="MASS DELETE" />
        </div>
      </header>
      <div className="product-list__container">
        <p>This is Product List container</p>
      </div>

    </section>
  );
};

export default ProductListPage;
