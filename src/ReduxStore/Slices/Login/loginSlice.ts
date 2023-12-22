import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface LoginState {
  loginID: string;
  password: string;
}

const initialState: LoginState = {
  loginID: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'loginStore',
  initialState,
  reducers: {
    setLoginID: (state, action: PayloadAction<string>) => {
      state.loginID = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearState: (state) => {
      state.loginID = '';
      state.password = '';
    },
  },
});

export const { setLoginID, setPassword, clearState } = loginSlice.actions;

export const selectLoginData = (state: RootState) => state.loginState;

export const selectLoginID = (state: RootState) => state.loginState.loginID;
export const selectLoginPass = (state: RootState) => {
  return state.loginState.password;
};
export default loginSlice.reducer;
