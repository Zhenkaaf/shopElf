import ProductCard from "../productCard/ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.products}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
export default Products;
