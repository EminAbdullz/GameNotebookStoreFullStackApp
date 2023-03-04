import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_LOGIN_URL } from "../../api";
///////////
const initialState = {
  user: {},
  loading: false,
  error: null,
};
///////////
export const loginUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const user = await axios.post(USER_LOGIN_URL, values);
      return user?.data;
    } catch (error) {
      return rejectWithValue("wrong");
    }
  }
);
///////////
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.user = { ...payload };
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});
///////////
export default authSlice.reducer;
