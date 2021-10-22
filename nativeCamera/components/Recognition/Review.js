import React from 'react';
import { Text, Button ,Image, Center,ScrollView, Container,Box,VStack} from 'native-base';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from 'react-native';
import RenderTextBlocks from '../Recognition/RenderText'

export default function Review ({setCapturedImage, textBlocks, capturedImage}){
return (
  <ScrollView px="20">
  <Center mt="3">

    <VStack space={2} alignItems="center" safeAreaTop my={6}>
            <Image
                    size="2xl"
                    resizeMode="cover"
                    alt="Alternate Text"
                  source={{
            uri: capturedImage,
          }}
            />
            <Button onPress={()=>setCapturedImage("")}>clear</Button>
            <ScrollView>
              {/* {RenderTextBlocks(textBlocks)} */}
              <Text>
                {JSON.stringify(textBlocks)}
              </Text>
              </ScrollView>
            </VStack>
      </Center>
    </ScrollView>
        );}