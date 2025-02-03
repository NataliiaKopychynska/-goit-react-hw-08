import axios from "axios";
// import { fetchDataSuccess, setError, setLoading } from "./contactsSice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://679ccae987618946e6536c61.mockapi.io";

// export const fetchData = () => async (dispatch) => {
//   try {
//     dispatch(setError(false));

//     dispatch(setLoading(true));
//     const { data } = await axios.get("/contacts");
//     dispatch(fetchDataSuccess(data));
//     dispatch(setLoading(false));
//   } catch (e) {
//     console.log(e);
//     dispatch(setError(true));
//   }
// };

export const fetchContactThunk = createAsyncThunk(
  "contacts/fetchData",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
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
      const { data } = await axios.delete(`/contacts/${id}`);
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
      const { data } = await axios.post("/contacts", body);
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
      const { data } = await axios.put(`/contacts/${body.id}`, body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
