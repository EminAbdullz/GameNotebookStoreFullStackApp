import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COUNTRIES_URL } from "../../../api";
import { baseRequest } from "../../../services/base";

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const response = await baseRequest(COUNTRIES_URL);
    return response;
  }
);

const countriesSlice = createSlice({
  name: "Countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountries.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.countries = payload;
      })
      .addCase(getCountries.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default countriesSlice.reducer;
