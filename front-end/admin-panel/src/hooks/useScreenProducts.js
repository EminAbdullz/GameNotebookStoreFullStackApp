import { useMemo } from "react";
import ProductCard from "../components/ProductCart";

export const useScreenProducts = (products = []) =>
  useMemo(() => {
    return products.map((item) => <ProductCard {...item} key={item.id} />);
  },[products]);
