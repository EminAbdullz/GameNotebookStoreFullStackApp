import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { DeleteIcon } from "../../../icons/icons";
import { notificationAfterUpdating } from "../../../notifications/notifications";
import { asyncThunkForUpdateOption } from "../../../store/options/updateOptionSlice";
import Button from "../../Button";
import CreatingFormCart from "../CreatinFormCart";
import styles from "./style/index.module.scss";

function DropMenuCart(props) {
  const dispatch = useDispatch();

  const { id, name, property, text, labels, url, buttonText } = props;

  const formData = new FormData();

  const onHandleSubmit = (name, url) => {
    formData.append("Name", name);
    formData.append("Property", name);
    formData.append("Id", id);

    if (url === undefined) return null;
    if (
      !formData.get("Name") ||
      !formData.get("Id") ||
      !formData.get("Property")
    ) {
      toast.error("Invalid data");
      return;
    } else {
      const data = { url, formData };
      dispatch(asyncThunkForUpdateOption(data));
      notificationAfterUpdating();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div onSubmit={onHandleSubmit} className={styles.dropCartMenu}>
      <CreatingFormCart
        labels={labels}
        properties={"Brand"}
        onHandleSubmit={onHandleSubmit}
        url={url}
        text={"Update"}
        buttonText={buttonText}
      />
      <div>
        <p>
          {text} : {name || property}
        </p>
        <p>Id : {id}</p>
        <Button id={id} url={url}>
          <div className={styles.icon}>
            <DeleteIcon />
          </div>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default DropMenuCart;
