import React from 'react'

import { Pressable, Text,Box ,Flex} from 'native-base';



const Press = () =>(
    <Pressable 
    >
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



const NavButton = (props) => {
    const {title,navigation,navigateTo,svgIcon,selected} = props

    return(
        <Pressable onPress={()=>{navigation.navigate(navigateTo)}}>
        {({isFocused, isPressed }) => {
            return(
            <Box
            bg={isPressed ? "cyan.900"  : "cyan.700"}
            p="5"
            rounded="8"
            style={{
            transform: [
                {
                scale: isPressed ? 0.96 : 1,
                },
            ],
            }}>
           <Flex 
        w={256} 
        align="center" 
        justify="center" 
        p="5"  
        rounded="8" bg="white" border={2} borderColor="primary.500" borderWidth={7} >
            <Text>{title}</Text> 
        {svgIcon} 
        </Flex>
                 </Box>

        )}}
        </Pressable>
    )
}

export{ NavButton}

