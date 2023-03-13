import React from "react";
import { AdminIcon, LogOutIcon } from "../../../icons/icons";
import { notificationAfterLogOut } from "../../../notifications/notifications";
import Navigation from "../../Navigation";
import styles from "./style/index.module.scss";

function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.icon}>
        <AdminIcon />
      </div>
      <Navigation />
      <button className={styles.icon} onClick={() => notificationAfterLogOut()}>
        <LogOutIcon />
      </button>
    </header>
  );
}

export default Header;
