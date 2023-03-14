import { useSelector, useDispatch } from "react-redux";
import DropMenu from "../../components/DropMenu";
import Main from "../../components/layout/main";
import ProductUpdateForm from "../../components/ProductUpdateForm";
import Loader from "../../components/Loader";
import styles from "./style/index.module.scss";
import TextByLocation from "../../components/TextByLocation";
import { optionPropertiesActions } from "../../store/options/optionsProperties";
import useScreen from "../../hooks/useScreen";
////
function Update() {
  const dispatch = useDispatch();

  const { brands, countries, rams, loading } = useSelector(
    (state) => state.options
  );

  const { useScreenProducts } = useScreen();

  const { getBrandId, getCountryId, getRamId } = optionPropertiesActions;

  const onHandleGetBrandId = (id) => void dispatch(getBrandId(id));
  const onHandleGetCountryId = (id) => void dispatch(getCountryId(id));
  const onHandleGetRamId = (id) => void dispatch(getRamId(id));

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
                getId={onHandleGetBrandId}
              />
              <DropMenu
                data={countries}
                text={"Countries"}
                getId={onHandleGetCountryId}
              />
              <DropMenu data={rams} text={"Rams"} getId={onHandleGetRamId} />
            </div>
            <ProductUpdateForm />
          </section>
        </>
      )}
      <div className={styles.wrapperForMain}>
        <TextByLocation />
        <Main>{useScreenProducts()}</Main>
      </div>
    </div>
  );
}
/////////////////
export default Update;
