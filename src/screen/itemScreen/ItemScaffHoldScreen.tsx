import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './ItemScaffHoldCss';

interface ScaffoldCardProps {
  id?: string;
  scaffold?: string;
  expectedEndDate?: string;
  craft?: string;
  status?: string;
  priority?: string;
  location?: string;
  riskLevel?: 'Red' | 'Amber' | 'Green';
  onNavigate?: () => void;
}

const ScaffoldCard = ({
  id = 'SCF001',
  scaffold = '24ft x 16ft x 12ft',
  expectedEndDate = 'May 10, 2025',
  craft = 'Electrician',
  status = 'Created',
  priority = 'Medium',
  location = 'Boiler Unit 3, East Side',
  riskLevel = 'Red',
  onNavigate,
}: ScaffoldCardProps) => {

  const riskColors: Record<string, { bg: string; text: string }> = {
    Red: { bg: '#E53935', text: '#fff' },
    Amber: { bg: '#FB8C00', text: '#fff' },
    Green: { bg: '#43A047', text: '#fff' },
  };

  const priorityColors: Record<string, { bg: string; text: string }> = {
    High: { bg: '#FCE4EC', text: '#C2185B' },
    Medium: { bg: '#EDE7F6', text: '#6A1B9A' },
    Low: { bg: '#E8F5E9', text: '#2E7D32' },
  };

  const risk = riskColors[riskLevel] ?? riskColors.Red;
  const priorityStyle = priorityColors[priority] ?? priorityColors.Medium;

  return (
    <View style={styles.card}>

      {/* Risk Badge */}
      <View style={[styles.riskBadge, { backgroundColor: risk.bg }]}>
        <View style={styles.riskDot} />
        <Text style={[styles.riskText, { color: risk.text }]}>{riskLevel}</Text>
      </View>

      {/* ID */}
      <View style={styles.idRow}>
        <View style={styles.idAccent} />
        <Text style={styles.idText}>{id}</Text>
      </View>

      {/* Scaffold Title */}
      <Text style={styles.scaffoldTitle}>Scaffold: {scaffold}</Text>

      {/* Expected End Date */}
      <View style={styles.row}>
        <Text style={styles.calendarIcon}>📅</Text>
        <Text style={styles.dateText}>Expected End Date: {expectedEndDate}</Text>
      </View>

      {/* Craft */}
      <Text style={styles.craftText}>
        <Text style={styles.craftLabel}>Craft: </Text>
        {craft}
      </Text>

      {/* Status + Priority */}
      <View style={styles.badgeRow}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>
            Status: <Text style={styles.statusBold}>{status}</Text>
          </Text>
        </View>
        <View style={[styles.priorityBadge, { backgroundColor: priorityStyle.bg }]}>
          <Text style={[styles.priorityText, { color: priorityStyle.text }]}>
            Priority: <Text style={styles.priorityBold}>{priority}</Text>
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Location + Navigate */}
      <View style={styles.footer}>
        <View style={styles.locationRow}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <TouchableOpacity onPress={onNavigate}>
          <Text style={styles.navigateText}>Navigate To</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ScaffoldCard;