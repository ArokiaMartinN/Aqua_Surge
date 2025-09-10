import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield, ChartPie as PieChart, Trophy, Download, Users, Droplets, TrendingUp, Award, ChevronRight } from 'lucide-react-native';

export default function ReportsScreen() {
  const villageRankings = [
    { name: 'Ralegan Siddhi, Maharashtra', savings: '2.4M L', rank: 1, score: 95 },
    { name: 'Hiware Bazar, Maharashtra', savings: '2.1M L', rank: 2, score: 92 },
    { name: 'Rajsamadhiyala, Gujarat', savings: '1.8M L', rank: 3, score: 88 },
    { name: 'Laporia, Rajasthan', savings: '1.6M L', rank: 4, score: 85 },
    { name: 'Punsari, Gujarat', savings: '1.4M L', rank: 5, score: 82 },
  ];

  const reportTypes = [
    { title: 'Monthly Water Budget', type: 'budget', icon: PieChart, color: '#1976D2' },
    { title: 'Community Impact Report', type: 'impact', icon: Users, color: '#4CAF50' },
    { title: 'Technical Assessment', type: 'technical', icon: TrendingUp, color: '#FF9800' },
    { title: 'Sustainability Metrics', type: 'sustainability', icon: Shield, color: '#9C27B0' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Shield size={24} color="#ffffff" />
          <Text style={styles.headerTitle}>Blockchain Reports</Text>
        </View>

        {/* Community Water Ledger */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Shield size={20} color="#1976D2" />
            <Text style={styles.cardTitle}>Community Water Ledger</Text>
            <View style={styles.blockchainTag}>
              <Text style={styles.blockchainText}>BLOCKCHAIN</Text>
            </View>
          </View>
          
          <View style={styles.ledgerStats}>
            <View style={styles.ledgerItem}>
              <Text style={styles.ledgerValue}>15,247</Text>
              <Text style={styles.ledgerLabel}>Total Transactions</Text>
            </View>
            <View style={styles.ledgerItem}>
              <Text style={styles.ledgerValue}>100%</Text>
              <Text style={styles.ledgerLabel}>Tamper Proof</Text>
            </View>
            <View style={styles.ledgerItem}>
              <Text style={styles.ledgerValue}>2,847</Text>
              <Text style={styles.ledgerLabel}>Communities</Text>
            </View>
          </View>

          <View style={styles.recentTransactions}>
            <Text style={styles.sectionSubtitle}>Recent Transactions</Text>
            <View style={styles.transaction}>
              <View style={styles.transactionIcon}>
                <Droplets size={16} color="#F44336" />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionType}>Extraction</Text>
                <Text style={styles.transactionDetails}>Village Panchayat - 5,000L</Text>
              </View>
              <Text style={styles.transactionTime}>2h ago</Text>
            </View>
            <View style={styles.transaction}>
              <View style={styles.transactionIcon}>
                <TrendingUp size={16} color="#4CAF50" />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionType}>Recharge</Text>
                <Text style={styles.transactionDetails}>Rainwater Harvesting - 12,000L</Text>
              </View>
              <Text style={styles.transactionTime}>5h ago</Text>
            </View>
          </View>
        </View>

        {/* Community Water Budget */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <PieChart size={20} color="#1976D2" />
            <Text style={styles.cardTitle}>Community Water Budget</Text>
          </View>
          
          <View style={styles.budgetVisual}>
            <View style={styles.budgetCircle}>
              <View style={styles.budgetInner}>
                <Text style={styles.budgetPercentage}>73%</Text>
                <Text style={styles.budgetLabel}>Used</Text>
              </View>
            </View>
            <View style={styles.budgetLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#4CAF50' }]} />
                <Text style={styles.legendText}>Safe Limit: 27%</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#FF9800' }]} />
                <Text style={styles.legendText}>Used: 73%</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#F44336' }]} />
                <Text style={styles.legendText}>Over-extraction Risk</Text>
              </View>
            </View>
          </View>

          <View style={styles.budgetAlert}>
            <Text style={styles.alertText}>⚠️ Approaching critical threshold. Recommend 15% reduction.</Text>
          </View>
        </View>

        {/* Village Leaderboard */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Trophy size={20} color="#FFD700" />
            <Text style={styles.cardTitle}>Conservation Leaderboard</Text>
          </View>
          
          {villageRankings.map((village, index) => (
            <View key={index} style={styles.leaderboardItem}>
              <View style={styles.rankContainer}>
                <View style={[
                  styles.rankBadge, 
                  { backgroundColor: index < 3 ? '#FFD700' : '#e0e0e0' }
                ]}>
                  <Text style={[
                    styles.rankText, 
                    { color: index < 3 ? '#ffffff' : '#666' }
                  ]}>
                    {village.rank}
                  </Text>
                </View>
              </View>
              
              <View style={styles.villageInfo}>
                <Text style={styles.villageName}>{village.name}</Text>
                <Text style={styles.villageSavings}>Water Saved: {village.savings}</Text>
              </View>
              
              <View style={styles.scoreContainer}>
                <Text style={styles.scoreValue}>{village.score}</Text>
                <Text style={styles.scoreLabel}>Score</Text>
                {index < 3 && <Award size={16} color="#FFD700" style={styles.awardIcon} />}
              </View>
            </View>
          ))}
        </View>

        {/* Downloadable Reports */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Download size={20} color="#1976D2" />
            <Text style={styles.cardTitle}>Download Reports</Text>
          </View>
          
          {reportTypes.map((report, index) => (
            <TouchableOpacity key={index} style={styles.reportItem}>
              <View style={[styles.reportIcon, { backgroundColor: report.color + '20' }]}>
                <report.icon size={20} color={report.color} />
              </View>
              <View style={styles.reportInfo}>
                <Text style={styles.reportTitle}>{report.title}</Text>
                <Text style={styles.reportDesc}>PDF • Updated today</Text>
              </View>
              <View style={styles.downloadButton}>
                <ChevronRight size={20} color="#666" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Impact Metrics */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Overall Impact Metrics</Text>
          
          <View style={styles.impactGrid}>
            <View style={styles.impactItem}>
              <Text style={styles.impactValue}>847</Text>
              <Text style={styles.impactLabel}>Villages Engaged</Text>
            </View>
            <View style={styles.impactItem}>
              <Text style={styles.impactValue}>2.4M</Text>
              <Text style={styles.impactLabel}>Liters Conserved</Text>
            </View>
            <View style={styles.impactItem}>
              <Text style={styles.impactValue}>₹2.8Cr</Text>
              <Text style={styles.impactLabel}>Economic Value</Text>
            </View>
            <View style={styles.impactItem}>
              <Text style={styles.impactValue}>15%</Text>
              <Text style={styles.impactLabel}>Efficiency Gain</Text>
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
    flex: 1,
  },
  blockchainTag: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  blockchainText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  ledgerStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ledgerItem: {
    alignItems: 'center',
    flex: 1,
  },
  ledgerValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 4,
  },
  ledgerLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  recentTransactions: {
    marginTop: 16,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  transactionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  transactionDetails: {
    fontSize: 12,
    color: '#666',
  },
  transactionTime: {
    fontSize: 12,
    color: '#999',
  },
  budgetVisual: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  budgetCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  budgetInner: {
    alignItems: 'center',
  },
  budgetPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  budgetLabel: {
    fontSize: 12,
    color: '#666',
  },
  budgetLegend: {
    flex: 1,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#333',
  },
  budgetAlert: {
    backgroundColor: '#fff3cd',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  alertText: {
    fontSize: 14,
    color: '#856404',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rankContainer: {
    marginRight: 16,
  },
  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  villageInfo: {
    flex: 1,
  },
  villageName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  villageSavings: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  scoreContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  scoreValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  scoreLabel: {
    fontSize: 10,
    color: '#666',
  },
  awardIcon: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
  reportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  reportIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reportInfo: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  reportDesc: {
    fontSize: 12,
    color: '#666',
  },
  downloadButton: {
    padding: 8,
  },
  impactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  impactItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  impactValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 4,
  },
  impactLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});