import React from "react";
import Main from "../../components/layout/main";
import useScreen from "../../hooks/useScreen";
import styles from "./style/index.module.scss";

function Users() {
  const { useScreenUsers } = useScreen();

  return (
    <div className={styles.users}>
      <Main>{useScreenUsers()}</Main>
    </div>
  );
}

export default Users;
