import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const initialState = {
  access_token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

export const authSelector = (state: RootState) => state.auth;

export const authActions = authSlice.actions;
