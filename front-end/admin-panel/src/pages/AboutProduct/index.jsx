import React from "react";
import Main from "../../components/layout/main";
import useScreen from "../../hooks/useScreen";
import styles from "./style/index.module.scss";

function AboutProduct() {
  const { useScreenProducts } = useScreen();

  return (
    <div className={styles.aboutProduct}>
      <Main>{useScreenProducts()}</Main>
    </div>
  );
}

export default AboutProduct;
