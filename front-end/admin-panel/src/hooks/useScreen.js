import { useMemo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import UsersCard from "../components/UsersCard";
import useGetProductByLocation from "./useGetProductByLocation";

function useScreen() {
  const { users } = useSelector((state) => state.users);

  const { productByLocation = Function.prototype } = useGetProductByLocation(); // Custom hook which returns array of product or users depending on location;

  // Custom hook which maps array of products and returns ProductCard
  const useScreenProducts = () =>
    useMemo(() => {
      return productByLocation().map((item) => (
        <ProductCard key={item.id} {...item} />
      ));
    }, [productByLocation]);

  
  // Custom hook which maps array of users and returns UsersCard
  const useScreenUsers = () =>
    useMemo(() => {
      return productByLocation().map((item) => (
        <UsersCard key={item.id} {...item} />
      ));
    }, [users]);

  return { useScreenProducts, useScreenUsers };
}

export default useScreen;
