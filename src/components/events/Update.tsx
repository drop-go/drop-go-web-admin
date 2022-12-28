import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { UpdateForm } from './UpdateForm'

export const Update = () => {
  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <UpdateForm />
        </Box>
      </Center>
    </Box>
  )
}
