import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "./style/index.module.scss";

function TextByLocation() {
  const location = useLocation();
  //////
  const { products = [] } = useSelector((state) => state.products);
  const { productId = "" } = useSelector((state) => state.productProperties);
  const { createdProduct = [] } = useSelector((state) => state.createProduct);
  //////
  if (location.pathname === "/" && !products.length) {
    return (
      <p className={styles.paragraf}>
        Data Base is Empty. Tap here to create new Product.{" "}
      </p>
    );
  }
  if (location.pathname === "/create" && !createdProduct.length) {
    return <p className={styles.paragraf}>No Products created yet.</p>;
  }
  //////
  if (location.pathname === "/update" && productId === "") {
    return <p className={styles.paragraf}> No Products updated yet. </p>;
  }
  //////
}

export default TextByLocation;
