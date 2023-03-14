import React from "react";
import { FaKey } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LogInIcon, UserIcon } from "../../icons/icons";
import {
  authorizationAction,
  loginUser,
} from "../../store/authentication/authorization";
import Button from "../Button";
import styles from "./style/index.module.scss";
////////////////////////////
function Authorization() {
  const dispatch = useDispatch();

  const formData = new FormData();

  const { rememberMe } = useSelector((state) => state.authorization);

  const { setRememberMe } = authorizationAction;

  const submit = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;
    ///////////
    formData.append("login", login);
    formData.append("password", password);
    if (!formData.get("login") || !formData.get("password")) {
      return toast.error("Invalid login or password");
    }
    dispatch(loginUser(formData));
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={submit} className={styles.authorization}>
        <label htmlFor="login" className={styles.iconWrapper}>
          <UserIcon />
          <input
            name="login"
            placeholder="Login"
            id="login"
            autoComplete="off"
          />
        </label>
        <label htmlFor="password" className={styles.iconWrapper}>
          <FaKey />
          <input
            name="password"
            placeholder="Password"
            id="password"
            autoComplete="off"
          />
        </label>
        <div className={styles.remember}>
          <label htmlFor="remember">Remember me</label>
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={() => dispatch(setRememberMe())}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
///////////
export default Authorization;
