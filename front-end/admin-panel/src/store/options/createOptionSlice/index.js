import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOptionRequest } from "../../../services/options";

const initialState = {
  createdOption: {},
  loading: false,
  error: null,
};

export const asyncThunkForCreateOption = createAsyncThunk(
  "create-option/asyncThunkForCreateOption",
  async ({ url, formData }) => {
    const response = await createOptionRequest(url, formData);
    return response;
  }
);

const createOptionSlice = createSlice({
  name: "create-option",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkForCreateOption.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkForCreateOption.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.createdBrand = { ...payload };
      })
      .addCase(asyncThunkForCreateOption.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default createOptionSlice.reducer;
