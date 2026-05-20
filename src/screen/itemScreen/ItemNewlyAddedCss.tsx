import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width: SW } = Dimensions.get('window');
const scale = SW / 375;

const normalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size * scale));

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(14),
    padding: normalize(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: normalize(2) },
    shadowOpacity: 0.08,
    shadowRadius: normalize(8),
    elevation: 3,
  },
  label: {
    fontSize: normalize(12),
    color: '#9CA3AF',
    fontWeight: '400',
    marginBottom: normalize(4),
  },
  title: {
    fontSize: normalize(15),
    fontWeight: '700',
    color: '#111827',
    marginBottom: normalize(6),
    lineHeight: normalize(22),
  },
  date: {
    fontSize: normalize(12),
    color: '#6B7280',
    marginBottom: normalize(14),
  },
  button: {
    backgroundColor: '#111827',
    borderRadius: normalize(50),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(18),
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: normalize(13),
    fontWeight: '600',
  },
});

export default styles;