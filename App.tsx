import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/ReduxStore/Setup/store';
import LogIn from './src/Pages/Login-Register/Login/LogIn';
import SignUp from './src/Pages/Login-Register/Register/AccountCreation/Step1/SignUp';
import SignDOB from './src/Pages/Login-Register/Register/AccountCreation/Step2/Step2';
import RegisterPageOne from './src/Pages/Login-Register/Register/AccountCreation/Step3';
import RegisterPageTwo from './src/Pages/Login-Register/Register/AccountCreation/Step4';
import InsuranceSignUpOne from './src/Pages/Login-Register/Register/InsuranceCheck/Step1/Index';
import InsuranceSignUpTwo from './src/Pages/Login-Register/Register/InsuranceCheck/Step2/Index';
import Verification from './src/Pages/FinishSignUp/Verification';
import ForgotPassStepOne from './src/Pages/Login-Register/ForgotPassword/Step1/Step1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotNewPassword from './src/Pages/Login-Register/ForgotPassword/Step3/NewPassword';
import ForgotOTP from './src/Pages/Login-Register/ForgotPassword/Step2/Step2';
import FaceVerification from './src/Pages/Login-Register/Register/AccountCreation/Step5/index';
import IDFront from './src/Pages/Login-Register/Register/AccountCreation/Step6/index';
import IDBack from './src/Pages/Login-Register/Register/AccountCreation/Step7/index';
import InsuranceFront from './src/Pages/Login-Register/Register/AccountCreation/Step8/index';
import InsuranceBack from './src/Pages/Login-Register/Register/AccountCreation/Step9/index';
import PasswordUpdated from './src/Pages/Login-Register/ForgotPassword/Step4/PasswordUpdated';
import Homepage from './src/Pages/LoggedInPages/Homepage/Homepage';
import SettingsPage from './src/Pages/LoggedInPages/Settings/Settings';
import SetupApp from './src/Components/Setup/SetupApp';
import { NavigationContainerRef } from '@react-navigation/core';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = React.createRef<NavigationContainerRef<any>>();
  return (
    <Provider store={store}>
      <SetupApp navigationRef={navigationRef} />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Log in" component={LogIn} />
          <Stack.Screen name="ForgotStepOne" component={ForgotPassStepOne} />
          <Stack.Screen name="ForgotOTP" component={ForgotOTP} />
          <Stack.Screen name="ForgotNewPass" component={ForgotNewPassword} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="ForgotPassComplete" component={PasswordUpdated} />
          <Stack.Screen name="SignDOB" component={SignDOB} />
          <Stack.Screen name="RegisterPageOne" component={RegisterPageOne} />
          <Stack.Screen name="RegisterPageTwo" component={RegisterPageTwo} />
          <Stack.Screen name="FaceVerification" component={FaceVerification} />
          <Stack.Screen name="IDFront" component={IDFront} />
          <Stack.Screen name="IDBack" component={IDBack} />
          <Stack.Screen name="InsuranceFront" component={InsuranceFront} />
          <Stack.Screen name="InsuranceBack" component={InsuranceBack} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen
            name="InsuranceSignUpOne"
            component={InsuranceSignUpOne}
          />
          <Stack.Screen
            name="InsuranceSignUpTwo"
            component={InsuranceSignUpTwo}
          />
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="settings" component={SettingsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
