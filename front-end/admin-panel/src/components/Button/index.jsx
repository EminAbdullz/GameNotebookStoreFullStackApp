import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useUpdateDataBase from "../../hooks/useUpdateDataBase";
import {
  notificationAfterBlock,
  notificationAfterDeleting,
  notificationAfterDeploy,
} from "../../notifications/notifications";
import { usersActions } from "../../store/authentication/usersSlice";
import { asyncThunkForDeleteOption } from "../../store/options/deleteOptionSlice";
import { productPropertiesAction } from "../../store/products/productPropertiesSlice";
import styles from "./style/index.module.scss";

function Button({ id, children, url, isAdmin, isBlocked }) {
  const dispatch = useDispatch();

  const location = useLocation();

  const { asyncUpdateProducts, asyncUpdateUsers } = useUpdateDataBase(); // custom hook for with async logics
  const { getProductId } = productPropertiesAction; // action to get product id
  const { getUserId } = usersActions;

  const onHandleClick = (e) => {
    //* Transition between pages for working with products

    //On the home page buttons use dispacth and action to get productId
    if (location.pathname === "/") {
      dispatch(getProductId(id));
    }

    // On the create page buttons with difinite inner text use dispatch and action to get productId
    if (
      location.pathname === "/create" &&
      (e.target.innerText === "Update" || e.target.innerText === "Delete")
    ) {
      dispatch(getProductId(id));
    }

    //* Product and Option Deleting Logic

    //On delete page button with innert text "Delete" use asyncThunk to delete Product
    if (location.pathname === "/delete" && e.target.innerText === "Delete") {
      asyncUpdateProducts(id);
    }

    //On delete page button with innert text "Delete" use asyncThunk to delete Option
    if (location.pathname === "/options" && e.target.innerText === "Delete") {
      if (id === "") {
        toast.error("Invalid id");
        return;
      }
      const data = { url, id };
      notificationAfterDeleting(() => {
        dispatch(asyncThunkForDeleteOption(data));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }

    //* User block and deploy logic

    //Button performs different functions depending on the boolean values ​​of the parameters.
    if (location.pathname === "/users" && e.target.innerText === "Block") {
      if (isAdmin) {
        toast.error("Admin cannot be blocked.");
        return;
      }
      if (!isAdmin && !isBlocked) {
        asyncUpdateUsers(id, url);
        notificationAfterBlock(isBlocked);
        return;
      }
      if (isBlocked) {
        toast.error("User already blocked.");
      }
    }
    if (location.pathname === "/users" && e.target.innerText === "Deploy") {
      if (isAdmin) {
        toast.error("Admin cannot be deployed.");
        return;
      }
      if (isBlocked) {
        asyncUpdateUsers(id, url);
        notificationAfterDeploy();
        return;
      }
      if (!isBlocked) {
        toast.error("User already deployed.");
      }
    }

    //* Get more info about product or user

    // button get id and depending on conditions find object with same id in users or products
    if (e.target.innerText === "More") {
      if (location.pathname === "/users") {
        dispatch(getUserId(id));
        
      }
      dispatch(getProductId(id));
    }
  };

  return (
    <button onClick={(e) => onHandleClick(e)} className={styles.linkButton}>
      {children}
    </button>
  );
}

export default Button;
