import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  notificationAfterDeleting,
  notificationAfterCreating,
  notificationAfterUpdating,
} from "../notifications/notifications";
import { brandsPropertiesActions } from "../store/brands/brandsProperties";
import { createBrand } from "../store/brands/createBrandSlice";
import { deleteBrand } from "../store/brands/deleteBrandSlice";
import { updateBrand } from "../store/brands/updateBrandSlice";
import { countriesPropertiesActions } from "../store/countries/countriesPropertiesSlice";
import {
  createProductAction,
  postProduct,
} from "../store/products/createProductSlice";
import { deleteProduct } from "../store/products/deleteProductSlice";
import { productPropertiesAction } from "../store/products/productPropertiesSlice";
import { postUpdatedProduct } from "../store/products/updateProductSlice";
import { ramsPropertiesActions } from "../store/rams/ramsPropertiesSlice";

function useUpdateDataBase() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productId = "" } = useSelector((state) => state.productProperties);

  const { resetProductId = Function.prototype } = productPropertiesAction;
  const { resetCreatedProduct = Function.prototype } = createProductAction;
  const { resetBrandId = "" } = brandsPropertiesActions;
  const { resetCountryId = "" } = countriesPropertiesActions;
  const { resetRamId = "" } = ramsPropertiesActions;

  const asyncUpdateProducts = (payload) => {
    if (location.pathname === "/create") {
      dispatch(postProduct(payload));
      notificationAfterCreating();
    }
    if (location.pathname === "/update") {
      dispatch(postUpdatedProduct(payload));
      notificationAfterUpdating();
    }
    if (location.pathname === "/delete") {
      notificationAfterDeleting(() => {
        dispatch(deleteProduct(productId));
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

  const asyncUpdateOptions = {
    brands: {
      asyncCreateBrand: (payload = new FormData()) => {
        if (!payload.get("Name")) {
          toast.error("Invalid data");
        } else {
          dispatch(createBrand(payload));
          notificationAfterCreating();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      },
      asyncUpdateBrand: (payload = new FormData()) => {
        if (!payload.get("Name") || !payload.get("Id")) {
          toast.error("Invalid data");
        } else {
          dispatch(updateBrand(payload));
          notificationAfterUpdating();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      },
      asyncDeleteBrand: (payload = "") => {
        if (payload === "") {
          toast.error("Invalid id");
        } else {
          notificationAfterDeleting(() => {
            dispatch(deleteBrand(payload));
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          });
        }
      },
    },
  };

  return { asyncUpdateProducts, asyncUpdateOptions };
}

export default useUpdateDataBase;
