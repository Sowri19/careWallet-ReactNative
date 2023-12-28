import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface SignUpStepThreeState {
  phoneNumber: string;
  email: string;
  newPassword: string;
}

const initialState: SignUpStepThreeState = {
  phoneNumber: '',
  email: '',
  newPassword: '',
};

export const signUpStepThreeSlice = createSlice({
  name: 'signUpStepThreeStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<SignUpStepThreeState>) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.newPassword = action.payload.newPassword;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;
    },
    clearState: (state) => {
      state.phoneNumber = '';
      state.email = '';
      state.newPassword = '';
    },
  },
});

export const {
  setState,
  setPhoneNumber,
  setEmail,
  setNewPassword,
  clearState,
} = signUpStepThreeSlice.actions;

export const selectSignUpStepThreeData = (state: RootState) => state.signUpStepThreeState;

export const selectPhoneNumber = (state: RootState) =>
  state.signUpStepThreeState.phoneNumber;
export const selectEmail = (state: RootState) => {
  return state.signUpStepThreeState.email;
};
export const selectNewPassword = (state: RootState) => {
  return state.signUpStepThreeState.newPassword;
};
export default signUpStepThreeSlice.reducer;
