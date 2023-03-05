import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { postProduct } from "../store/createProductSlice";
import { postUpdatedProduct } from "../store/updateProductSlice";

function useUpdateProducts() {
  const location = useLocation();
  const dispatch = useDispatch();

  const asyncUpdateProducts = (payload) => {
    if (location.pathname === "/create") dispatch(postProduct(payload));
    if (location.pathname === "/update") dispatch(postUpdatedProduct(payload));
  };

  return { asyncUpdateProducts };
}

export default useUpdateProducts;
