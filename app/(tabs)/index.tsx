import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Droplets, 
  TrendingUp, 
  Calendar, 
  TestTube, 
  Sprout, 
  Bell, 
  MapPin,
  Waves
} from 'lucide-react-native';

export default function HomeScreen() {
  const quickAccessCards = [
    { icon: Droplets, title: 'Water Level', color: '#1976D2', screen: 'water-level' },
    { icon: TrendingUp, title: 'Recharge Estimation', color: '#4CAF50', screen: 'recharge' },
    { icon: Calendar, title: 'Forecast', color: '#FF9800', screen: 'forecast' },
    { icon: TestTube, title: 'Water Quality', color: '#9C27B0', screen: 'quality' },
    { icon: Sprout, title: 'Crop Advisory', color: '#8BC34A', screen: 'crop' },
    { icon: Bell, title: 'Alerts', color: '#F44336', screen: 'alerts' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLogos}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>GOI</Text>
            </View>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>जल शक्ति</Text>
            </View>
          </View>
          <Text style={styles.headerTitle}>HydroSpatial + DWLR</Text>
          <Text style={styles.headerSubtitle}>Real-time Groundwater Resource Evaluation</Text>
        </View>

        {/* Map Section */}
        <View style={styles.mapCard}>
          <View style={styles.mapHeader}>
            <MapPin size={20} color="#1976D2" />
            <Text style={styles.mapTitle}>India DWLR Stations</Text>
          </View>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>Interactive Map of India</Text>
            <Text style={styles.mapSubtext}>2,847 active stations</Text>
            <View style={styles.mapStats}>
              <View style={styles.statItem}>
                <View style={[styles.statDot, { backgroundColor: '#4CAF50' }]} />
                <Text style={styles.statText}>Normal: 1,234</Text>
              </View>
              <View style={styles.statItem}>
                <View style={[styles.statDot, { backgroundColor: '#FF9800' }]} />
                <Text style={styles.statText}>Warning: 987</Text>
              </View>
              <View style={styles.statItem}>
                <View style={[styles.statDot, { backgroundColor: '#F44336' }]} />
                <Text style={styles.statText}>Critical: 626</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Real-time Data */}
        <View style={styles.dataCard}>
          <Text style={styles.cardTitle}>Real-time Groundwater Status</Text>
          <View style={styles.dataRow}>
            <View style={styles.dataItem}>
              <Waves size={24} color="#1976D2" />
              <Text style={styles.dataValue}>12.4m</Text>
              <Text style={styles.dataLabel}>Current Level</Text>
            </View>
            <View style={styles.dataItem}>
              <TrendingUp size={24} color="#4CAF50" />
              <Text style={styles.dataValue}>+0.8m</Text>
              <Text style={styles.dataLabel}>Monthly Change</Text>
            </View>
          </View>
          <View style={styles.trendChart}>
            <Text style={styles.chartLabel}>6-Month Trend</Text>
            <View style={styles.chartBars}>
              {[65, 70, 55, 80, 75, 85].map((height, index) => (
                <View 
                  key={index} 
                  style={[styles.chartBar, { height: height }]} 
                />
              ))}
            </View>
          </View>
        </View>

        {/* Quick Access Cards */}
        <View style={styles.quickAccess}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.cardsGrid}>
            {quickAccessCards.map((card, index) => (
              <TouchableOpacity key={index} style={styles.quickCard}>
                <View style={[styles.iconContainer, { backgroundColor: card.color + '20' }]}>
                  <card.icon size={24} color={card.color} />
                </View>
                <Text style={styles.cardText}>{card.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Alerts */}
        <View style={styles.alertsSection}>
          <Text style={styles.sectionTitle}>Recent Alerts</Text>
          <View style={styles.alertCard}>
            <View style={[styles.alertDot, { backgroundColor: '#FF9800' }]} />
            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>Water Level Warning</Text>
              <Text style={styles.alertText}>Punjab region showing 15% decline</Text>
              <Text style={styles.alertTime}>2 hours ago</Text>
            </View>
          </View>
          <View style={styles.alertCard}>
            <View style={[styles.alertDot, { backgroundColor: '#4CAF50' }]} />
            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>Recharge Opportunity</Text>
              <Text style={styles.alertText}>Heavy rainfall predicted in Maharashtra</Text>
              <Text style={styles.alertTime}>5 hours ago</Text>
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
    padding: 20,
    paddingTop: 10,
  },
  headerLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  logoContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
  },
  mapCard: {
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
  mapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#333',
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mapText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: 4,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  mapStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statText: {
    fontSize: 12,
    color: '#666',
  },
  dataCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dataItem: {
    alignItems: 'center',
  },
  dataValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
  },
  dataLabel: {
    fontSize: 12,
    color: '#666',
  },
  trendChart: {
    marginTop: 16,
  },
  chartLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    textAlign: 'center',
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 100,
    paddingHorizontal: 20,
  },
  chartBar: {
    width: 20,
    backgroundColor: '#1976D2',
    borderRadius: 2,
    opacity: 0.8,
  },
  quickAccess: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickCard: {
    backgroundColor: '#ffffff',
    width: '48%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 24,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  alertsSection: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  alertCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  alertDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
    marginRight: 12,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  alertText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  alertTime: {
    fontSize: 11,
    color: '#999',
  },
});