import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../Slices/Login/loginSlice';
import signUpReducer from '../Slices/Register/signUp';
import stepOneReducer from '../Slices/Register/stepOne';
import stepTwoReducer from '../Slices/Register/stepTwo';
import insStepOneReducer from '../Slices/InsuranceCheck/stepOne';

export const store = configureStore({
  reducer: {
    loginState: loginReducer,
    signUpState: signUpReducer,
    stepOneState: stepOneReducer,
    stepTwoState: stepTwoReducer,
    insStepOneState: insStepOneReducer,
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
