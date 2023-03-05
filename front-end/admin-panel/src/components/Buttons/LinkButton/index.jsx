import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useRemoveAlert from "../../../notifications/RemovingAlert/useRemovingAlert";
import { productPropertiesAction } from "../../../store/productPropertiesSlice";
import styles from "./style/index.module.scss";

function LinkButton({ id, children }) {
  const dispatch = useDispatch();
  //////
  const location = useLocation();
  ///////////
  const { productId } = useSelector((state) => state.productProperties);
  ///////
  const { getProductId } = productPropertiesAction;
  //////////
  const { removeAlert } = useRemoveAlert();
  ////////////
  const onHandleClick = () => {
    if (location.pathname === "/" || location.pathname === "/create") {
      dispatch(getProductId(id));
    }
    if (location.pathname === "/delete") {
      removeAlert();
    }
  };
  ///////////
  return (
    <button onClick={onHandleClick} className={styles.linkButton}>
      {children}
    </button>
  );
}

export default LinkButton;
