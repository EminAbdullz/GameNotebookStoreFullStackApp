import DropMenus from "../../components/CreateOption/DropMenus";
import CreatingForm from "../../components/CreateOption/CreatingForm";
import styles from "./style/index.module.scss";

function Options() {
  
  return (
    <div className={styles.options}>
        <CreatingForm />
        <DropMenus />
    </div>
  );
}

export default Options;
