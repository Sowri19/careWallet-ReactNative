import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface StepTwoState {
  address: string;
  city: string;
  state: string;
  dob: string;
}

const initialState: StepTwoState = {
  address: '',
  city: '',
  state: '',
  dob: new Date().toString(),
};

export const stepTwoSlice = createSlice({
  name: 'stepTwoStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<StepTwoState>) => {
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.dob = action.payload.dob;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setStates: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    setDOB: (state, action: PayloadAction<string>) => {
      state.dob = action.payload;
    },
    clearState: (state) => {
      state.address = '';
      state.city = '';
      state.state = '';
      state.dob = new Date().toString();
    },
  },
});

export const { setState, setAddress, setCity, setStates, setDOB, clearState } =
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
