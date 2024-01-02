import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../Setup/store';

export interface ForgotPassState {
  username: string;
  isEmail: boolean;
  newPassword: string;
  otp: string;
}

const initialState: ForgotPassState = {
  username: '',
  isEmail: false,
  newPassword: '',
  otp: '',
};

export const forgotSlice = createSlice({
  name: 'forgotStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<ForgotPassState>) => {
      state.username = action.payload.username;
      state.isEmail = action.payload.isEmail;
      state.newPassword = action.payload.newPassword;
      state.otp = action.payload.otp;
    },
    setStepOne: (
      state,
      action: PayloadAction<{ username: string; isEmail: boolean }>
    ) => {
      state.username = action.payload.username;
      state.isEmail = action.payload.isEmail;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setIsEmail: (state, action: PayloadAction<boolean>) => {
      state.isEmail = action.payload;
    },
    setNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;
    },
    setOTP: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    clearState: (state) => {
      state.username = '';
      state.isEmail = false;
      state.newPassword = '';
    },
  },
});

export const {
  setUsername,
  setStepOne,
  setOTP,
  setIsEmail,
  setNewPassword,
  setState,
} = forgotSlice.actions;

export const selectState = (state: RootState) => state.forgotState;
export const selectUsername = (state: RootState) => state.forgotState.username;
export const selectIsEmail = (state: RootState) => state.forgotState.isEmail;
export const selectNewPassword = (state: RootState) =>
  state.forgotState.newPassword;
export default forgotSlice.reducer;
