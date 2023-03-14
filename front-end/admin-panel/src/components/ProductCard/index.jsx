import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import styles from "./style/index.module.scss";
import Button from "../Button";
import { DeleteIcon, MoreIcon, UpdateIcon } from "../../icons/icons";

function ProductCard(props) {
  const location = useLocation();

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

  // style depending on location
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
    if (location.pathname === "/about/product") {
      return styles.productCardMore;
    }
  };

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
        <Link to={"/update"}>
          <Button id={id}>
            <div className={styles.icon}>
              <UpdateIcon />
            </div>
            Update
          </Button>
        </Link>
        <Link to={"/delete"}>
          <Button id={id}>
            <div className={styles.icon}>
              <DeleteIcon />
            </div>
            Delete
          </Button>
        </Link>
      </div>
      <div className={styles.more}>
        <Link to={"/about/product"}>
          <Button id={id}>
            <div className={styles.icon}>
              <MoreIcon />
            </div>
            More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
