import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandId: "",
  optionBrandId: "",
};

const brandsPropertiesSlice = createSlice({
  name: "brands-properties",
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
      state.brandId = "";
    },
  },
});

export const brandsPropertiesActions = brandsPropertiesSlice.actions;

export default brandsPropertiesSlice.reducer;
