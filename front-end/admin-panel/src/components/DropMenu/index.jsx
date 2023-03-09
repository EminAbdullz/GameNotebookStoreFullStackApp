import { useMemo } from "react";
import styles from "./style/index.module.scss";

function DropMenu({ data = [], text, getId = Function.prototype }) {
  /////////////////
  const selectOptions = useMemo(() => {
    return data.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name || item.property}
      </option>
    ));
  }, [data]);
  /////////////////
  return (
    <select onChange={(e) => getId(e.target.value)} className={styles.menu}>
      <option disabled selected>
        {text}
      </option>
      {selectOptions}
    </select>
  );
}
/////////////////
export default DropMenu;
