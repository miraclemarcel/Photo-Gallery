import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Alert } from 'react-native';
import Gallery from './components/Gallery';
import HiddenGallery from './components/HiddenGallery';
import GalleryDetails from './components/GalleryDetails';
import AuthModal from './components/AuthModal';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    Alert.alert('Success', 'Authentication successful!');
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Stack.Navigator initialRouteName="Gallery">
          {/* Main Gallery Page */}
          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{ title: 'Gallery' }}
          />

          {/* Gallery Details Page */}
          <Stack.Screen
            name="GalleryDetails"
            component={GalleryDetails}
            options={{ title: 'Gallery Details' }}
          />

          {/* Hidden Gallery Page (uncomment if needed) */}
          {/* <Stack.Screen
            name="HiddenGallery"
            component={HiddenGallery}
            options={{ title: 'Hidden Gallery' }}
          /> */}
        </Stack.Navigator>
      ) : (
        // Authentication Modal
        <View style={styles.container}>
          <AuthModal onAuthSuccess={handleAuthSuccess} />
        </View>
      )}
    </NavigationContainer>
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
