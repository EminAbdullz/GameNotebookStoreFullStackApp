import React from "react";
import Main from "../../components/layout/main";
import useScreen from "../../hooks/useScreen";
import styles from "./style/index.module.scss";

function AboutUser() {
  const { useScreenUsers } = useScreen();

  return (
    <div className={styles.aboutUser}>
      <Main>{useScreenUsers()}</Main>
    </div>
  );
}

export default AboutUser;
