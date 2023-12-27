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
    setPolicyHolderName: (state, action: PayloadAction<string>) => {
      state.policyHolderName = action.payload;
    },
    setMemberId: (state, action: PayloadAction<string>) => {
      state.memberId = action.payload;
    },
    setMemberDOB: (state, action: PayloadAction<string>) => {
      state.memberDOB = action.payload;
    },
    clearState: (state) => {
      state.insuranceName = '';
      state.policyHolderName = '';
      state.memberId = '';
      state.memberDOB = '';
    },
  },
});

export const {
  setState,
  setInsuranceName,
  setPolicyHolderName,
  setMemberId,
  setMemberDOB,
  clearState,
} = insStepOneSlice.actions;

export const selectStepOneData = (state: RootState) => state.insStepOneState;

export const selectInsuranceName = (state: RootState) =>
  state.insStepOneState.insuranceName;
export const selectPolicyHolderName = (state: RootState) =>
  state.insStepOneState.policyHolderName;
export const selectMemberId = (state: RootState) =>
  state.insStepOneState.memberId;
export const selectMemberDOB = (state: RootState) =>
  state.insStepOneState.memberDOB;
export default insStepOneSlice.reducer;
