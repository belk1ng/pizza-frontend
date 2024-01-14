import { configureStore } from "@reduxjs/toolkit";

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
  setStorageValue(ACCESS_TOKEN_KEY, accessToken);
});

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;
