import React from 'react';
import LogIn from './src/screens/LogIn';
import RegisterPageOne from './src/screens/RegisterPageOne';
import RegisterPageTwo from './src/screens/RegisterPageTwo';
import InsuranceSignUpOne from './src/screens/InsuranceSignupOne';
import InsuranceSignUpTwo from './src/screens/InsuranceSignupTwo';
import Verification from './src/screens/Verification';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Log in" component={LogIn} />
        <Stack.Screen name="Register" component={RegisterPageOne} />
        <Stack.Screen name="RegisterPageTwo" component={RegisterPageTwo} />
        <Stack.Screen name="InsuranceSignUpOne" component={InsuranceSignUpOne} />
        <Stack.Screen name="InsuranceSignUpTwo" component={InsuranceSignUpTwo} />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
