import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface StepOneState {
  phoneNumber: string;
  email: string;
  newPassword: string;
}

const initialState: StepOneState = {
  phoneNumber: '',
  email: '',
  newPassword: '',
};

export const stepOneSlice = createSlice({
  name: 'stepOneStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<StepOneState>) => {
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
} = stepOneSlice.actions;

export const selectSteponeData = (state: RootState) => state.stepOneState;

export const selectPhoneNumber = (state: RootState) =>
  state.stepOneState.phoneNumber;
export const selectEmail = (state: RootState) => {
  return state.stepOneState.email;
};
export const selectNewPassword = (state: RootState) => {
  return state.stepOneState.newPassword;
};
export default stepOneSlice.reducer;
