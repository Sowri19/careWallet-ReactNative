import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface SignUpStepFourState {
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

const initialState: SignUpStepFourState = {
  address: '',
  city: '',
  state: '',
  zipcode: '',
};

export const signUpStepFourSlice = createSlice({
  name: 'signUpStepFourStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<SignUpStepFourState>) => {
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zipcode = action.payload.zipcode;
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
    setZipcode: (state, action: PayloadAction<string>) => {
      state.zipcode = action.payload;
    },
    clearState: (state) => {
      state.address = '';
      state.city = '';
      state.state = '';
      state.zipcode = '';
    },
  },
});

export const { setState, setAddress, setCity, setStates, setZipcode, clearState } =
  signUpStepFourSlice.actions;

export const selectSignUpStepFourData = (state: RootState) => state.signUpStepFourState;

export const selectAddress = (state: RootState) => state.signUpStepFourState.address;
export const selectCity = (state: RootState) => {
  return state.signUpStepFourState.city;
};
export const selectState = (state: RootState) => {
  return state.signUpStepFourState.state;
};
export const selectZipcode = (state: RootState) => {
  return state.signUpStepFourState.zipcode;
};
export default signUpStepFourSlice.reducer;
