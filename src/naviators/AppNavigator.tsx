import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePMScreem from '../screen/projectManager/home/HomePMScreem';
import HomeCPScreen from '../screen/competentPerson/home/HomeCPScreen';
import HomeTMScreen from '../screen/tradesman/HomeTMScreen';
import { useAppSelector } from '../redux/hooks';
import cpMyProjectScreen from '../screen/competentPerson/cpDetails/cpMyProjectScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const role = useAppSelector((state) => state.auth.role);

  const initialRoute =
    role === 'PROJECT_MANAGER'
      ? 'HomePMScreem'
      : role === 'TRADESMAN'
      ? 'HomeTMScreen'
      : 'HomeCPScreen';

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="HomePMScreem"
        component={HomePMScreem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeCPScreen"
        component={HomeCPScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeTMScreen"
        component={HomeTMScreen}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="cpMyProjectScreen"
        component={cpMyProjectScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}