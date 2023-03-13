import React from "react";
import { AdminIcon, LogInIcon } from "../../../icons/icons";
import Navigation from "../../Navigation";
import styles from "./style/index.module.scss";

function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.icon}>
        <AdminIcon />
      </div>
      <Navigation />
      <div className={styles.icon}>
        <LogInIcon />
      </div>
    </header>
  );
}

export default Header;
