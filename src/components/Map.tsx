import { Box, Spinner, Center, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Map = () => {
  return (
    <Box bgColor="white" h="500px">
      <Center h="100%" w="100%">
        <VStack>
          <Spinner size="lg" />
          <Text>map loading...</Text>
        </VStack>
      </Center>
    </Box>
  )
}
