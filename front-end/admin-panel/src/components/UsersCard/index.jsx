import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import { USER_BLOCK_URL, USER_DEPLOY_URL } from "../../api";
import { BlockIcon, DeployIcon, MoreIcon } from "../../icons/icons";
import Button from "../Button";
import styles from "./style/index.module.scss";

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

  const location = useLocation();

  const style = () => {
    if (location.pathname === "/users") {
      return styles.usersCard;
    }
    if (location.pathname === "/more/user") {
      return styles.userCardMore;
    }
  };

  return (
    <div className={style()}>
      <p>Name - {name}.</p>
      <p>Surname - {surname}.</p>
      <p>Birthday date - {moment(birthDate).format("DD/MM/YYYY")}.</p>
      <p>Login - {login}.</p>
      <p>Password - {password}</p>
      <p>Phone number - {phone}</p>
      <p>Email adress - {email}.</p>
      <p>Is blocked - {isBlocked.toString()}.</p>
      <p>Is Admin - {isAdmin.toString()}</p>
      <p></p>
      <div className={styles.buttons}>
        <Button
          id={id}
          isAdmin={isAdmin}
          isBlocked={isBlocked}
          url={USER_DEPLOY_URL}
        >
          <div className={styles.icon}>
            <DeployIcon />
          </div>
          Deploy
        </Button>
        <Button
          id={id}
          isAdmin={isAdmin}
          isBlocked={isBlocked}
          url={USER_BLOCK_URL}
        >
          <div className={styles.icon}>
            <BlockIcon />
          </div>
          Block
        </Button>
      </div>
      <div className={styles.more}>
        <Link to={"/more/user"}>
          <Button id={id}>
            <div className={styles.icon}>
              <MoreIcon />
            </div>
            More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default UsersCard;
