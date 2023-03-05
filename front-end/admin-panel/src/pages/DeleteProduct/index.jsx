import { useScreenProducts } from "../../hooks/useScreenProducts";
import Main from "../../components/layout/main";
import TextByLocation from "../../components/TextByLocation";
import styles from "./style/index.module.scss";
import useGetProductByLocation from "../../hooks/useGetProductByLocation";

function DeleteProduct() {
  //////////
  const { productByLocation } = useGetProductByLocation();
  ///////////
  return (
    <div className={styles.delete}>
      <TextByLocation />
      <div className={styles.forMain}>
        <Main>{useScreenProducts(productByLocation())}</Main>
      </div>
    </div>
  );
}

export default DeleteProduct;
