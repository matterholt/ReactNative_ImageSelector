
   
/* eslint-disable no-console */
import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from 'react-native';
// eslint-disable-next-line
import { RNCamera } from 'react-native-camera';
// eslint-disable-next-line


import { useCamera } from 'react-native-camera-hooks';

const renderTextBlocks = (textBlocks = []) => (
    <View style={styles.facesContainer} pointerEvents="none">
      {textBlocks.map(renderTextBlock)}
    </View>
  );
  const renderTextBlock = ({ bounds = {}, value }) => (
    <React.Fragment key={value + bounds.origin.x}>
      <Text
        style={[
          styles.textBlock,
          { left: bounds.origin.x, top: bounds.origin.y },
        ]}>
        {value}
      </Text>
      <View
        style={[
          styles.text,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}
      />
    </React.Fragment>
  );
const TextInImageCamera = ({initialState}) => {
    const [
        {
          cameraRef,
          type,
          flash,
          autoFocus,
          focusDepth,
          zoom,
          whiteBalance,
          autoFocusPoint,
          drawFocusRingPosition,
          barcodes,
          ratio,
          cameraState,
          isRecording,
          faces,
          textBlocks,
        },
        {
          toggleFacing,
          toggleFlash,
          toggleAutoFocus,
          setFocusDepth,
          toggleWB,
          touchToFocus,
          toggleCameraState,
          facesDetected,
          textRecognized,
          barcodeRecognized,
          zoomIn,
          zoomOut,
          setIsRecording,
          takePicture,
          recordVideo,
        },
      ] = useCamera(initialState);
      const canDetectText = useMemo(() => cameraState['canDetectText'], [
        cameraState,
      ]);


  
    return (
      <View style={{ flex: 1 }}>
                <RNCamera
        ref={cameraRef}
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        type={type}
        flashMode={flash}
        autoFocus={autoFocus}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        zoom={zoom}
        whiteBalance={whiteBalance}
        ratio={ratio}
        focusDepth={focusDepth}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={
          'We need your permission to use your camera phone'
        }

  
        onTextRecognized={canDetectText ? textRecognized : null}>
        {!!canDetectText && renderTextBlocks(textBlocks)}


        <TouchableOpacity
              onPress={() => toggleCameraState('canDetectText')}
              style={styles.flipButton}>
              <Text style={styles.flipText}>
                {!canDetectText ? 'Detect Text' : 'Detecting Text'}
              </Text>
            </TouchableOpacity>


        </RNCamera>

      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 20 : 10,
      backgroundColor: '#000',
    },
    flipButton: {
      flex: 0.3,
      height: 40,
      marginHorizontal: 2,
      marginBottom: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
      borderRadius: 8,
      borderColor: 'white',
      borderWidth: 1,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    autoFocusBox: {
      position: 'absolute',
      height: 64,
      width: 64,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: 'white',
      opacity: 0.4,
    },
    flipText: {
      color: 'white',
      fontSize: 15,
    },
    zoomText: {
      position: 'absolute',
      bottom: 70,
      zIndex: 2,
      left: 2,
    },
    picButton: {
      zIndex: 150,
      backgroundColor: 'darkseagreen',
    },
    facesContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      top: 0,
    },
    face: {
      padding: 10,
      borderWidth: 2,
      borderRadius: 2,
      position: 'absolute',
      borderColor: '#FFD700',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    faceText: {
      color: '#FFD700',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      backgroundColor: 'transparent',
    },
    text: {
      padding: 10,
      borderWidth: 2,
      borderRadius: 2,
      position: 'absolute',
      borderColor: '#F00',
      justifyContent: 'center',
    },
    textBlock: {
      color: '#F00',
      position: 'absolute',
      textAlign: 'center',
      backgroundColor: 'transparent',
    },
  });

  export default TextInImageCamera