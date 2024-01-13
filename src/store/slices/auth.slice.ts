import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import axiosInstance from "@/api/axios";
import type { LoginResponse, User } from "@/types/auth";
import type { LoginValues } from "@pages/login/Login.types";
import { getStorageValue } from "@utils/storage";

import type { RootState } from "../store";

export const ACCESS_TOKEN_KEY = "access_token";

interface AuthSliceValues {
  accessToken: string | null;
  loginError: string | null;
  user: User | null;
}

const initialState: AuthSliceValues = {
  accessToken: getStorageValue(ACCESS_TOKEN_KEY),
  loginError: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoginError: (state) => {
      state.loginError = null;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.accessToken = action.payload.access_token;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      const { payload } = action;
      if (payload) {
        state.loginError = payload;
      }
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
      }
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

export const getProfile = createAsyncThunk<
  User,
  void,
  { state: RootState; rejectValue: string }
>("auth/profile", async (_, { getState, signal, rejectWithValue }) => {
  const { accessToken } = getState().auth;

  const token = `Bearer ${accessToken}`;

  try {
    const { data } = await axiosInstance.get<User>("/user/profile", {
      headers: {
        Authorization: token,
      },
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
