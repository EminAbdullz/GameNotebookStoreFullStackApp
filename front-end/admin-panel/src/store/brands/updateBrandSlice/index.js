import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BRANDS_URL } from "../../../api";
import { updateBrandRequest } from "../../../services/brands";

const initialState = {
  updatedBrand: {},
  loading: false,
  error: null,
};

export const updateBrand = createAsyncThunk(
  "update-brand/updateBrand",
  async (payload = {}) => {
    const response = await updateBrandRequest(BRANDS_URL, payload);
    return response;
  }
);

const updateBrandSlice = createSlice({
  name: "update-brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBrand.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.createdBrand = { ...payload };
      })
      .addCase(updateBrand.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default updateBrandSlice.reducer;
