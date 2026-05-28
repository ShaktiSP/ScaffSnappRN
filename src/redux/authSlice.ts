import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  role: string | null;
  isAuthenticated: boolean;
  hasSeenOnboarding: boolean;
}

const initialState: AuthState = {
  role: null,
  isAuthenticated: false,
  hasSeenOnboarding: false,
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
      // hasSeenOnboarding true rehta hai — dobara onboarding nahi dikhegi
    },
    setHasSeenOnboarding: (state) => {
      state.hasSeenOnboarding = true;
    },
    // App start pe AsyncStorage se load karne ke liye
    hydrateAuth: (state, action: PayloadAction<Partial<AuthState>>) => {
      if (action.payload.isAuthenticated !== undefined)
        state.isAuthenticated = action.payload.isAuthenticated;
      if (action.payload.role !== undefined)
        state.role = action.payload.role;
      if (action.payload.hasSeenOnboarding !== undefined)
        state.hasSeenOnboarding = action.payload.hasSeenOnboarding;
    },
  },
});

export const { setRole, loginSuccess, logout, setHasSeenOnboarding, hydrateAuth } = authSlice.actions;
export default authSlice.reducer;