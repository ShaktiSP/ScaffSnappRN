import { StyleSheet } from "react-native";
import { hp, wp, fp } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4.2),
    paddingTop: hp(6),
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
  avatar: {
    width: wp(11.5),
    height: wp(11.5),
    borderRadius: wp(5.75),
    borderWidth: wp(0.5),
    borderColor: "rgba(255,255,255,0.6)",
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
  scanBtn: {
    width: wp(10.5),
    height: wp(10.5),
    borderRadius: wp(2.5),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scanIcon: {
    fontSize: fp(2.3),
    color: "#FDB001",
  },

  searchContainer: {
    paddingHorizontal: wp(4.2),
    paddingVertical: hp(1.75),
    backgroundColor: "#fff",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: wp(3.2),
    paddingHorizontal: wp(3.7),
    paddingVertical: hp(1.25),
  },
  searchInput: {
    flex: 1,
    fontSize: fp(1.65),
    color: "#333",
    padding: 0,
  },
  searchIcon: {
    fontSize: fp(2.1),
    marginLeft: wp(2.1),
  },

  tabsContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: wp(4.2),
  },
  tabsRow: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: hp(1.25),
  },
  tabLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(1),
  },
  tabLabel: {
    fontSize: fp(1.65),
    fontWeight: "600",
  },
  tabLabelActive: {
    color: "#FDB001", 
  },
  tabLabelInactive: {
    color: "#999",
  },
  dot: {
    width: wp(1.8),
    height: wp(1.8),
    borderRadius: wp(1),
    backgroundColor: "#22C55E",
    marginTop: -hp(0.75),
  },
  indicatorTrack: {
    height: hp(0.3),
    backgroundColor: "#F0F0F0",
    borderRadius: 2,
    position: "relative",
  },
  indicator: {
    position: "absolute",
    height: hp(0.3),
    backgroundColor: "#FDB001",
    borderRadius: 2,
  },
});

export default styles;