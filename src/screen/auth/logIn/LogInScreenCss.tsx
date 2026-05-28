import { StyleSheet } from "react-native";
import { hp, wp, fp } from "../../../utils/Dimensions";

const ORANGE = '#F5A623';
const ORANGE_DARK = '#E8960F';
const TEXT_GRAY = '#888';

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: hp(10),
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

  inputError: {
    borderColor: '#FF3B30',
    borderWidth: 1.5,
  },
  
  errorText: {
    alignSelf: 'flex-start',
    fontSize: fp(1.6),
    color: '#FF3B30',
    marginTop: hp(0.4),
    marginLeft: wp(1),
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
    marginTop: hp(1.5),
  },

  subtitle: {
    fontSize: fp(1.8),
    color: '#777',
    marginTop: hp(0.5),
  },

  cardSelected: {
    borderWidth: wp(0.5),
    borderColor: '#D66801',
  },

  // ✅ Removed duplicate — keeping one clean container
  container: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(2),
    backgroundColor: '#fff',
  },

  input: {
    width: '100%',
    height: hp(7),
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#CACACA',
    borderRadius: wp(3),
    opacity: 0.9,
    marginTop: hp(2),
    paddingHorizontal: wp(4),
    fontSize: fp(2),
    color: '#333333',
  },

  forgotPasswordBtn: {
    alignSelf: 'flex-start',
    marginTop: hp(1),
  },

  forgotPassword: {
    fontSize: fp(2),
    fontWeight: '600',
    color: '#2F60F9',
    marginTop: hp(1),
  },

  button: {
    width: '100%',
    height: hp(7),
    paddingVertical: hp(1.5),
    backgroundColor: '#000',
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(4),
    elevation: 4,
  },

  buttonDisabled: {
    backgroundColor: '#999',
    elevation: 0,
  },

  buttonText: {
    color: '#fff',
    fontSize: fp(2),
    fontWeight: '500',
  },

  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2.5),
    marginTop: hp(2),
  },

  signUpText: {
    fontSize: fp(1.9),
    color: TEXT_GRAY,
    fontWeight: '400',
  },

  signUpLink: {
    fontSize: fp(1.9),
    color: ORANGE,
    fontWeight: '700',
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2.5),
  },

  dividerLine: {
    flex: 1,
    height: hp(0.15),
    backgroundColor: '#E0E0E0',
  },

  dividerText: {
    marginHorizontal: wp(3),
    fontSize: fp(1.9),
    color: TEXT_GRAY,
    fontWeight: '400',
  },

  qrButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1.5,
    borderColor: ORANGE,
    borderRadius: wp(3),
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(6),
    backgroundColor: '#fff',
    gap: wp(2.5),
    marginBottom: hp(3),
  },

  qrIconWrapper: {
    width: wp(7),
    height: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },

  qrIcon: {
    width: wp(6),
    height: wp(6),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  corner: {
    position: 'absolute',
    width: wp(2.2),
    height: wp(2.2),
    borderColor: ORANGE_DARK,
  },

  cornerTL: {
    top: 0,
    left: 0,
    borderTopWidth: wp(0.7),
    borderLeftWidth: wp(0.7),
    borderTopLeftRadius: wp(0.5),
  },

  cornerTR: {
    top: 0,
    right: 0,
    borderTopWidth: wp(0.7),
    borderRightWidth: wp(0.7),
    borderTopRightRadius: wp(0.5),
  },

  cornerBL: {
    bottom: 0,
    left: 0,
    borderBottomWidth: wp(0.7),
    borderLeftWidth: wp(0.7),
    borderBottomLeftRadius: wp(0.5),
  },

  cornerBR: {
    bottom: 0,
    right: 0,
    borderBottomWidth: wp(0.7),
    borderRightWidth: wp(0.7),
    borderBottomRightRadius: wp(0.5),
  },

  qrSquare: {
    width: wp(2.2),
    height: wp(2.2),
    backgroundColor: ORANGE,
    borderRadius: wp(0.3),
  },

  qrText: {
    fontSize: fp(2.2),
    fontWeight: '600',
    color: ORANGE,
    letterSpacing: 0.3,
  },
});

export default styles;