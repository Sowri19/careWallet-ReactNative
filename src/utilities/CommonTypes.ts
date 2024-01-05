export interface PagesProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}
export interface Photo {
  uri: string;
}

export interface CustomCameraProps {
  onPictureTaken: (photo: Photo) => void;
  initialCameraType: number;
}
