import { useDispatch, useSelector } from "react-redux";
import { useLocation  } from "react-router-dom";
import { productPropertiesAction } from "../../../store/productPropertiesSlice";
// import { RemovingAlert } from '../../../notifications/RemovingAlert/index'
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
  ////////////
  const onHandleClick = () => {
    if (location.pathname === "/") dispatch(getProductId(id));
    // if (location.pathname === "/delete") removingAlert();
  };
  ///////////

  return (
    <button onClick={onHandleClick} className={styles.linkButton}>
      {children}
    </button>
  );
}

export default LinkButton;
