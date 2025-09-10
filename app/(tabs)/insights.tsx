import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Brain, Heart, CloudRain, MapPin, Leaf, TrendingUp, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Circle as XCircle } from 'lucide-react-native';

export default function InsightsScreen() {
  const aquiferGrades = [
    { region: 'Punjab', grade: 'C', color: '#F44336', status: 'Critical' },
    { region: 'Gujarat', grade: 'B', color: '#FF9800', status: 'Moderate' },
    { region: 'Kerala', grade: 'A', color: '#4CAF50', status: 'Excellent' },
    { region: 'Rajasthan', grade: 'C', color: '#F44336', status: 'Critical' },
    { region: 'Karnataka', grade: 'B', color: '#FF9800', status: 'Moderate' },
  ];

  const rechargeZones = [
    { location: 'Western Ghats', potential: 'High', improvement: '35%' },
    { location: 'Deccan Plateau', potential: 'Medium', improvement: '22%' },
    { location: 'Indo-Gangetic Plain', potential: 'High', improvement: '28%' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Brain size={24} color="#ffffff" />
          <Text style={styles.headerTitle}>AI-Powered Insights</Text>
        </View>

        {/* AI Demand vs Supply */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TrendingUp size={20} color="#1976D2" />
            <Text style={styles.cardTitle}>Demand vs Supply Analysis</Text>
          </View>
          <View style={styles.balanceContainer}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>Current Demand</Text>
              <Text style={[styles.balanceValue, { color: '#F44336' }]}>847 BCM/year</Text>
            </View>
            <View style={styles.balanceVs}>
              <Text style={styles.vsText}>vs</Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceLabel}>Available Supply</Text>
              <Text style={[styles.balanceValue, { color: '#4CAF50' }]}>692 BCM/year</Text>
            </View>
          </View>
          <View style={styles.aiInsight}>
            <Brain size={16} color="#1976D2" />
            <Text style={styles.aiText}>
              AI recommends 18% reduction in extraction and 12% increase in recharge activities
            </Text>
          </View>
        </View>

        {/* Aquifer Health Cards */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Heart size={20} color="#1976D2" />
            <Text style={styles.cardTitle}>Aquifer Health Cards</Text>
          </View>
          {aquiferGrades.map((aquifer, index) => (
            <View key={index} style={styles.healthCard}>
              <View style={styles.healthInfo}>
                <Text style={styles.regionName}>{aquifer.region}</Text>
                <Text style={styles.healthStatus}>{aquifer.status}</Text>
              </View>
              <View style={[styles.gradeCircle, { backgroundColor: aquifer.color }]}>
                <Text style={styles.gradeText}>{aquifer.grade}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Climate Resilience */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <CloudRain size={20} color="#1976D2" />
            <Text style={styles.cardTitle}>Climate Resilience Insights</Text>
          </View>
          <View style={styles.climateMetrics}>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>-15%</Text>
              <Text style={styles.metricLabel}>Rainfall Impact</Text>
              <View style={styles.metricIcon}>
                <AlertTriangle size={16} color="#FF9800" />
              </View>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>High</Text>
              <Text style={styles.metricLabel}>Drought Risk</Text>
              <View style={styles.metricIcon}>
                <XCircle size={16} color="#F44336" />
              </View>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>Good</Text>
              <Text style={styles.metricLabel}>Resilience Score</Text>
              <View style={styles.metricIcon}>
                <CheckCircle size={16} color="#4CAF50" />
              </View>
            </View>
          </View>
          <Text style={styles.insightText}>
            Monsoon variability increased by 23% in last decade. Recommend building 15 new check dams in drought-prone areas.
          </Text>
        </View>

        {/* Recharge Zone Suggestions */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MapPin size={20} color="#1976D2" />
            <Text style={styles.cardTitle}>Recharge Zone Suggestions</Text>
          </View>
          {rechargeZones.map((zone, index) => (
            <TouchableOpacity key={index} style={styles.zoneCard}>
              <View style={styles.zoneInfo}>
                <Text style={styles.zoneName}>{zone.location}</Text>
                <View style={styles.zoneDetails}>
                  <View style={[
                    styles.potentialTag, 
                    { backgroundColor: zone.potential === 'High' ? '#4CAF50' : '#FF9800' }
                  ]}>
                    <Text style={styles.potentialText}>{zone.potential} Potential</Text>
                  </View>
                  <Text style={styles.improvement}>+{zone.improvement} improvement</Text>
                </View>
              </View>
              <View style={styles.zoneArrow}>
                <Text style={styles.arrowText}>→</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Carbon Footprint & Sustainability */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Leaf size={20} color="#4CAF50" />
            <Text style={styles.cardTitle}>Sustainability Impact</Text>
          </View>
          <View style={styles.sustainabilityGrid}>
            <View style={styles.sustainabilityItem}>
              <Text style={styles.sustainabilityValue}>2.4M</Text>
              <Text style={styles.sustainabilityLabel}>Tons CO₂ Saved</Text>
              <Text style={styles.sustainabilityDesc}>Through water conservation</Text>
            </View>
            <View style={styles.sustainabilityItem}>
              <Text style={styles.sustainabilityValue}>18%</Text>
              <Text style={styles.sustainabilityLabel}>Energy Reduction</Text>
              <Text style={styles.sustainabilityDesc}>From optimized pumping</Text>
            </View>
          </View>
          <View style={styles.sdgContainer}>
            <Text style={styles.sdgTitle}>Contributing to UN SDGs:</Text>
            <View style={styles.sdgTags}>
              <View style={styles.sdgTag}>
                <Text style={styles.sdgText}>SDG 6</Text>
              </View>
              <View style={styles.sdgTag}>
                <Text style={styles.sdgText}>SDG 11</Text>
              </View>
              <View style={styles.sdgTag}>
                <Text style={styles.sdgText}>SDG 13</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#1976D2',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  balanceItem: {
    flex: 1,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceVs: {
    paddingHorizontal: 16,
  },
  vsText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  aiInsight: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#e3f2fd',
    padding: 12,
    borderRadius: 8,
  },
  aiText: {
    fontSize: 14,
    color: '#1976D2',
    marginLeft: 8,
    flex: 1,
    lineHeight: 20,
  },
  healthCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  healthInfo: {
    flex: 1,
  },
  regionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  healthStatus: {
    fontSize: 14,
    color: '#666',
  },
  gradeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  climateMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metricItem: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  metricIcon: {
    position: 'absolute',
    top: -4,
    right: 8,
  },
  insightText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  zoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  zoneInfo: {
    flex: 1,
  },
  zoneName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 6,
  },
  zoneDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  potentialTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 12,
  },
  potentialText: {
    fontSize: 11,
    color: '#ffffff',
    fontWeight: '500',
  },
  improvement: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  zoneArrow: {
    padding: 8,
  },
  arrowText: {
    fontSize: 18,
    color: '#1976D2',
  },
  sustainabilityGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sustainabilityItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  sustainabilityValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 4,
  },
  sustainabilityLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  sustainabilityDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  sdgContainer: {
    marginTop: 16,
  },
  sdgTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  sdgTags: {
    flexDirection: 'row',
    gap: 8,
  },
  sdgTag: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  sdgText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
});