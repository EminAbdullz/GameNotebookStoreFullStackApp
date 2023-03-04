import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProductAction } from "../../store/createProductSlice";
import { productPropertiesAction } from "../../store/productPropertiesSlice";
import Update from "../Buttons/Update";
import styles from "./style/index.module.scss";
///////////////////
function ProductUpdateForm({ async = Function.prototype, text }) {
  const { brandId, countryId, ramId, isBestseller, isPremium, isAvailable } =
    useSelector((state) => state.productProperties);
  const { productId = "" } = useSelector((state) => state.productProperties);
  ///////
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /////
  const { setBestseller, setPremium, setAvailable } = productPropertiesAction;
  const { resetCreatedProduct } = createProductAction;
  /////
  const formData = new FormData();
  const createProduct = (e) => {
    e.preventDefault();
    formData.append("Id", productId);
    formData.append("Title", e.target.title.value);
    formData.append("Price", e.target.price.value);
    formData.append("Description", e.target.description.value);
    formData.append("ImageUrl", e.target.imageurl.value);
    formData.append("BestSeller", isBestseller);
    formData.append("Premium", isPremium);
    formData.append("Available", isAvailable);
    formData.append("BrandId", brandId);
    formData.append("CountryId", countryId);
    formData.append("RamId", ramId);
    //////
    dispatch(async(formData));
    setTimeout(() => navigate("/"), 3000);
    dispatch(resetCreatedProduct());
  };
  /////
  return (
    <form onSubmit={createProduct} className={styles.updateForm}>
      <input placeholder="Title" name="title" className={styles.typeText} />
      <input
        placeholder="Price"
        name="price"
        type="number"
        min={1}
        className={styles.typeText}
      />
      <input
        placeholder="Description"
        name="description"
        className={styles.typeText}
      />
      <input
        placeholder="Image url"
        name="imageurl"
        className={styles.typeText}
      />
      <div className={styles.forCheckbox}>
        <label htmlFor="bestseller">Best seller</label>
        <input
          id="bestseller"
          name="bestseller"
          type={"checkbox"}
          checked={isBestseller}
          onChange={() => dispatch(setBestseller())}
        />
      </div>
      <div className={styles.forCheckbox}>
        <label htmlFor="premium">Premium</label>
        <input
          id="premium"
          name="premium"
          type={"checkbox"}
          checked={isPremium}
          onChange={() => dispatch(setPremium())}
        />
      </div>
      <div className={styles.forCheckbox}>
        <label htmlFor="available">Available</label>
        <input
          id="available"
          name="available"
          type={"checkbox"}
          checked={isAvailable}
          onChange={() => dispatch(setAvailable())}
        />
      </div>
      <Update />
    </form>
  );
}
///////////////////
export default ProductUpdateForm;
