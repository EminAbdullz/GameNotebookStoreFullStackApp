import { createSlice } from "@reduxjs/toolkit";
/////////////
const initialState = {
  productId: "",
  isBestseller: false,
  isPremium: false,
  isAvailable: false,
  loading: false,
  error: null,
};
/////////////
const productPropertiesSlice = createSlice({
  name: "product-properties",
  initialState,
  reducers: {
    setBestseller: (state) => {
      state.isBestseller = !state.isBestseller;
    },
    setPremium: (state) => {
      state.isPremium = !state.isPremium;
    },
    setAvailable: (state) => {
      state.isAvailable = !state.isAvailable;
    },
    getProductId: (state, { payload }) => {
      state.productId = payload;
    },
    resetProductId: (state) => {
      state.productId = "";
    },
  },
});
/////////////
export const productPropertiesAction = productPropertiesSlice.actions;
/////////////
export default productPropertiesSlice.reducer;
