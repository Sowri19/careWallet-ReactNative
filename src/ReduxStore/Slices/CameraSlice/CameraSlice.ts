// cameraSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CameraState {
  hasCameraPermission: boolean | null;
  pictureImageUri: string | null;
  isUploading: boolean;
}

const initialState: CameraState = {
  hasCameraPermission: null,
  pictureImageUri: null,
  isUploading: false,
};

const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setCameraPermission: (state, action: PayloadAction<boolean | null>) => {
      state.hasCameraPermission = action.payload;
    },
    setPictureImageUri: (state, action: PayloadAction<string | null>) => {
      state.pictureImageUri = action.payload;
    },
    setIsUploading: (state, action: PayloadAction<boolean>) => {
      state.isUploading = action.payload;
    },
  },
});

export const { setCameraPermission, setPictureImageUri, setIsUploading } =
  cameraSlice.actions;
export default cameraSlice.reducer;
