import moment from "moment";
import React from "react";

function UsersCard(props) {
  const {
    id,
    login,
    password,
    name,
    surname,
    email,
    phone,
    birthDate,
    isAdmin,
    isBlocked,
  } = props;
  return (
    <div>
      <p>Id - {id}.</p>
      <p>Name - {name}.</p>
      <p>Surname - {surname}.</p>
      <p>Login - {login}.</p>
      <p>Password - {password}.</p>
      <p>Birthday date - {moment(birthDate).format("DD/MM/YYYY")}.</p>
      <p>Email adress - {email}.</p>
      <p>Phone number - {phone}.</p>
      <p>Is blocked - {isBlocked.toString()}.</p>
      <p>Is Admin - {isAdmin.toString()}.</p>
    </div>
  );
}

export default UsersCard;

// birthDate
// :
// "1999-12-31T00:00:00"
// email
// :
// "eminadbullz@gmail.com"
// id
// :
// 1
// isAdmin
// :
// true
// isBlocked
// :
// false
// login
// :
// "Eminabdullz"
// name
// :
// "Emin"
// password
// :
// "f50bd140"
// phone
// :
// "+994-51-602-01-91"
// surname
// :
// "Abdullazada"
