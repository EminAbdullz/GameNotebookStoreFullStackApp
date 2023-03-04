import { Link } from "react-router-dom";
import styles from "./style/index.module.scss";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to={"/"}> Home </Link>
      <Link to={"/create"}> Create </Link>
      <Link to={"/update"}> Update </Link>
      <Link to={"/delete"}> Delete </Link>
    </nav>
  );
}

export default Navigation;
