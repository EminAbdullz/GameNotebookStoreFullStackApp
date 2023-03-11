import { useSelector } from "react-redux";
import { asyncThunkToGetProducts } from "../../store/products/productsSlice/index";
import { useApi } from "../../hooks/useApi";
import Main from "../../components/layout/main";
import Loader from "../../components/Loader";
import styles from "./style/index.module.scss";
import useScreenProducts from "../../hooks/useScreenProducts";
import TextByLocation from "../../components/TextByLocation";
import { Link } from "react-router-dom";

////////////////////
function Home() {
  const { loading } = useSelector((state) => state.products);
  useApi(asyncThunkToGetProducts());

  return (
    <div className={styles.home}>

      {loading === true ? <Loader /> : null}
      <Link to={"/create"}>
        <TextByLocation />
      </Link>
      <Main>{useScreenProducts()}</Main>
    </div>
  );
}

export default Home;
