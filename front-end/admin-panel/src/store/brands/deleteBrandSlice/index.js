import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BRANDS_URL } from "../../../api";
import { deleteBrandRequest } from "../../../services/brands";

const initialState = {
  loading: false,
  error: null,
};

export const deleteBrand = createAsyncThunk(
  "delete-brand/deleteBrand",
  async (payload = "") => {
    deleteBrandRequest(BRANDS_URL + payload);
  }
);

const deleteBrandSlice = createSlice({
  name: "create-brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBrand.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteBrand.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default deleteBrandSlice.reducer;
