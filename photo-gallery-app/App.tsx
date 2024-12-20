import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import Gallery from './components/Gallery';
import HiddenGallery from './components/HiddenGallery';
import AuthModal from './components/AuthModal';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    Alert.alert('Success', 'Authentication successful!');
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <>
          <Gallery />
          <HiddenGallery />
        </>
      ) : (
        <AuthModal onAuthSuccess={handleAuthSuccess} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
