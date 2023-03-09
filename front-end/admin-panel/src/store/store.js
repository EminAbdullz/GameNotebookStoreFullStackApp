import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productsSlice from "./products/productsSlice";
import productPropertiesSlice from "./products/productPropertiesSlice";
import createProductSlice from "./products/createProductSlice";
import updateProductSlice from "./products/updateProductSlice";
import deleteProductSlice from "./products/deleteProductSlice";
import brandsSlice from "./brands/brandsSlice";
import createBrandSlice from "./brands/createBrandSlice";
import countriesSlice from "./countries/countriesSlice";
import ramsSlice from "./rams/ramsSlice";
import deleteBrandSlice from "./brands/deleteBrandSlice";
import brandsPropertiesSlice from "./brands/brandsProperties";
import countriesPropertiesSlice from "./countries/countriesPropertiesSlice";
import ramsPropertiesSlice from "./rams/ramsPropertiesSlice";

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
    brands: brandsSlice,
    createBrands: createBrandSlice,
    deleteBrands: deleteBrandSlice,
    brandProperties: brandsPropertiesSlice,
    /////
    countries: countriesSlice,
    countriesProperties: countriesPropertiesSlice,
    /////
    rams: ramsSlice,
    ramsProperties: ramsPropertiesSlice,
  },
});

export default store;
