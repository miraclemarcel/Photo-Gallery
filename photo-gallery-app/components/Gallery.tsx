import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);

  const loadPhotos = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      const media = await MediaLibrary.getAssetsAsync({ mediaType: 'photo' });
      setPhotos(media.assets);
    } else {
      Alert.alert('Permission Denied', 'Gallery access is required.');
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    margin: 2,
  },
});

export default Gallery;
