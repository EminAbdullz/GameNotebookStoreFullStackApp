import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_URL } from "../../api";
import { deleteProductRequest } from "../../fetch";
////////////
const initialState = {
  loading: false,
  error: null,
};
////////////
export const deleteProduct = createAsyncThunk(
  "delete-product/deleteProduct",
  async (id = "") => {
    const response = await deleteProductRequest(PRODUCTS_URL + id);
    return response;
  }
);
///////////
export const deletedProductSlice = createSlice({
  name: "delete-product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  },
});
////////////////
export const deleteProductAction = deletedProductSlice.actions;
///////////////
export default deletedProductSlice.reducer;
