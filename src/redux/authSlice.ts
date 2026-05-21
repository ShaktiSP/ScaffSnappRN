import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  role: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  role: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setRole, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;