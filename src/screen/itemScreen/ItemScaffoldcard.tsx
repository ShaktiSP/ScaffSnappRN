import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './ItemScaffoldcardcss';
import CalendarIcon from '../../resources/assets/claender.svg';
import LocationIcon from '../../resources/assets/locationIcon.svg';

type ScaffoldCardProps = {
  code: string;
  colorLabel: string;
  colorHex: string;
  dimensions: string;
  expectedEndDate: string;
  craft: string;
  status: string;
  priority: string;
  location: string;
  onNavigatePress?: () => void;
};

export default function ItemScaffoldcard({
  code,
  colorLabel,
  colorHex,
  dimensions,
  expectedEndDate,
  craft,
  status,
  priority,
  location,
  onNavigatePress,
}: ScaffoldCardProps) {
  return (
    <View style={styles.card}>
      {/* Left accent bar */}
      <View style={styles.accentBar} />

      <View style={styles.content}>
        {/* ---- Top row: code + color badge ---- */}
        <View style={styles.topRow}>
          <Text style={styles.code}>{code}</Text>

          <View style={[styles.colorBadge, { backgroundColor: colorHex }]}>
            <View style={styles.colorDot} />
            <Text style={styles.colorBadgeText}>{colorLabel}</Text>
          </View>
        </View>

        {/* ---- Scaffold dimensions ---- */}
        <Text style={styles.dimensions}>Scaffold: {dimensions}</Text>

        {/* ---- Expected end date ---- */}
        <View style={styles.rowWithIcon}>
          <CalendarIcon width={14} height={14} fill="#8A8A8A" />
          <Text style={styles.mutedText}>
            {' '}
            Expected End Date: {expectedEndDate}
          </Text>
        </View>

        {/* ---- Craft ---- */}
        <Text style={styles.craft}>Craft: {craft}</Text>

        {/* ---- Status + Priority pills ---- */}
        <View style={styles.pillRow}>
          <View style={[styles.pill, styles.statusPill]}>
            <Text style={styles.pillLabel}>
              Status: <Text style={styles.pillValueStatus}>{status}</Text>
            </Text>
          </View>

          <View style={[styles.pill, styles.priorityPill]}>
            <Text style={styles.pillLabel}>
              Priority:{' '}
              <Text style={styles.pillValuePriority}>{priority}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* ---- Footer: location + navigate ---- */}
        <View style={styles.footerRow}>
          <View style={styles.rowWithIcon}>
            <LocationIcon width={14} height={14} fill="#8A8A8A" />
            <Text style={styles.mutedText}> {location}</Text>
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={onNavigatePress}>
            <Text style={styles.navigateText}>Navigate To</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}