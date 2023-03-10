import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { BRANDS_URL, COUNTRIES_URL, RAMS_URL } from "../../../api";
import { notificationAfterCreating } from "../../../notifications/notifications";
import { asyncThunkForCreateOption } from "../../../store/options/createOptionSlice";
import CreatingFormCart from "../CreatinFormCart";
import styles from "./style/index.module.scss";

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

  const formData = new FormData();

  const onHandleCreateOption = (name, url) => {
    formData.append("Property", name);
    formData.append("Name", name);

    if (!formData.get("Name") || !formData.get("Property")) {
      toast.error("Invalid data");
    } else {
      const data = { url, formData };
      dispatch(asyncThunkForCreateOption(data));
      notificationAfterCreating();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className={styles.creatingForm}>
      <CreatingFormCart
        onHandleSubmit={onHandleCreateOption}
        url={BRANDS_URL}
        properties={properties.brand}
        labels={properties.labels.brand}
      />
      <CreatingFormCart
        onHandleSubmit={onHandleCreateOption}
        url={COUNTRIES_URL}
        properties={properties.country}
        labels={properties.labels.country}
      />
      <CreatingFormCart
        onHandleSubmit={onHandleCreateOption}
        url={RAMS_URL}
        properties={properties.ram}
        labels={properties.labels.ram}
      />
    </div>
  );
}

export default CreatingForm;
