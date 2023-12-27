import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface InsStepOneState {
  insuranceName: string;
  policyHolderName: string;
  memberId: string;
  memberDOB: string;
}

const initialState: InsStepOneState = {
  insuranceName: '',
  policyHolderName: '',
  memberId: '',
  memberDOB: '',
};

export const insStepOneSlice = createSlice({
  name: 'insStepOneStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<InsStepOneState>) => {
      state.insuranceName = action.payload.insuranceName;
      state.policyHolderName = action.payload.policyHolderName;
      state.memberId = action.payload.memberId;
      state.memberDOB = action.payload.memberDOB;
    },
    setInsuranceName: (state, action: PayloadAction<string>) => {
      state.insuranceName = action.payload;
    },
    clearState: (state) => {
      state.insuranceName = '';
      state.policyHolderName = '';
      state.memberId = '';
      state.memberDOB = '';
    },
  },
});

export const { setState, setInsuranceName, clearState } =
  insStepOneSlice.actions;

export const selectSteponeData = (state: RootState) => state.insStepOneState;

export const selectInsuranceName = (state: RootState) =>
  state.insStepOneState.insuranceName;
export default insStepOneSlice.reducer;
