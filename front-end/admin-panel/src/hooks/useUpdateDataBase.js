import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  notificationAfterDeleting,
  notificationAfterCreating,
  notificationAfterUpdating,
} from "../notifications/notifications";
import { optionPropertiesActions } from "../store/options/optionsProperties";
import {
  asyncThunkForCreateProduct,
  createProductAction,
} from "../store/products/createProductSlice";
import { asyncThunkForDeleteProduct } from "../store/products/deleteProductSlice";
import { productPropertiesAction } from "../store/products/productPropertiesSlice";
import { asyncThunkForUpdateProducts } from "../store/products/updateProductSlice";

function useUpdateDataBase() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productId } = useSelector((state) => state.productProperties);

  const { resetProductId } = productPropertiesAction;
  const { resetCreatedProduct } = createProductAction;
  const { resetBrandId, resetCountryId, resetRamId } = optionPropertiesActions;

  const asyncUpdateProducts = (payload) => {
    if (location.pathname === "/create") {
      dispatch(asyncThunkForCreateProduct(payload));
      notificationAfterCreating();
    }
    if (location.pathname === "/update") {
      dispatch(asyncThunkForUpdateProducts(payload));
      notificationAfterUpdating();
    }
    if (location.pathname === "/delete") {
      notificationAfterDeleting(() => {
        dispatch(asyncThunkForDeleteProduct(productId));
        setTimeout(() => {
          navigate("/");
          dispatch(resetProductId(productId));
          dispatch(resetBrandId());
          dispatch(resetCountryId());
          dispatch(resetRamId());
          dispatch(resetCreatedProduct());
        }, 500);
      });
    }
  };

  return { asyncUpdateProducts };
}

export default useUpdateDataBase;
