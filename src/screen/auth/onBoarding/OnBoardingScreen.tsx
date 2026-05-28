import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import styles from './onBoardingCss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }: any) => {

  const handleGetStarted = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation?.navigate('ProfileSelectionScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../resources/assets/main.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.bottomWrapper}>

          {/* Gradient Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleGetStarted}
          >
            <LinearGradient
              colors={['#FDB001', '#D66801']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnboardingScreen;