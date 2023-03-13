import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { USER_LOGIN_URL } from "../../../api";
import { authorizationRequest } from "../../../services/authentication";

const initialState = {
  user: {},
  isAdmin: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "authorization/registerUser",
  async (payload) => {
    return await authorizationRequest(USER_LOGIN_URL, payload);
  }
);

const authorizationSlice = createSlice({
  name: "authorization",
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
        if (payload) state.isAdmin = state.user?.isAdmin;
        if (state.isAdmin === false) {
          toast.error("Only admin can enter.");
        }
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export default authorizationSlice.reducer;
