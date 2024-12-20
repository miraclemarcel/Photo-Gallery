import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

const ImageView = styled.Image`
  width: ${width}px;
  height: 100%;
  resize-mode: contain;
`;

const GalleryDetails = ({ route }: any) => {
  const { albumId } = route.params;
  const [media, setMedia] = useState([
    // Mock data for testing
    { id: '1', uri: 'https://via.placeholder.com/400' },
    { id: '2', uri: 'https://via.placeholder.com/401' },
    { id: '3', uri: 'https://via.placeholder.com/402' },
  ]);

  return (
    <Container>
      <FlatList
        data={media}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        renderItem={({ item }) => <ImageView source={{ uri: item.uri }} />}
      />
    </Container>
  );
};

export default GalleryDetails;
