import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

export const goItApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setAuthHeader = (token) => {
  goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goItApi.post("users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      const errorCode = e.response?.data?.code;
      if (errorCode === 11000) {
        toast.error("User already exist!");
        return thunkApi.rejectWithValue(e.message);
      }
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goItApi.post("users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      const { data } = await goItApi.post("users/logout");

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "users/current",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
      return thunkApi.rejectWithValue(`token is not exist`);
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await goItApi.get("users/current");

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
