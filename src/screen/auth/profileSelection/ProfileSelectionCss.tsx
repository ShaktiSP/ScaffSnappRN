import { StyleSheet } from "react-native";
import { wp, hp, fp } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp(3),
  },

  text: {
    fontSize: fp(2.8),
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: fp(2),
    justifyContent: 'center',
    bottom: hp(2.5),
  },

  whiteBG: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -hp(3),
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },

  gradientBorder: {
    width: '100%',
    padding: wp(0.5),
    borderRadius: wp(4.5),
    borderWidth: 2,
    marginTop: hp(2),
    borderColor: '#D66801',
  },

  card: {
    width: '100%',
    height: hp(15),
    backgroundColor: '#FFFF',
    elevation: 2,
    borderRadius: wp(4),
    padding: wp(4),
    justifyContent: 'center',
    marginTop: hp(2),
    borderWidth: 2,
    borderColor: 'transparent',
  },

  cardSelected: {
    borderWidth: 2,
    borderColor: '#D66801',
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
    marginTop: hp(4),
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

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  
  textContainer: {
    marginLeft: wp(3),
    alignItems: 'flex-start',
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
  },
});

export default styles;