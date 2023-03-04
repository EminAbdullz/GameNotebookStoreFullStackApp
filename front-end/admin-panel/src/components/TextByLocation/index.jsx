import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "./style/index.module.scss";

function TextByLocation() {
  const location = useLocation();
  //////
  const { productId = "" } = useSelector((state) => state.productProperties);
  const { createdProduct = [] } = useSelector((state) => state.createProduct);
  //////
  if (location.pathname === "/create" && !createdProduct.length) {
    return <p className={styles.paragraf}>No Products created yet</p>;
  }
  if (location.pathname === "/create" && createdProduct.length) {
    return <p className={styles.paragraf}> Latest created Product </p>;
  }
  //////
  if (location.pathname === "/update" && productId === "") {
    return <p className={styles.paragraf}> No updated products yet </p>;
  }
  if (location.pathname === "/update" && productId !== "") {
    return <p className={styles.paragraf}> Product to Update </p>;
  }
  //////
  if (location.pathname === "/delete" && productId === "") {
    return <p className={styles.paragraf}> No deleted Product yet </p>;
  }
}

export default TextByLocation;
