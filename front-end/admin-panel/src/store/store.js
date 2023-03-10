import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productsSlice from "./products/productsSlice";
import productPropertiesSlice from "./products/productPropertiesSlice";
import createProductSlice from "./products/createProductSlice";
import updateProductSlice from "./products/updateProductSlice";
import deleteProductSlice from "./products/deleteProductSlice";
import optionsSlice from "./options/optionsSlice";
import createOptionSlice from "./options/createOptionSlice";
import optionPropertiesSlice from "./options/optionsProperties";
import deleteOptionSlice from "./options/deleteOptionSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    /////
    products: productsSlice,
    createProduct: createProductSlice,
    updateProduct: updateProductSlice,
    productProperties: productPropertiesSlice,
    deleteProduct: deleteProductSlice,
    /////
    options: optionsSlice,
    createOption: createOptionSlice,
    deleteOption: deleteOptionSlice,
    optionProperties: optionPropertiesSlice,
    /////
  },
});

export default store;
