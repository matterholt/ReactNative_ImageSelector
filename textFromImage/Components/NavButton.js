import React from 'react'

import { Pressable, Text,Box ,Flex} from 'native-base';

const NavButton = (props) => {
    const {title,navigation,navigateTo,svgIcon} = props

        return(
        <Pressable 
          onPress={()=>{navigation.navigate(navigateTo)}}>
         <Flex 
         w={256} 
         align="center" 
         justify="center" 
         p="5"  
         rounded="8" bg="white" border={2} borderColor="primary.500" borderWidth={7} >
          <Text>{title}</Text>
         {svgIcon} 
          </Flex>
      </Pressable>
      )
}

export{ NavButton}

