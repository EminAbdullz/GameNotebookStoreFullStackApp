// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { deleteProduct } from "../../store/deleteProductSlice";
// import { productPropertiesAction } from "../../store/productPropertiesSlice";
// import Swal from "sweetalert2";

// export function RemovingAlert() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { productId } = useSelector((state) => state.productProperty);
//   const { resetProductId } = productPropertiesAction;
//   //////////
//   const removingAlert = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Delete",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Deleted!", "Your file has been deleted.", "success");
//         dispatch(deleteProduct(productId));
//         setTimeout(() => {
//           navigate("/");
//           dispatch(resetProductId());
//         }, 3000);
//       }
//     });
//   };
//   return removingAlert;
// }
