import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import ProfileSelectionScreen from '../screen/profileSelection/ProfileSelectionScreen';
import OnboardingScreen from '../screen/onBoarding/OnBoardingScreen';
import LogInScreen from '../screen/logIn/LogInScreen';
import EmailVerification from '../screen/emailVerificcation/EmailVerification';
import OtpVerification from '../screen/otpVerification/OtpVerification';
import SetNewPassword from '../screen/setNewPassword/SetNewPassword';

const Stack = createNativeStackNavigator();

export default function AuthNavigator({ initialRoute }: { initialRoute: string }) {
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProfileSelectionScreen"
        component={ProfileSelectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetNewPassword"
        component={SetNewPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}