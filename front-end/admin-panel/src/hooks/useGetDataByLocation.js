import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

//* Custom hook with  function which return data(array from async request) depending on location

function useGetDataByLocation() {
  const { products } = useSelector((state) => state.products);
  const { productId } = useSelector((state) => state.productProperties);
  const { userId } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);
  const { createdProduct } = useSelector((state) => state.createProduct);
  const location = useLocation();

  const dataByLocation = () => {
    if (location.pathname === "/") return products;
    if (location.pathname === "/create") return createdProduct;
    if (location.pathname === "/users") return users;

    if (location.pathname === "/update" || location.pathname === "/delete") {
      if (productId === "") return [];
      return [products.find((item) => item.id === productId)];
    }

    if (location.pathname === "/about/user") {
      if (userId === "") return [];
      return [users.find((item) => item.id === userId)];
    }

    if (location.pathname === "/about/product") {
      if (productId === "") return [];
      return [products.find((item) => item.id === productId)];
    }

    return [];
  };

  return { dataByLocation }; // returns array
}

export default useGetDataByLocation;
