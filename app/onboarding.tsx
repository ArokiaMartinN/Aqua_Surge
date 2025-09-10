import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { TriangleAlert as AlertTriangle, Brain, Users, Shield, ChevronRight, Check } from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface OnboardingSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  features: string[];
}

const slides: OnboardingSlide[] = [
  {
    id: 1,
    title: 'Water Crisis Challenge',
    subtitle: 'Understanding the Problem',
    description: 'India faces critical groundwater depletion with 60% of districts experiencing falling water levels.',
    icon: AlertTriangle,
    color: '#F44336',
    features: [
      '89% of groundwater used for irrigation',
      '40% of population affected by water scarcity',
      '21 major cities running out of groundwater',
      'Traditional monitoring lacks real-time insights'
    ]
  },
  {
    id: 2,
    title: 'HydroSpatial Solution',
    subtitle: 'AI-Powered Water Management',
    description: 'Revolutionary platform combining AI, blockchain, and IoT for intelligent water resource management.',
    icon: Brain,
    color: '#1976D2',
    features: [
      'Real-time DWLR data from 2,847+ stations',
      'AI-driven demand vs supply analysis',
      'Predictive modeling for water forecasts',
      'Automated pump control & alerts'
    ]
  },
  {
    id: 3,
    title: 'Community Impact',
    subtitle: 'Empowering Local Communities',
    description: 'Gamified platform bringing transparency and encouraging community participation in water conservation.',
    icon: Users,
    color: '#4CAF50',
    features: [
      'Village-wise water budget tracking',
      'Conservation leaderboards & rewards',
      'Blockchain-based transparent ledger',
      'Multilingual support for rural users'
    ]
  },
  {
    id: 4,
    title: 'Key Features',
    subtitle: 'Complete Water Ecosystem',
    description: 'Comprehensive suite of tools for farmers, officials, and communities to manage water resources effectively.',
    icon: Shield,
    color: '#9C27B0',
    features: [
      'AR/3D aquifer visualization',
      'IoT water quality monitoring',
      'Climate resilience insights',
      'Carbon footprint tracking'
    ]
  }
];

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/(tabs)');
    }
  };

  const skipOnboarding = () => {
    router.replace('/(tabs)');
  };

  const slide = slides[currentSlide];

  return (
    <SafeAreaView style={styles.container}>
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
        <TouchableOpacity onPress={skipOnboarding}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressDot,
              {
                backgroundColor: index <= currentSlide ? slide.color : '#e0e0e0',
                width: index === currentSlide ? 24 : 8,
              },
            ]}
          />
        ))}
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Icon */}
        <View style={[styles.iconContainer, { backgroundColor: slide.color + '20' }]}>
          <slide.icon size={48} color={slide.color} />
        </View>

        {/* Title */}
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={[styles.subtitle, { color: slide.color }]}>{slide.subtitle}</Text>
        <Text style={styles.description}>{slide.description}</Text>

        {/* Features */}
        <View style={styles.featuresContainer}>
          {slide.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={[styles.checkIcon, { backgroundColor: slide.color }]}>
                <Check size={12} color="#ffffff" />
              </View>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        {/* Additional Info for specific slides */}
        {currentSlide === 0 && (
          <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Critical Statistics:</Text>
            <View style={styles.statRow}>
              <Text style={styles.statValue}>25cm/year</Text>
              <Text style={styles.statLabel}>Average depletion rate</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statValue}>₹2.5L Cr</Text>
              <Text style={styles.statLabel}>Annual economic impact</Text>
            </View>
          </View>
        )}

        {currentSlide === 1 && (
          <View style={styles.techContainer}>
            <Text style={styles.techTitle}>Powered by:</Text>
            <View style={styles.techTags}>
              <View style={styles.techTag}>
                <Text style={styles.techText}>AI/ML</Text>
              </View>
              <View style={styles.techTag}>
                <Text style={styles.techText}>Blockchain</Text>
              </View>
              <View style={styles.techTag}>
                <Text style={styles.techText}>IoT</Text>
              </View>
              <View style={styles.techTag}>
                <Text style={styles.techText}>AR/VR</Text>
              </View>
            </View>
          </View>
        )}

        {currentSlide === 2 && (
          <View style={styles.impactContainer}>
            <Text style={styles.impactTitle}>Expected Impact:</Text>
            <View style={styles.impactGrid}>
              <View style={styles.impactItem}>
                <Text style={styles.impactValue}>30%</Text>
                <Text style={styles.impactLabel}>Water Savings</Text>
              </View>
              <View style={styles.impactItem}>
                <Text style={styles.impactValue}>50%</Text>
                <Text style={styles.impactLabel}>Efficiency Gain</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.slideCounter}>
          <Text style={styles.counterText}>
            {currentSlide + 1} of {slides.length}
          </Text>
        </View>
        
        <TouchableOpacity 
          style={[styles.nextButton, { backgroundColor: slide.color }]}
          onPress={nextSlide}
        >
          <Text style={styles.nextButtonText}>
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
          <ChevronRight size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerLogos: {
    flexDirection: 'row',
    gap: 12,
  },
  logoContainer: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  skipText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  progressDot: {
    height: 8,
    borderRadius: 4,
    transition: 'all 0.3s ease',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  statsContainer: {
    width: '100%',
    backgroundColor: '#fff5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  statsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F44336',
    marginBottom: 12,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F44336',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  techContainer: {
    width: '100%',
    backgroundColor: '#e3f2fd',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  techTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: 12,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techTag: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  techText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  impactContainer: {
    width: '100%',
    backgroundColor: '#e8f5e8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  impactTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 12,
  },
  impactGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  impactItem: {
    alignItems: 'center',
  },
  impactValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  impactLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  slideCounter: {
    flex: 1,
  },
  counterText: {
    fontSize: 14,
    color: '#666',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
});