import { useMemo } from "react";
import ProductCart from "../components/ProductCart";
import useGetProductByLocation from "./useGetProductByLocation";

function useScreenProducts() {
  ///////////////////
  const { productByLocation } = useGetProductByLocation(); // returns [] by Location;

  ///////////////////
  return useMemo(() => {
    return productByLocation().map((item) => (
      <ProductCart key={item.id} {...item} />
    ));
  }, [productByLocation]);
}

export default useScreenProducts;
