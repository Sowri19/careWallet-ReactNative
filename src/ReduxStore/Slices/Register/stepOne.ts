import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface SignUpStepOneState {
  firstName: string;
  lastName: string;
}

const initialState: SignUpStepOneState = {
  firstName: '',
  lastName: '',
};

export const signUpStepOneSlice = createSlice({
  name: 'signUpStepOneStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<SignUpStepOneState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    clearState: (state) => {
      state.firstName = '';
      state.lastName = '';
    },
  },
});

export const { setState, setFirstName, setLastName, clearState } =
  signUpStepOneSlice.actions;

export const selectSignUpStepOneData = (state: RootState) => state.signUpStepOneState;

export const selectFirstName = (state: RootState) =>
  state.signUpStepOneState.firstName;
export const selectLastName = (state: RootState) => {
  return state.signUpStepOneState.lastName;
};
export default signUpStepOneSlice.reducer;
