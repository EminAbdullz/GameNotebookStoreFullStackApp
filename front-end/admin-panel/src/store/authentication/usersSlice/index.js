import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_URL } from "../../../api";
import { baseRequest } from "../../../services/base";

const initialState = {
  users: [],
  userId: "",
  loading: false,
  error: null,
};

export const asyncThunkToGetUsers = createAsyncThunk(
  "users/asyncThunkToGetUsers",
  async () => {
    const response = await baseRequest(USER_URL);
    return response;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserId: (state, { payload }) => {
      state.userId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncThunkToGetUsers.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(asyncThunkToGetUsers.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.users = payload;
      })
      .addCase(asyncThunkToGetUsers.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      });
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
