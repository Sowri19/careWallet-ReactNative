import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../Setup/store';
import { AccountCreationData } from '../../../Shared/Interfaces/AccountCreationData';

const initialState: AccountCreationData = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  newPassword: '',
  address: '',
  city: '',
  zipcode: '',
  state: '',
  dob: '',
  insuranceName: '',
  policyHolderName: '',
  memberId: '',
  memberDOB: '',
  insuranceType: '',
  groupNumber: '',
  effectiveDate: '',
  relToPolicyHolder: '',
};

const accountCreationSlice = createSlice({
  name: 'accountCreation',
  initialState,
  reducers: {
    setAccountCreationData: (
      state,
      action: PayloadAction<AccountCreationData>
    ) => {
      return { ...state, ...action.payload };
    },
    clearAccountCreationData: () => {
      return initialState;
    },
  },
});

export const { setAccountCreationData, clearAccountCreationData } =
  accountCreationSlice.actions;

export const selectAccountCreationData = (state: RootState) =>
  state.accountCreationState;

export default accountCreationSlice.reducer;
