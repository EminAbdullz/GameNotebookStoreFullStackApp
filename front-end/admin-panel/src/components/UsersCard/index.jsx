import moment from "moment";
import { USER_BLOCK_URL, USER_DEPLOY_URL } from "../../api";
import { BlockIcon, DeployIcon } from "../../icons/icons";
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

  return (
    <div className={styles.usersCard}>
      <div className={styles.wrapper}>
        <p>Name - {name}.</p>
        <p>Surname - {surname}.</p>
        <p>Login - {login}.</p>
        <p>Email adress - {email}.</p>
        <p>Is blocked - {isBlocked.toString()}.</p>
        <p>Is Admin - {isAdmin.toString()}.</p>
      </div>
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
    </div>
  );
}

export default UsersCard;
