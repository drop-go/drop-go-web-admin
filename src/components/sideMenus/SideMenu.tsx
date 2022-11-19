import React from 'react'
import { Center, VStack, Box, Text, HStack } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export const SideMenu = () => {
  return (
    <VStack bgColor="#40325F" w="50px" color="white" h="92vh" width="15vw">
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Link to={'/dashboard'}>
          <Center h="100%" w="100%">
            Home
          </Center>
        </Link>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Link to={'/dashboard/map'}>
          <Center h="100%" w="100%">
            Map
          </Center>
        </Link>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Center h="100%" w="100%">
          Events
        </Center>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Center h="100%" w="100%">
          Analytics
        </Center>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="#7E66B2">
        <Center h="100%" w="100%">
          <HStack display="flex">
            <SettingsIcon />
            <Text>Settings</Text>
          </HStack>
        </Center>
      </Box>
    </VStack>
  )
}
