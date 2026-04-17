import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { hp, wp } from '../../utils/Dimensions';
import AppLogo from '../../resources/assets/applogo.svg';
import BackIcon from '../../resources/assets/backIcon.svg';
import { OtpInput } from 'react-native-otp-entry';
import styles from './OtpVerificationCss';

const OtpVerification = ({ navigation, route }: any) => {
  const [otp, setOtp] = useState('');

  const isFormValid = otp.length === 4;

  const handleOtpChange = text => {
    if (text !== otp) {
      setOtp(text);
    }
  };

  const handleSubmit = () => {
    if (!isFormValid) return;
    navigation?.navigate('NextScreen', { otp });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#FDB001"
          translucent={false}
        />
        <LinearGradient
          colors={['#FDB001', '#D66801']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backIcon}
            >
              <BackIcon width={wp(10)} height={hp(5)} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>FORGOT PASSWORD</Text>
          </View>
        </LinearGradient>

        <View style={styles.whiteBG}>
          <AppLogo width={wp(40)} height={hp(20)} />

          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            Enter one time password sent to your mobile{'\n'}number registered
            email address
          </Text>

          <OtpInput
            numberOfDigits={4}
            placeholder="----"
            type="numeric"
            secureTextEntry={false}
            onTextChange={text => console.log(text)}
            onFilled={text => console.log(`OTP is ${text}`)}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            theme={{
              containerStyle: styles.otpContainer,
              pinCodeContainerStyle: styles.otpBox,
              pinCodeTextStyle: styles.otpText,
              focusedPinCodeContainerStyle: styles.otpBoxFocused,
            }}
          />

          <TouchableOpacity
            style={[styles.button, !isFormValid && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={!isFormValid}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>VERIFY OTP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default OtpVerification;
