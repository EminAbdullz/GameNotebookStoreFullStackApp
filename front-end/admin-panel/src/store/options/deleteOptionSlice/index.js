import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteOptionRequest } from "../../../services/options";

const initialState = {
  loading: false,
  error: null,
};

// one async thunk for delete brand, ram, country
export const asyncThunkForDeleteOption = createAsyncThunk(
  "delete-option/asyncThunkForDeleteOption",
  async ({ url, id }) => void deleteOptionRequest(url + id)
);

const deleteOptionSlice = createSlice({
  name: "delete-option",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkForDeleteOption.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncThunkForDeleteOption.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(asyncThunkForDeleteOption.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default deleteOptionSlice.reducer;
