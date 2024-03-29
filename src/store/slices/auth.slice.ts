import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import axiosInstance from "@/api/axios";
import type { LoginResponse, SignupResponse, User } from "@/types/auth";
import type { LoginValues, SignupValues } from "@pages/auth/Auth.types";
import { getStorageValue } from "@utils/storage";

import type { RootState } from "../store";

export const ACCESS_TOKEN_KEY = "access_token";

interface AuthSliceValues {
  isInit: boolean;
  isAuthenticated: boolean;
  accessToken: string;
  user: Nullable<User>;
  loginError: Nullable<string>;
  signUpError: Nullable<string>;
}

const initialState: AuthSliceValues = {
  isInit: false,
  isAuthenticated: false,
  accessToken: getStorageValue(ACCESS_TOKEN_KEY) ?? "",
  user: null,
  loginError: null,
  signUpError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoginError: (state) => {
      state.loginError = null;
    },
    resetSignUpError: (state) => {
      state.signUpError = null;
    },
    logout: (state) => {
      state.accessToken = "";
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.accessToken = action.payload.access_token;
        state.isAuthenticated = true;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      const { payload } = action;
      if (payload) {
        state.loginError = payload;
      }
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      if (action.payload) {
        state.accessToken = action.payload.access_token;
        state.isAuthenticated = true;
      }
    });
    builder.addCase(signUp.rejected, (state, action) => {
      const { payload } = action;
      if (payload) {
        state.signUpError = payload;
      }
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isInit = true;
        state.isAuthenticated = true;
      }
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.isInit = true;
      state.isAuthenticated = false;
      state.accessToken = "";
    });
  },
});

export default authSlice.reducer;

export const authSelector = (state: RootState) => state.auth;

export const authActions = authSlice.actions;

export const login = createAsyncThunk<
  LoginResponse,
  LoginValues,
  { rejectValue: string }
>("auth/login", async (params, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<LoginResponse>("/auth/login", {
      ...params,
    });
    return data;
  } catch (error) {
    let errorMessage = "Что-то пошло не так...";

    if (error instanceof AxiosError) {
      errorMessage = error.response?.data?.message;
    }

    return rejectWithValue(errorMessage);
  }
});

export const signUp = createAsyncThunk<
  SignupResponse,
  SignupValues,
  { rejectValue: string }
>("auth/signup", async (params, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<LoginResponse>("/auth/register", {
      ...params,
    });
    return data;
  } catch (error) {
    let errorMessage = "Что-то пошло не так...";

    if (error instanceof AxiosError) {
      errorMessage = error.response?.data?.message;
    }

    return rejectWithValue(errorMessage);
  }
});

export const getProfile = createAsyncThunk<
  User,
  void,
  { state: RootState; rejectValue: string }
>("auth/profile", async (_, { signal, rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<User>("/user/profile", {
      signal,
    });
    return data;
  } catch (error) {
    let errorMessage = "Что-то пошло не так...";

    if (error instanceof AxiosError) {
      errorMessage = error.response?.data?.message;
    }

    return rejectWithValue(errorMessage);
  }
});
