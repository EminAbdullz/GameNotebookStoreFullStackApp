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
    <select defaultValue={false} onChange={(e) => getId(e.target.value)} className={styles.menu}>
      <option disabled value={false} >
        {text}
      </option>
      {selectOptions}
    </select>
  );
}
/////////////////
export default DropMenu;
