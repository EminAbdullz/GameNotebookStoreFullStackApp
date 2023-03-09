import { useDispatch, useSelector } from "react-redux";
import useUpdateDataBase from "../../../hooks/useUpdateDataBase";
import { brandsPropertiesActions } from "../../../store/brands/brandsProperties";
import { countriesPropertiesActions } from "../../../store/countries/countriesPropertiesSlice";
import { ramsPropertiesActions } from "../../../store/rams/ramsPropertiesSlice";
import DropMenu from "../../DropMenu";
import DropMenuCart from "../DropMenuCart";

function DropMenus() {
  const dispatch = useDispatch();

  const { brands = [] } = useSelector((state) => state.brands);
  const { countries = [] } = useSelector((state) => state.countries);
  const { rams = [] } = useSelector((state) => state.rams);

  const { optionBrandId = "" } = useSelector((state) => state.brandProperties);
  const { optionCountryId = "" } = useSelector(
    (state) => state.countriesProperties
  );
  const { optionRamId = "" } = useSelector((state) => state.ramsProperties);

  const { getOptionBrandId = Function.prototype } = brandsPropertiesActions;
  const { getOptionCountryId = Function.prototype } =
    countriesPropertiesActions;
  const { getOptionRamId = Function.prototype } = ramsPropertiesActions;

  const {
    asyncUpdateBrand = Function.prototype,
    asyncDeleteBrand = Function.prototype,
  } = useUpdateDataBase().asyncUpdateOptions.brands;

  const onHandleGetBrandId = (id) => void dispatch(getOptionBrandId(id));
  const onHandleGetCountryId = (id) => void dispatch(getOptionCountryId(id));
  const onHandleGetRamId = (id) => void dispatch(getOptionRamId(id));

  const screenOption = (
    options = [],
    id = "",
    text = "",
    asyncUpdateBrand = Function.prototype,
    asyncDeleteBrand = Function.prototype
  ) => {
    if (id !== "") {
      const brand = options.find((item) => item.id === Number(id));
      return [brand].map((item) => (
        <DropMenuCart
          {...item}
          key={item.id}
          text={text}
          asyncUpdateBrand={asyncUpdateBrand}
          asyncDeleteBrand={asyncDeleteBrand}
          id={id}
        />
      ));
    }
    return [];
  };
  return (
    <div>
      <DropMenu data={brands} text={"Brands"} getId={onHandleGetBrandId} />
      {/* <DropMenu
        data={countries}
        text={"Countries"}
        getId={onHandleGetCountryId}
      /> */}
      {/* <DropMenu data={rams} text={"Rams"} getId={onHandleGetRamId} /> */}

      {screenOption(
        brands,
        optionBrandId,
        "Brand",
        asyncUpdateBrand,
        asyncDeleteBrand,
      )}
    </div>
  );
}

export default DropMenus;
