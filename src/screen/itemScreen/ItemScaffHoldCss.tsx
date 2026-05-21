import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
      marginVertical: 10,
      marginHorizontal: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 4,
    },
    riskBadge: {
      position: 'absolute',
      top: 12,
      right: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
      gap: 6,
    },
    riskDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'rgba(255,255,255,0.7)',
    },
    riskText: {
      fontSize: 13,
      fontWeight: '600',
    },
    idRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      marginTop: 4,
    },
    idAccent: {
      width: 3,
      height: 20,
      backgroundColor: '#FDB001',
      borderRadius: 2,
      marginRight: 8,
    },
    idText: {
      fontSize: 16,
      fontWeight: '700',
      color: '#1a1a1a',
    },
    scaffoldTitle: {
      fontSize: 15,
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: 6,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    calendarIcon: {
      fontSize: 13,
      marginRight: 6,
    },
    dateText: {
      fontSize: 13,
      color: '#555',
    },
    craftText: {
      fontSize: 14,
      color: '#1a1a1a',
      marginBottom: 12,
    },
    craftLabel: {
      fontWeight: '700',
    },
    badgeRow: {
      flexDirection: 'row',
      gap: 10,
      marginBottom: 14,
    },
    statusBadge: {
      backgroundColor: '#F2F2F2',
      borderRadius: 20,
      paddingHorizontal: 14,
      paddingVertical: 6,
    },
    statusText: {
      fontSize: 13,
      color: '#333',
    },
    statusBold: {
      fontWeight: '700',
      color: '#1a1a1a',
    },
    priorityBadge: {
      borderRadius: 20,
      paddingHorizontal: 14,
      paddingVertical: 6,
    },
    priorityText: {
      fontSize: 13,
    },
    priorityBold: {
      fontWeight: '700',
    },
    divider: {
      borderTopWidth: 1,
      borderTopColor: '#EBEBEB',
      borderStyle: 'dashed',
      marginBottom: 12,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    locationRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    locationIcon: {
      fontSize: 14,
      color: '#888',
    },
    locationText: {
      fontSize: 13,
      color: '#555',
    },
    navigateText: {
      fontSize: 13,
      color: '#1565C0',
      fontWeight: '600',
    },
  });

  export default styles;
  