import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import EmailVerification from '../screen/auth/emailVerificcation/EmailVerification';
import LogInScreen from '../screen/auth/logIn/LogInScreen';
import OnboardingScreen from '../screen/auth/onBoarding/OnBoardingScreen';
import OtpVerification from '../screen/auth/otpVerification/OtpVerification';
import ProfileSelectionScreen from '../screen/auth/profileSelection/ProfileSelectionScreen';
import SetNewPassword from '../screen/auth/setNewPassword/SetNewPassword';
import HomePMScreem from '../screen/projectManager/home/HomePMScreem';

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
       <Stack.Screen
        name="HomePMScreem"
        component={HomePMScreem}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}