import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authentication/authorization";
////////////////////////////
function Authentication() {
  const dispatch = useDispatch();
  ///////////
  const formData = new FormData();
  ///////////
  const submit = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;
    ///////////
    formData.append("login", login);
    formData.append("password", password);
    dispatch(loginUser(formData));
    ///////////
  };
  ///////////
  return (
    <form onSubmit={submit}>
      <input name="login" placeholder="login" />
      <input name="password" placeholder="password" />
      <button type="submit">register</button>
    </form>
  );
}
///////////
export default Authentication;
