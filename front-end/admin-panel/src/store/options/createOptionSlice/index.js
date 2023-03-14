import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOptionRequest } from "../../../services/options";

const initialState = {
  loading: false,
  error: null,
};

// one async thunk for creating brand, ram, country
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
      .addCase(asyncThunkForCreateOption.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(asyncThunkForCreateOption.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default createOptionSlice.reducer;
