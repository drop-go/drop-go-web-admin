import { Text, HStack, Center } from '@chakra-ui/react'
import React from 'react'
import { Search } from './Search'

export const Header = () => {
  return (
    <header>
      <HStack h="8vh" display="flex">
        <Center bgColor="#40325F" h="100%" w="15vw" borderBottom="1px" borderColor="#7E66B2">
          <Text color="white">DropGo Admin</Text>
        </Center>
        <Center h="100%" w="85vw">
          <Search />
        </Center>
      </HStack>
    </header>
  )
}