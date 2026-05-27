import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLogo from '../resources/assets/applogo.svg';
import AwsService from '../screen/itemservices';
import DeviceInfo from 'react-native-device-info';
import UpdateDeviceServices from './UpdateDeviceServices';

const SplashScreen = ({ navigation }: any) => {

  const [name, setName] = useState("");

  //Device params collect karo
  const getDeviceParams = async () => {
    const appVersion: string = DeviceInfo.getVersion();
    const deviceName: string = await DeviceInfo.getDeviceName();
    const deviceToken: string = await DeviceInfo.getUniqueId();
    const deviceType: string = Platform.OS;
    const osVersion: string = Platform.Version.toString();

    return { appVersion, deviceName, deviceToken, deviceType, osVersion };
  };

  //Update device API call
  const updateDeviceToken = async () => {
    try {
      const params = await getDeviceParams();

      console.log('📱 Device Params:', params);

      const response = await UpdateDeviceServices.updateDevice({
        appVersion: params.appVersion,
        deviceName: params.deviceName,
        deviceToken: params.deviceToken,
        deviceType: params.deviceType,
        osVersion: params.osVersion,
      });

      console.log('Device updated successfully:', response);
    } catch (error) {
      console.error('Device update failed:', error);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        await Promise.allSettled([
          fetchAwsCredentials(),
          updateDeviceToken(),
        ]);
      } finally {
        navigation?.navigate('OnBoardingScreen');
      }
    };

    const timer = setTimeout(init, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  const fetchAwsCredentials = async () => {
    try {
      const credentials = await AwsService.fetchAndStoreCredentials();
      console.log('AWS credentials ready:', credentials.bucketName);
      setName(credentials.bucketName);
    } catch (error) {
      console.error('Failed to fetch AWS credentials:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>{name}</Text>
        <AppLogo width={180} height={180} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});