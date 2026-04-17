import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ProfileSelectionCss';
import { 
  Text, 
  TouchableOpacity, 
  View,
  StatusBar,
  
} from 'react-native';
import AppLogo from '../../resources/assets/applogo.svg';
import PmIcon from '../../resources/assets/pmIcon.svg';
import TradesmanIcon from '../../resources/assets/tradesmanIcon.svg';
import CpIcon from '../../resources/assets/cpIcon.svg';
import { wp, hp } from '../../utils/Dimensions';

const ProfileSelectionScreen = ({ navigation }: any) => {

  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(prev => (prev === role ? null : role));
  };

  const handleGetStarted = () => {
    if (!selectedRole) return;
    navigation.navigate('LogInScreen', { role: selectedRole });
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
        <Text style={styles.text}>Please Select Your Role</Text>
      </LinearGradient>

      <View style={styles.whiteBG}>
        <AppLogo width={wp(40)} height={hp(20)} />

        <TouchableOpacity
          style={[
            styles.card, 
            selectedRole === 'PROJECT_MANAGER' && styles.cardSelected
          ]}
          onPress={() => handleRoleSelect('PROJECT_MANAGER')}
          activeOpacity={0.8}
        >
          <View style={styles.row}>
            <PmIcon width={wp(15)} height={hp(30)} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Project Manager</Text>
              <Text style={styles.subtitle}>
                Approve requests and manage scaffold{'\n'}projects
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card, 
            selectedRole === 'COMPETENT_PERSON' && styles.cardSelected
          ]}
          onPress={() => handleRoleSelect('COMPETENT_PERSON')}
          activeOpacity={0.8}
        >
          <View style={styles.row}>
            <CpIcon width={wp(15)} height={hp(30)} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Competent Person</Text>
              <Text style={styles.subtitle}>
                Create, inspect, and tag scaffolds
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card, 
            selectedRole === 'TRADESMAN' && styles.cardSelected
          ]}
          onPress={() => handleRoleSelect('TRADESMAN')}
          activeOpacity={0.8}
        >
          <View style={styles.row}>
            <TradesmanIcon width={wp(15)} height={hp(30)} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Tradesman</Text>
              <Text style={styles.subtitle}>
                Request and view scaffold information
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button, 
            !selectedRole && styles.buttonDisabled
          ]}
          onPress={handleGetStarted}
          disabled={!selectedRole}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default ProfileSelectionScreen;