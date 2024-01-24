import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';

export interface InsStepTwoState {
  insuranceType: string;
  groupNumber: string;
  // effectiveDate: string;
  // relToPolicyHolder: string;
}

const initialState: InsStepTwoState = {
  insuranceType: '',
  groupNumber: '',
  // effectiveDate: '',
  // relToPolicyHolder: '',
};

export const insStepTwoSlice = createSlice({
  name: 'insStepTwoStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<InsStepTwoState>) => {
      state.insuranceType = action.payload.insuranceType;
      state.groupNumber = action.payload.groupNumber;
      // state.effectiveDate = action.payload.effectiveDate;
      // state.relToPolicyHolder = action.payload.relToPolicyHolder;
    },
    setInsuranceType: (state, action: PayloadAction<string>) => {
      state.insuranceType = action.payload;
    },
    setGroupNumber: (state, action: PayloadAction<string>) => {
      state.groupNumber = action.payload;
    },
    // setEffectiveDate: (state, action: PayloadAction<string>) => {
    //   state.effectiveDate = action.payload;
    // },
    // setRelToPolicyHolder: (state, action: PayloadAction<string>) => {
    //   state.relToPolicyHolder = action.payload;
    // },
    clearState: (state) => {
      state.insuranceType = '';
      state.groupNumber = '';
      // state.effectiveDate = '';
      // state.relToPolicyHolder = '';
    },
  },
});

export const {
  setState,
  setInsuranceType,
  setGroupNumber,
  // setEffectiveDate,
  // setRelToPolicyHolder,
  clearState,
} = insStepTwoSlice.actions;

export const selectInsStepTwoData = (state: RootState) => state.insStepTwoState;

export const selectInsuranceName = (state: RootState) =>
  state.insStepTwoState.insuranceType;
export const selectPolicyHolderName = (state: RootState) =>
  state.insStepTwoState.groupNumber;
// export const selectMemberId = (state: RootState) =>
//   state.insStepTwoState.effectiveDate;
// export const selectMemberDOB = (state: RootState) =>
//   state.insStepTwoState.relToPolicyHolder;
export default insStepTwoSlice.reducer;
