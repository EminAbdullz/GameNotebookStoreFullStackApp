import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import styles from "./style/index.module.scss";
import { UpdateIcon } from "../../icons/update";
import { DeleteIcon } from "../../icons/delete";
import Button from "../Button";

function ProductCart(props) {
  const location = useLocation();

  const style = () => {
    if (location.pathname === "/") {
      return styles.productCardHome;
    }
    if (location.pathname === "/create" || location.pathname === "/delete") {
      return styles.productCard;
    }
    if (location.pathname === "/update") {
      return styles.productCardUpdate;
    }
  };

  const {
    imageUrl,
    id,
    title,
    brand,
    description,
    ram,
    country,
    bestSeller,
    available,
    premium,
    stockDate,
    price,
  } = props;

  return (
    <div className={style()}>
      <img src={imageUrl} alt="Notebook" />
      <p>ID : {id}</p>
      <p>Title - {title}</p>
      <p>Brand - {brand}</p>
      <p>Desription - {description}</p>
      <p>Ram - {ram}</p>
      <p>Country - {country}</p>
      <p>Best Seller - {bestSeller.toString()}</p>
      <p>Aviable - {available.toString()}</p>
      <p>Primium: - {premium.toString()}</p>
      <p>Creating Date: - {moment(stockDate).format("DD/MM/YYYY")}</p>
      <p>Price - {price}$</p>
      <div className={styles.buttons}>
        <Button id={id}>
          <div className={styles.icon}>
            <UpdateIcon />
          </div>
          <Link to={"/update"}>Update</Link>
        </Button>
        <Button id={id}>
          <div className={styles.icon}>
            <DeleteIcon />
          </div>
          <Link to={"/delete"}>Delete</Link>
        </Button>
      </div>
    </div>
  );
}

export default ProductCart;
