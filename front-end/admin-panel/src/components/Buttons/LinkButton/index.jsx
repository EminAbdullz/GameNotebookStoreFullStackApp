import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useAlertAfterRemoving from "../../../notifications/useRemoveAlert";
import { productPropertiesAction } from "../../../store/productPropertiesSlice";
import styles from "./style/index.module.scss";

function LinkButton({ id, children }) {
  const dispatch = useDispatch();
  //////
  const location = useLocation();
  ///////////
  ///////
  const { getProductId } = productPropertiesAction;
  //////////
  const { alertAfterRemoving } = useAlertAfterRemoving();
  ////////////
  const onHandleClick = (e) => {
    if (location.pathname === "/" || location.pathname === "/create") {
      dispatch(getProductId(id));
    }
    if (location.pathname === "/delete" && e.target.innerText === "Delete") {
      alertAfterRemoving();
    }
  };
  ///////////
  return (
    <button onClick={(e) => onHandleClick(e)} className={styles.linkButton}>
      {children}
    </button>
  );
}

export default LinkButton;
