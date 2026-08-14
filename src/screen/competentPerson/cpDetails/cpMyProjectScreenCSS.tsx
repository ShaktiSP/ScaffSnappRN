import { StyleSheet, Platform } from 'react-native';
import { hp, wp, fp } from '../../../utils/Dimensions';

const COLORS = {
  orangeStart: '#F7941D',
  orangeEnd: '#F15A24',
  white: '#FFFFFF',
  black: '#1A1A1A',
  labelGray: '#8A8A8A',
  mutedGray: '#B0B0B0',
  dividerGray: '#EDEDED',
  background: '#FFFFFF',
  errorRed: '#D32F2F',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // ---- Header ----
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  headerSpacer: {
    width: wp(9),
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: fp(1.8),
    fontWeight: '700',
    letterSpacing: 1,
  },
  headerIconButton: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(2),
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ---- Loading / Error / Empty states ----
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
  errorText: {
    fontSize: fp(1.6),
    color: COLORS.errorRed,
    textAlign: 'center',
    marginBottom: hp(1.5),
  },
  retryText: {
    fontSize: fp(1.6),
    fontWeight: '600',
    color: COLORS.orangeStart,
  },
  emptyText: {
    fontSize: fp(1.5),
    color: COLORS.labelGray,
    textAlign: 'center',
    paddingVertical: hp(2.5),
  },

  // ---- Scroll / Layout ----
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
    paddingBottom: hp(4),
  },

  // ---- Project Details Card ----
  card: {
    backgroundColor: COLORS.white,
    borderRadius: wp(3),
    padding: wp(4),
    marginBottom: hp(2),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardTitle: {
    fontSize: fp(2.1),
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: hp(1.8),
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: hp(1.4),
  },
  detailLabel: {
    fontSize: fp(1.55),
    color: COLORS.labelGray,
    flex: 1,
  },
  detailValue: {
    fontSize: fp(1.55),
    color: COLORS.black,
    fontWeight: '600',
    flex: 1.3,
    textAlign: 'right',
  },
  detailValueMuted: {
    color: COLORS.mutedGray,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.dividerGray,
    marginVertical: hp(1.6),
  },

  sectionSubTitle: {
    fontSize: fp(1.7),
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: hp(1.2),
  },

  // ---- Scaffold List section header ----
  sectionHeaderText: {
    fontSize: fp(2.1),
    fontWeight: '700',
    color: COLORS.black,
  },
});

export default styles;