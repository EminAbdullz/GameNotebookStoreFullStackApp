import { useDispatch, useSelector } from "react-redux";
import { BRANDS_URL, COUNTRIES_URL, RAMS_URL } from "../../../api";
import { optionPropertiesActions } from "../../../store/options/optionsProperties";
import DropMenu from "../../DropMenu";
import DropMenuCart from "../DropMenuCart";
import styles from "./style/index.module.scss";

function DropMenus() {
  const dispatch = useDispatch();

  const { brands, countries, rams } = useSelector((state) => state.options);

  const { optionBrandId } = useSelector((state) => state.optionProperties);
  const { optionCountryId } = useSelector((state) => state.optionProperties);
  const { optionRamId } = useSelector((state) => state.optionProperties);

  const { getOptionBrandId, getOptionCountryId, getOptionRamId } =
    optionPropertiesActions;

  const onHandleGetBrandId = (id) => void dispatch(getOptionBrandId(id));
  const onHandleGetCountryId = (id) => void dispatch(getOptionCountryId(id));
  const onHandleGetRamId = (id) => void dispatch(getOptionRamId(id));

  const screenDropMenuCart = (options, id, text, labels, url) => {
    if (id === "") return [];

    const brand = options.find((item) => item.id === Number(id));
    return [brand].map((item) => (
      <DropMenuCart
        className={styles.dropCartMenu}
        {...item}
        key={item.id}
        text={text}
        labels={labels}
        id={id}
        url={url}
        buttonText={"Update"}
      />
    ));
  };

  return (
    <div className={styles.dropMenus}>
      <section className={styles.dropMenuSection}>
        <DropMenu data={brands} text={"Brands"} getId={onHandleGetBrandId} />
        {screenDropMenuCart(
          brands,
          optionBrandId,
          "Brand",
          "Update Brand",
          BRANDS_URL
        )}
      </section>
      <section className={styles.dropMenuSection}>
        <DropMenu
          data={countries}
          text={"Countries"}
          getId={onHandleGetCountryId}
        />
        {screenDropMenuCart(
          countries,
          optionCountryId,
          "Country",
          "Update Country",
          COUNTRIES_URL
        )}
      </section>
      <section className={styles.dropMenuSection}>
        <DropMenu data={rams} text={"Rams"} getId={onHandleGetRamId} />
        {screenDropMenuCart(rams, optionRamId, "Ram", "Update Ram", RAMS_URL)}
      </section>
    </div>
  );
}

export default DropMenus;
