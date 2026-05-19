import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import ItemOnGoingScreen from '../../itemScreen/ItemOnGoingScreen';

interface OngoingItem {
  id: string;
  title: string;
  subtitle: string;
}

const ongoingData: OngoingItem[] = [
  { id: '1', title: 'Main Plant\nExpansion', subtitle: '4 Scaffolds' },
  { id: '2', title: 'Block B\nRenovation', subtitle: '2 Scaffolds' },
  { id: '3', title: 'Roof Top\nProject', subtitle: '6 Scaffolds' },
  { id: '4', title: 'South Wing\nUpgrade', subtitle: '3 Scaffolds' },
];

const OngoingScreen = () => {
  const renderItem = ({ item }: { item: OngoingItem }) => (
    <ItemOnGoingScreen
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
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    heading: {
      fontSize: 22,
      fontWeight: '700',
      color: '#1A1A1A',
      marginBottom: 16,
    },
    columnWrapper: {
      gap: 12,
      marginBottom: 12,
    },
    listContent: {
      paddingBottom: 30,
    },
  });

export default OngoingScreen;