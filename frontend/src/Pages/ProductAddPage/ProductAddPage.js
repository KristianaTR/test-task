import "./ProductAddPage.style.scss";
import ProductAddForm from "../../Components/ProductAddForm";

const ProductAddPage = () => {
  return (
    <section className="product-add">
      <header>
        <h1>Product Add</h1>
      </header>
      <ProductAddForm />
    </section>
  );
};

export default ProductAddPage;
