import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://vrdigitalsolutions.website/vishva_sports_backend/public/api/user/register",
        data,
        {
          headers: {
            "X-API-KEY":
              "8a42f3b67d629e6f1f9c40dsu53fr34jfki98kloew5s2czui4mf9w0qkn",
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Register failed");
    }
  },
);

const initialState = {
  registerInfo: null,
  isRegisterPending: false,
  isRegisterSuccess: false,
  isRegisterError: false,
  registerErrorMessage: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetRegisterState: (state) => {
      state.isRegisterPending = false;
      state.isRegisterSuccess = false;
      state.isRegisterError = false;
      state.registerErrorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isRegisterPending = true;
        state.isRegisterSuccess = false;
        state.isRegisterError = false;
        state.registerErrorMessage = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isRegisterPending = false;
        state.isRegisterSuccess = true;
        state.registerInfo = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isRegisterPending = false;
        state.isRegisterError = true;
        state.registerErrorMessage = action.payload;
      });
  },
});

export const { resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
