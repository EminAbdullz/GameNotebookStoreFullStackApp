import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandId: "",
  countryId: "",
  ramId: "",
  optionBrandId: "",
  optionCountryId: "",
  optionRamId: "",
};

const optionPropertiesSlice = createSlice({
  name: "options-properties",
  initialState,
  reducers: {
    getBrandId: (state, { payload }) => {
      state.brandId = payload;
    },
    resetBrandId: (state) => {
      state.brandId = "";
    },
    getOptionBrandId: (state, { payload }) => {
      state.optionBrandId = payload;
    },
    resetOptionBrandId: (state) => {
      state.optionBrandId = "";
    },
    getCountryId: (state, { payload }) => {
      state.countryId = payload;
    },
    resetCountryId: (state) => {
      state.countryId = "";
    },
    getOptionCountryId: (state, { payload }) => {
      state.optionCountryId = payload;
    },
    resetOptionCountryId: (state) => {
      state.optionCountryId = "";
    },
    getRamId: (state, { payload }) => {
      state.ramId = payload;
    },
    resetRamId: (state) => {
      state.ramId = "";
    },
    getOptionRamId: (state, { payload }) => {
      state.optionRamId = payload;
    },
    resetOptionRamId: (state) => {
      state.optionRamId = "";
    },
  },
});

export const optionPropertiesActions = optionPropertiesSlice.actions;

export default optionPropertiesSlice.reducer;
