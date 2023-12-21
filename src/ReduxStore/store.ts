import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from './Slices/loginSlice';

export const store = configureStore({
  reducer: {
    loginState: loginReducer,
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
