import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Settings, Globe, Bell, Shield, CircleHelp as HelpCircle, LogOut, ChevronRight, MapPin, Phone, Mail, Award, Droplets } from 'lucide-react-native';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const userStats = [
    { label: 'Water Saved', value: '12,450L', icon: Droplets, color: '#1976D2' },
    { label: 'Conservation Score', value: '847', icon: Award, color: '#4CAF50' },
    { label: 'Community Rank', value: '#23', icon: Award, color: '#FFD700' },
  ];

  const menuItems = [
    { 
      title: 'Language Settings', 
      subtitle: 'हिंदी, English, Regional', 
      icon: Globe, 
      action: 'language' 
    },
    { 
      title: 'Notification Preferences', 
      subtitle: 'Alerts, Reports, Updates', 
      icon: Bell, 
      action: 'notifications' 
    },
    { 
      title: 'Privacy & Security', 
      subtitle: 'Data protection, Blockchain', 
      icon: Shield, 
      action: 'privacy' 
    },
    { 
      title: 'Help & Support', 
      subtitle: 'FAQs, Contact, Tutorial', 
      icon: HelpCircle, 
      action: 'help' 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <User size={24} color="#ffffff" />
          <Text style={styles.headerTitle}>Profile & Settings</Text>
        </View>

        {/* User Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <User size={40} color="#1976D2" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>राम कुमार शर्मा</Text>
            <Text style={styles.userRole}>Farmer • Village Panchayat Member</Text>
            <View style={styles.locationRow}>
              <MapPin size={14} color="#666" />
              <Text style={styles.locationText}>Bharatpur, Rajasthan</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Settings size={20} color="#1976D2" />
          </TouchableOpacity>
        </View>

        {/* Contact Information */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Information</Text>
          <View style={styles.contactRow}>
            <Phone size={18} color="#666" />
            <Text style={styles.contactText}>+91 9876543210</Text>
          </View>
          <View style={styles.contactRow}>
            <Mail size={18} color="#666" />
            <Text style={styles.contactText}>ram.sharma@gmail.com</Text>
          </View>
        </View>

        {/* User Statistics */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Impact</Text>
          <View style={styles.statsGrid}>
            {userStats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: stat.color + '20' }]}>
                  <stat.icon size={20} color={stat.color} />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Settings */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Settings</Text>
          
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Push Notifications</Text>
              <Text style={styles.settingDesc}>Water alerts, forecasts</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#ddd', true: '#1976D2' }}
              thumbColor={notificationsEnabled ? '#ffffff' : '#f4f3f4'}
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Location Services</Text>
              <Text style={styles.settingDesc}>Local water data access</Text>
            </View>
            <Switch
              value={locationEnabled}
              onValueChange={setLocationEnabled}
              trackColor={{ false: '#ddd', true: '#1976D2' }}
              thumbColor={locationEnabled ? '#ffffff' : '#f4f3f4'}
            />
          </View>

          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Language</Text>
              <Text style={styles.settingDesc}>{selectedLanguage} • हिंदी</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Settings & Support</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <item.icon size={20} color="#1976D2" />
              </View>
              <View style={styles.menuInfo}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <ChevronRight size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* App Information */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>App Information</Text>
          <View style={styles.appInfo}>
            <Text style={styles.appVersion}>HydroSpatial + DWLR v2.1.0</Text>
            <Text style={styles.appDetails}>Ministry of Jal Shakti</Text>
            <Text style={styles.appDetails}>Government of India</Text>
            <Text style={styles.lastUpdate}>Last updated: Today</Text>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#F44336" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        {/* Government Branding */}
        <View style={styles.branding}>
          <Text style={styles.brandingText}>
            Powered by Digital India Initiative
          </Text>
          <View style={styles.brandingLogos}>
            <View style={styles.brandingLogo}>
              <Text style={styles.brandingLogoText}>GOI</Text>
            </View>
            <View style={styles.brandingLogo}>
              <Text style={styles.brandingLogoText}>जल शक्ति</Text>
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
  profileCard: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userRole: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  editButton: {
    padding: 8,
  },
  card: {
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
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  settingDesc: {
    fontSize: 12,
    color: '#666',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuInfo: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  appInfo: {
    alignItems: 'center',
  },
  appVersion: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  appDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  lastUpdate: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F44336',
  },
  logoutText: {
    fontSize: 16,
    color: '#F44336',
    fontWeight: '500',
    marginLeft: 8,
  },
  branding: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 40,
  },
  brandingText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  brandingLogos: {
    flexDirection: 'row',
    gap: 12,
  },
  brandingLogo: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  brandingLogoText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});