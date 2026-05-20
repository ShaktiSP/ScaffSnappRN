import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePMScreem from '../screen/projectManager/home/HomePMScreem';
import HomeCPScreen from '../screen/competentPerson/home/HomeCPScreen';
import { useAppSelector } from '../redux/hooks';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const role = useAppSelector((state) => state.auth.role);

  
  const initialRoute =
    role === 'PROJECT_MANAGER' ? 'HomePMScreem' : 'HomeCPScreen';

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
    </Stack.Navigator>
  );
}