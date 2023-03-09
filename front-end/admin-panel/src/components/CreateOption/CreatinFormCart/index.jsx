import { DeleteIcon } from "../../../icons/delete";
import { UpdateIcon } from "../../../icons/update";
import Button from "../../Button";

function CreatingFormCart({
  properties,
  labels,
  onHandleSubmit = Function.prototype,
  text
}) {
    
  const submit = (e) => {
    e.preventDefault();
    onHandleSubmit(e.target[properties].value);
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor={properties}> {labels} </label>
      <input id={properties} placeholder={properties} name={properties} />
      <Button> {text} </Button>
    </form>
  );
}

export default CreatingFormCart;
