import React from "react";
import { useSelector } from "react-redux";
import Main from "../../components/layout/main";
import UsersCard from "../../components/UsersCard";
import useScreen from "../../hooks/useScreen";
import { asyncThunkToGetUsers } from "../../store/authentication/usersSlice";
import styles from "./style/index.module.scss";

function Users() {
  const { users } = useSelector((state) => state.users);


  const { useScreenUsers } = useScreen();

  return (
    <div className={styles.users}>
      <Main>{useScreenUsers()}</Main>
    </div>
  );
}

export default Users;
