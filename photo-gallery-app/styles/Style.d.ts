// styles/Style.d.ts
declare module '../styles/Style' {
  import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
  import styled from 'styled-components/native';

  export const Container: styled.View;
  export const Header: styled.View;
  export const HeaderTitle: styled.Text;
  export const HeaderButtons: styled.View;
  export const HeaderButton: styled.Text;
  export const AlbumsGrid: styled.View;
  export const AlbumContainer: styled.View;
  export const AlbumThumbnail: styled.Image;
  export const EmptyThumbnail: styled.View;
  export const EmptyThumbnailText: styled.Text;
  export const AlbumInfo: styled.View;
  export const AlbumTitle: styled.Text;
  export const AlbumDetails: styled.Text;
  export const BottomNavigation: styled.View;
  export const NavButton: styled.View;
  export const NavButtonText: styled.Text;
}
