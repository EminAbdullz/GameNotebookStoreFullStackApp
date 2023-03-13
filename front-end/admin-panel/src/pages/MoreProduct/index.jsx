import React from "react";
import Main from "../../components/layout/main";
import useScreen from "../../hooks/useScreen";

function MoreProduct() {
  const { useScreenProducts } = useScreen();
  
  return (
    <div>
      <Main>{useScreenProducts()}</Main>
    </div>
  );
}

export default MoreProduct;
