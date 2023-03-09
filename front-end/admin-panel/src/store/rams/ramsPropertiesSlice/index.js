import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ramId: "",
  optionRamId: "",
};

const ramsPropertiesSlice = createSlice({
  name: "rams-properties",
  initialState,
  reducers: {
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

export const ramsPropertiesActions = ramsPropertiesSlice.actions;

export default ramsPropertiesSlice.reducer;
