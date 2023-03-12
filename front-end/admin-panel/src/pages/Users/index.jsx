import React from "react";
import { useSelector } from "react-redux";
import Main from "../../components/layout/main";
import UsersCard from "../../components/UsersCard";
import { useApi } from "../../hooks/useApi";
import { asyncThunkToGetUsers } from "../../store/authentication/usersSlice";
import styles from "./style/index.module.scss";

function Users() {
  useApi(asyncThunkToGetUsers());
  const { users } = useSelector((state) => state.users);

  const screenUsers = users.map((item) => (
    <UsersCard {...item} key={item.id} />
  ));

  return (
    <div className={styles.users}>
      <Main>{screenUsers}</Main>
    </div>
  );
}

export default Users;
