import { useDispatch } from "react-redux";
import useUpdateDataBase from "../../../hooks/useUpdateDataBase";
import CreatingFormCart from "../CreatinFormCart";

function CreatingForm() {
  const dispatch = useDispatch();

  const properties = {
    brand: "Brand",
    country: "Country",
    ram: "Ram",
    labels: {
      brand: "Create new Brand",
      country: "Create new Country",
      ram: "Create new Ram",
    },
  };

  const { asyncCreateBrand = Function.prototype } =
    useUpdateDataBase().asyncUpdateOptions.brands;

  const formData = new FormData();

  const onHandleCreateBrand = (name) => {
    formData.append("Name", name);
    asyncCreateBrand(formData);
  };

  return (
    <div>
      <div>
        <CreatingFormCart
          onHandleSubmit={onHandleCreateBrand}
          properties={properties.brand}
          labels={properties.labels.brand}
          text={"Create"}
        />
      </div>
      {/* <CreatingFormCart
        properties={properties.country}
        labels={properties.labels.country}
      />
      <CreatingFormCart
        properties={properties.ram}
        labels={properties.labels.ram}
      /> */}
    </div>
  );
}

export default CreatingForm;
