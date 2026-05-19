import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 14,
    paddingBottom: 16,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },

  iconWrapper: {
    marginBottom: 32,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFF0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconEmoji: {
    fontSize: 22,
  },

  chevronContainer: {
    position: 'absolute',
    top: 14,
    right: 14,
  },

  chevron: {
    fontSize: 20,
    color: '#CCCCCC',
    fontWeight: '300',
  },

  textContainer: {
    gap: 2,
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
    lineHeight: 20,
    letterSpacing: -0.3,
  },

  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    marginTop: 4,
  },
});

export default styles;