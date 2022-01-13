import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
} from './authOperations.js';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshCurrentUser = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoggedIn = true;
        state.isRefreshCurrentUser = false;
      })
      .addCase(refreshCurrentUser.rejected, state => {
        state.isRefreshCurrentUser = false;
      });
  },
});

export default authSlice.reducer;
