import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/ReduxStore/Setup/store';
import LogIn from './src/Modules/Login-Register/Login/LogIn';
import SignUp from './src/Modules/Login-Register/Register/SignUp/SignUp';
import RegisterPageOne from './src/Modules/Login-Register/Register/AccountCreation/Register/Step1';
import RegisterPageTwo from './src/Modules/Login-Register/Register/AccountCreation/Register/Step2';
import InsuranceSignUpOne from './src/Modules/Login-Register/Register/InsuranceCheck/Step1/Index';
import InsuranceSignUpTwo from './src/Modules/Login-Register/Register/InsuranceCheck/Step2/Index';
import Verification from './src/Modules/FinishSignUp/Verification';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Log in" component={LogIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Register" component={RegisterPageOne} />
          <Stack.Screen name="RegisterPageTwo" component={RegisterPageTwo} />
          <Stack.Screen
            name="InsuranceSignUpOne"
            component={InsuranceSignUpOne}
          />
          <Stack.Screen
            name="InsuranceSignUpTwo"
            component={InsuranceSignUpTwo}
          />
          <Stack.Screen name="Verification" component={Verification} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
