import { useDispatch, useSelector } from "react-redux";
import { BRANDS_URL, COUNTRIES_URL, RAMS_URL } from "../../../api";
import { optionPropertiesActions } from "../../../store/options/optionsProperties";
import DropMenu from "../../DropMenu";
import DropMenuCart from "../DropMenuCart";

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

  const screenOption = (options, id, text, labels, url) => {
    if (id !== "") {
      const brand = options.find((item) => item.id === Number(id));
      return [brand].map((item) => (
        <DropMenuCart
          {...item}
          key={item.id}
          text={text}
          labels={labels}
          id={id}
          url={url}
        />
      ));
    }
    return [];
  };


  return (
    <div>
      <DropMenu data={brands} text={"Brands"} getId={onHandleGetBrandId} />
      <DropMenu
        data={countries}
        text={"Countries"}
        getId={onHandleGetCountryId}
      />
      <DropMenu data={rams} text={"Rams"} getId={onHandleGetRamId} />

      {screenOption(brands, optionBrandId, "Brand", "Update Brand", BRANDS_URL)}

      {screenOption(
        countries,
        optionCountryId,
        "Country",
        "Update Country",
        COUNTRIES_URL
      )}

      {screenOption(rams, optionRamId, "Ram", "Update Ram", RAMS_URL)}
    </div>
  );
}

export default DropMenus;
