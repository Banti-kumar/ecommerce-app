import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk(
  "login/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://vrdigitalsolutions.website/vishva_sports_backend/public/api/user/login",
        credentials,
        {
          headers: {
            "X-API-KEY":
              "8a42f3b67d629e6f1f9c40dsu53fr34jfki98kloew5s2czui4mf9w0qkn",
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  },
);

const initialState = {
  userInfo: null,
  isLoginPending: false,
  isLoginSuccess: false,
  isLoginError: false,
  loginErrorMessage: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.isLoginSuccess = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoginPending = true;
        state.isLoginSuccess = false;
        state.isLoginError = false;
        state.loginErrorMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoginPending = false;
        state.isLoginSuccess = true;
        state.userInfo = action.payload;

        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoginPending = false;
        state.isLoginError = true;
        state.loginErrorMessage = action.payload;
      });
  },
});

export { loginUser };
export default loginSlice.reducer;
