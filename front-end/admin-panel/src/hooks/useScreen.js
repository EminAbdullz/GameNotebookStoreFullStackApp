import { useMemo } from "react";
import ProductCard from "../components/ProductCard";
import UsersCard from "../components/UsersCard";
import useGetProductByLocation from "./useGetDataByLocation";

function useScreen() {
  const { dataByLocation = Function.prototype } = useGetProductByLocation(); // Custom hook which returns array of product or users depending on location;

  // Custom hook which maps array of products and returns ProductCard
  const useScreenProducts = () =>
    useMemo(() => {
      return dataByLocation().map((item) => (
        <ProductCard key={item.id} {...item} />
      ));
    }, [dataByLocation()]);

  // Custom hook which maps array of users and returns UsersCard
  const useScreenUsers = () =>
    useMemo(() => {
      return dataByLocation().map((item) => (
        <UsersCard key={item.id} {...item} />
      ));
    }, [dataByLocation()]);

  return { useScreenProducts, useScreenUsers };
}

export default useScreen;
