import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCTS_URL } from "../../../api";
import { baseRequest } from "../../../services/base";
/////////////
const initialState = {
  products: [],
  loading: false,
  error: null,
};
/////////////
export const asyncThunkToGetProducts = createAsyncThunk(
  "products/asyncThunkToGetProducts",
  async () => await baseRequest(PRODUCTS_URL)
);
/////////////
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkToGetProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkToGetProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.products = payload;
      })
      .addCase(asyncThunkToGetProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});
/////////////
export default productsSlice.reducer;
