 import { StyleSheet } from "react-native";
import { wp, hp, fp } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
  },

  bottomWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: wp(4), 
    paddingBottom: hp(2.5),    
  },

  bottomText: {
    color: '#FFFFFF',
    fontSize: fp(2),     
    textAlign: 'center',
    marginBottom: hp(2),
    opacity: 0.9,
    lineHeight: fp(2.8),
  },

  gradient: {
    height: hp(7),              
    width: '100%',
    borderRadius: wp(5),    
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: fp(2.3),
    fontWeight: '600',
  },
});

export default styles;