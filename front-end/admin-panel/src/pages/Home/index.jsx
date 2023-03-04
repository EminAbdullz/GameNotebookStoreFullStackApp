import { useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";
import { useApi } from "../../hooks/useApi";
import { useScreenProducts } from "../../hooks/useScreenProducts";
import Main from "../../components/layout/main";
import Loader from "../../components/Loader";
import styles from "./style/index.module.scss";

////////////////////
function Home() {
  const { products, loading } = useSelector((state) => state.products);
  //////////////////////
  useApi(getProducts());
  //////////////////////
  return (
    <div className={styles.home}>
      {loading === true ? <Loader /> : null}
      <Main>{useScreenProducts(products)}</Main>
    </div>
  );
}

export default Home;
