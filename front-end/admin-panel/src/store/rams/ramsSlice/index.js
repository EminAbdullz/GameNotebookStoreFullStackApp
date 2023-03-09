import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RAMS_URL } from "../../../api";
import { baseRequest } from "../../../services/base";

const initialState = {
  rams: [],
  loading: false,
  error: null,
};

export const getRams = createAsyncThunk("getRams/ramsSlice", async () => {
  const reponse = await baseRequest(RAMS_URL);
  return reponse;
});

const ramsSlice = createSlice({
  name: "getRams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRams.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getRams.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.rams = payload;
      })
      .addCase(getRams.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  },
});

export default ramsSlice.reducer;
