import { useMemo } from "react";
import styles from "./style/index.module.scss";

function DropMenu({ data = [], text, getValue = Function.prototype }) {
  /////////////////
  const selectOptions = useMemo(() => {
    return data.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name || item.property}
      </option>
    ));
  });
  /////////////////
  return (
    <select onChange={(e) => getValue(e.target.value)} className={styles.menu} >
      <option>{text}</option>
      {selectOptions}
    </select>
  );
}
/////////////////
export default DropMenu;
