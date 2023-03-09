// import { useDispatch, useSelector } from "react-redux";
// import Button from "../../components/Button";
// import CreatingForm from "../../components/CreateOption/CreatingForm";
// import CreateOptions from "../../components/CreateOptions";
// import OptionCart from "../../components/CreateOptions/OptionCart";
// import DropMenu from "../../components/DropMenu";
// import useUpdateDataBase from "../../hooks/useUpdateDataBase";
// import { brandsPropertiesActions } from "../../store/brands/brandsProperties";
// import { countriesPropertiesActions } from "../../store/countries/countriesPropertiesSlice";
// import { ramsPropertiesActions } from "../../store/rams/ramsPropertiesSlice";
// import styles from "./style/index.module.scss";

import DropMenus from "../../components/CreateOption/DropMenus";
import CreatingForm from "../../components/CreateOption/CreatingForm";

function Options() {
  return (
    <div>
      <CreatingForm />
      <DropMenus />
    </div>
  );
}

export default Options;
