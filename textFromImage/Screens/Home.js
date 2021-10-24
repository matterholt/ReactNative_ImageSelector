
import React from 'react';
import { Flex,Center, Container ,Heading,AddIcon,Spacer,VStack} from 'native-base';

import {NavButton} from "../Components"



const ScreenContainer =({children})=>{
    return(

            <Center flex={1} >
                {children}
            </Center>

    )
}


     function HomeScreen({navigation}) {
         return (
             <ScreenContainer>
                 <Heading mb={10}>Selct how to find the Toxins</Heading>
            
        <VStack   space={10}  alignItems="center" w="100%"   mt={10} p={4} >
            <NavButton 
            selected = {true}
                title = "Take Picture"
                navigateTo ={"Take Picture"}
                navigation={navigation}
                svgIcon = {<AddIcon size="5" mt="0.5" color="primary.500" />}
                />
            <NavButton 
                title = "Select Picture"
                navigateTo ={"Select Picture"}
                navigation={navigation}
                svgIcon = {<AddIcon size="5" mt="0.5" color="primary.500" />}
            />
        </VStack>
  
    </ScreenContainer>
    );
  }
  export {HomeScreen}