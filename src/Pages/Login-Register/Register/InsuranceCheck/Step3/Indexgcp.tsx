import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import { Camera, CameraType } from 'expo-camera';
import axios from 'axios';

const InsuranceScanner = ({ navigation }) => {
    const cameraRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [isCameraReady, setCameraReady] = useState(false);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const processWithGoogleDocumentAI = async (imageUri) => {
        try {
            const endpointUrl = `https://us-documentai.googleapis.com/v1/projects/carewallet-ocr/locations/us/processors/5628f310e2a43045:process`;
            const imageData = await fetch(imageUri);
            const imageBlob = await imageData.blob();
            const formData = new FormData();
            formData.append('file', imageBlob);

            const response = await axios.post(endpointUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Google Document AI Response:', response.data);
        } catch (error) {
            console.error('Error processing document with Google Document AI:', error);
        }
    };

    const takePicture = async () => {
        if (cameraRef.current && isCameraReady) {
            const options = { quality: 1, base64: true, skipProcessing: true };
            const captureData = await cameraRef.current.takePictureAsync(options);
            const croppedImage = await manipulateAsync(
                captureData.uri,
                [{ crop: { originX: 0, originY: 0, width: 280, height: 250 } }],
                { format: SaveFormat.JPEG }
            );
            processWithGoogleDocumentAI(croppedImage.uri);
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
                onCameraReady={() => setCameraReady(true)}
                ratio="16:9"
            />
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
