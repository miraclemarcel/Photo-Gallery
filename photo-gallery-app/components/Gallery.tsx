import React, { useState, useEffect } from 'react';
import { FlatList, Alert, TouchableOpacity } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { 
  Container, 
  Header, 
  HeaderTitle, 
  HeaderButtons, 
  HeaderButton, 
  AlbumsGrid, 
  AlbumContainer, 
  AlbumThumbnail, 
  EmptyThumbnail, 
  EmptyThumbnailText, 
  AlbumInfo, 
  AlbumTitle, 
  AlbumDetails, 
  BottomNavigation, 
  NavButton, 
  NavButtonText 
} from '../styles/Style';

interface Album {
  id: string;
  title: string;
  media: MediaLibrary.Asset[];
  thumbnail: string | null;
  itemCount: number;
}

const Gallery: React.FC = ({ navigation }: any) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const loadMedia = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      const albumList = await MediaLibrary.getAlbumsAsync();
      const albumData: Album[] = [];

      for (const album of albumList) {
        const assets = await MediaLibrary.getAssetsAsync({
          album: album,
          first: 1,
          mediaType: ['photo', 'video'],
        });

        albumData.push({
          id: album.id,
          title: album.title,
          media: assets.assets,
          thumbnail: assets.assets[0]?.uri || null,
          itemCount: assets.totalCount,
        });
      }

      setAlbums(albumData);
    } else {
      Alert.alert('Permission Denied', 'Gallery access is required.');
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  const renderAlbumsList = () => (
    <FlatList
      data={albums}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('GalleryDetails', { albumId: item.id })
          }
        >
          <AlbumContainer>
            {item.thumbnail ? (
              <AlbumThumbnail source={{ uri: item.thumbnail }} />
            ) : (
              <EmptyThumbnail>
                <EmptyThumbnailText>No Media</EmptyThumbnailText>
              </EmptyThumbnail>
            )}
            <AlbumInfo>
              <AlbumTitle>{item.title}</AlbumTitle>
              <AlbumDetails>{item.itemCount} items</AlbumDetails>
            </AlbumInfo>
          </AlbumContainer>
        </TouchableOpacity>
      )}
      numColumns={2}
      contentContainerStyle={AlbumsGrid}
    />
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>Gallery</HeaderTitle>
        <HeaderButtons>
          <HeaderButton>Favorites</HeaderButton>
          <HeaderButton>Trash</HeaderButton>
        </HeaderButtons>
      </Header>
      {renderAlbumsList()}
      <BottomNavigation>
        <NavButton>
          <NavButtonText>Photos</NavButtonText>
        </NavButton>
        <NavButton>
          <NavButtonText>Folders</NavButtonText>
        </NavButton>
      </BottomNavigation>
    </Container>
  );
};

export default Gallery;
