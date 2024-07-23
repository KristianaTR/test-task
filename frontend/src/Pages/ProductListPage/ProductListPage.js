import "./ProductListPage.style.scss";
import Button from "../../Components/Button";

const ProductListPage = () => {
  return (
    <section className="product-list">
      <header>
        <h1>Product List</h1>
        <div className="product-list__actions">
          <Button text="ADD" />
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
