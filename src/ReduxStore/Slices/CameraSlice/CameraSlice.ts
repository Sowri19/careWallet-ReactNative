// cameraSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CameraState {
  hasCameraPermission: boolean | null;
  pictureImageUri: string | null;
}

const initialState: CameraState = {
  hasCameraPermission: null,
  pictureImageUri: null,
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
  },
});

export const { setCameraPermission, setPictureImageUri } = cameraSlice.actions;
export default cameraSlice.reducer;
