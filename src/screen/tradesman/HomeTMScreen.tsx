import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  FlatList,
  Dimensions,
  PixelRatio,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './HomeTMCss';
import ScaffoldCard from '../itemScreen/ItemScaffHoldScreen';

const { width: SW } = Dimensions.get('window');
const scale = SW / 30000;
const normalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size * scale));


interface OngoingItem {
  id: string;
  scaffold: string;
  expectedEndDate: string;
  craft: string;
  status: string;
  priority: 'High' | 'Medium' | 'Low';
  location: string;
  riskLevel: 'Red' | 'Amber' | 'Green';
}

const ongoingItems: OngoingItem[] = [
  {
    id: 'SCF001',
    scaffold: '24ft x 16ft x 12ft',
    expectedEndDate: 'May 10, 2025',
    craft: 'Electrician',
    status: 'Created',
    priority: 'Medium',
    location: 'Boiler Unit 3, East Side',
    riskLevel: 'Red',
  },
  {
    id: 'SCF002',
    scaffold: '30ft x 20ft x 10ft',
    expectedEndDate: 'Jun 15, 2025',
    craft: 'Plumber',
    status: 'In Progress',
    priority: 'High',
    location: 'Block A, West Wing',
    riskLevel: 'Amber',
  },
  {
    id: 'SCF003',
    scaffold: '18ft x 12ft x 8ft',
    expectedEndDate: 'Jul 01, 2025',
    craft: 'Welder',
    status: 'Created',
    priority: 'Low',
    location: 'Unit 5, North Side',
    riskLevel: 'Green',
  },
];

const BellIcon = () => (
  <View style={styles.iconCircle}>
    <Text style={styles.iconText}>🔔</Text>
  </View>
);

const SearchIcon = () => <Text style={{ fontSize: 18, color: '#888' }}>🔍</Text>;
const FilterIcon = () => <Text style={{ fontSize: 16, color: '#555' }}>⚙️</Text>;

const Divider = () => <View style={styles.divider} />;

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const renderItem = ({ item }: { item: OngoingItem }) => (
  <ScaffoldCard
    id={item.id}
    scaffold={item.scaffold}
    expectedEndDate={item.expectedEndDate}
    craft={item.craft}
    status={item.status}
    priority={item.priority}
    location={item.location}
    riskLevel={item.riskLevel}
    onNavigate={() => console.log('Navigate:', item.id)}
  />
);

export default function HomeTMScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredItems = ongoingItems.filter(
    (item) =>
      item.id.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase()) ||
      item.craft.toLowerCase().includes(searchText.toLowerCase())
  );

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
          top={{ x: 0, y: 0 }}
          bottom={{ x: 1, y: 0 }}
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
          </View>
        </LinearGradient>

        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.bodyContent}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <Text style={styles.sectionTitle}>Main Plant Extension</Text>

          <View style={styles.card}>
            <InfoRow label="Project Name" value="Main Plant Extension" />
            <Divider />
            <InfoRow label="Company Name" value="Acme Industrial Solutions" />
            <Divider />
            <InfoRow label="Company Id" value="ACME-001" />
            <Divider />
            <InfoRow label="Project Id" value="J-2048" />
            <Divider />
            <InfoRow
              label="Location"
              value={'Boiler Unit 3, East Side Road,\nCalifornia USA'}
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardSectionLabel}>Contact Person Details</Text>
            <Divider />
            <InfoRow label="Name" value="John Smith" />
            <Divider />
            <InfoRow label="Mobile Number" value="+01 5646163350" />
          </View>

          <TouchableOpacity style={styles.newRequestBtn} activeOpacity={0.85}>
            <Text style={styles.newRequestText}>NEW REQUEST</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Scaffolds</Text>

          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <SearchIcon />
              <TextInput
                style={styles.searchInput}
                placeholder="Search Name"
                placeholderTextColor="#aaa"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
            <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
              <FilterIcon />
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={filteredItems}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              ListEmptyComponent={
                <Text
                  style={{ textAlign: 'center', color: '#aaa', marginTop: 20 }}
                >
                  No scaffolds found.
                </Text>
              }
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}