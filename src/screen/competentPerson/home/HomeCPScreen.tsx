import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from '../../projectManager/home/HomePMScreeCSS';
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
  

  export default function HomeCPScreen() {
    const [searchText, setSearchText] = useState<string>('');
  
    const renderItem = ({ item }: { item: OngoingItem }) => (
      <ItemOnGoingScreen
        title={item.title}
        subtitle={item.subtitle}
        onPress={() => console.log('Pressed:', item.id)}
      />
    );
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
  
        {/* Header + Search — fixed height, does NOT grow */}
        <LinearGradient
          colors={['#FDB001', '#D66801']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <View style={styles.userInfo}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=52' }}
              style={styles.avatar}
            />
            <View style={styles.userText}>
              <Text style={styles.userName}>John Carter</Text>
              <Text style={styles.userRole}>Project Manager</Text>
            </View>
          </View>
  
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
              <View style={styles.bellWrapper}>
                <Text style={styles.iconText}>🔔</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scanBtn} activeOpacity={0.7}>
              <Text style={styles.scanIcon}>⊞</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
  
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by ID, Location"
              placeholderTextColor="#aaa"
              value={searchText}
              onChangeText={(text: string) => setSearchText(text)}
            />
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.searchIcon}>🔍</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* FlatList takes all remaining space */}
        <FlatList
          data={ongoingData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={style.columnWrapper}
          contentContainerStyle={style.listContent}
          showsVerticalScrollIndicator={false}
          style={style.list}
        />
  
      </SafeAreaView>
    );
  }
  
  const style = StyleSheet.create({
    list: {
      flex: 1,                  // ← takes remaining vertical space
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 16,    // ← slightly reduced to avoid overflow with gap
      paddingTop: 20,
    },
    columnWrapper: {
      justifyContent: 'space-between', // ← distributes columns evenly
      marginBottom: 12,
      // removed `gap` — use space-between instead to avoid overflow
    },
    listContent: {
      paddingBottom: 30,
    },
  });

 