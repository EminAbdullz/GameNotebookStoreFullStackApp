import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BRANDS_URL } from "../../../api";
import { createBrandRequest } from "../../../services/brands";

const initialState = {
  createdBrand: {},
  loading: false,
  error: null,
};

export const createBrand = createAsyncThunk(
  "create-brand/createBrand",
  async (payload = {}) => {
    const response = await createBrandRequest(BRANDS_URL, payload);
    return response;
  }
);

const createBrandSlice = createSlice({
  name: "create-brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBrand.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.createdBrand = { ...payload };
      })
      .addCase(createBrand.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default createBrandSlice.reducer;
