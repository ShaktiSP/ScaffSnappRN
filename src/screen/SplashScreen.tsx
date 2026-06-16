import React, { useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLogo from '../resources/assets/applogo.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../redux/hooks';
import { hydrateAuth } from '../redux/authSlice';
import DeviceInfo from 'react-native-device-info';
import UpdateDeviceServices from './UpdateDeviceServices';
import AwsService from '../services/AwsService';

const SplashScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const getDeviceParams = async () => {
    const appVersion = DeviceInfo.getVersion();
    const deviceName = await DeviceInfo.getDeviceName();
    const deviceToken = await DeviceInfo.getUniqueId();
    const deviceType = Platform.OS;
    const osVersion = Platform.Version.toString();
    return { appVersion, deviceName, deviceToken, deviceType, osVersion };
  };

  const updateDeviceToken = async () => {
    try {
      const params = await getDeviceParams();
      await UpdateDeviceServices.updateDevice(params);
    } catch (error) {
      console.error('Device update failed:', error);
    }
  };

  const fetchAwsCredentials = async () => {
    try {
      await AwsService.fetchAndStoreCredentials();
    } catch (error) {
      console.error('Failed to fetch AWS credentials:', error);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const [onboarding, auth, role] = await Promise.all([
          AsyncStorage.getItem('hasSeenOnboarding'),
          AsyncStorage.getItem('isAuthenticated'),
          AsyncStorage.getItem('userRole'),
        ]);

        const hasSeenOnboarding = onboarding === 'true';
        const isAuthenticated = auth === 'true';
        const userRole = role ?? null;

        dispatch(hydrateAuth({ hasSeenOnboarding, isAuthenticated, role: userRole }));

        await Promise.allSettled([
          fetchAwsCredentials(),
          updateDeviceToken(),
        ]);

        if (isAuthenticated) {
       //   navigation.replace('Main');
        } else if (hasSeenOnboarding) {
          navigation.replace('ProfileSelectionScreen');
        } else {
          navigation.replace('OnBoardingScreen');
        }

      } catch (e) {
        navigation.replace('OnBoardingScreen');
      }
    };

    const timer = setTimeout(init, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppLogo width={180} height={180} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});