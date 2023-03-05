import { useSelector, useDispatch } from "react-redux";
import { productPropertiesAction } from "../../store/productPropertiesSlice";
import { useScreenProducts } from "../../hooks/useScreenProducts";
import DropMenu from "../../components/DropMenu";
import Main from "../../components/layout/main";
import ProductUpdateForm from "../../components/ProductUpdateForm";
import { useApi } from "../../hooks/useApi";
import {
  getBrands,
  getCountries,
  getRams,
} from "../../store/productPropertiesSlice";
import Loader from "../../components/Loader";
import styles from "./style/index.module.scss";
import TextByLocation from "../../components/TextByLocation";
import useGetProductByLocation from "../../hooks/useGetProductByLocation";
////
function ProductProperties() {
  /////////
  useApi(getBrands());
  useApi(getCountries());
  useApi(getRams());
  /////////
  const { brands, countries, rams, loading } = useSelector(
    (state) => state.productProperties
  );
  const { createdProduct } = useSelector((state) => state.createProduct);
  ////////
  const dispatch = useDispatch();
  ////////
  ///////
  const { getBrandId, getCountryId, getRamId } = productPropertiesAction;
  ///////
  const onHandleGetBrandId = (id) => dispatch(getBrandId(id));
  const onHandleGetCountryId = (id) => dispatch(getCountryId(id));
  const onHandleGetRamId = (id) => dispatch(getRamId(id));
  //////
  ///////
  const { productByLocation } = useGetProductByLocation();
  //////
  return (
    <div className={styles.property}>
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <section className={styles.propertySection}>
            <div className={styles.sectionDropMenu}>
              <DropMenu
                data={brands}
                text={"Brands"}
                getValue={onHandleGetBrandId}
              />
              <DropMenu
                data={countries}
                text={"Countries"}
                getValue={onHandleGetCountryId}
              />
              <DropMenu data={rams} text={"Rams"} getValue={onHandleGetRamId} />
            </div>
            <ProductUpdateForm />
          </section>
        </>
      )}
      <div className={styles.wrapperForMain}>
        <TextByLocation />
        <Main>{useScreenProducts(productByLocation())}</Main>
      </div>
    </div>
  );
}
/////////////////
export default ProductProperties;
