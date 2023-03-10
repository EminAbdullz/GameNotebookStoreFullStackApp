import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateOptionRequest } from "../../../services/options";

const initialState = {
  updatedOption: {},
  loading: false,
  error: null,
};

export const asyncThunkForUpdateOption = createAsyncThunk(
  "update-option/asyncThunkForUpdateOption",
  async ({ url, formData }) => {
    const response = await updateOptionRequest(url, formData);
    return response;
  }
);

const updateOptionSlice = createSlice({
  name: "update-option",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkForUpdateOption.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkForUpdateOption.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.createdBrand = { ...payload };
      })
      .addCase(asyncThunkForUpdateOption.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default updateOptionSlice.reducer;
