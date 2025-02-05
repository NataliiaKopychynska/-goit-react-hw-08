// import axios from "axios";
// import { fetchDataSuccess, setError, setLoading } from "./contactsSice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItApi } from "./auth/operations";

// axios.defaults.baseURL = "https://connections-api.goit.global";

//
const setAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    goItApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

export const fetchContactThunk = createAsyncThunk(
  "contacts/fetchData",
  async (_, thunkAPI) => {
    try {
      //
      setAuthHeader();
      const { data } = await goItApi.get("contacts");
      return data;
    } catch (e) {
      //   console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      //
      setAuthHeader();
      const { data } = await goItApi.delete(`contacts/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      //
      setAuthHeader();
      const { data } = await goItApi.post("contacts", body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  "contacts/editContacts",
  async (body, thunkAPI) => {
    try {
      console.log(body);

      //
      setAuthHeader();
      const { data } = await goItApi.patch(`contacts/${body.id}`, {
        name: body.name,
        number: body.number,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
