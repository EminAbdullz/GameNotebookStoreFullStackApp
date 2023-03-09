import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryId: "",
  optionCountryId: "",
};

const countriesPropertiesSlice = createSlice({
  name: "countries-properties",
  initialState,
  reducers: {
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
  },
});

export const countriesPropertiesActions = countriesPropertiesSlice.actions;

export default countriesPropertiesSlice.reducer;
