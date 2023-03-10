import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function useGetProductByLocation() {
  const { products } = useSelector((state) => state.products);
  const { productId } = useSelector((state) => state.productProperties);
  const { createdProduct } = useSelector((state) => state.createProduct);
  const location = useLocation();
  //////////
  const productByLocation = () => {
    if (location.pathname === "/") return products;
    if (location.pathname === "/create") return createdProduct;
    if (
      (location.pathname === "/update" || location.pathname === "/delete") &&
      productId !== ""
    ) {
      return [products.find((item) => item.id === productId)];
    }
    return [];
  };

  return { productByLocation }; // returns array
}

export default useGetProductByLocation;
