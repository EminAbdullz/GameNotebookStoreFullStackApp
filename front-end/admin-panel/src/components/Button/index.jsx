import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useUpdateDataBase from "../../hooks/useUpdateDataBase";
import { brandsPropertiesActions } from "../../store/brands/brandsProperties";
import { deleteBrand } from "../../store/brands/deleteBrandSlice";
import { productPropertiesAction } from "../../store/products/productPropertiesSlice";
import { updatedProductAction } from "../../store/products/updateProductSlice";
import styles from "./style/index.module.scss";

function Button({ id, children, onHandleSubmit, formData }) {
  const dispatch = useDispatch();

  const location = useLocation();

  const { asyncUpdateProducts = Function.prototype } = useUpdateDataBase();
  const { asyncDeleteBrand } = useUpdateDataBase().asyncUpdateOptions.brands;
  const { getBrandId = Function.prototype } = brandsPropertiesActions;
  const { getProductId = Function.prototype } = productPropertiesAction;

  const onHandleClick = (e) => {
    if (location.pathname === "/" || location.pathname === "/create") {
      dispatch(getProductId(id));
    }
    if (location.pathname === "/delete" && e.target.innerText === "Delete") {
      asyncUpdateProducts();
    }

    if (location.pathname === "/options" && e.target.innerText === "Delete") {
      asyncDeleteBrand(id);
    }
  };

  return (
    <button onClick={(e) => onHandleClick(e)} className={styles.linkButton}>
      {children}
    </button>
  );
}

export default Button;
