import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_URL } from "../../../api";
import { updateProductRequest } from "../../../services/products";
///////////////////////
const initialState = {
  loading: false,
  error: null,
};
///////////////////////
export const asyncThunkForUpdateProducts = createAsyncThunk(
  "change-product/asyncThunkForUpdateProducts",
  async (payload) => {
    const response = await updateProductRequest(PRODUCTS_URL, payload);
    return response;
  }
);
///////////////////////
const updateProductSlice = createSlice({
  name: "change-product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkForUpdateProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkForUpdateProducts.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(asyncThunkForUpdateProducts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});
/////////////
export const updatedProductAction = updateProductSlice.actions;
/////////
export default updateProductSlice.reducer;
