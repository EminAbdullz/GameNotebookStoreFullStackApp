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
    getOptionBrandId: (state, { payload }) => {
      state.optionBrandId = payload;
    },
    getCountryId: (state, { payload }) => {
      state.countryId = payload;
    },
    getOptionCountryId: (state, { payload }) => {
      state.optionCountryId = payload;
    },
    getRamId: (state, { payload }) => {
      state.ramId = payload;
    },
    getOptionRamId: (state, { payload }) => {
      state.optionRamId = payload;
    },
  },
});

export const optionPropertiesActions = optionPropertiesSlice.actions;

export default optionPropertiesSlice.reducer;
