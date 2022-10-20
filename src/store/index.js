import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = {
  isAuthenticate: false,
  username: 'admin',
  password: 'Test12345',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      if (
        action.payload.username === state.username &&
        action.payload.password === state.password
      ) {
        state.isAuthenticate = true;
      }
    },
    logout(state) {
      state.isAuthenticate = false;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;
