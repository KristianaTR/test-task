import "./ProductAddPage.style.scss";
import Button from "../../Components/Button";

const ProductAddPage = () => {
  return (
    <section className="product-add">
      <header>
        <h1>Product Add</h1>
        <div className="product-add actions">
          <Button text="Save" />
          <Button text="Cancel" />
        </div>
      </header>
      <div className="product-add__container">
        <p>This is Product Add container</p>
      </div>
    </section>
  );
};

export default ProductAddPage;
