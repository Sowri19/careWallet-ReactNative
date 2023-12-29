import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions,  } from 'react-native';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import { useIsFocused } from '@react-navigation/native';
import MlkitOcr from 'react-native-mlkit-ocr';
import ImageCropPicker, { Image as CroppedImage } from 'react-native-image-crop-picker';
import { Camera, CameraType } from 'expo-camera';


interface InsuranceScannerProps {
  navigation: any; // Replace with your navigation prop type
}

const InsuranceScanner: React.FC<InsuranceScannerProps> = ({ navigation }) => {
  const cameraRef = useRef<Camera | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCameraReady, setCameraReady] = useState(false);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  const CARD_HEIGHT = 250;
  const CARD_WIDTH  = 280;
  const CARD_OFFSET = 70;
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true, skipProcessing: true };
      const captureData = await cameraRef.current.takePictureAsync(options);


      // Calculate coordinates of the box relative to the image
      const x = (captureData.width - CARD_WIDTH) / 2; 
      const y = (captureData.height - CARD_HEIGHT) / 2 + CARD_OFFSET; 

      // Crop the image using the coordinates of the box
      const croppedImage = await manipulateAsync(
        captureData.uri,
        [{ crop: { originX: x, originY: y, width: CARD_WIDTH, height: CARD_HEIGHT } }],
        { format: SaveFormat.JPEG, compress: 1 }
      );

      // connect to google api here

    console.log("image uri:", croppedImage.uri);
    //   const resultFromUri = await MlkitOcr.detectFromUri(croppedImage.uri);
    //   //console.log('Cropped Image:', croppedImage);
    //   console.log('OCR Result:', resultFromUri);

    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        onCameraReady={handleCameraReady}
        ratio="16:9"
      >
        {isCameraReady && (
          <View style={styles.overlay}>
            <View style={styles.box}></View>
          </View>
        )}
      </Camera>
      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <Text style={styles.captureText}>Scan Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 350,
    height: 210,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0.0)',
    borderWidth: 2,
    borderRadius: 20, 
    bottom: 70,
  },
  captureButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  captureText: {
    fontSize: 20,
    color: 'darkblue',
    fontWeight: "bold",
  },
});
export default InsuranceScanner;