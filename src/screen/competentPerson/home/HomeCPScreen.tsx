import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from '../../projectManager/home/HomePMScreeCSS';
import ItemOnGoingScreen from '../../itemScreen/ItemOnGoingScreen';

import { ProjectDto } from '../../dto/competentPersonHomeList/ProjectManagerDto';
import cpHomeProjectService from '../../../services/cpHomeProjectService';

// ---- Add cpMyProjectScreen (and its expected params) to your navigator's param list ----
// Update this to match your actual RootStackParamList / navigator types
type RootStackParamList = {
  cpMyProjectScreen: { uuid: string };
};

type HomeCPNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'cpMyProjectScreen'
>;

export default function HomeCPScreen() {
  const navigation = useNavigation<HomeCPNavigationProp>();

  const [searchText, setSearchText] = useState('');
  const [projects, setProjects] = useState<ProjectDto[]>([]);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getProjects = async (
    pageNumber = 1,
    search = '',
    isLoadMore = false,
  ) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      const response =
        await cpHomeProjectService.getProjectList(
          pageNumber,
          10,
          search,
        );

      const newProjects = response.data ?? [];

      if (isLoadMore) {
        setProjects(prev => [...prev, ...newProjects]);
      } else {
        setProjects(newProjects);
      }

      setPage(response.pagination.page);

      setHasMore(
        response.pagination.page <
          response.pagination.totalPages,
      );
    } catch (error) {
      console.log('PROJECT API ERROR =>', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    getProjects(1);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setPage(1);
      setHasMore(true);

      getProjects(1, searchText);
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchText]);

  const loadMore = () => {
    if (loadingMore || loading || !hasMore) {
      return;
    }

    const nextPage = page + 1;

    getProjects(
      nextPage,
      searchText,
      true,
    );
  };

  const renderItem = ({ item }: { item: ProjectDto }) => (
    <ItemOnGoingScreen
      title={item.projectName}
      subtitle={`${item.totalRequests} Requests`}
      onPress={() => {
        // Navigate to the project detail screen, passing the project's uuid
        navigation.navigate('cpMyProjectScreen', { uuid: item.uuid });
      }}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F5F5F5',
      }}
    >
      <StatusBar
        translucent={false}
        backgroundColor="#FDB001"
        barStyle="light-content"
      />

      <LinearGradient
        colors={['#FDB001', '#D66801']}
        top={{ x: 0, y: 0 }}
        bottom={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=52',
            }}
            style={styles.avatar}
          />

          <View style={styles.userText}>
            <Text style={styles.userName}>
              Competent Person
            </Text>

            <Text style={styles.userRole}>
              Project List
            </Text>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.iconBtn}
            activeOpacity={0.7}
          >
            <View style={styles.bellWrapper}>
              <Text style={styles.iconText}>
                🔔
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.scanBtn}
            activeOpacity={0.7}
          >
            <Text style={styles.scanIcon}>
              ⊞
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Search */}

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Project"
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={setSearchText}
          />

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.searchIcon}>
              🔍
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Initial Loader */}

      {loading && page === 1 ? (
        <View style={localStyle.loaderContainer}>
          <ActivityIndicator
            size="large"
            color="#FDB001"
          />
        </View>
      ) : (
        <FlatList
          data={projects}
          keyExtractor={item =>
            item.id.toString()
          }
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={
            localStyle.columnWrapper
          }
          contentContainerStyle={
            localStyle.listContent
          }
          showsVerticalScrollIndicator={false}
          style={localStyle.list}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loadingMore ? (
              <View
                style={{
                  paddingVertical: 20,
                }}
              >
                <ActivityIndicator
                  size="small"
                  color="#FDB001"
                />
              </View>
            ) : null
          }
          ListEmptyComponent={() => (
            <View
              style={
                localStyle.emptyContainer
              }
            >
              <Text
                style={
                  localStyle.emptyText
                }
              >
                No Projects Found
              </Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  listContent: {
    paddingBottom: 30,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});