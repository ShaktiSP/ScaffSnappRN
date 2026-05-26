import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLogo from '../resources/assets/applogo.svg';
import FeedService from '../screen/itemservices';
import AwsService from '../screen/itemservices';
import { Text } from 'react-native-svg';

const SplashScreen = ({ navigation }: any) => {

const [name,setname]=useState("")
  useEffect(() => {
    const init = async () => {
      try {
        // Run AWS credentials fetch and feeds fetch in parallel
        await Promise.allSettled([
          fetchAwsCredentials(),
          // fetchFeeds(),
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
      console.log('✅ AWS credentials ready:', credentials.bucketName);
      setname(credentials.bucketName)
    } catch (error) {
      console.error('❌ Failed to fetch AWS credentials:', error);
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