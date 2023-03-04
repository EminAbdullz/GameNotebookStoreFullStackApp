import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_URL } from "../../api";
import { updateProductRequest } from "../../fetch";
///////////////////////
const initialState = {
  loading: false,
  error: null,
};
///////////////////////
export const postUpdatedProduct = createAsyncThunk(
  "change-product/changeProduct",
  async (payload) => {
    await updateProductRequest(PRODUCTS_URL, payload).then((resp) =>
      console.log(resp)
    );
  }
);
///////////////////////
const updateProductSlice = createSlice({
  name: "change-product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUpdatedProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postUpdatedProduct.fulfilled, (state, { payload }) => {
        state.changedProduct = [payload];
        state.loading = false;
        state.error = null;
      })
      .addCase(postUpdatedProduct.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});
/////////////
export const updatedProductAction = updateProductSlice.actions;
/////////
export default updateProductSlice.reducer;
