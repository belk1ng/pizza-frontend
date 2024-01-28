import { configureStore } from "@reduxjs/toolkit";

import axiosInstance from "@/api/axios";
import { authReducer, cartReducer } from "@store/slices";
import { ACCESS_TOKEN_KEY } from "@store/slices/auth.slice";
import { setStorageValue } from "@utils/storage";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const { accessToken } = store.getState().auth;
  const axiosInstanceHasAuthHeader =
    "Authorization" in axiosInstance.defaults.headers.common;

  if (accessToken && !axiosInstanceHasAuthHeader) {
    axiosInstance.defaults.headers.common["Authorization"] =
      `Bearer ${accessToken}`;
  } else if (!accessToken && axiosInstanceHasAuthHeader) {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }

  setStorageValue(ACCESS_TOKEN_KEY, accessToken);
});

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;
