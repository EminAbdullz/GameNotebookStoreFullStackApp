import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../store/deleteProductSlice";
import { productPropertiesAction } from "../../store/productPropertiesSlice";
import Swal from "sweetalert2";

function useRemoveAlert() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productId } = useSelector((state) => state.productProperties);
  const { resetProductId } = productPropertiesAction;
  //////////
  const removeAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Notebook has been deleted !", "success");
        dispatch(deleteProduct(productId));
        setTimeout(() => {
          navigate("/");
          dispatch(resetProductId());
        }, 3000);
      }
    });
  };
  return { removeAlert };
}

export default useRemoveAlert;
