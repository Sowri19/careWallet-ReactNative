import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface StepTwoState {
  address: string;
  city: string;
  state: string;
  dob: Date;
}

const initialState: StepTwoState = {
  address: '',
  city: '',
  state: '',
  dob: new Date(),
};

export const stepTwoSlice = createSlice({
  name: 'stepTwoStore',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setState: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    setDOB: (state, action: PayloadAction<Date>) => {
      state.dob = action.payload;
    },
    clearState: (state) => {
      state.address = '';
      state.city = '';
      state.state = '';
      state.dob = new Date();
    },
  },
});

export const { setAddress, setCity, setState, setDOB, clearState } =
  stepTwoSlice.actions;

export const selectSteptwoData = (state: RootState) => state.stepTwoState;

export const selectAddress = (state: RootState) => state.stepTwoState.address;
export const selectCity = (state: RootState) => {
  return state.stepTwoState.city;
};
export const selectState = (state: RootState) => {
  return state.stepTwoState.state;
};
export const selectDOB = (state: RootState) => {
  return state.stepTwoState.dob;
};
export default stepTwoSlice.reducer;
