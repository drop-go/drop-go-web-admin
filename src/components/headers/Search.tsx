import React from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
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
