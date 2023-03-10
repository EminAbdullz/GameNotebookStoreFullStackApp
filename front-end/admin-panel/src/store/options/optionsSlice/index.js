import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BRANDS_URL, COUNTRIES_URL, RAMS_URL } from "../../../api";
import { baseRequest } from "../../../services/base";

const initialState = {
  brands: [],
  countries: [],
  rams: [],
  loading: false,
  error: null,
};

export const asyncThunkToGetBrands = createAsyncThunk(
  "options/asyncThunkToGetBrands",
  async () => {
    const response = await baseRequest(BRANDS_URL);
    return response;
  }
);

export const asyncThunkToGetCountries = createAsyncThunk(
  "options/asyncThunkToGetCountries",
  async () => {
    const response = await baseRequest(COUNTRIES_URL);
    return response;
  }
);

export const asyncThunkToGetRams = createAsyncThunk(
  "options/asyncThunkToGetRams",
  async () => {
    const response = await baseRequest(RAMS_URL);
    return response;
  }
);



////
const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkToGetBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkToGetBrands.fulfilled, (state, { payload }) => {
        state.brands = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(asyncThunkToGetBrands.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
    builder
      .addCase(asyncThunkToGetCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkToGetCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(asyncThunkToGetCountries.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
    builder
      .addCase(asyncThunkToGetRams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkToGetRams.fulfilled, (state, { payload }) => {
        state.rams = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(asyncThunkToGetRams.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  },
});

export default optionsSlice.reducer;
