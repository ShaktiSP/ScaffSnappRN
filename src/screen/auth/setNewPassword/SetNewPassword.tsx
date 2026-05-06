import React, { useState } from 'react';
import { SafeAreaView, 
    Text, TextInput, 
    View, Keyboard, 
    TouchableWithoutFeedback,
    TouchableOpacity,
    StatusBar
 } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { hp, wp } from '../../../utils/Dimensions';
import AppLogo from '../../resources/assets/applogo.svg';
import BackIcon from '../../resources/assets/backIcon.svg';
import styles from "./SetNewPasswordCss";

const SetNewPassword = ({ navigation, route }: any) => {

  const [newPasswordValue, setnewPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');


  const isFormValid =
  newPasswordValue.trim() !== ''

  const handleGetStarted = () => {
    if (!isFormValid) {
      return;
    }
    // navigation?.replace('OtpVerification');
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
            <Text style={styles.headerTitle}>CHANGE PASSWORD</Text>
          </View>
        </LinearGradient>

        <View style={styles.whiteBG}>
          <AppLogo width={wp(40)} height={hp(20)} />

          <Text style={styles.title}>Set New Password</Text>

          <TextInput
            style={styles.input}
            placeholder="New Password"
            value={newPasswordValue}
            onChangeText={setnewPasswordValue}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPasswordValue}
            onChangeText={setConfirmPasswordValue}
          />

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

export default SetNewPassword;