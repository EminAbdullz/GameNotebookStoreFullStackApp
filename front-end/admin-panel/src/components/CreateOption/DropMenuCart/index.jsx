import { useSelector } from "react-redux";
import Button from "../../Button";
import CreatingFormCart from "../CreatinFormCart";

function DropMenuCart(props) {
  const {
    id = "",
    name = "",
    text = "",
    asyncUpdateBrand = Function.prototype,
    asyncDeleteBrand = Function.prototype,
  } = props;


  const formData = new FormData();

  const onHandleSubmit = (name) => {
    formData.append("Name", name);
    formData.append("Id", id);
    asyncUpdateBrand(formData);
  };

  return (
    <div onSubmit={onHandleSubmit}>
      <p>
        {text} : {name}
      </p>
      <p>Id : {id}</p>
      <Button id={id}>Delete</Button>
      <CreatingFormCart
        labels={"Update Brand"}
        properties={"Brand"}
        onHandleSubmit={onHandleSubmit}
        text={"Update"}
      />
    </div>
  );
}

export default DropMenuCart;
