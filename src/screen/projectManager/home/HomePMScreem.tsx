import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from "./HomePMScreeCSS";
import OngoingScreen from '../home/OnGoingScreen';
import NewlyAddedScreen from '../NewlyAddedAcreen';

const { width } = Dimensions.get('window');

const TABS: string[] = ['Ongoing', 'Newly Added', 'Completed'];

export default function HomePMScreem() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');
  const indicatorAnim = useRef(new Animated.Value(0)).current;

  const handleTabPress = (index: number): void => {
    setActiveTab(index);
    Animated.spring(indicatorAnim, {
      toValue: index,
      useNativeDriver: false,
      tension: 80,
      friction: 10,
    }).start();
  };

  const tabCount: number = TABS.length;
  const tabWidth: number = (width - 32) / tabCount;

  const indicatorLeft = indicatorAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, tabWidth, tabWidth * 2],
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <OngoingScreen />;
      case 1:
        return (
         <NewlyAddedScreen/>
        );
      case 2:
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Completed</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
       <StatusBar
        translucent={false}
        backgroundColor="#FDB001"
        barStyle="light-content"
      />
      <View style={{ flex: 1 }}>
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
        <View style={styles.tabsContainer}>
          <View style={styles.tabsRow}>
            {TABS.map((tab: string, index: number) => {
              const isActive: boolean = activeTab === index;
              return (
                <TouchableOpacity
                  key={tab}
                  style={styles.tab}
                  onPress={() => handleTabPress(index)}
                  activeOpacity={0.7}
                >
                  <View style={styles.tabLabelRow}>
                    <Text
                      style={[
                        styles.tabLabel,
                        isActive ? styles.tabLabelActive : styles.tabLabelInactive,
                      ]}
                    >
                      {tab}
                    </Text>
                    {tab === 'Newly Added' && (
                      <View style={styles.dot} />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.indicatorTrack}>
            <Animated.View
              style={[
                styles.indicator,
                {
                  width: tabWidth,
                  left: indicatorLeft,
                },
              ]}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {renderTabContent()}
        </View>

      </View>
    </SafeAreaView>
  );
}