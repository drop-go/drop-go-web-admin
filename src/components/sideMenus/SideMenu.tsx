import React from 'react'
import { Center, VStack, Box, Text, HStack, Spacer } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Image } from '@chakra-ui/react'

export const SideMenu = () => {
  const [_cookies, _setCookie, removeCookie] = useCookies(['token'])
  const signOut = () => removeCookie('token')
  return (
    <VStack bgColor="brand.500" w="50px" color="white" h="92vh" width="15vw">
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="brand.50">
        <Link to={'/dashboard'}>
          <Center h="100%" w="100%">
            Home
          </Center>
        </Link>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="brand.50">
        <Link to={'/dashboard/map'}>
          <Center h="100%" w="100%">
            Map
          </Center>
        </Link>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="brand.50">
        <Link to={'/dashboard/events'}>
          <Center h="100%" w="100%">
            Events
          </Center>
        </Link>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="brand.50">
        <Link to={'/dashboard/analytics'}>
          <Center h="100%" w="100%">
            Analytics
          </Center>
        </Link>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="brand.50">
        <Center h="100%" w="100%">
          <HStack display="flex">
            <SettingsIcon />
            <Text>Settings</Text>
          </HStack>
        </Center>
      </Box>
      <Box h="7vh" w="100%" borderBottom="1px" borderColor="brand.50" onClick={signOut} cursor="pointer">
        <Center h="100%" w="100%">
          Sign out
        </Center>
      </Box>
      <Spacer/>
      <Box>
        <Center marginBottom="16px">
          <Image
            borderRadius='full'
            boxSize='30%'
            src={`${process.env.PUBLIC_URL}/base_icon.png`}
            alt='Your Icon'
          />
          username
        </Center>
      </Box>
    </VStack>
  )
}
