import { useLocation } from "react-router-dom";
import { CreateIcon } from "../../../icons/create";
import { DeleteIcon } from "../../../icons/delete";
import { UpdateIcon } from "../../../icons/update";
import styles from "./style/index.module.scss";

function Update() {
  const location = useLocation();
  /////////
  if (location.pathname === "/create") {
    return (
      <button type="submit" className={styles.update}>
        <div className={styles.icon}>
          <CreateIcon />
        </div>
        Create
      </button>
    );
  }
  if (location.pathname === "/update") {
    return (
      <button type="submit" className={styles.update}>
        <UpdateIcon /> Update
      </button>
    );
  }
  if (location.pathname === "/delete") {
    return (
      <button type="submit" className={styles.delete}>
        <DeleteIcon /> Delete
      </button>
    );
  }
}

export default Update;
