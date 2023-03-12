import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateUserRequest } from "../../../services/authentication";

const initialState = {
  error: null,
  loading: false,
};

export const asyncThunkForUpdateUser = createAsyncThunk(
  "block-user/asyncThunkForUpdateUser",
  async ({ url, formData }) => void updateUserRequest(url, formData)
);

const blockUserSlice = createSlice({
  name: "block-user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkForUpdateUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(asyncThunkForUpdateUser.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(asyncThunkForUpdateUser.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  },
});

export default blockUserSlice.reducer;
