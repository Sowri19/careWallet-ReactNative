import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface LoginState {
  loginID: string;
  password: string;
  type: string;
}

const initialState: LoginState = {
  loginID: '',
  password: '',
  type: '',
};

export const loginSlice = createSlice({
  name: 'loginStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<LoginState>) => {
      state.loginID = action.payload.loginID;
      state.password = action.payload.password;
      state.type = action.payload.type;
    },
    setLoginID: (state, action: PayloadAction<string>) => {
      state.loginID = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    clearState: (state) => {
      state.loginID = '';
      state.password = '';
      state.type = '';
    },
  },
});

export const { setState, setLoginID, setPassword, clearState, setType } =
  loginSlice.actions;

export const selectLoginData = (state: RootState) => state.loginState;

export const selectLoginID = (state: RootState) => state.loginState.loginID;
export const selectPassword = (state: RootState) => state.loginState.password;
export const selectType = (state: RootState) => state.loginState.type;
export const selectLoginPass = (state: RootState) => {
  return state.loginState.password;
};
export default loginSlice.reducer;
