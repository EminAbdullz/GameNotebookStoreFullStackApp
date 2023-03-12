import { useMemo } from "react";
import ProductCard from "../components/ProductCard";
import useGetProductByLocation from "./useGetProductByLocation";

function useScreenProducts() {
  ///////////////////
  const { productByLocation } = useGetProductByLocation(); // returns [] by Location;

  ///////////////////
  return useMemo(() => {
    return productByLocation().map((item) => (
      <ProductCard key={item.id} {...item} />
    ));
  }, [productByLocation]);
}

export default useScreenProducts;
