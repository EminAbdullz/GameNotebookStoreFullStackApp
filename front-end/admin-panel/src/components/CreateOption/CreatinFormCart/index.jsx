import { UpdateIcon } from "../../../icons/update";
import Button from "../../Button";
import styles from "./style/index.module.scss";

function CreatingFormCart({
  properties,
  labels,
  onHandleSubmit = Function.prototype,
  url,
  buttonText,
}) {
  const submit = (e) => {
    e.preventDefault();
    onHandleSubmit(e.target[properties].value, url);
  };

  return (
    <form onSubmit={submit} className={styles.creatinFormCart}>
      <label htmlFor={properties}> {labels} </label>
      <input
        id={properties}
        placeholder={properties}
        name={properties}
        autoComplete="off"
      />
      <Button>
        <div className={styles.icon}>
          <UpdateIcon />
        </div>
        {buttonText || "Create"}
      </Button>
    </form>
  );
}

export default CreatingFormCart;
