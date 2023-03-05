import { useSelector } from "react-redux";
import { useScreenProducts } from "../../hooks/useScreenProducts";
import Main from "../../components/layout/main";
import TextByLocation from "../../components/TextByLocation";
import styles from "./style/index.module.scss";
///////////////
function DeleteProduct() {
  const { products = [] } = useSelector((state) => state.products);
  const { productId = "" } = useSelector((state) => state.productProperties);
  ///////////
  const getProductById = (id = "") => {
    if (productId === "") return;
    return [products.find((item) => item.id === id)];
  };
  ///////////
  return (
    <div className={styles.delete}>
      <TextByLocation />
      <div className={styles.forMain}>
        <Main>{useScreenProducts(getProductById(productId))}</Main>
      </div>
    </div>
  );
}

export default DeleteProduct;
