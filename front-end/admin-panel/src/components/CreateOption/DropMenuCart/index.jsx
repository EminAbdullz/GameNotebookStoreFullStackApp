import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { notificationAfterUpdating } from "../../../notifications/notifications";
import { asyncThunkForUpdateOption } from "../../../store/options/updateOptionSlice";
import Button from "../../Button";
import CreatingFormCart from "../CreatinFormCart";

function DropMenuCart(props) {
  const dispatch = useDispatch();

  const { id, name, text, labels, url } = props;

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
    <div onSubmit={onHandleSubmit}>
      <p>
        {text} : {name}
      </p>
      <p>Id : {id}</p>
      <Button id={id} url={url}>
        Delete
      </Button>
      <CreatingFormCart
        labels={labels}
        properties={"Brand"}
        onHandleSubmit={onHandleSubmit}
        url={url}
        text={"Update"}
      />
    </div>
  );
}

export default DropMenuCart;
