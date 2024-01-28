import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../Slices/Login/loginSlice';
import signUpStepOneReducer from '../Slices/Register/stepOne';
import signUpStepTwoReducer from '../Slices/Register/stepTwo';
import signUpStepThreeReducer from '../Slices/Register/stepThree';
import signUpStepFourReducer from '../Slices/Register/stepFour';
import insStepOneReducer from '../Slices/InsuranceCheck/stepOne';
import insStepTwoReducer from '../Slices/InsuranceCheck/stepTwo';
import forgotReducer from '../Slices/ForgotPassword/forgotSlice';
import cameraReducer from '../Slices/CameraSlice/CameraSlice';
import homeReducer from '../Slices/HomePage/homePage';
import accountCreationReducer from '../Slices/AccountCreation/AccountCreation';

export const store = configureStore({
  reducer: {
    loginState: loginReducer,
    signUpStepOneState: signUpStepOneReducer,
    signUpStepTwoState: signUpStepTwoReducer,
    signUpStepThreeState: signUpStepThreeReducer,
    signUpStepFourState: signUpStepFourReducer,
    insStepOneState: insStepOneReducer,
    insStepTwoState: insStepTwoReducer,
    forgotState: forgotReducer,
    camera: cameraReducer,
    homeState: homeReducer,
    accountCreationState: accountCreationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
