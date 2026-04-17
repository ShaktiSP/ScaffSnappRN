import { StyleSheet } from "react-native";
import { wp, hp, fp } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: hp(14),
    justifyContent: 'center',
  },

  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    position: 'absolute',
    left: wp(4),
  },

  headerTitle: {
    fontSize: fp(2.5),
    color: '#fff',
    fontWeight: 'bold',
  },

  whiteBG: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -hp(3.8),
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    alignItems: 'center',
    paddingHorizontal: wp(5),
    top: hp(2),
  },

  title: {
    fontSize: fp(2.3),
    fontWeight: '600',
    color: '#000',
  },

  subtitle: {
    fontSize: fp(1.8),
    color: '#777',
    marginTop: hp(0.5),
    textAlign: 'center',
  },

  cardSelected: {
    borderWidth: 2,
    borderColor: '#D66801',
  },

  container: {
    paddingHorizontal: 16,
    marginTop: 12,
  },

  input: {
    width: '100%',
    height: hp(7),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#CACACA',
    borderRadius: 12,
    opacity: 0.9,
    marginTop: hp(2),
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#333333',
  },

  otpContainer: {
    width: '100%',
    marginTop: hp(3),
  },

  otpBox: {
    width: hp(8),
    height: hp(8),
    borderRadius: wp(3),
    borderWidth: 1.5,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  otpText: {
    fontSize: fp(2.5),
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },

  otpBoxFocused: {
    borderColor: '#D66801',
    backgroundColor: '#fff8f0',
  },

  button: {
    width: '100%',
    height: hp(7),
    paddingVertical: hp(1.5),
    backgroundColor: '#000',
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: hp(7),
    elevation: 4,
    color: '#fff',
  },

  buttonDisabled: {
    backgroundColor: '#999',
    elevation: 0,
  },

  buttonText: {
    color: '#fff',
    fontSize: fp(1.8),
    fontWeight: '500',
  },
});

export default styles;