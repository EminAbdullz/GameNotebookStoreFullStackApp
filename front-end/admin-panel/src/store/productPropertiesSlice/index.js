import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { baseRequest } from "../../fetch";
import { BRANDS_URL, RAMS_URL, COUNTRIES_URL } from "../../api";
/////////////
const initialState = {
  brands: [],
  countries: [],
  rams: [],
  brandId: "",
  countryId: "",
  ramId: "",
  productId: "",
  isBestseller: false,
  isPremium: false,
  isAvailable: false,
  loading: false,
  error: null,
};
//////
export const getBrands = createAsyncThunk(
  "create-product/getBrands",
  async () => await baseRequest(BRANDS_URL)
);
//////
export const getCountries = createAsyncThunk(
  "create-product/getCountries",
  async () => await baseRequest(COUNTRIES_URL)
);
/////
export const getRams = createAsyncThunk(
  "create-products/getRams",
  async () => await baseRequest(RAMS_URL)
);
/////////////
const productPropertiesSlice = createSlice({
  name: "product-properties",
  initialState,
  reducers: {
    getBrandId: (state, action) => {
      const { payload } = action;
      state.brandId = payload;
    },
    getCountryId: (state, action) => {
      const { payload } = action;
      state.countryId = payload;
    },
    getRamId: (state, action) => {
      const { payload } = action;
      state.ramId = payload;
    },
    setBestseller: (state) => {
      state.isBestseller = !state.isBestseller;
    },
    setPremium: (state) => {
      state.isPremium = !state.isPremium;
    },
    setAvailable: (state) => {
      state.isAvailable = !state.isAvailable;
    },
    getProductId: (state, { payload }) => {
      state.productId = payload;
    },
    resetProductId: (state) => {
      state.productId = "";
    },
  },
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
      })
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCountries.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      })
      .addCase(getRams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRams.fulfilled, (state, { payload }) => {
        state.rams = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getRams.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  },
});
/////////////
export const productPropertiesAction = productPropertiesSlice.actions;
/////////////
export default productPropertiesSlice.reducer;
