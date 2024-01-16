export interface CustomCameraProps {
  onPictureTaken: (photo: any) => void;
  initialCameraType?: number;
  camera?: number;
}
