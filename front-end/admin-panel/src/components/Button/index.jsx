import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useUpdateDataBase from "../../hooks/useUpdateDataBase";
import { notificationAfterDeleting } from "../../notifications/notifications";
import { asyncThunkForDeleteOption } from "../../store/options/deleteOptionSlice";
import { productPropertiesAction } from "../../store/products/productPropertiesSlice";
import styles from "./style/index.module.scss";

function Button({ id, children, url }) {
  const dispatch = useDispatch();

  const location = useLocation();

  const { asyncUpdateProducts } = useUpdateDataBase();
  const { getProductId } = productPropertiesAction;

  const onHandleClick = (e) => {
    // Transition between pages for working with products
    if (location.pathname === "/") {
      dispatch(getProductId(id));
    }
    if (
      location.pathname === "/create" &&
      (e.target.innerText === "Update" || e.target.innerText === "Delete")
    ) {
      dispatch(getProductId(id));
    }
    // Product and Option Deleting Logic
    if (location.pathname === "/delete" && e.target.innerText === "Delete") {
      asyncUpdateProducts(id);
    }
    if (location.pathname === "/options" && e.target.innerText === "Delete") {
      if (id === "") {
        toast.error("Invalid id");
      } else {
        const data = { url, id };
        notificationAfterDeleting(() => {
          dispatch(asyncThunkForDeleteOption(data));
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
      }
    }
  };

  return (
    <button onClick={(e) => onHandleClick(e)} className={styles.linkButton}>
      {children}
    </button>
  );
}

export default Button;
