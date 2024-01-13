import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import axiosInstance from "@/api/axios";
import type { LoginResponse } from "@/types/auth";
import type { LoginValues } from "@pages/login/Login.types";
import { getStorageValue } from "@utils/storage";

import type { RootState } from "../store";

export const ACCESS_TOKEN_KEY = "access_token";

interface AuthSliceValues {
  accessToken: string | null;
  loginError: string | null;
}

const initialState: AuthSliceValues = {
  accessToken: getStorageValue(ACCESS_TOKEN_KEY),
  loginError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAccessToken: (state) => {
      state.accessToken = null;
    },
    resetLoginError: (state) => {
      state.loginError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.accessToken = action.payload.access_token;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginError = action.error.message || "Что-то пошло не так...";
    });
  },
});

export default authSlice.reducer;

export const authSelector = (state: RootState) => state.auth;

export const authActions = authSlice.actions;

export const login = createAsyncThunk(
  "auth/login",
  async (params: LoginValues) => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>("/auth/login", {
        ...params,
      });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message;
        throw new Error(errorMessage);
      }
    }
  }
);
