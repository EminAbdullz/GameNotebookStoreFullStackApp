import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UsersCard from "../components/UsersCard";

function useGetProductByLocation() {
  const { products } = useSelector((state) => state.products);
  const { productId } = useSelector((state) => state.productProperties);
  const { userId } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);
  const { createdProduct } = useSelector((state) => state.createProduct);
  const location = useLocation();
  //////////
  const productByLocation = () => {
    if (location.pathname === "/") return products;
    if (location.pathname === "/create") return createdProduct;
    if (location.pathname === "/users") return users;

    if (
      (location.pathname === "/update" || location.pathname === "/delete") &&
      productId !== ""
    ) {
      return [products.find((item) => item.id === productId)];
    }

    if (location.pathname === "/more/user") {
      if (userId === "") return [];
      return [users.find((item) => item.id === userId)];
    }

    if (location.pathname === "/more/product") {
      if (productId === "") return [];
      return [products.find((item) => item.id === productId)];
    }

    return [];
  };

  return { productByLocation }; // returns array
}

export default useGetProductByLocation;
