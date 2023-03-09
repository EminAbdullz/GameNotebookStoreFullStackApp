import Main from "../../components/layout/main";
import TextByLocation from "../../components/TextByLocation";
import styles from "./style/index.module.scss";
import useScreenProducts from "../../hooks/useScreenProducts";

function DeleteProduct() {
  ///////////
  return (
    <div className={styles.delete}>
      <TextByLocation />
      <div className={styles.forMain}>
        <Main>{useScreenProducts()}</Main>
      </div>
    </div>
  );
}

export default DeleteProduct;
