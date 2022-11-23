// TODO: 不要なimportを削除
import { InputGroup, InputLeftElement, Input, InputRightElement, Button } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'

export const Search = () => {
  return (
    <InputGroup maxW="50vw">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input type="text" placeholder="search..." />
    </InputGroup>
  )
}
