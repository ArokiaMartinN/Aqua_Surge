import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  MessageSquare, 
  Send, 
  Mic, 
  Bot,
  User,
  Droplets,
  Calendar,
  Sprout,
  Lightbulb
} from 'lucide-react-native';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'quick-reply';
}

export default function ChatbotScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्ते! I\'m your HydroSpatial AI assistant. How can I help you with water management today?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    { text: 'Water Level Status', icon: Droplets },
    { text: 'Weather Forecast', icon: Calendar },
    { text: 'Crop Advisory', icon: Sprout },
    { text: 'Conservation Tips', icon: Lightbulb },
  ];

  const sendMessage = (text: string) => {
    if (text.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(text),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('water level') || input.includes('पानी का स्तर')) {
      return 'Current groundwater level in your region is 12.4m (↑0.8m from last month). Status: Normal. Your area has adequate water supply for next 6 months.';
    } else if (input.includes('forecast') || input.includes('weather') || input.includes('मौसम')) {
      return 'Weather forecast for next 7 days:\n• Mon-Wed: Light rain (15mm expected)\n• Thu-Fri: Clear skies\n• Weekend: Moderate rain (25mm)\n\nGood recharge opportunity expected!';
    } else if (input.includes('crop') || input.includes('फसल')) {
      return 'Based on current soil moisture and water availability:\n• Recommended: Drought-resistant crops (मक्का, बाजरा)\n• Avoid: Water-intensive crops this season\n• Optimal sowing: Next 2 weeks\n• Water saving: Use drip irrigation';
    } else if (input.includes('tips') || input.includes('conservation') || input.includes('बचत')) {
      return 'Water conservation tips for your region:\n• Install rainwater harvesting system\n• Use mulching to retain soil moisture\n• Fix leaky pipes and taps\n• Plant native trees for groundwater recharge\n• Check pumps regularly for efficiency';
    } else {
      return 'I understand you need help with water management. I can assist with:\n• Real-time water levels\n• Weather forecasts\n• Crop recommendations\n• Conservation techniques\n• Pump efficiency tips\n\nPlease ask me about any specific topic!';
    }
  };

  const handleQuickReply = (quickReply: string) => {
    sendMessage(quickReply);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <Bot size={24} color="#ffffff" />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>AI Water Assistant</Text>
            <Text style={styles.headerSubtitle}>हिंदी & English • Voice Enabled</Text>
          </View>
          <View style={styles.statusIndicator}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        {/* Messages */}
        <ScrollView 
          style={styles.messagesContainer} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.messagesContent}
        >
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.messageRow,
                message.isUser ? styles.userMessageRow : styles.aiMessageRow,
              ]}
            >
              {!message.isUser && (
                <View style={styles.aiAvatar}>
                  <Bot size={16} color="#1976D2" />
                </View>
              )}
              
              <View
                style={[
                  styles.messageBubble,
                  message.isUser ? styles.userMessage : styles.aiMessage,
                ]}
              >
                <Text style={[
                  styles.messageText,
                  message.isUser ? styles.userMessageText : styles.aiMessageText,
                ]}>
                  {message.text}
                </Text>
                <Text style={[
                  styles.messageTime,
                  message.isUser ? styles.userMessageTime : styles.aiMessageTime,
                ]}>
                  {formatTime(message.timestamp)}
                </Text>
              </View>

              {message.isUser && (
                <View style={styles.userAvatar}>
                  <User size={16} color="#ffffff" />
                </View>
              )}
            </View>
          ))}

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <View style={styles.quickRepliesContainer}>
              <Text style={styles.quickRepliesTitle}>Quick Actions:</Text>
              <View style={styles.quickReplies}>
                {quickReplies.map((reply, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.quickReplyButton}
                    onPress={() => handleQuickReply(reply.text)}
                  >
                    <reply.icon size={16} color="#1976D2" />
                    <Text style={styles.quickReplyText}>{reply.text}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.textInput}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type your question... (हिंदी/English)"
              placeholderTextColor="#999"
              multiline
              maxLength={500}
            />
            <TouchableOpacity style={styles.micButton}>
              <Mic size={20} color="#1976D2" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sendButton,
                inputText.trim() ? styles.sendButtonActive : styles.sendButtonInactive,
              ]}
              onPress={() => sendMessage(inputText)}
              disabled={!inputText.trim()}
            >
              <Send size={20} color={inputText.trim() ? "#ffffff" : "#999"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.inputHint}>💡 Try: "मेरे क्षेत्र में पानी का स्तर क्या है?" or "Show crop advisory"</Text>
        </View>
      </KeyboardAvoidingView>
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
  headerText: {
    flex: 1,
    marginLeft: 12,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    marginTop: 2,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  onlineText: {
    color: '#ffffff',
    fontSize: 12,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    paddingBottom: 20,
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-end',
  },
  userMessageRow: {
    justifyContent: 'flex-end',
  },
  aiMessageRow: {
    justifyContent: 'flex-start',
  },
  aiAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  messageBubble: {
    maxWidth: '75%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  userMessage: {
    backgroundColor: '#1976D2',
    borderBottomRightRadius: 4,
  },
  aiMessage: {
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#ffffff',
  },
  aiMessageText: {
    color: '#333',
  },
  messageTime: {
    fontSize: 11,
    marginTop: 4,
  },
  userMessageTime: {
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'right',
  },
  aiMessageTime: {
    color: '#999',
  },
  quickRepliesContainer: {
    marginTop: 20,
  },
  quickRepliesTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginBottom: 12,
  },
  quickReplies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  quickReplyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1976D2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  quickReplyText: {
    fontSize: 12,
    color: '#1976D2',
    marginLeft: 6,
    fontWeight: '500',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
    fontSize: 14,
    maxHeight: 80,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  micButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonActive: {
    backgroundColor: '#1976D2',
  },
  sendButtonInactive: {
    backgroundColor: '#f5f7fa',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  inputHint: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});