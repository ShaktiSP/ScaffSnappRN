import { StyleSheet, Platform } from 'react-native';
import { wp, hp, fp } from '../../utils/Dimensions';

const COLORS = {
  white: '#FFFFFF',
  black: '#1A1A1A',
  mutedGray: '#8A8A8A',
  dividerGray: '#EDEDED',
  accentOrange: '#F7941D',
  statusBg: '#F0F0F0',
  statusText: '#1A1A1A',
  priorityBg: '#EDE4FB',
  priorityText: '#8B5CF6',
  navigateBlue: '#2F6FE4',
  red: '#E8433A',
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: wp(3),
    marginBottom: hp(1.8),
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  // ---- Left accent strip ----
  accentBar: {
    width: 4,
    backgroundColor: COLORS.accentOrange,
  },

  content: {
    flex: 1,
    padding: wp(4),
  },

  // ---- Top row ----
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1.2),
  },
  code: {
    fontSize: fp(1.9),
    fontWeight: '700',
    color: COLORS.black,
  },

  colorBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.6),
    borderRadius: wp(5),
  },
  colorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.white,
    marginRight: wp(1.5),
  },
  colorBadgeText: {
    fontSize: fp(1.4),
    fontWeight: '700',
    color: COLORS.white,
  },

  // ---- Dimensions ----
  dimensions: {
    fontSize: fp(1.75),
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: hp(1),
  },

  // ---- Rows with a leading icon ----
  rowWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.4),
  },
  mutedText: {
    fontSize: fp(1.45),
    color: COLORS.mutedGray,
  },

  // ---- Craft ----
  craft: {
    fontSize: fp(1.6),
    fontWeight: '700',
    color: COLORS.black,
    marginTop: hp(0.8),
    marginBottom: hp(1.4),
  },

  // ---- Status / Priority pills ----
  pillRow: {
    flexDirection: 'row',
    marginBottom: hp(1.6),
  },
  pill: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.8),
    borderRadius: wp(5),
    marginRight: wp(2.5),
  },
  statusPill: {
    backgroundColor: COLORS.statusBg,
  },
  priorityPill: {
    backgroundColor: COLORS.priorityBg,
  },
  pillLabel: {
    fontSize: fp(1.45),
    color: COLORS.mutedGray,
    fontWeight: '500',
  },
  pillValueStatus: {
    color: COLORS.statusText,
    fontWeight: '700',
  },
  pillValuePriority: {
    color: COLORS.priorityText,
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.dividerGray,
    marginBottom: hp(1.4),
  },

  // ---- Footer ----
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navigateText: {
    fontSize: fp(1.55),
    fontWeight: '700',
    color: COLORS.navigateBlue,
  },
});

export default styles;