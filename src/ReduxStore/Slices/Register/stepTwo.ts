import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface SignUpStepTwoState {
  dob: string;
}

const initialState: SignUpStepTwoState = {
  dob: new Date().toISOString(),
};

export const signUpStepTwoSlice = createSlice({
  name: 'signUpStepTwoStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<SignUpStepTwoState>) => {
      state.dob = action.payload.dob;
    },
    setDOB: (state, action: PayloadAction<string>) => {
      state.dob = action.payload;
    },
    clearState: (state) => {
      state.dob = new Date().toString();
    },
  },
});

export const { setState, setDOB, clearState } =
  signUpStepTwoSlice.actions;

export const selectSignUpStepTwoData = (state: RootState) => state.signUpStepTwoState;

export const selectDOB = (state: RootState) =>
  state.signUpStepTwoState.dob;
export default signUpStepTwoSlice.reducer;
