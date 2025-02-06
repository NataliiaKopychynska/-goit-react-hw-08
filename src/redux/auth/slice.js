import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: { name: "", email: "" },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;

        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.isLoggedIn = false;
        state.token = "";
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        state.user = { name: "", email: "" };
        state.isLoggedIn = false; // ВАЖЛИВО: робимо isLogin false
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = { name: action.payload.name, email: action.payload.email };
        state.isLoggedIn = true;
        state.isRefreshing = false;

        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = true;
      });
  },
});

export const authReducer = slice.reducer;
