import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';
import ItemNewlyAddedScreen from '../itemScreen/ItemNewlyAddedScreen';

const { width: SW, height: SH } = Dimensions.get('window');
const scale = SW / 375;
const normalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size * scale));

interface OngoingItem {
  id: string;
  title: string;
  subtitle: string;
}

const ongoingData: OngoingItem[] = [
  { id: '1', title: 'Main Plant Expansion', subtitle: '4 Scaffolds' },
  { id: '2', title: 'Block B Renovation', subtitle: '2 Scaffolds' },
  { id: '3', title: 'Roof Top Project', subtitle: '6 Scaffolds' },
  { id: '4', title: 'South Wing Upgrade', subtitle: '3 Scaffolds' },
];

const H_PADDING = SW * 0.05;
const GAP = normalize(12);

const NewlyAddedScreen = () => {
  const renderItem = ({ item }: { item: OngoingItem }) => (
    <ItemNewlyAddedScreen
      title={item.title}
      subtitle={item.subtitle}
      onPress={() => console.log('Pressed:', item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ongoingData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: GAP }} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: H_PADDING,
    paddingTop: SH * 0.025,
  },
  listContent: {
    paddingBottom: normalize(30),
  },
});

export default NewlyAddedScreen;