import React from 'react'
import { Center, VStack, Box, Text, HStack } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'

export const SideMenu = () => {
  return (
    <VStack bgColor="#40325F" w="50px" color="white" h="92vh" width="15vw">
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Center h="100%" w="100%">
          Menu1
        </Center>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Center h="100%" w="100%">
          Menu2
        </Center>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Center h="100%" w="100%">
          Menu3
        </Center>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Center h="100%" w="100%">
          Menu4
        </Center>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Center h="100%" w="100%">
          <HStack display="flex">
            <SettingsIcon />
            <Text>設定</Text>
          </HStack>
        </Center>
      </Box>
    </VStack>
  )
}
