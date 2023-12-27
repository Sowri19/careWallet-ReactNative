import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface SignUpState {
  firstName: string;
  lastName: string;
}

const initialState: SignUpState = {
  firstName: '',
  lastName: '',
};

export const signUpSlice = createSlice({
  name: 'signUpStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<SignUpState>) => {
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
  signUpSlice.actions;

export const selectSignUpData = (state: RootState) => state.signUpState;

export const selectFirstName = (state: RootState) =>
  state.signUpState.firstName;
export const selectLastName = (state: RootState) => {
  return state.signUpState.lastName;
};
export default signUpSlice.reducer;
