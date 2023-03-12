import { configureStore } from "@reduxjs/toolkit";
import authorizationSlice from "./authentication/authorization";
import productsSlice from "./products/productsSlice";
import productPropertiesSlice from "./products/productPropertiesSlice";
import createProductSlice from "./products/createProductSlice";
import updateProductSlice from "./products/updateProductSlice";
import deleteProductSlice from "./products/deleteProductSlice";
import optionsSlice from "./options/optionsSlice";
import createOptionSlice from "./options/createOptionSlice";
import optionPropertiesSlice from "./options/optionsProperties";
import deleteOptionSlice from "./options/deleteOptionSlice";
import updateOptionSlice from "./options/updateOptionSlice";
import usersSlice from "./authentication/usersSlice";
import updateUserSlice from "./authentication/blockUserSlice";

const store = configureStore({
  reducer: {
    authorization: authorizationSlice,
    users: usersSlice,
    updateUser: updateUserSlice,
    /////
    products: productsSlice,
    createProduct: createProductSlice,
    updateProduct: updateProductSlice,
    productProperties: productPropertiesSlice,
    deleteProduct: deleteProductSlice,
    /////
    options: optionsSlice,
    createOption: createOptionSlice,
    updateOption: updateOptionSlice,
    deleteOption: deleteOptionSlice,
    optionProperties: optionPropertiesSlice,
    /////
  },
});

export default store;
