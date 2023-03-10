import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCTS_URL } from "../../../api/index";
import { createProductRequest } from "../../../services/products";
///////
const initialState = {
  createdProduct: [],
  loading: false,
  error: null,
};
//////
export const asyncThunkForCreateProduct = createAsyncThunk(
  "create-product/asyncThunkForCreateProduct",
  async (payload) => {
    const response = await createProductRequest(PRODUCTS_URL, payload);
    return response;
  }
);
//////
const createProductSlice = createSlice({
  name: "create-product",
  initialState,
  reducers: {
    resetCreatedProduct: (state) => {
      state.createdProduct = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkForCreateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkForCreateProduct.fulfilled, (state, { payload }) => {
        state.createdProduct = [payload];
        state.loading = false;
        state.error = null;
      })
      .addCase(asyncThunkForCreateProduct.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  },
});
//////
export const createProductAction = createProductSlice.actions;
//////
export default createProductSlice.reducer;
