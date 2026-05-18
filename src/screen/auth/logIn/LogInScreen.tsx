import React, { useState } from 'react';
import { SafeAreaView, 
    Text, TextInput, 
    View, Keyboard, 
    TouchableWithoutFeedback,
    TouchableOpacity,
    StatusBar
 } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import AppLogo from '../../../resources/assets/applogo.svg';
import BackIcon from '../../../resources/assets/backIcon.svg';
import styles from "./LogInScreenCss";
import { hp, wp } from '../../../utils/Dimensions';



const LogInScreen = ({ navigation, route }: any) => {

    
    const role = route?.params?.role;
console.log(role)
    const roleMap: any = {
      PROJECT_MANAGER: 'Project Manager',
      COMPETENT_PERSON: 'Competent Person',
      TRADESMAN: 'Tradesman',
    };

  const [companyIdvalue, setCompanyIdValue] = useState('');
  const [emailvalue, setEmailValue] = useState('');
  const [passwordvalue, setPasswordValue] = useState('');

  const isFormValid =
    companyIdvalue.trim() !== '' &&
    emailvalue.trim() !== '' &&
    passwordvalue.trim() !== '';

  const handleGetStarted = () => {
    if (!isFormValid) {
      return;
    }
    navigation.navigate('HomePMScreem');
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
          <Text style={styles.subtitle}>
            Enter your credentials to continue
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Company ID"
            value={companyIdvalue}
            onChangeText={setCompanyIdValue}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={emailvalue}
        
            onChangeText={setEmailValue}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={passwordvalue}
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
            style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
            onPress={handleGetStarted}
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LogInScreen;