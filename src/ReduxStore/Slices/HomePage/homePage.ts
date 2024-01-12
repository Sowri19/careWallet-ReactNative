import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../Setup/store';
import { Address } from '../../../utilities/CommonTypes';
import { styleDefaultProfileImage } from '../../../Styles/AppWideConstants/Styles';

export interface HomePageState {
  email: string;
  phoneNumber: string;
  isActive: boolean;
  validityDate: string;
  insuranceUrl: string;
  licenseUrl: string;
  healthCard1Url: string;
  healthCard2Url: string;
  profilePictureUrl: string;
  insuranceName: string;
  insuranceID: string;
  address: Address;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
}

const initialState: HomePageState = {
  email: `yadav.shas@northeastern.edu`,
  phoneNumber: `8578693748`,
  isActive: true,
  validityDate: `08/22/28`,
  insuranceUrl: `https://northeastern-dump.s3.us-east-2.amazonaws.com/insurance_card.png`,
  licenseUrl: `https://northeastern-dump.s3.us-east-2.amazonaws.com/license.png`,
  healthCard1Url: `https://northeastern-dump.s3.us-east-2.amazonaws.com/health-care-1.png`,
  healthCard2Url: `https://northeastern-dump.s3.us-east-2.amazonaws.com/health-care-2.png`,
  profilePictureUrl: styleDefaultProfileImage,
  insuranceName: `BlueCross BlueShield`,
  insuranceID: `498578945847589`,
  address: {
    state: `MA`,
    postal_code: `02119`,
    street_address: `22 Highland Ave`,
    locality: `Boston`,
    country: `US`,
  },
  dateOfBirth: `08/22/94`,
  firstName: `Shashi Bhushan`,
  lastName: `Yadav`,
};

export const homeSlice = createSlice({
  name: 'homeStore',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<HomePageState>) => {
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.isActive = action.payload.isActive;
      state.validityDate = action.payload.validityDate;
      state.insuranceUrl = action.payload.insuranceUrl;
      state.licenseUrl = action.payload.licenseUrl;
      state.healthCard1Url = action.payload.healthCard1Url;
      state.healthCard2Url = action.payload.healthCard2Url;
      state.profilePictureUrl = action.payload.profilePictureUrl;
      state.insuranceName = action.payload.insuranceName;
      state.insuranceID = action.payload.insuranceID;
      state.address = action.payload.address;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    setAddress: (state, action: PayloadAction<Address>) => {
      state.address = action.payload;
    },
    clearState: (state) => {
      state.email = ``;
      state.phoneNumber = ``;
      state.isActive = true;
      state.validityDate = ``;
      state.insuranceUrl = ``;
      state.licenseUrl = ``;
      state.healthCard1Url = ``;
      state.healthCard2Url = ``;
      state.profilePictureUrl = styleDefaultProfileImage;
      state.insuranceName = ``;
      state.insuranceID = ``;
      state.address = {
        state: ``,
        postal_code: ``,
        street_address: ``,
        locality: ``,
        country: ``,
      };
      state.dateOfBirth = ``;
      state.firstName = ``;
      state.lastName = ``;
    },
  },
});

export const { setState } = homeSlice.actions;

export const selectState = (state: RootState) => state.homeState;
export const selectAddressState = (state: RootState) =>
  state.homeState.address.state;
export const selectAddressPostCode = (state: RootState) =>
  state.homeState.address.postal_code;
export const selectAddressLocality = (state: RootState) =>
  state.homeState.address.locality;
export const selectAddressCountry = (state: RootState) =>
  state.homeState.address.country;
export const selectAddressStreet = (state: RootState) =>
  state.homeState.address.street_address;
export const selectActive = (state: RootState) => state.homeState.isActive;
export const selectValidityDate = (state: RootState) =>
  state.homeState.validityDate;
export const selectEmail = (state: RootState) => state.homeState.email;
export const selectAddress = (state: RootState) => state.homeState.address;
export const selectFirstName = (state: RootState) => state.homeState.firstName;
export const selectLastName = (state: RootState) => state.homeState.lastName;
export const selectInsuranceUrl = (state: RootState) =>
  state.homeState.insuranceUrl;
export const selectLicenseUrl = (state: RootState) =>
  state.homeState.licenseUrl;
export const selectHealthCard1Url = (state: RootState) =>
  state.homeState.healthCard1Url;
export const selectHealthCard2Url = (state: RootState) =>
  state.homeState.healthCard2Url;
export const selectProfilePictureUrl = (state: RootState) =>
  state.homeState.profilePictureUrl;
export const selectInsuranceName = (state: RootState) =>
  state.homeState.insuranceName;
export const selectInsuranceID = (state: RootState) =>
  state.homeState.insuranceID;
export const selectDateOfBirth = (state: RootState) =>
  state.homeState.dateOfBirth;
export const selectPhoneNumber = (state: RootState) =>
  state.homeState.phoneNumber;
export default homeSlice.reducer;
