import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BRANDS_URL } from "../../../api";
import { baseRequest } from "../../../services/base";

const initialState = {
  brands: [],
  loading: false,
  error: null,
};

export const getBrands = createAsyncThunk("brands/getBrands", async () => {
  const response = await baseRequest(BRANDS_URL);
  return response;
});

////
const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.brands = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getBrands.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  },
});

export default brandsSlice.reducer;
