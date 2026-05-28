import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient';

import AppLogo from '../../../resources/assets/applogo.svg';
import BackIcon from '../../../resources/assets/backIcon.svg';
import styles from './LogInScreenCss';
import { hp, wp } from '../../../utils/Dimensions';
import { useAppDispatch } from '../../../redux/hooks';
import { loginSuccess } from '../../../redux/authSlice';
import loginServices from '../../loginServices';
import loginPMCPServices from '../../loginPMCPServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const LogInScreen = ({ navigation, route }: any) => {
  const dispatch = useAppDispatch();
  const role = route?.params?.role;

  const roleMap: any = {
    PROJECT_MANAGER: 'Project Manager',
    COMPETENT_PERSON: 'Competent Person',
    TRADESMAN: 'Tradesman',
  };

  const [companyIdValue, setCompanyIdValue] = useState('');
  const [employerValue, setEmployerValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    companyId: '',
    employer: '',
    email: '',
    password: '',
  });

  const showToast = (type: 'error' | 'success' | 'info', title: string, message: string) => {
    Toast.show({
      type,
      text1: title,
      text2: message,
      position: 'top',
      visibilityTime: 3500,
    });
  };

  const validateFields = (): boolean => {

    if (companyIdValue.trim() === '') {
      setErrors(prev => ({ ...prev, companyId: 'Company ID is required' }));
      showToast('error', 'Company ID Required', 'Please enter your Company ID');
      return false;
    }
  
    if (role === 'TRADESMAN' && employerValue.trim() === '') {
      setErrors(prev => ({ ...prev, employer: 'Employer name is required' }));
      showToast('error', 'Employer Required', 'Please enter your Employer name');
      return false;
    }

    if (emailValue.trim() === '') {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      showToast('error', 'Email Required', 'Please enter your email address');
      return false;
    }
  
    if (!isValidEmail(emailValue.trim())) {
      setErrors(prev => ({ ...prev, email: 'Invalid email format' }));
      showToast('error', 'Invalid Email', 'Please enter a valid email (e.g. user@example.com)');
      return false;
    }
  
    if (passwordValue.trim() === '') {
      setErrors(prev => ({ ...prev, password: 'Password is required' }));
      showToast('error', 'Password Required', 'Please enter your password');
      return false;
    }
  
    if (passwordValue.trim().length < 6) {
      setErrors(prev => ({ ...prev, password: 'Minimum 6 characters required' }));
      showToast('error', 'Weak Password', 'Password must be at least 6 characters');
      return false;
    }
  
    setErrors({ companyId: '', employer: '', email: '', password: '' });
    return true;
  };

  const handleGetStarted = async () => {
    Keyboard.dismiss();

    if (!validateFields()) return;

    if (role === 'TRADESMAN') {
      try {
        setLoading(true);
        await loginServices.login({
          PJT: companyIdValue.trim(),
          email: emailValue.trim(),
          employerName: employerValue.trim(),
          password: passwordValue.trim(),
          user_type: role,
        });

        showToast('success', 'Login Successful', 'Welcome back!');
        await AsyncStorage.setItem('isAuthenticated', 'true');
await AsyncStorage.setItem('userRole', role);
        dispatch(loginSuccess(role));

      } catch (error: any) {
        showToast('error', 'Login Failed', error?.message || 'Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    } else if (role === 'PROJECT_MANAGER' || role === 'COMPETENT_PERSON') {

      try {
        setLoading(true);
        await loginPMCPServices.loginPMCP({
          companyId: companyIdValue.trim(),
          email: emailValue.trim(),
          password: passwordValue.trim(),
          user_type: role,
        });

        showToast('success', 'Login Successful', 'Welcome back!');
        await AsyncStorage.setItem('isAuthenticated', 'true');
await AsyncStorage.setItem('userRole', role);
        dispatch(loginSuccess(role));

      } catch (error: any) {
        showToast('error', 'Login Failed', error?.message || 'Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (field: keyof typeof errors, value: string, setter: (v: string) => void) => {
    setter(value);
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
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

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            bounces={true}
          >
            <View style={styles.whiteBG}>
              <AppLogo width={wp(40)} height={hp(20)} />

              <Text style={styles.title}>Login as a {roleMap[role] || 'User'}</Text>
              <Text style={styles.subtitle}>Enter your credentials to continue</Text>

              <TextInput
                style={[styles.input, errors.companyId ? styles.inputError : null]}
                placeholder="Company ID"
                value={companyIdValue}
                onChangeText={v => handleChange('companyId', v, setCompanyIdValue)}
              />
              {errors.companyId ? <Text style={styles.errorText}>{errors.companyId}</Text> : null}

              {role === 'TRADESMAN' && (
                <>
                  <TextInput
                    style={[styles.input, errors.employer ? styles.inputError : null]}
                    placeholder="Employer"
                    value={employerValue}
                    onChangeText={v => handleChange('employer', v, setEmployerValue)}
                  />
                  {errors.employer ? <Text style={styles.errorText}>{errors.employer}</Text> : null}
                </>
              )}

              <TextInput
                style={[styles.input, errors.email ? styles.inputError : null]}
                placeholder="Email"
                value={emailValue}
                onChangeText={v => handleChange('email', v, setEmailValue)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

              <TextInput
                style={[styles.input, errors.password ? styles.inputError : null]}
                placeholder="Password"
                value={passwordValue}
                onChangeText={v => handleChange('password', v, setPasswordValue)}
                secureTextEntry
              />
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

              <TouchableOpacity
                style={styles.forgotPasswordBtn}
                onPress={() => navigation.navigate('EmailVerification')}
              >
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { opacity: !loading ? 1 : 0.5 }]}
                onPress={handleGetStarted}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>SUBMIT</Text>
                )}
              </TouchableOpacity>

              {role === 'TRADESMAN' && (
                <View style={styles.signUpRow}>
                  <Text style={styles.signUpText}>Don't have an account ? </Text>
                  <TouchableOpacity>
                    <Text style={styles.signUpLink}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              )}

              {role === 'TRADESMAN' && (
                <View style={styles.dividerRow}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>Or</Text>
                  <View style={styles.dividerLine} />
                </View>
              )}

              {role === 'TRADESMAN' && (
                <TouchableOpacity style={styles.qrButton} activeOpacity={0.8}>
                  <View style={styles.qrIconWrapper}>
                    <View style={styles.qrIcon}>
                      <View style={[styles.corner, styles.cornerTL]} />
                      <View style={[styles.corner, styles.cornerTR]} />
                      <View style={[styles.corner, styles.cornerBL]} />
                      <View style={[styles.corner, styles.cornerBR]} />
                      <View style={styles.qrSquare} />
                    </View>
                  </View>
                  <Text style={styles.qrText}>Scan QR</Text>
                </TouchableOpacity>
              )}

              <View style={{ height: hp(4) }} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LogInScreen;