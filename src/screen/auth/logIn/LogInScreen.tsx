import React, { useState } from 'react';
import {
  SafeAreaView,
  Text, TextInput,
  View, Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import AppLogo from '../../../resources/assets/applogo.svg';
import BackIcon from '../../../resources/assets/backIcon.svg';
import styles from './LogInScreenCss';
import { hp, wp } from '../../../utils/Dimensions';
import { useAppDispatch } from '../../../redux/hooks';
import { loginSuccess } from '../../../redux/authSlice';
import loginServices from '../../loginServices';

const LogInScreen = ({ navigation, route }: any) => {
  const dispatch = useAppDispatch();
  const role = route?.params?.role;

  const roleMap: any = {
    PROJECT_MANAGER: 'Project Manager',
    COMPETENT_PERSON: 'Competent Person',
    TRADESMAN: 'Tradesman',
  };

  const [companyIdValue, setCompanyIdValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loading, setLoading] = useState(false);

  const isFormValid =
    companyIdValue.trim() !== '' &&
    emailValue.trim() !== '' &&
    passwordValue.trim() !== '';

  const handleGetStarted = async () => {
    if (!isFormValid) return;

    // Only hit API for TRADESMAN, dispatch directly for PM and CP
    if (role === 'TRADESMAN') {
      try {
        setLoading(true);
        await loginServices.login({
          PJT: companyIdValue.trim(),
          email: emailValue.trim(),
          employerName: 'anju',        // send if required by your backend
          password: passwordValue.trim(),
          user_type: role,
        });
        dispatch(loginSuccess(role));
      } catch (error: any) {
        Alert.alert(
          'Login Failed',
          error?.message || 'Something went wrong. Please try again.'
        );
      } finally {
        setLoading(false);
      }
    } else {
      // PM and CP — no API call, dispatch directly
      dispatch(loginSuccess(role));
    }
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
            <Text style={styles.headerTitle}>LOGIN</Text>
          </View>
        </LinearGradient>

        <View style={styles.whiteBG}>
          <AppLogo width={wp(40)} height={hp(20)} />

          <Text style={styles.title}>Login as a {roleMap[role] || 'User'}</Text>
          <Text style={styles.subtitle}>Enter your credentials to continue</Text>

          <TextInput
            style={styles.input}
            placeholder="Company ID"
            value={companyIdValue}
            onChangeText={setCompanyIdValue}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={emailValue}
            onChangeText={setEmailValue}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.forgotPasswordBtn}
            onPress={() => navigation.navigate('EmailVerification')}
          >
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { opacity: isFormValid && !loading ? 1 : 0.5 }]}
            onPress={handleGetStarted}
            disabled={!isFormValid || loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>SUBMIT</Text>
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LogInScreen;