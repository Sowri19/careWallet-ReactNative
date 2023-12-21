import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
export interface LoginState {
  loginID: string;
  password: string;
}

// Define the initial state using that type
const initialState: LoginState = {
  loginID: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'loginStore',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginID: (state, action: PayloadAction<string>) => {
      state.loginID = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setLoginID, setPassword } = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLoginData = (state: RootState) => state.loginState;

export const selectLoginID = (state: RootState) => state.loginState.loginID;
export const selectLoginPass = (state: RootState) => {
  return state.loginState.password;
};
export default loginSlice.reducer;
