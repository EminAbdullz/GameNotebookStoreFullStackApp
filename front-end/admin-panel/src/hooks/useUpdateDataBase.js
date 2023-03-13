import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  notificationAfterDeleting,
  notificationAfterCreating,
  notificationAfterUpdating,
} from "../notifications/notifications";
import { asyncThunkForUpdateUser } from "../store/authentication/blockUserSlice";
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

  const { resetProductId } = productPropertiesAction;
  const { resetCreatedProduct } = createProductAction;
  const { resetOptionsId } = optionPropertiesActions;

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
        dispatch(asyncThunkForDeleteProduct(payload));
        setTimeout(() => {
          navigate("/");
          dispatch(resetProductId());
          dispatch(resetCreatedProduct());
          dispatch(resetOptionsId());
        }, 500);
      });
    }
  };

  const asyncUpdateUsers = (id, url) => {
    const formData = new FormData();
    formData.append("Id", id);
    if (!formData.get("Id")) {
      toast.error("Invalid Id");
      return;
    }
    dispatch(asyncThunkForUpdateUser({ url, formData }));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return { asyncUpdateProducts, asyncUpdateUsers };
}

export default useUpdateDataBase;
