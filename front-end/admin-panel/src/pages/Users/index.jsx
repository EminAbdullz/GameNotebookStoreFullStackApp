import React from "react";
import { useSelector } from "react-redux";
import UsersCard from "../../components/UsersCard";
import { useApi } from "../../hooks/useApi";
import { asyncThunkToGetUsers } from "../../store/authentication/usersSlice";

function Users() {
  useApi(asyncThunkToGetUsers());
  const { users } = useSelector((state) => state.users);

  const screenUsers = users.map((item) => (
    <UsersCard {...item} key={item.id} />
  ));

  return <div>{screenUsers}</div>;
}

export default Users;


