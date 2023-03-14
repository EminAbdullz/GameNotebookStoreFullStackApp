import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUpdateDataBase from "../../hooks/useUpdateDataBase";
import { UpdateIcon } from "../../icons/icons";
import { productPropertiesAction } from "../../store/products/productPropertiesSlice";
import Button from "../Button";
import styles from "./style/index.module.scss";

///////////////////
function ProductUpdateForm() {
  const { isBestseller, isPremium, isAvailable } = useSelector(
    (state) => state.productProperties
  );
  const { brandId } = useSelector((state) => state.optionProperties);
  const { countryId } = useSelector((state) => state.optionProperties);
  const { ramId } = useSelector((state) => state.optionProperties);
  const { productId } = useSelector((state) => state.productProperties);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { setBestseller, setPremium, setAvailable } = productPropertiesAction;
  const { asyncUpdateProducts } = useUpdateDataBase();

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

    if (
      !formData.get("Title") ||
      !formData.get("Price") ||
      !formData.get("Description") ||
      !formData.get("ImageUrl") ||
      !formData.get("BrandId") ||
      !formData.get("CountryId") ||
      !formData.get("RamId")
    ) {
      toast.error(`Invalid values !!`, { position: "top-right" });
      return;
    } else {
      setTimeout(() => {
        navigate("/");
      }, 1000);
      asyncUpdateProducts(formData);
    }
  };

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
      <Button>
        <div className={styles.icon}>
          <UpdateIcon />
        </div>
        {location.pathname === "/create"
          ? "Create"
          : location.pathname === "/update"
          ? "Update"
          : null}
      </Button>
    </form>
  );
}
///////////////////
export default ProductUpdateForm;
