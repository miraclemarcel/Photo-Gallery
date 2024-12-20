import React from 'react';
import { View, StyleSheet, Button, Text, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

interface AuthModalProps {
  onAuthSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onAuthSuccess }) => {
  const handleAuthentication = async () => {
    try {
      const isHardwareSupported = await LocalAuthentication.hasHardwareAsync();
      if (!isHardwareSupported) {
        Alert.alert('Error', 'Device does not support biometric authentication.');
        return;
      }

      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        Alert.alert('Error', 'No biometric authentication methods are enrolled.');
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to access your gallery',
      });

      if (result.success) {
        onAuthSuccess();
      } else {
        Alert.alert('Failed', 'Authentication failed.');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      Alert.alert('Error', 'An error occurred during authentication.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please authenticate to access your gallery.</Text>
      <Button title="Authenticate" onPress={handleAuthentication} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default AuthModal;
