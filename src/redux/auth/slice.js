import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
} from "./operations";

//11111nkopichinckaya@gmail.com
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || { name: "", email: "" },
  token: localStorage.getItem("token") || "",
  isLogin: Boolean(localStorage.getItem("token")),
  isRefreshing: false,
};

// const initialState = {
//   user: {
//     name: "",
//     email: "",
//   },
//   token: "",
//   isLogin: false,
// };

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogin = true;
        state.token = action.payload.token;
        //
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogin = true;
        state.token = action.payload.token;
        //
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        // state.user = action.payload.user;
        // state.isLogin = false;
        // state.token = action.payload.token;
        //
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        state.user = { name: "", email: "" };
        state.isLogin = false; // ВАЖЛИВО: робимо isLogin false
        state.token = "";
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLogin = true;
        state.isRefreshing = false;
        // state.token = action.payload.token;
        //
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
