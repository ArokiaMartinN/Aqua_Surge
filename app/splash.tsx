import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Droplets, Waves } from 'lucide-react-native';

export default function SplashScreen() {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    // Start animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to main app after 3 seconds
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Government Logos */}
        <Animated.View 
          style={[
            styles.logosContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.logoRow}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>Government of India</Text>
              <Text style={styles.logoSubtext}>भारत सरकार</Text>
            </View>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>Ministry of Jal Shakti</Text>
              <Text style={styles.logoSubtext}>जल शक्ति मंत्रालय</Text>
            </View>
          </View>
        </Animated.View>

        {/* App Title and Icon */}
        <Animated.View 
          style={[
            styles.titleContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <Droplets size={48} color="#1976D2" />
            <Waves size={36} color="#4CAF50" style={styles.waveIcon} />
          </View>
          
          <Text style={styles.appTitle}>HydroSpatial + DWLR</Text>
          <Text style={styles.appSubtitle}>Real-time Groundwater Resource Evaluation</Text>
          <Text style={styles.appDescription}>
            Empowering communities with AI-driven water management
          </Text>
        </Animated.View>

        {/* Features Preview */}
        <Animated.View 
          style={[
            styles.featuresContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: Animated.multiply(fadeAnim, -20) }],
            },
          ]}
        >
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>AI-Powered Insights</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Blockchain Ledger</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Community Gamification</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Multilingual Support</Text>
          </View>
        </Animated.View>

        {/* Loading Indicator */}
        <Animated.View 
          style={[
            styles.loadingContainer,
            { opacity: fadeAnim },
          ]}
        >
          <View style={styles.loadingBar}>
            <Animated.View 
              style={[
                styles.loadingProgress,
                {
                  width: Animated.multiply(fadeAnim, 200),
                },
              ]}
            />
          </View>
          <Text style={styles.loadingText}>Initializing water data...</Text>
        </Animated.View>
      </View>

      {/* Footer */}
      <Animated.View 
        style={[
          styles.footer,
          { opacity: fadeAnim },
        ]}
      >
        <Text style={styles.footerText}>Powered by Digital India Initiative</Text>
        <Text style={styles.footerSubtext}>Making water management transparent & efficient</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logosContainer: {
    marginBottom: 40,
  },
  logoRow: {
    flexDirection: 'row',
    gap: 20,
  },
  logoContainer: {
    backgroundColor: 'rgba(25, 118, 210, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(25, 118, 210, 0.2)',
  },
  logoText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
  },
  logoSubtext: {
    fontSize: 10,
    color: '#666',
    marginTop: 2,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  waveIcon: {
    position: 'absolute',
    bottom: -8,
    right: -8,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
    marginBottom: 8,
  },
  appSubtitle: {
    fontSize: 16,
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '500',
  },
  appDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  featuresContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4CAF50',
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  loadingContainer: {
    alignItems: 'center',
    width: '100%',
  },
  loadingBar: {
    width: 200,
    height: 4,
    backgroundColor: 'rgba(25, 118, 210, 0.2)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 12,
  },
  loadingProgress: {
    height: '100%',
    backgroundColor: '#1976D2',
    borderRadius: 2,
  },
  loadingText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 11,
    color: '#999',
    fontStyle: 'italic',
  },
});