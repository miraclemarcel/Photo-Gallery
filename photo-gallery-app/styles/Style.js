import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const HeaderButton = styled.Text`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  color: #333;
`;

export const AlbumsGrid = styled.View`
  padding: 10px;
`;

export const AlbumContainer = styled.View`
  flex: 1;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

export const AlbumThumbnail = styled.Image`
  width: 100%;
  height: 120px;
  resize-mode: cover;
`;

export const EmptyThumbnail = styled.View`
  width: 100%;
  height: 120px;
  background-color: #ddd;
  justify-content: center;
  align-items: center;
`;

export const EmptyThumbnailText = styled.Text`
  color: #888;
`;

export const AlbumInfo = styled.View`
  padding: 10px;
`;

export const AlbumTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const AlbumDetails = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const BottomNavigation = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-vertical: 10px;
  border-top-width: 1px;
  border-color: #ddd;
  background-color: #f8f8f8;
`;

export const NavButton = styled.TouchableOpacity`
  align-items: center;
`;

export const NavButtonText = styled.Text`
  font-size: 16px;
  color: #333;
`;
