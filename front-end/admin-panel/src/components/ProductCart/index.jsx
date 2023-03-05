import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import LinkButton from "../Buttons/LinkButton/index";
import styles from "./style/index.module.scss";
import { UpdateIcon } from "../../icons/update";
import { DeleteIcon } from "../../icons/delete";
//////////////////////////////
function ProductCard(props) {
  const location = useLocation();
  ///////
  const {
    id,
    title,
    price,
    description,
    imageUrl,
    stockDate,
    bestSeller,
    premium,
    available,
    brand,
    country,
    ram,
  } = props;
  //////
  if (location.pathname === "/") {
    return (
      <div className={styles.productCardHome}>
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
        <p>When added: - {moment(stockDate).format("DD/MM/YYYY")}</p>
        <p>Price - {price}$</p>
        <div className={styles.buttons}>
          <LinkButton id={id}>
            <div className={styles.icon}>
              <UpdateIcon />
            </div>
            <Link to={"/update"}>Update</Link>
          </LinkButton>
          <LinkButton id={id}>
            <div className={styles.icon}>
              <DeleteIcon />
            </div>
            <Link to={"/delete"}>Delete</Link>
          </LinkButton>
        </div>
      </div>
    );
  }
  if (location.pathname === "/create" || location.pathname === "/delete") {
    return (
      <div className={`${styles.productCardHome} ${styles.productCardCreate}`}>
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
          <LinkButton id={id}>
            <div className={styles.icon}>
              <UpdateIcon />
            </div>
            <Link to={"/update"}>Update</Link>
          </LinkButton>
          <LinkButton id={id}>
            <div className={styles.icon}>
              <DeleteIcon />
            </div>
            <Link to={"/delete"}>Delete</Link>
          </LinkButton>
        </div>
      </div>
    );
  }
  if (location.pathname === "/update") {
    return (
      <div className={`${styles.productCardHome} ${styles.productCardUpdate}`}>
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
        <p>When added: - {moment(stockDate).format("DD/MM/YYYY")}</p>
        <p>Price - {price}$</p>
        <div className={styles.buttons}>
          <LinkButton id={id}>
            <div className={styles.icon}>
              <UpdateIcon />
            </div>
            <Link to={"/update"}>Update</Link>
          </LinkButton>
          <LinkButton id={id}>
            <div className={styles.icon}>
              <DeleteIcon />
            </div>
            <Link to={"/delete"}>Delete</Link>
          </LinkButton>
        </div>
      </div>
    );
  }
}

export default ProductCard;
