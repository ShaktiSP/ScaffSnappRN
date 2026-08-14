import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './cpMyProjectScreenCSS';
import FilterIcon from '../../../resources/assets/filterIcon.svg';
import ItemScaffoldcard from '../../itemScreen/ItemScaffoldcard';
import cpProjectDetailService from '../../../services/cpProjectDetailService';
import {
  ProjectDetail,
  Scaffhold,
} from '../../dto/projectDetailsModel/ProjectDetailsResponse';

// Reusable row for label / value pairs
const DetailRow = ({
  label,
  value,
  isMuted,
}: {
  label: string;
  value: string;
  isMuted?: boolean;
}) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={[styles.detailValue, isMuted && styles.detailValueMuted]}>
      {value}
    </Text>
  </View>
);

export default function cpMyProjectScreen() {
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectDetail = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await cpProjectDetailService.getNewProjectScaffHold({
        priority: "",projectId: "48", search: "",sort: "",status: "",tags: "",
      });

      setProject(response.data);
    } catch (err) {
      console.error('fetchProjectDetail Error:', err);
      setError('Failed to load project details. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjectDetail();
  }, [fetchProjectDetail]);

  // ---- Loading state ----
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#F7941D" />
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#F7941D" />
        </View>
      </SafeAreaView>
    );
  }

  // ---- Error state ----
  if (error || !project) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#F7941D" />
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>{error ?? 'No data found'}</Text>
          <TouchableOpacity onPress={fetchProjectDetail} activeOpacity={0.7}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F7941D" />

      {/* ---- Header ---- */}
      <LinearGradient
        colors={['#F7941D', '#F15A24']}
        top={{ x: 0, y: 0 }}
        bottom={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerSpacer} />
        <Text style={styles.headerTitle}>MY PROJECT</Text>
        <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.7}>
          <FilterIcon width={18} height={18} fill="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ---- Project Details Card ---- */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{project.projectName}</Text>

          <DetailRow label="Project Name" value={project.projectName} />
          <DetailRow label="Company Name" value={project.companyName} />
          <DetailRow label="Company Id" value={project.companyCMPId} />
          <DetailRow label="Project Id" value={project.PJT} />
          <DetailRow label="Location" value={project.clientAddress} />

          <View style={styles.divider} />

          <Text style={styles.sectionSubTitle}>Contact Person Details</Text>
          <DetailRow label="Name" value={project.clientName} isMuted />
          <DetailRow
            label="Mobile Number"
            value={`${project.clientCountryCode} ${project.clientMobile}`}
          />
        </View>

        {/* ---- Scaffold List Section Header ---- */}
        <View>
          <Text style={styles.sectionHeaderText}>Scaffold List</Text>
        </View>

        {/* ---- Scaffold List ---- */}
        <FlatList
          data={project.scaffholdList}
          keyExtractor={(item: Scaffhold) => item.id}
          scrollEnabled={false}
          renderItem={({ item }: { item: Scaffhold }) => (
            <ItemScaffoldcard
              code={item.SCAFFID}
              colorLabel={item.tag}
              colorHex="#E8433A"
              dimensions={`${item.length}ft x ${item.width}ft x ${item.height}ft`}
              expectedEndDate={item.expectedEndDate}
              craft={item.craft}
              status={item.status}
              priority={item.priority}
              location={item.address}
              onNavigatePress={() => {
                console.log('Navigate to =>', item.address);
              }}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No scaffolds found.</Text>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}