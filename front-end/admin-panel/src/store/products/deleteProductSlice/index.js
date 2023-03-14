import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { PRODUCTS_URL } from "../../../api";
import { deleteProductRequest } from "../../../services/products";

const initialState = {
  loading: false,
  error: null,
};

export const asyncThunkForDeleteProduct = createAsyncThunk(
  "delete-product/asyncThunkForDeleteProduct",
  async (id = "") => void (await deleteProductRequest(PRODUCTS_URL + id))
);

export const deletedProductSlice = createSlice({
  name: "delete-product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkForDeleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkForDeleteProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(asyncThunkForDeleteProduct.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
        toast.error(" Invalid values !! ");
      });
  },
});

export const deleteProductAction = deletedProductSlice.actions;

export default deletedProductSlice.reducer;
