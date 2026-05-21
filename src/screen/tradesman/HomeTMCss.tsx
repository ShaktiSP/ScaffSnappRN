import { Dimensions, PixelRatio, StyleSheet } from "react-native";
import { fp, hp, wp } from "../../utils/Dimensions";

// ── Styles ──
const ORANGE = '#F97316';
const CARD_BG = '#FFFFFF';
const BODY_BG = '#F5F5F5';
const LABEL_COLOR = '#6B7280';
const VALUE_COLOR = '#111827';
const BORDER_COLOR = '#E5E7EB';

const styles = StyleSheet.create({

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4.2),
    paddingTop: hp(3),
    paddingBottom: hp(2.5),
    borderBottomEndRadius: wp(5),
    borderBottomStartRadius: wp(5),
    overflow: "hidden",
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(3.2),
  },
  userText: {
    gap: hp(0.25),
  },
  userName: {
    color: "#fff",
    fontSize: fp(2),
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  userRole: {
    color: "rgba(255,255,255,0.85)",
    fontSize: fp(1.5),
    fontWeight: "400",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2.6),
  },

  iconBtn: {
    width: wp(9.5),
    height: wp(9.5),
    borderRadius: wp(4.75),
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  bellWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: fp(2.1),
  },


  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  avatarText: {
    color: ORANGE,
    fontWeight: '700',
    fontSize: 15,
  },
  headerGreeting: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  headerRole: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12,
    marginTop: 1,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
  // Body
  body: {
    flex: 1,
    backgroundColor: BODY_BG,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  bodyContent: {
    padding: 16,
    paddingBottom: 32,
  },
 
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: VALUE_COLOR,
    marginBottom: 12,
    marginTop: 4,
  },
 
  // Card
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardSectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: VALUE_COLOR,
    paddingVertical: 12,
  },
 
  // Info Row
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 11,
  },
  infoLabel: {
    fontSize: 13,
    color: LABEL_COLOR,
    flex: 1,
  },
  infoValue: {
    fontSize: 13,
    color: VALUE_COLOR,
    fontWeight: '500',
    flex: 1.4,
    textAlign: 'right',
  },
 
  divider: {
    height: 1,
    backgroundColor: BORDER_COLOR,
  },
 
  // New Request Button
  newRequestBtn: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  newRequestText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 1.2,
  },
 
  // Search
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD_BG,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: VALUE_COLOR,
    padding: 0,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD_BG,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  filterText: {
    fontSize: 14,
    color: VALUE_COLOR,
    fontWeight: '500',
  },



});

export default styles;

