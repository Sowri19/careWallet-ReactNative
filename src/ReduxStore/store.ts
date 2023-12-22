import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from './Slices/Login/loginSlice';
import stepOneReducer from './Slices/Register/stepOne';
import stepTwoReducer from './Slices/Register/stepTwo';

export const store = configureStore({
  reducer: {
    loginState: loginReducer,
    stepOneState: stepOneReducer,
    stepTwoState: stepTwoReducer,
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
