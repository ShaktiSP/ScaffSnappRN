import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './ItemNewlyAddedCss';

interface ItemNewlyAddedScreenProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

const ItemNewlyAddedScreen = ({
  title,
  subtitle,
  onPress,
}: ItemNewlyAddedScreenProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Project Title</Text>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.date}>{subtitle}</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={onPress}>
        <Text style={styles.buttonText}>View & Assign Team →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemNewlyAddedScreen; // ← this was missing