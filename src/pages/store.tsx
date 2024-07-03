import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearAuth: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, clearAuth } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
