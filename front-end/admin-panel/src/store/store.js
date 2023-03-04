import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productsSlice from "./productsSlice";
import createProductSlice from "./createProductSlice";
import updateProductSlice from "./updateProductSlice";
import productPropertiesSlice from "./productPropertiesSlice";
import deleteProductSlice from "./deleteProductSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    createProduct: createProductSlice,
    updateProduct: updateProductSlice,
    productProperties: productPropertiesSlice,
    deleteProduct: deleteProductSlice,
  },
});

export default store;
